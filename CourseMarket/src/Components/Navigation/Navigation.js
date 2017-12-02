import React, { Component } from 'react';
import { Link } from 'react-router-dom'

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
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <NavMenu links={this.props.links} />
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
        var links = this.props.links.map(function (link) {
            if (link.dropdown) {
                return (
                    <NavLinkDropdown key={link.text} links={link.links} text={link.text} active={link.active} />
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
        var links = this.props.links.map(function (link) {
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
                    {this.props.text}
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    {links}
                </ul>
            </li>
        );
    }
};

class NavLink extends Component {
    render() {
        return (
            <li className={(this.props.active ? "active" : "")} >
                <Link to={this.props.linkTo} activeClassName="active">{this.props.text}</Link>
            </li>
        );
    }
};