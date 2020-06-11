import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/01-Content/ComponentScreen";
import ListScreen from "./src/screens/02-List/ListScreen";
import ImageScreen from "./src/screens/03-ReusableComponents/ImageScreen";
import CounterScreen from "./src/screens/04-State/01-CounterScreen";
import ColorScreen from './src/screens/04-State/02-ColorScreen';
import SquareScreen from './src/screens/04-State/03-SquareScreen';
import ReducerSquareScreen from './src/screens/04-State/04-ReducerSquareScreen'
import TextScreen from './src/screens/05-TextInput/TextScreen'
import BoxScreen from './src/screens/06-Layouts/BoxScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    ReducerSquare: ReducerSquareScreen,
    TextScr: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Practice"
    }
  }
);

export default createAppContainer(navigator);
