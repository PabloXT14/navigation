import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/app/home'
import { Product } from '@/app/product'

const { Navigator, Screen } = createNativeStackNavigator()

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
