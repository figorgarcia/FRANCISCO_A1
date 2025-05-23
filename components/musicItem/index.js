import React from 'react'
import styles from './style'
import { View, Text, ImageBackground } from 'react-native'

export default function index({ index, title, artist, cover }) {
    return (
        <View key={index} style={styles.container}>
            <ImageBackground source={{ uri: cover }} style={styles.imageBackground} imageStyle={styles.imageStyle} resizeMode='cover' >
                <View style={styles.textContainer}>
                    <Text style={styles.textTitle} >{title}</Text>
                    <Text style={styles.textSubtitle} >{artist}</Text>
                </View>
            </ImageBackground>
        </View>
    )
}