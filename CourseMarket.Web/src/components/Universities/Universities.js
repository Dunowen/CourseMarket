import React, { Component } from 'react';
import './Universities.css';
import { connect } from 'react-redux';
import * as universityActions from "../../redux/actions/universityAction";
import CustomModal from '../CustomModal/CustomModal';

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

    renderModalBody = (university) => {
        return (
            <div>
                <h4>Id:</h4>
                <p>{university.Id}</p>
                <h4>Név:</h4>
                <p>{university.Name}</p>
                <h4>Rövidítés:</h4>
                <p>{university.Tag}</p>
            </div>
        )
    }

    renderUniversities = () => {
        return this.props.universities.Data.map(university => (
            <li key={university.Id}>
                <div className="university-row">
                    {university.Name}
                    <CustomModal body={this.renderModalBody(university)} title={university.Name} buttonText="Részletek megtekintése" />
                </div>
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
