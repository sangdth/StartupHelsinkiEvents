/**
 * Startup Helsinki Events
 * https://github.com/sangdth/StartupHelsinkiEvents
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  TouchableHighlight,
  ListView,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';

var MOCK_URL = "https://raw.githubusercontent.com/sangdth/StartupHelsinkiEvents/master/docs/mock.json";

class StartupHelsinkiEvents extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(MOCK_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.items.items),
          loaded: true,
        });
      })
      //.catch() learn more about this.
      .done();
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <View style={styles.containerEventList}>
        <StatusBar
           barStyle="light-content"
         />
        <View style={styles.navBar}>
          <Text style={styles.navBarMenu}><Icon name="three-bars" size={25} color="#ffffff" /></Text>
          <Text style={styles.navBarTitle}>All Events</Text>
          <Text style={styles.navBarProfile}>Sign In</Text>
        </View>
        <View style={styles.eventList}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderEvent}
            style={styles.listView}
          />
        </View>
      </View>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.eventSummary}>
        <Text>
          Loading events...
        </Text>
      </View>
    );
  }

  renderEvent(event) {
    return (
      <View style={styles.eventSummary}>
        <Icon name="calendar" size={75} color="#333333" />
        <Text style={styles.title}><Icon name="heart" color="#4F8EF7" /> {event.event_name}</Text>
        <Text style={styles.year}>{event.id}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  containerEventList: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
    navBar: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop:15,
      backgroundColor: '#3F848F',
      paddingLeft: 20,
      paddingRight: 20,
    },
      navBarMenu: {
        width: 50,
        justifyContent: 'center',
      },
      navBarTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 18,
      },
      navBarProfile: {
        width: 60,
        alignItems: 'center',
        color: '#ffffff',
      },
    eventList: {
      flex: 9,
      borderColor: '#939E00',
      borderWidth: 2,
    },
      eventSummary: {
        flex: 25,
        borderColor: '#0510B6',
        borderWidth: 2,
      },
      eventImage: {
        width: 53,
        height: 81,
      },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('StartupHelsinkiEvents', () => StartupHelsinkiEvents);
