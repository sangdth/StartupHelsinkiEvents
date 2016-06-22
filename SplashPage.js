'use strict';

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

class SplashPage extends Component {
    componentWillMount() {
        setTimeOut( () => {
            navigator.replace({
                id: 'MainPage',
            });
        }, 1000);
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor: '3F848F', alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'white', fontSize: 32}}>Startup Helsinki Events</Text>
            </View>
        );
    }
}

module.exports = SplashPage;
