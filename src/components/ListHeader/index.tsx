
import  React, { ReactNode } from 'react';

import {styles} from './styles';

import { Text, View } from 'react-native';

type Props = {
    title: string;
    subtitle: string;
}

export function ListHeader({ title, subtitle }: Props){
    return( 
       <View style={styles.container}>
           <Text style={styles.title}>
               {title}
           </Text>

           <Text style={styles.subtitle}>
               {subtitle}
           </Text>
       </View>       
    )
}