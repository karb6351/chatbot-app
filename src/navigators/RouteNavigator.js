import { createStackNavigator } from 'react-navigation';

import Route from '../screens/Route';

const RouteNavigator = createStackNavigator({
  RouteList: {
    screen: Route,
    title: "Route"
  }
})

export default RouteNavigator