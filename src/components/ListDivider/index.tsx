import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

type Props = {
    UrlImage: string;
}

export function ListDivider({UrlImage}: Props){

    return (
       <View style={styles.container}/>
    )
}