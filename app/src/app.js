import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './Containers/AppContainer';
import {connect, Provider} from 'react-redux';
import configureStore from "./Redux/Store";

const mapStateToProps = state => {
    return {
        state: state
    };
};

const ConnectedContainer = connect(mapStateToProps)(AppContainer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={configureStore()}>
            <ConnectedContainer/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);