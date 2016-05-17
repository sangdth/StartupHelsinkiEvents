/**
 * Startup Helsinki Events
 * https://github.com/sangdth/StartupHelsinkiEvents
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var mockdata;

class StartupHelsinkiEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      events: null,
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu.
        </Text>

      </View>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

AppRegistry.registerComponent('StartupHelsinkiEvents', () => StartupHelsinkiEvents);
