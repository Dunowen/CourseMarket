import React from 'react'
import { Provider } from 'react-redux'
import { Route, withRouter } from 'react-router-dom'
import AuthService from '../../utils/AuthService';
import { connect } from 'react-redux';
import { authActions } from '../../redux/auth/auth';

import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Universities from '../Universities/Universities';
import Courses from '../Courses/Courses';
import Exams from '../Exams/Exams';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.authService = new AuthService();
        this.initNavbarRoutes();
    }

    componentWillMount() {
        // Add callback for lock's `authenticated` event
        this.authService.lock.on('authenticated', (authResult) => {
            this.authService.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) { return this.props.loginError(error); }
                AuthService.setToken(authResult.idToken); // static method
                AuthService.setProfile(profile); // static method
                this.props.loginSuccess(profile);
                return this.props.history.push({ pathname: '/' });
            });
        });
        // Add callback for lock's `authorization_error` event
        this.authService.lock.on('authorization_error', (error) => {
            console.log(error);
            this.props.loginError(error);
            return this.props.history.push({ pathname: '/' });
        });
    }

    render() {
        return (
            <Provider store={this.props.store}>
                <div>
                    <Navigation {...this.navbar} store={this.props.store} />

                    <div className="container">
                        <Route exact path="/" component={Home} />
                        <Route path="/universities" component={Universities} />
                        <Route path="/courses" component={Courses} />
                        <Route path="/exams" component={Exams} />
                    </div>
                </div>
            </Provider>
        )
    }

    initNavbarRoutes() {
        this.navbar = {};
        this.navbar.brand =
            { linkTo: "/", text: "Course Market" };
        this.navbar.links = [
            { linkTo: "/", text: "Navigation.home", iconClassName: "fa fa-home" },
            { linkTo: "/universities", text: "Navigation.universities", iconClassName: "fa fa-university" },
            {
                dropdown: true, text: "Navigation.market", iconClassName: "fa fa-dollar", links: [
                    { linkTo: "/courses", text: "Navigation.courses", iconClassName: "fa fa-book" },
                    { linkTo: "/exams", text: "Navigation.exams", iconClassName: "fa fa-pencil-square-o" }
                ]
            },
            {
                language: true, text: "Navigation.language", languages: [
                    { lang: "hu", text: "Navigation.hungarian" },
                    { lang: "en", text: "Navigation.english" }
                ]
            }
        ];
    }
}

const mapDispatchToProps = dispatch => ({
    loginSuccess: profile => dispatch(authActions.loginSuccess(profile)),
    loginError: error => dispatch(authActions.loginError(error)),
});

Root = withRouter(connect(null, mapDispatchToProps)(Root));

export default Root;