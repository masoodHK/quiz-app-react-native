import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen'
import QuestionsScreen from './QuestionsScreen'
import CameraScreen from './CameraScreen'
import ResultScreen from './ResultScreen'

const mainStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Questions: { 
    screen: QuestionsScreen,
  },
  Camera: { 
    screen: CameraScreen,
  },
  Result: {
    screen: ResultScreen
  }
}, {
    initialRouteName: "Camera",
    navigationOptions: {
      header: null
    }
});

export default createAppContainer(mainStack);