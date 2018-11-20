import React from 'react';
import { Text, View, Button } from 'react-native';

import styles from '../styles';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
    	<Text style={styles.headings}>Quiz App</Text>
        <Button title="Start Quiz" onPress={() => this.props.navigation.navigate("Questions")}/>
      </View>
    );
  }
}