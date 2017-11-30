import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';


const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Navigation />

            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
        </div>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
}

export default Root;