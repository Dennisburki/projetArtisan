import 'react-native-gesture-handler'
import { View, Text, Image } from 'react-native'
import React from 'react'
import { Title } from 'react-native-paper'


const HomeScreen = () => {
  return (
    <View style={{flex:1}}>

      <Text>Accueil</Text>
      
      <Title style={{fontWeight:'bold', textAlign:'center', fontSize:25}}>LH Pâtisserie</Title>

      <Text style={{
        marginHorizontal:20,
        textAlign:'justify',
        fontSize:20,
        marginVertical:15
       }}>
        Nous réalisons pâtisseries et gourmandises variées, en sélectionant nos produits avec soin!</Text>

      <View style={{flex:0.7}}>
        <Image source={require('../../assets/img/accueil.jpg')} style={{height:undefined, width:undefined, flex:1}}/>
      </View>

      <Text style={{
        marginHorizontal:20, 
        textAlign:'justify', 
        fontSize:20, 
        marginVertical:15
        }}>Implantée au coeur du Havre depuis 1926, notre entreprise familiale propose différents services afin de répondre à vos besoins.</Text>

    </View>
  )
}

export default HomeScreen