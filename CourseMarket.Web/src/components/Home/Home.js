import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { Panel, PanelGroup, Row, Col } from 'react-bootstrap';
import HomeProfile from '../Home-Profile/Home-Profile';
import HomeUniversity from '../Home-University/Home-University';

var Translate = require('react-redux-i18n').Translate;
//required for translation passed to Panel header prop
var I18n = require('react-redux-i18n').I18n;

class Home extends Component {

    render() {
        this.panel1header = I18n.t("Home.welcome");
        this.panel2header = I18n.t("Home.availability");

        return (
            <div>
                {this.props.auth.isAuthenticated &&
                    <Row>
                        <Col className="home-dashboard" sm={6}>
                            <HomeProfile profile={this.props.auth.profile} />
                        </Col>
                        <Col sm={6}>
                            <HomeUniversity />
                        </Col>
                    </Row>
                }
                <PanelGroup>
                    <Panel header={this.panel1header}>
                        <div>
                            <Translate value="Home.whatisit" />
                        </div>
                    </Panel>
                    <Panel header={this.panel2header}>
                        <div>
                            <Translate value="Home.availableAt" />
                        </div>
                    </Panel>
                </PanelGroup>
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
        auth: state.reducers.auth
    };
};

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
