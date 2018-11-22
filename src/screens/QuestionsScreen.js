import React from 'react';
import { Text, View, Button, ActivityIndicator, ScrollView } from 'react-native';

import styles from '../styles';
import Question from '../components/Question'

export default class QuestionsScreen extends React.Component {
  state = {
    questions: [],
    usersAnswers: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
    loading: true,
    error: false,
  }
  async componentDidMount () {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=10");
      const data = await response.json();
      this.setState({ questions: data.results, loading: false });
    } catch (error) {
      this.setState({ error: true, loading: false })
    }
  }

  pickAnswer = (text, index) => {
    const { usersAnswers } = this.state;
    usersAnswers[index] = text;
    console.log(usersAnswers[index]);
    this.setState({ usersAnswers });
  }

  submit = () => {
    const { usersAnswers, questions } = this.state;
    let total = questions.length;
    let correctAnswers = 0;
    console.log(usersAnswers, correctAnswers);
    usersAnswers.map((answer, index) => {
      if(questions[index].correct_answer === answer) {
        correctAnswers = correctAnswers + 1;
      }
    });
    this.props.navigation.navigate("Result", {
      total,
      correctAnswers
    });
  }

  render() {
    const { questions, loading, error } = this.state

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator animating={loading} />
        </View>
      );
    }
    if (error) {
      return (
        <View style={styles.container}>
          <Text style={styles.headings}>Error: Unable to fetch data!!!!!</Text>
        </View>
      );
    }
    return (
      <ScrollView style={styles.questionsContainer}>
    	<Text style={styles.headings}>Questions</Text>
        {questions.map((question, index) => (
          <View key={index.toString()}>
            <Question
            data={question}
            index={index}
            answers={this.state.usersAnswers}
            pick={this.pickAnswer}/>
          </View>)
        )}
        <View style={styles.button}>
          <Button 
            title="Submit" 
            onPress={() => this.submit()}
            color="#ed2f16"/>
        </View>
        <View style={styles.button}>
          <Button 
            title="Go Back" 
            onPress={() => this.props.navigation.goBack()}
            color="#ed2f16"/>
        </View>
      </ScrollView>
    );
  }
}