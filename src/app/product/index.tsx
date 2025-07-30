import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '@/components/header'
import { Title } from '@/components/title'
import { ButtonIcon } from '@/components/button-icon'

export function Product() {
  const navigation = useNavigation()

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
