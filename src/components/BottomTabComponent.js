import 'react-native-gesture-handler'
import * as React from 'react'
import { BottomNavigation, Text, Card } from 'react-native-paper'
import HomeScreen from '../screens/HomeScreen'
import ServicesScreen from '../screens/ServicesScreen'
import CardComponent from './CardComponent'
import { View,TouchableOpacity, ScrollView  } from 'react-native'

const HomeRoute = () => <HomeScreen/>
const ServicesRoute = () => <ServicesScreen/>

const RealRoute = (props) =>{
  console.log(props)

    const data = require('../../assets/Real.json')

    return (

      data.map((element,key) => (

      <Card style={{flex:1, marginHorizontal:20, marginVertical:10}} key={key}>
  
          <View style={{flexDirection:'row', flex:2,alignItems:'center' }}>
  
              <Card.Cover source={{ uri: element.img }} style={{width:'50%',height:'100%'}} />
  
              <View style={{flexDirection:'column',flex:3, alignItems:'center', justifyContent:'center'}}>
  
                <ScrollView style={{maxHeight:125}}>
                  <Text style={{textAlign:'justify', fontSize:15, fontWeight:'bold',marginHorizontal:7,marginVertical:16, maxWidth:150, justifyContent:'center'}} >{element.desc}</Text>
                </ScrollView>
  
                <TouchableOpacity onPress={()=>
                  props.route.navigation.navigation.navigate('Produits', {title:element.titre, desc:element.desc, img:element.img})
                }>
                  <Text style={{
                        borderWidth:1,
                        borderColor:'black',
                        backgroundColor:'black',
                        color:'white',
                        fontSize:28,
                        borderRadius:7,
                        width:100,
                        textAlign:'center'}}>Détails</Text>
                </TouchableOpacity>
  
              </View>
          </View>
      </Card>
  
   ))
  )
}
const ContactRoute = () => <Text>contact</Text>;

const BottomTabComponent = (props) => {
    const [index, setIndex] = React.useState(0)
    const [routes] = React.useState([
      { key: 'home', title: 'Home', icon: 'home', color:'black' },
      { key: 'services', title: 'Services', icon: 'room-service', color:'black' },
      { key: 'real', title: 'Réalisations', icon: 'muffin', color:'black', navigation:props },
      { key: 'contact', title: 'Contact', icon: 'information', color:'black' },
    ]);
  
    const renderScene = BottomNavigation.SceneMap({
      home: HomeRoute,
      services: ServicesRoute,
      real: RealRoute,
      contact: ContactRoute,
    });
  
    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    );
  };

export default BottomTabComponent