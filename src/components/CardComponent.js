// import 'react-native-gesture-handler'
// import { View, Text, ScrollView,TouchableOpacity  } from 'react-native'
// import React from 'react'
// import {Card} from 'react-native-paper'


// const CardComponent = (props) => {
//     console.log(props);

//     const data = require('../../assets/Real.json')
//   return (
//     data.map((element,key) => (
//     <Card style={{flex:1, marginHorizontal:20, marginVertical:10}} key={key}>

//         <View style={{flexDirection:'row', flex:2,alignItems:'center' }}>

//             <Card.Cover source={{ uri: element.img }} style={{width:'50%',height:'100%'}} />

//             <View style={{flexDirection:'column',flex:3, alignItems:'center', justifyContent:'center'}}>

//             <ScrollView style={{maxHeight:125}}>
//                 <Text style={{textAlign:'center', fontSize:15, fontWeight:'bold',marginHorizontal:7, maxWidth:150, justifyContent:'center'}} >{element.desc}</Text>
//             </ScrollView>

//             <TouchableOpacity onPress={(props)=>
//           props.route.navigation.navigation.navigate('Produits', {title:'blablabla'})
//         }>
//           <Text style={{
//                     borderWidth:1,
//                     borderColor:'black',
//                     backgroundColor:'black',
//                     color:'white',
//                     fontSize:28,
//                     borderRadius:7,
//                     width:100,
//                     textAlign:'center'}}>Détails</Text>
//         </TouchableOpacity>

//             </View>
//         </View>

//     </Card>

//   )))
// }

// export default CardComponent