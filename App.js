import 'react-native-gesture-handler'
import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper'
import HeaderComponent from './src/components/HeaderComponent'
import StackNavigation from './src/navigation/StackNavigation';

const App = () => (

  
  <PaperProvider>

    <HeaderComponent/>
    <StackNavigation/>

  </PaperProvider>
  
  )

  export default App
