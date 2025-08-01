import {
  createBottomTabNavigator,
  type BottomTabScreenProps,
} from '@react-navigation/bottom-tabs'

import { Home } from '@/app/home'
import { Product } from '@/app/product'

export type BottomRouteList = {
  home: undefined
  product: undefined | { id: string }
}

export type BottomRoutesProps<T extends keyof BottomRouteList> =
  BottomTabScreenProps<BottomRouteList, T>

const { Navigator, Screen } = createBottomTabNavigator<BottomRouteList>()

export function BottomRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen component={Home} name="home" />
      <Screen component={Product} name="product" />
    </Navigator>
  )
}
