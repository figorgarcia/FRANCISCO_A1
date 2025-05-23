import { ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: { 
        alignItems: 'center', 
        backgroundColor: '#2A2A2A', 
        width: '48%', 
        marginTop: 3, 
        height: 200, 
        borderRadius: 10 
    },
    imageBackground: { 
        flex: 1, 
        justifyContent: 'flex-end', 
        width: '100%' 
    },
    imageStyle: {
        borderRadius: 12
    },
    textContainer: { 
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        height: 50 
    },
    textTitle: { 
        color: 'white', 
        marginLeft: 5, 
        fontSize: 18 
    },
    textSubtitle: { 
        color: 'white', 
        marginLeft: 5, 
        fontStyle: 'italic', 
        fontSize: 8 
    }
});

export default styles