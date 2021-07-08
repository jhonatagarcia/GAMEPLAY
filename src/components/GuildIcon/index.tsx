import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { Image } from 'react-native'

export function GuildIcon(){
    const uri = 'https://www.ultimaficha.com.br/wp-content/uploads/2021/03/baixados-20.jpg'

    return (
        <Image source={{ uri }}
        style={styles.image}
        resizeMode="cover"/>
    )
}