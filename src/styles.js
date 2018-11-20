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
    headings: {
        color: addtionalColors.white,
        fontSize: 30
    }
});

export default styles;