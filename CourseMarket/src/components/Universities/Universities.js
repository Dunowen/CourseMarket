import React, { Component } from 'react';
import './Universities.css';
import { connect } from 'react-redux';
import * as universityActions from "../../redux/actions/universityAction";

class Universities extends Component {

    componentDidMount() {
        this.props.getUniversities();
    }

    render() {
        return (
            <div>
                <p className="App-intro">
                    Támogatott egyetemek listája:
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

Universities = connect(mapStateToProps, mapDispatchToProps)(Universities);

export default Universities;
