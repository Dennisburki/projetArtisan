import 'react-native-gesture-handler'
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider, Appbar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';

const HeaderComponent = () => {
  return (
   
        <Appbar.Header style={{backgroundColor:'black'}}>
          <Appbar.Content title="LH Pâtisserie" />
        </Appbar.Header>
  )
}

export default HeaderComponent