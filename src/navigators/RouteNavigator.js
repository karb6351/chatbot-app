import { createStackNavigator } from 'react-navigation';

import Route from '../screens/Route';

const RouteNavigator = createStackNavigator({
  RouteList: {
    screen: Route
  }
})

export default RouteNavigator