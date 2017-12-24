import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { setLocale } from 'react-redux-i18n';
import 'font-awesome/css/font-awesome.css';

import AuthService from '../../utils/AuthService';
import { authActions } from '../../redux/auth/auth';
import './Navigation.css';
var Translate = require('react-redux-i18n').Translate;

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.authService = new AuthService();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <nav className="navbar navbar-inverse" >
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavBrand linkTo={this.props.brand.linkTo} text={this.props.brand.text} />
                    </div>
                    <div className="collapse navbar-collapse navbar-right" id="navbar-collapse">
                        <NavMenu store={this.props.store} links={this.props.links} auth={this.props.auth} />
                        <ul className="nav navbar-nav">
                            {isAuthenticated ?
                                <li>
                                    <a className="navigation-auth-button"
                                        onClick={() => {
                                            this.authService.logout();
                                            this.props.logoutSuccess();
                                        }}>
                                        <Translate value="Navigation.logout" />
                                    </a>
                                </li>
                                :
                                <li>
                                    <a className="navigation-auth-button"
                                        onClick={() => {
                                            this.authService.login();
                                            this.props.loginRequest();
                                        }}>
                                        <Translate value="Navigation.login" />
                                    </a>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};

const mapStateToProps = state => ({
    auth: state.reducers.auth
});

const mapDispatchToProps = dispatch => ({
    loginRequest: () => dispatch(authActions.loginRequest()),
    logoutSuccess: () => dispatch(authActions.logoutSuccess()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navigation));

class NavBrand extends Component {
    render() {
        return (
            <a className="navbar-brand" href={this.props.linkTo} > {this.props.text}</a>
        );
    }
};

class NavMenu extends Component {
    render() {
        var links = this.props.links.map((link) => {
            if (link.dropdown) {
                return (
                    <NavLinkDropdown key={link.text} dropdown={link} auth={this.props.auth} />
                );
            }
            if (link.language) {
                return (
                    <LanguageDropdown store={this.props.store} key={link.text} languages={link} />
                );
            }
            else {
                return (
                    <NavLink key={link.text} link={link} auth={this.props.auth} />
                );
            }
        });
        return (
            <ul className="nav navbar-nav">
                {links}
            </ul>
        );
    }
};

class NavLinkDropdown extends Component {
    render() {
        const { isAuthenticated } = this.props.auth;
        var active = false;
        var links = this.props.dropdown.links.map((link) => {
            if (link.active) {
                active = true;
            }
            return (
                <NavLink key={link.text} link={link} auth={this.props.auth} />
            );
        });

        return (
            <li className={"dropdown " + (active ? "active" : "")} style={{ display: this.props.dropdown.authentication ? (isAuthenticated ? 'initial' : 'none') : 'none' }}>
                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <i className={this.props.dropdown.iconClassName} aria-hidden="true"></i>
                    <Translate value={this.props.dropdown.text} />
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    {links}
                </ul>
            </li >
        );
    }
};

class LanguageDropdown extends Component {
    render() {
        var languages = this.props.languages.languages.map((language) => {
            return (
                <li key={language.text}>
                    <a onClick={() => this.props.store.dispatch(setLocale(language.lang))}>
                        <Translate value={language.text} />
                    </a>
                </li>
            );
        });
        return (
            <li className="dropdown">
                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <Translate value={this.props.languages.text} />
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    {languages}
                </ul>
            </li>
        );
    }
};

class NavLink extends Component {
    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <li className={(this.props.link.active ? "active" : "")} style={{ display: this.props.link.authentication ? (isAuthenticated ? 'initial' : 'none') : 'initial' }}>
                <Link to={this.props.link.linkTo} activeclassname="active">
                    <i className={this.props.link.iconClassName} aria-hidden="true"></i>
                    <Translate value={this.props.link.text} />
                </Link>
            </li>
        );
    }
};