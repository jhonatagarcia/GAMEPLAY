import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  View, 
  Text, 
  TextInput,
  Image,
} from 'react-native'
import Illustration from '../../assets/illustration.png'
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon'
import { styles } from './styles'

export function SignIn(){
  const navigation = useNavigation();

  function handleSignIn(){
    navigation.navigate('Home')
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image source={Illustration} style={styles.image} resizeMode="stretch"/>

        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte-se {'\n'} 
            e organize suas {'\n'} 
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon title="Entrar com Discord"
          onPress={handleSignIn} />
          
        </View>
      </View>
    </Background>
  );
}