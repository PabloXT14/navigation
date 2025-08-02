import {
  createDrawerNavigator,
  type DrawerScreenProps,
} from '@react-navigation/drawer'
import { MaterialIcons } from '@expo/vector-icons'

import { Home } from '@/app/home'
import { Product } from '@/app/product'

export type DrawerRouteList = {
  home: undefined
  product: undefined | { id: string }
}

export type DrawerRouteProps<T extends keyof DrawerRouteList> =
  DrawerScreenProps<DrawerRouteList, T>

const { Navigator, Screen } = createDrawerNavigator<DrawerRouteList>()

export function DrawerRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        drawerActiveTintColor: '#10b981',
        drawerInactiveTintColor: '#71717a',
      }}
    >
      <Screen
        component={Home}
        name="home"
        options={{
          drawerLabel: 'Início',
          headerTitle: 'Início',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="home" size={size} />
          ),
        }}
      />
      <Screen
        component={Product}
        name="product"
        options={{
          drawerLabel: 'Produto',
          headerTitle: 'Produto',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons color={color} name="add-circle" size={size} />
          ),
        }}
      />
    </Navigator>
  )
}
