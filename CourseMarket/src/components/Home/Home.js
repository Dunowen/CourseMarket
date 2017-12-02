import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import * as universityActions from "../../redux/actions/universityAction";

class Home extends Component {

    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/Components/Home.js</code> and save to reload.
                </p>
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
