import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

export default function index({index, title}) {
    return (
        <View style={styles.badget} key={index}>
            <Text style={styles.badgetText}>{title}</Text>
        </View>
    )
}