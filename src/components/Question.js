import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles from '../styles';

export default class Question extends React.Component {
  render() {
    const { data, pick, index, answers } = this.props
    return (
      <View style={styles.question}>
    	  <Text style={styles.questions}>{data.question}</Text>
        <TextInput
          style={styles.input}
          value={answers[index]}
          placeholder="Enter your answer"
          onChangeText={text => pick(text, index)}/>
    	  <Text>Category: {data.category}</Text>
        {data.incorrect_answers.map(option => <Text>{option}</Text>)}
        <Text>{data.correct_answer}</Text>
      </View>
    );
  }
}