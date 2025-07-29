import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type ButtonIconProps = TouchableOpacityProps & {
  name: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ name, ...props }: ButtonIconProps) {
  return (
    <TouchableOpacity {...props}>
      <MaterialIcons name={name} size={32} />
    </TouchableOpacity>
  )
}
