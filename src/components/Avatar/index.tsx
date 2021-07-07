import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/theme';
import { styles } from './styles';
import { Image } from 'react-native'

type Props = {
    UrlImage: string;
}

export function Avatar({UrlImage}: Props){
    const { secondary50, secondary70 } = theme.colors; 

    return (
        <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>

            <Image source={{ uri: UrlImage }} style={styles.avatar} />

        </LinearGradient>
    )
}