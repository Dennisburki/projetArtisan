import 'react-native-gesture-handler'
import { View, Text, Image } from 'react-native'
import React from 'react'

const ProduitsScreen = (props) => {

  console.log(props);
  return (
    <View>

      <Text style={{textAlign:'center', fontWeight:'bold', fontSize:32}}>{props.route.params.title}</Text>
      <Image source={{uri:props.route.params.img}} style={{width:'100%', height:'100%'}}/>
      <Text style={{textAlign:'center', fontSize:24}}>{props.route.params.desc}</Text>
     
    </View>
  )
}

export default ProduitsScreen