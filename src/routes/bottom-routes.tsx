import {
  createBottomTabNavigator,
  type BottomTabScreenProps,
} from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons'

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
        tabBarActiveTintColor: '#10b981',
        tabBarInactiveTintColor: '#71717a',
        tabBarLabelPosition: 'beside-icon',
      }}
    >
      <Screen
        component={Home}
        name="home"
        options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="home" size={size} />
          ),
        }}
      />
      <Screen
        component={Product}
        name="product"
        options={{
          tabBarLabel: 'Produto',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="add-circle" size={size} />
          ),
        }}
      />
    </Navigator>
  )
}
