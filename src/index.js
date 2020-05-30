import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './store/reducers'

export  const ACTION_CHANGE_MESSAGEFOLDER = 'ACTION_CHANGE_MESSAGEFOLDER';
export  const ACTION_CHANGE_ACTIVE_CONTACT = 'ACTION_CHANGE_ACTIVE_CONTACT';
export  const ACTION_CHANGE_ANSWER_FROM_CHAK = 'ACTION_CHANGE_ANSWER_FROM_CHAK';


const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}
        >
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
