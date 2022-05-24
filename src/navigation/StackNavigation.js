import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabComponent from '../components/BottomTabComponent'
import ProduitsScreen from '../screens/ProduitsScreen'


const Stack = createStackNavigator()

const StackNavigation = () => (

    <NavigationContainer>
        <Stack.Navigator initialRouteName='Accueil' >     
            <Stack.Screen name='Accueil' component={BottomTabComponent} options={{headerShown:false}}/>
            <Stack.Screen name='Produits' component={ProduitsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
 
)

export default StackNavigation