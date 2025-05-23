import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    badgetContainer: {
        marginTop: 8,
        height: 20
    },
    badget: {
        flex: 1,
        alignSelf: 'flex-start',
        backgroundColor: '#2A2A2A',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 4,
        marginHorizontal: 2
    },
    badgetText: {
        color: 'white',
        fontSize: 15
    }
});

export default styles