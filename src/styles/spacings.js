import { Dimensions } from 'react-native'

const {
  height,
  width,
} = Dimensions.get('window')

export const RIGHT = 'right'
export const LEFT = 'left'
export const [HEIGHT, WIDTH, HALF_WIDTH] = [height, width, width / 2]
