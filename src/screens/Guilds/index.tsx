import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { GuildProps } from '../../components/Guild';
import { Guild } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { styles } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export function Guilds({handleGuildSelect}: Props){
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'img.png',
            owner: true
        },

        {
            id: '2',
            name: 'Os tops devs',
            icon: 'img.png',
            owner: true
        },

        {
            id: '2',
            name: 'Os tops devs',
            icon: 'img.png',
            owner: true
        },

        {
            id: '2',
            name: 'Os tops devs',
            icon: 'img.png',
            owner: true
        },

        {
            id: '2',
            name: 'Os tops devs',
            icon: 'img.png',
            owner: true
        },

        {
            id: '2',
            name: 'Os tops devs',
            icon: 'img.png',
            owner: true
        },

        {
            id: '2',
            name: 'Os tops devs',
            icon: 'img.png',
            owner: true
        }
    ];  

    return (
        <View>
            <FlatList data={guilds} keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Guild data={ item } onPress={() => handleGuildSelect(item)}/>
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.guilds}
            />
           
        </View>
    )
}