import { StyleSheet, View } from 'react-native'

import { Header } from '@/components/header'
import { Title } from '@/components/title'
import { ButtonIcon } from '@/components/button-icon'

import type { StackRoutesProps } from '@/routes/stack-routes'

export function Product({ navigation, route }: StackRoutesProps<'product'>) {
  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Header>
        <ButtonIcon name="arrow-circle-left" onPress={handleGoBack} />

        <Title>Product {route.params?.id}</Title>
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
