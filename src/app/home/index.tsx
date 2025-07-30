import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '@/components/header'
import { Title } from '@/components/title'
import { ButtonIcon } from '@/components/button-icon'

export function Home() {
  const navigation = useNavigation()

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
