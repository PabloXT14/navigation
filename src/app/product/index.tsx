import { StyleSheet, View } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Header } from '@/components/header'
import { Title } from '@/components/title'
import { ButtonIcon } from '@/components/button-icon'

import type { StackRoutesList } from '@/routes/stack-routes'

type ProductProps = NativeStackScreenProps<StackRoutesList, 'product'>

export function Product({ navigation }: ProductProps) {
  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Header>
        <ButtonIcon name="arrow-circle-left" onPress={handleGoBack} />

        <Title>Product</Title>
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
