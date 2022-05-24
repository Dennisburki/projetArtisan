import 'react-native-gesture-handler'
import { View, Text, Image } from 'react-native'
import React from 'react'

const ProduitsScreen = (props) => {

  console.log(props);
  return (
    <View style={{flex:1}}>
    <View style={{flex:1}}>
      
      <Text style={{textAlign:'center', fontWeight:'bold', fontSize:32, flex:0.5}}>{props.route.params.title}</Text>
      <View style={{flex:2, alignItems:'center'}}>
        <Image source={{uri:props.route.params.img}} style={{width:'80%', height:'100%'}}/>
      </View>
      <Text style={{textAlign:'center', fontSize:24, flex:2}}>{props.route.params.desc}</Text>

      <Text style={{flex:2,textAlign:'center',fontSize:24}}><Text style={{fontWeight:'bold'}}>Prix: </Text>{props.route.params.prix}</Text>
    
    </View>
    </View>
  )
}

export default ProduitsScreen