import React, { Component } from 'react';
import './Exams.css';
import { connect } from 'react-redux';
var Translate = require('react-redux-i18n').Translate;

class Exams extends Component {

    render() {
        return (
            <div>
                
                <Translate value="Exams.introduction"/>
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

Exams = connect(mapStateToProps, mapDispatchToProps)(Exams);

export default Exams;
