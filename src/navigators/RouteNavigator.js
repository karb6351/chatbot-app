import { createStackNavigator } from 'react-navigation';

import Route from '../screens/Route';
import Map from '../screens/Map';

const RouteNavigator = createStackNavigator({
  RouteList: {
    screen: Route,
    title: "Route"
  },
  Map:{
    screen: Map,
    title: "Map"
  }
})

export default RouteNavigator