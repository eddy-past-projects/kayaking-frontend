import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer';
import tripsReducer from './reducers/tripsReducer';
// import commentsReducer from './reducers/commentsReducer';
import logInReducer from './reducers/logInReducer';
import signUpReducer from './reducers/signUpReducer';
// import dictionaryReducer from './reducers/dictionaryReducer';

import { BrowserRouter as Router } from 'react-router-dom';



const reducer = combineReducers({
  users: usersReducer ,
  trips: tripsReducer,
  // comments: commentsReducer,
  logIn: logInReducer,
  signUp: signUpReducer,
  // words: dictionaryReducer

})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
      <Router >
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
