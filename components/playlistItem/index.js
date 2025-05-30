import React from 'react'
import styles from './style'
import { View, Text, ImageBackground } from 'react-native'

export default function index({ index, title, cover }) {
    return (
        <View key={index} style={styles.container}>
            <ImageBackground source={{ uri: cover }} style={styles.imageBackground} imageStyle={styles.image} resizeMode='cover' >
                <View style={styles.textContainer}>
                    <Text style={styles.text} >{title}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}