import React from 'react';
import { Text, View, Button } from 'react-native';

import styles from '../styles';

export default class ResultScreen extends React.Component {
    render() {
        const { getParam, navigate } = this.props.navigation
        const result = getParam("correctAnswers", "0");
        const total = getParam("total", 10);
        return (
            <View style={styles.container}>
                <Text style={styles.headings}>Your Result</Text>
                <Text style={styles.resultText}>Correct Answers: {JSON.stringify(result)}</Text>
                <Text style={styles.resultText}>Total Questions: {JSON.stringify(total)}</Text>
                <View style={styles.button}>
                    <Button
                        title="Start Quiz Again"
                        onPress={() => navigate("Home")}
                        color="#ed2f16" />
                </View>
            </View>
        );
    }
}