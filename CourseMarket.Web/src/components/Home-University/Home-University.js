import React, { Component } from 'react';
import './Home-University.css';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

var Translate = require('react-redux-i18n').Translate;
//required for translation passed to Panel header prop
var I18n = require('react-redux-i18n').I18n;

class HomeUniversity extends Component {

    render() {
        this.panelHeader = I18n.t("Home.University.header");

        return (
            <div>
                <Panel header={this.panelHeader}>
                    <div>
                        <Translate value="Home.University.tempContent" />
                    </div>
                </Panel>
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

HomeUniversity = connect(mapStateToProps, mapDispatchToProps)(HomeUniversity);

export default HomeUniversity;
