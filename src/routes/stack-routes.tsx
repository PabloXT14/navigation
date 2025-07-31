import {
  createNativeStackNavigator,
  type NativeStackScreenProps,
} from '@react-navigation/native-stack'

import { Home } from '@/app/home'
import { Product } from '@/app/product'

export type StackRoutesList = {
  home: undefined
  product: undefined | { id: string }
}

export type StackRoutesProps<T extends keyof StackRoutesList> =
  NativeStackScreenProps<StackRoutesList, T>

const { Navigator, Screen } = createNativeStackNavigator<StackRoutesList>()

export function StackRoutes() {
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
