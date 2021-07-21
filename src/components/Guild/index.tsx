import React from 'react';
import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { GuildIcon } from '../GuildIcon';
import { styles } from './styles';
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';

export type GruildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type Props = TouchableOpacityProps & {
    data:  GruildProps;
}

export function Guild({data, ...rest}: Props){                                                                                                                                                               
    return (
     <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
         <GuildIcon/>
         <View style={styles.container}>
            <View>
                <Text style={styles.title}>
                    {data.name}
                </Text>

                <Text style={styles.type}>
                    {data.owner ? 'Administrador' : 'Convidado'}
                </Text>
            </View>
           
         </View>
         <Feather name="chevron-right" color={theme.colors.heading} size={24}/>
         
     </TouchableOpacity>
    )
}