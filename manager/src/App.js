import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyBBu1r9Yi4tKMm-CU-bPTpPqNVaX-zU610",
            authDomain: "manager-c538d.firebaseapp.com",
            databaseURL: "https://manager-c538d.firebaseio.com",
            storageBucket: "manager-c538d.appspot.com",
            messagingSenderId: "460255217090"
        };

        firebase.initializeApp(config);
    }

    render(){
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return(
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;