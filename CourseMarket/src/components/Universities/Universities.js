import React, { Component } from 'react';
import './Universities.css';
import { connect } from 'react-redux';
import * as universityActions from "../../redux/actions/universityAction";
var Translate = require('react-redux-i18n').Translate;

class Universities extends Component {

    componentDidMount() {
        this.props.getUniversities();
    }

    render() {
        return (
            <div>
                <p className="App-intro">
                    <Translate value="Universities.supportedUniversities" />
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
        universities: state.reducers.universities.universitiesList
    };
};

Universities = connect(mapStateToProps, mapDispatchToProps)(Universities);

export default Universities;
