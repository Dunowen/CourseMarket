import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Universities from '../Universities/Universities';
import Courses from '../Courses/Courses';
import Exams from '../Exams/Exams';

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Navigation {...navbar} store={store} />

            <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/universities" component={Universities} />
                <Route path="/courses" component={Courses} />
                <Route path="/exams" component={Exams} />
            </div>
        </div>
    </Provider>
)

var navbar = {};
navbar.brand =
    { linkTo: "/", text: "Course Market" };
navbar.links = [
    { linkTo: "/", text: "Navigation.home" },
    { linkTo: "/universities", text: "Navigation.universities" },
    {
        dropdown: true, text: "Navigation.market", links: [
            { linkTo: "/courses", text: "Navigation.courses" },
            { linkTo: "/exams", text: "Navigation.exams" }
        ]
    },
    {
        language: true, text: "Navigation.language", languages: [
            { lang: "hu", text: "Navigation.hungarian" },
            { lang: "en", text: "Navigation.english" }
        ]
    },
];

export default Root;