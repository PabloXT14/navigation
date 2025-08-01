import { NavigationContainer } from '@react-navigation/native'

// import { StackRoutes } from './stack-routes'
import { BottomRoutes } from './bottom-routes'

export function Routes() {
  return (
    <NavigationContainer>
      <BottomRoutes />
    </NavigationContainer>
  )
}
