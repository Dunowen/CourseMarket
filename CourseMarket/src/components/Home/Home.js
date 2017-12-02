import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
var Translate = require('react-redux-i18n').Translate;

class Home extends Component {

    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/Components/Home.js</code> and save to reload.
                </p>
                <Translate value="home"/>
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
