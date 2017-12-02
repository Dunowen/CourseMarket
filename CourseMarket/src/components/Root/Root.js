import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Universities from '../Universities/Universities';


const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Navigation {...navbar} store={store} />

            <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/universities" component={Universities} />
            </div>
        </div>
    </Provider>
)

var navbar = {};
navbar.brand =
    { linkTo: "/", text: "Course Market" };
navbar.links = [
    { linkTo: "/", text: "Kezdőlap" },
    { linkTo: "/universities", text: "Egyetemek" },
    {
        dropdown: true, text: "Piactér", links: [
            { linkTo: "/courses", text: "Tantárgyak" },
            { linkTo: "/exams", text: "Vizsgalehetőségek" }
        ]
    },
    {
        language: true, text: "Nyelv váltása", languages: [
            { lang: "hu", text: "Magyar" },
            { lang: "en", text: "Angol" }
        ]
    },
];

export default Root;