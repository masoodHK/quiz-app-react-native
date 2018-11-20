import React from 'react';
import { Text, View, Button } from 'react-native';

import styles from '../styles';
import Question from '../components/Question'

export default class QuestionsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
    	<Text style={styles.headings}>Questions</Text> 
        <Question />
        <Button title="Go Back" onPress={() => this.props.navigation.goBack()}/>
      </View>
    );
  }
}