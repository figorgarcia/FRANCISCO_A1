import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'

export default function index({index, title, cover}) {
    return (
        <View key={index} style={styles.container}>
            <Image source={{ uri: cover }} style={styles.image} resizeMode='cover' />
            <Text style={styles.text} ellipsizeMode='tail' numberOfLines={1}>{title}</Text>
        </View>
    )
}