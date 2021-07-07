import React from 'react';
import { styles } from './styles';
import { ScrollView } from 'react-native';
import { categories } from '../../utils/categories'

export function CategorySelect(){
    return (
     <ScrollView
     horizontal
     style={styles.container}
     showsHorizontalScrollIndicator={false}
     contentContainerStyle={{paddingRight: 40}}>

    {
        categories.map(category =>(
            <Category/>
        ))
    }

     </ScrollView>
    ); 
}