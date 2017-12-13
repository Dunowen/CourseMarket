import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import { Panel, PanelGroup } from 'react-bootstrap';

var Translate = require('react-redux-i18n').Translate;
//required for translation passed to Panel header prop
var I18n = require('react-redux-i18n').I18n;

class Home extends Component {

    render() {
        this.panel1header = I18n.t("Home.welcome");
        this.panel2header = I18n.t("Home.availability");

        return (
            <div>
                <PanelGroup accordion defaultActiveKey="1">
                    <Panel header={this.panel1header} eventKey="1">
                        <div>
                            <Translate value="Home.whatisit" />
                        </div>
                    </Panel>
                    <Panel header={this.panel2header} eventKey="2">
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

    };
};

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
