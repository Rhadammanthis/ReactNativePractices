import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button, CardSection, Spinner } from './components/common'
import firebase from 'firebase';
import LoginForm from './components/LoginForm'

class App extends Component {
    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({ loggedIn: true });
            } else{
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return(
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm />;
            default:
                return(
                    <View style={styles.spinnerContainerStyle}>
                        <Spinner />
                    </View>
                );
        }
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinnerContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export default App;