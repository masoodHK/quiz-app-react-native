import { StyleSheet } from 'react-native'

const colors = {
    primary: "#ed2f16",
    secondary: "#e3c086",
    darkBackground: "#181a1e"
}
const addtionalColors = {
    white: "#dedddb",
    blue: "#2b7580"
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.darkBackground,
        alignItems: 'center',
        justifyContent: 'center',
    },
    questionsContainer: {
        flex: 1,
        backgroundColor: colors.darkBackground,
        padding: 10
    },
    headings: {
        color: addtionalColors.white,
        fontSize: 35
    },
    questions: {
        color: colors.darkBackground,
        fontSize: 22
    },
    question: {
        marginVertical: 15,
        padding: 5,
        backgroundColor: colors.secondary    
    },
    button: {
        margin: 20,
        width: "90%"
    },
    input: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: addtionalColors.white + 'aa',
        color: "black"
    },
    resultText: {
        color: addtionalColors.white,
        fontSize: 20
    }
});

export default styles;