import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import DetailScreen from './src/DetailScreen';


const stack = createStackNavigator({
  'Home': HomeScreen,
  'Detail': DetailScreen
},
  {
    initialRouteName: 'Home'
  })

const app = createAppContainer(stack);

export default app;
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
