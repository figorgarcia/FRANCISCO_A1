import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2A2A2A',
        width: '49%',
        marginTop: 3,
        marginLeft: 3,
        borderRadius: 10
    },
    image: {
        height: 50,
        width: 50,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    text: {
        color: 'white',
        marginLeft: 5,
        paddingHorizontal: 10
    }

});

export default styles