import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Routes } from '@/routes'

export default function App() {
  return (
    <GestureHandlerRootView>
      <Routes />
      <StatusBar style="dark" />
    </GestureHandlerRootView>
  )
}
