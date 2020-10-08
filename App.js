import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import ReducerSquareScreen from './src/screens/ReducerSquareScreen';
import ReducerCounterScreen from './src/screens/ReducerCounterScreen';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';
import BoxExcerciseScreen from './src/screens/BoxExcerciseScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    ReducerSquare: ReducerSquareScreen,
    ReducerCounter: ReducerCounterScreen,
    Text: TextScreen,
    Box: BoxScreen,
    BoxExcercise: BoxExcerciseScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
