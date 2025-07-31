import { StyleSheet, View } from 'react-native'

import { Header } from '@/components/header'
import { Title } from '@/components/title'
import { ButtonIcon } from '@/components/button-icon'

import type { StackRoutesProps } from '@/routes/stack-routes'

export function Home({ navigation }: StackRoutesProps<'home'>) {
  function handleNavigateToProduct() {
    navigation.navigate('product', { id: '7' })
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
