import { View, Text, Image} from 'react-native'
import React from 'react'
import Map from '../components/MapComponent'

const ContactScreen = () => {
  return (

    <View style={{flex:1}}>

      <Text>Contact</Text>

      <Text style={{fontWeight:'bold', textAlign:'center', fontSize:25, marginBottom:25}}>Nous contacter</Text>
  
      <Text style={{marginHorizontal:20, textAlign:'justify', fontSize:20, marginBottom:10}}>
          <Text style={{fontWeight:'bold'}}>Téléphone: </Text>
          <Text style={{fontStyle:'italic'}}>02 02 02 02 02</Text>
      </Text>

      <Text style={{marginHorizontal:20, textAlign:'justify', fontSize:20, marginVertical:10}}>
        <Text style={{fontWeight:'bold'}}>Email: </Text>
        <Text style={{fontStyle:'italic'}}>lhpatisserie@gmail.com</Text>
      </Text>

      <Text style={{marginHorizontal:20, textAlign:'justify', fontSize:20, marginVertical:10}}>
        <Text style={{fontWeight:'bold'}}>Adresse: </Text>
        <Text style={{fontStyle:'italic'}}>10 Place Léon Meyer, 76600 Le Havre</Text>
      </Text>

      <View style={{alignItems:'center'}}>
        <Map/>
      </View>



    </View>
  )
}

export default ContactScreen