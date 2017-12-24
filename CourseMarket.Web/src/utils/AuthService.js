import auth0 from 'auth0-js';
import history from './history';
import config from './config';

export default class Auth {
    userProfile;
    tokenRenewalTimeout;

    auth0 = new auth0.WebAuth({
        domain: config.AUTH0_DOMAIN,
        clientID: config.AUTH0_CLIENT_ID,
        redirectUri: config.REDIRECT_URL,
        responseType: 'token id_token',
        scope: 'openid email profile'
    });

    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getAccessToken = this.getAccessToken.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.scheduleRenewal();
    }

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                this.getProfile();
                setTimeout(() => {
                    //a világ legnagyobb cigánysága...
                    history.replace('/');
                    window.location.reload();
                }, 2000);
            } else if (err) {
                history.replace('/');
                console.log(err);
                alert(`Error: ${err.error}. Check the console for further details.`);
            }
        });
    }

    setSession(authResult) {
        let expiresAt = JSON.stringify(
            authResult.expiresIn * 1000 + new Date().getTime()
        );

        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);

        this.scheduleRenewal();
    }

    getAccessToken() {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('No access token found');
        }
        return accessToken;
    }

    getProfile(cb) {
        let accessToken = this.getAccessToken();
        this.auth0.client.userInfo(accessToken, (err, profile) => {
            if (profile) {
                this.userProfile = profile;
                localStorage.setItem('profile', JSON.stringify(profile));
            }
        });
    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('scopes');
        localStorage.removeItem('profile');
        this.userProfile = null;
        clearTimeout(this.tokenRenewalTimeout);
        history.replace('/');
    }

    isAuthenticated() {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    renewToken() {
        this.auth0.checkSession({},
            (err, result) => {
                if (err) {
                    alert(
                        `Could not get a new token (${err.error}: ${err.error_description}).`
                    );
                } else {
                    this.setSession(result);
                    alert(`Successfully renewed auth!`);
                }
            }
        );
    }

    scheduleRenewal() {
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        const delay = expiresAt - Date.now();
        if (delay > 0) {
            this.tokenRenewalTimeout = setTimeout(() => {
                this.renewToken();
            }, delay);
        }
    }
}
