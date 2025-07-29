import { Text, type TextProps } from 'react-native'

import { styles } from './styles'

export function Title({ ...props }: TextProps) {
  return <Text style={styles.title} {...props} />
}
