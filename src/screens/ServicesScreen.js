import 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import React from 'react'
import {Card, Title } from 'react-native-paper'

const ServicesScreen = () => {
  return (
    <View style={{flex:1}}>

    <Text>Services</Text>

    <Title style={{fontWeight:'bold', textAlign:'center', fontSize:25}}>Nos Préstations</Title>

    <Card style={{flex:1, marginHorizontal:20, marginVertical:10}}>
        <View style={{flexDirection:'row', flex:2}}>
            <Card.Cover source={require('../../assets/img/surplace.jpg')} style={{width:'50%',height:'100%'}}/>
            <View style={{justifyContent:'center'}}>
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold',maxWidth:150, marginHorizontal:30}}>Vente sur Place</Text>
            </View>
        </View>
    </Card>

    <Card style={{flex:1, marginHorizontal:20, marginVertical:10}}>
        <View style={{flexDirection:'row', flex:2}}>
            <Card.Cover source={require('../../assets/img/traiteur.jpg')} style={{width:'50%',height:'100%'}}/>
            <View style={{justifyContent:'center'}}>
                <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold',maxWidth:150, marginHorizontal:30}}>Service de Traiteur</Text>
            </View>
        </View>
    </Card>
    
    <Card style={{flex:1, marginHorizontal:20, marginVertical:10}}>
        <View style={{flexDirection:'row', flex:2}}>
            <Card.Cover source={require('../../assets/img/perso.jpg')} style={{width:'50%',height:'100%'}}/>
            <View style={{justifyContent:'center'}}>
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold',maxWidth:150, marginHorizontal:30}}>Réalisations Personalisées</Text>
            </View>
        </View>
    </Card>

    </View>
  )
}

export default ServicesScreen