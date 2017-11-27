import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from 'react-redux';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";

import './index.css';
import App from './components/_App/App';
import configureLocalStore from './redux/store/configureStore'

let store = configureLocalStore();

class Application extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" component={App} />
                    {/*<Route component={NotFound} /> */}
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentState: state,
        session: state.session
    };
};

Application = withRouter(connect(mapStateToProps)(Application));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename="/">
            <Application />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);


//ReactDOM.render(<App />, document.getElementById('root'));
