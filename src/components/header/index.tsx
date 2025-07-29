import { View, type ViewProps } from 'react-native'

import { styles } from './styles'

export function Header({ ...props }: ViewProps) {
  return <View style={styles.container} {...props} />
}
