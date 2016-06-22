import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

var SingleEvent = React.createClass({
  render() {
    return (
      <View>
        <Text style={styles.header}>
          {this.props.eventTitle}
        </Text>

        <Text>
          {this.props.eventDate}
        </Text>

        <Text style={styles.mainText}>
          {this.props.eventDetail}
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  header: {
    flex: 1,
    textAlign: 'center'
  },
  mainText: {
    flex: 1,
    textAlign: 'center'
  }
});

module.exports = SingleEvent;
