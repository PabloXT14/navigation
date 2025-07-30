export type RootStackParamList = {
  home: undefined
  product: undefined
}

declare global {
  // biome-ignore lint/style/noNamespace: needed
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
