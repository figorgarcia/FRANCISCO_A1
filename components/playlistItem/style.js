import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        width: '32%', 
        marginTop: 4, 
        height: 200 
    },
    imageBackground: {
        flex: 1
    },
    image: {
        borderRadius: 12
    },
    textContainer: { 
        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    text: { 
        color: 'white', 
        fontSize: 18, 
        textAlign: 'center' 
    }
});

export default styles