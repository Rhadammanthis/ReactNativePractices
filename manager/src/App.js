import React, { Component } from 'react';
import {View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm'

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
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;