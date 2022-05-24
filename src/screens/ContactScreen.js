import { View, Text } from 'react-native'
import React from 'react'

const ContactScreen = () => {
  return (
    <View>
      <Text>Contact</Text>

      <Text style={{fontWeight:'bold', textAlign:'center', fontSize:25, marginBottom:75}}>Nous contacter</Text>

      
      <Text style={{marginHorizontal:20, textAlign:'justify', fontSize:20, marginVertical:15}}>
          <Text style={{fontWeight:'bold'}}>Téléphone: </Text>
          <Text style={{fontStyle:'italic'}}>02 02 02 02 02</Text>
      </Text>

      <Text style={{marginHorizontal:20, textAlign:'justify', fontSize:20, marginVertical:15}}>
        <Text style={{fontWeight:'bold'}}>Adresse: </Text>
        <Text style={{fontStyle:'italic'}}>10 Place Léon Meyer, 76600 Le Havre</Text>
      </Text>

      <Text style={{marginHorizontal:20, textAlign:'justify', fontSize:20, marginVertical:15}}>
        <Text style={{fontWeight:'bold'}}>Email: </Text>
        <Text style={{fontStyle:'italic'}}>lhpatisserie@gmail.com</Text>
      </Text>
    </View>
  )
}

export default ContactScreen