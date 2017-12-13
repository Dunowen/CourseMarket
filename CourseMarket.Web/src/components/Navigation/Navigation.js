import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css';
import { setLocale } from 'react-redux-i18n';
var Translate = require('react-redux-i18n').Translate;

export default class Navigation extends Component {
    render() {
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
                        <NavMenu store={this.props.store} links={this.props.links} />
                    </div>
                </div>
            </nav>
        );
    }
};

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
                    <NavLinkDropdown key={link.text} links={link.links} text={link.text} active={link.active} />
                );
            }
            if (link.language) {
                return (
                    <LanguageDropdown store={this.props.store} key={link.text} languages={link.languages} text={link.text} />
                );
            }
            else {
                return (
                    <NavLink key={link.text} linkTo={link.linkTo} text={link.text} active={link.active} />
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
        var active = false;
        var links = this.props.links.map((link) => {
            if (link.active) {
                active = true;
            }
            return (
                <NavLink key={link.text} linkTo={link.linkTo} text={link.text} active={link.active} />
            );
        });
        return (
            <li className={"dropdown " + (active ? "active" : "")}>
                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <Translate value={this.props.text} />
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    {links}
                </ul>
            </li>
        );
    }
};

class LanguageDropdown extends Component {
    render() {
        var languages = this.props.languages.map((language) => {
            return (
                <li key={language.text}>
                    <a onClick={() => this.props.store.dispatch(setLocale(language.lang))}>
                        <Translate value={language.text} />
                    </a>
                </li>
            );
        });
        return (
            <li className="dropdown ">
                <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    <Translate value={this.props.text} />
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
        return (
            <li className={(this.props.active ? "active" : "")} >
                <Link to={this.props.linkTo} activeclassname="active">
                    <Translate value={this.props.text} />
                </Link>
            </li>
        );
    }
};