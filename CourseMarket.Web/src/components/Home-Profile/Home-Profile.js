import React, { Component } from 'react';
import './Home-Profile.css';
import { connect } from 'react-redux';
import { Panel, Table } from 'react-bootstrap';

var Translate = require('react-redux-i18n').Translate;
//required for translation passed to Panel header prop
var I18n = require('react-redux-i18n').I18n;

class HomeProfile extends Component {

    render() {
        this.panelHeader = I18n.t("Home.Profile.header");

        return (
            <div>
                {this.props.profile &&
                    <Panel header={this.panelHeader}>
                        <div>
                            <div className="text-center home-profile-img-container">
                                <img src={this.props.profile.picture} height="40px" alt="profile" className="img-circle home-profile-img" />
                                <span>{this.props.profile.name}</span>
                            </div>
                            <Table className="home-profile-table">
                                <tbody>
                                    <tr>
                                        <td><Translate value="Home.Profile.lastLogin" /></td>
                                        <td>{new Date(this.props.profile.updated_at).toLocaleString()}</td>
                                    </tr>

                                    <tr>
                                        <td><Translate value="Home.Profile.emailAddress" /></td>
                                        <td>{this.props.profile.email}</td>
                                    </tr>

                                    <tr>
                                        <td><Translate value="Home.Profile.activeTrades" /></td>
                                        <td>2</td>
                                    </tr>

                                    <tr>
                                        <td><Translate value="Home.Profile.closedTrades" /></td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Panel>
                }
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

const mapStateToProps = state => {
    return {

    };
};

HomeProfile = connect(mapStateToProps, mapDispatchToProps)(HomeProfile);

export default HomeProfile;
