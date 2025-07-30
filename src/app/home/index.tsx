import { StyleSheet, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Header } from '@/components/header'
import { Title } from '@/components/title'
import { ButtonIcon } from '@/components/button-icon'

import type { StackRoutesList } from '@/routes/stack-routes'

type HomeProps = NativeStackScreenProps<StackRoutesList, 'home'>

export function Home({ navigation }: HomeProps) {
  function handleNavigateToProduct() {
    navigation.navigate('product')
  }

  return (
    <View style={styles.container}>
      <Header>
        <Title>Home</Title>

        <ButtonIcon name="add-circle" onPress={handleNavigateToProduct} />
      </Header>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    padding: 32,
    paddingTop: 64,
  },
})
