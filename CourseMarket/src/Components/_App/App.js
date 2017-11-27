import React, { Component } from 'react';
import './App.css';
import Navigation from '../Navigation/Navigation';
import { connect } from 'react-redux';
import * as universityActions from "../../redux/actions/universityAction";

class App extends Component {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        universities: {}
    }

    componentDidMount() {
        this.props.getUniversities();
    }

    render() {
        if (this.props.universities)
            return (
                <div className="App">
                    <Navigation />
                    <p className="App-intro">
                        To get started, edit <code>src/Components/App.js</code> and save to reload.
                    </p>
                    <ul>
                        {this.props.universities.Data ? this.renderUniversities() : ""}
                    </ul>
                </div >
            );
    }

    renderUniversities = () => {
        let universities = this.props.universities.Data.map(university => (
            <li key={university.Id}>
                {university.Name} - {university.Tag}
            </li>
        ));

        return universities;
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

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
