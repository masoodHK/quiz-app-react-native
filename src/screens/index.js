import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen'
import QuestionsScreen from './QuestionsScreen'
import CameraScreen from './CameraScreen'

const mainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    headerMode: "none"
  },
  Questions: { 
    screen: QuestionsScreen,
    headerMode: "none"
  },
  Camera: { 
    screen: CameraScreen,
    headerMode: "none"
  }
}, {
    initialRouteName: "Camera",
    resetOnBlur: true
});

export default createAppContainer(mainStack);