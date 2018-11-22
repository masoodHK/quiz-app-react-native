import React from 'react';
import { Text, View, Button } from 'react-native';

import styles from '../styles';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
    	<Text style={styles.headings}>Quiz App</Text>
        <View style={styles.button}>
          <Button
            title="Start Quiz"
            onPress={() => this.props.navigation.navigate("Questions")}
            color="#ed2f16"/>
        </View>
      </View>
    );
  }
}