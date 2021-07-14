import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';
import { Background } from '../../components/Background';
import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { Fontisto } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { styles } from './styles';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';

export function AppointmentDetails(){

    const members = [
        {
            id: '1',
            username: 'Jhonata',
            avatar_url: 'https://github.com/jhonatagarcia.png',
            status: 'online'
        },

        {
            id: '2',
            username: 'Schorlers',
            avatar_url: 'https://github.com/felipe199903.png',
            status: 'offline'
        }
    ]
       
    return(
       <Background>
           <Header title="Detalhes" action={
            <BorderlessButton>
                <Fontisto name="share" size={24} color={theme.colors.primary}/>
            </BorderlessButton>
        }/>

            <ImageBackground source={BannerImg} style={styles.banner}>
                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendários
                    </Text>

                    <Text style={styles.subtitle}>
                        É hoje, bora ganhar todas no COD!!!
                    </Text>
                </View>
            </ImageBackground>
           
           <ListHeader title="Jogadores" subtitle="Total 3"/>

            <FlatList data={members} keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <Member data={item}/>
                )}
                ItemSeparatorComponent={() => <ListDivider/>}
                style={styles.members}
            />
       
       </Background>
    )
}