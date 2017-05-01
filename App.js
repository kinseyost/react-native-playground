import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    console.log('I got rendered');
    return (
      <View style={styles.container}>
        <View style={ styles.header }>
          <Text style={ styles.headerText }>My First Native App</Text>
        </View>
        <View style={ styles.body }>
          <Text>Changes you make will systematically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  header: {
    flex: 0,
    backgroundColor: 'blue',
    width: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    textAlign: 'center',
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  }
});
