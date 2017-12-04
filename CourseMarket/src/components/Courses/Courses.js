import React, { Component } from 'react';
import './Courses.css';
import { connect } from 'react-redux';
var Translate = require('react-redux-i18n').Translate;

class Courses extends Component {

    render() {
        return (
            <div>
                
                <Translate value="Courses.introduction"/>
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

Courses = connect(mapStateToProps, mapDispatchToProps)(Courses);

export default Courses;
