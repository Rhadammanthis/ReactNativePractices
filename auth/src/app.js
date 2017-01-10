import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common'
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        firebase.initializeApp(
            {
                apiKey: 'AIzaSyCVztRyxOPhg8BxNKT3c_2yl-mSGebzGW0',
                authDomain: 'auth-86390.firebaseapp.com',
                databaseURL: 'https://auth-86390.firebaseio.com',
                storageBucket: 'auth-86390.appspot.com',
                messagingSenderId: '1020928203051'
            }
        );
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App; 