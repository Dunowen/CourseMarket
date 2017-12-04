import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';

var Translate = require('react-redux-i18n').Translate;

class Home extends Component {

    render() {
        return (
            <div>
                <Translate value="Home.introduction" />
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
