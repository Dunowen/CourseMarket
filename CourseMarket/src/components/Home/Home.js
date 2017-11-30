import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';
import * as universityActions from "../../redux/actions/universityAction";

class Home extends Component {

    componentDidMount() {
        this.props.getUniversities();
    }

    render() {
        return (
            <div>
                <p className="App-intro">
                    To get started, edit <code>src/Components/Home.js</code> and save to reload.
                </p>
                <ul>
                    {this.props.universities.Data ? this.renderUniversities() : ""}
                </ul>
            </div>
        );
    }

    renderUniversities = () => {
        return this.props.universities.Data.map(university => (
            <li key={university.Id}>
                {university.Name} - {university.Tag}
            </li>
        ));
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUniversities: () => {
            dispatch(universityActions.getUniversitiesAsync());
        }
    }
}

const mapStateToProps = state => {
    return {
        universities: state.universities.universities
    };
};

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
