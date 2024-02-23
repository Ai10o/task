import React, { useEffect }  from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';
import HomeScreen from './screens/HomeScren';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen/>
    </SafeAreaView>
  );
};

export default App;
