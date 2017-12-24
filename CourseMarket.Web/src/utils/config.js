export default {
    REDIRECT_URL: process.env.NODE_ENV === 'production' ? 'http://coursemarket.azurewebsites.net/callback' : 'http://localhost:3000/callback',
    AUTH0_CLIENT_ID: 'UPjbgOgtzCdMyrz24XGqBeiFHfiesgjy',
    AUTH0_DOMAIN: 'dunowen.eu.auth0.com'
};


