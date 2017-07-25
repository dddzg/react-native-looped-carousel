import * as React from 'react'
import {
  StyleProp,
  ViewStyle,
  ViewProperties
} from 'react-native'
interface ICarouselProps extends ViewProperties {
  autoplay?: boolean
  delay?: number
  currentPage?: number
  pageStyle?: StyleProp<ViewStyle>
  contentContainerStyle?: StyleProp<ViewStyle>
  pageInfo?: boolean
  pageInfoBackgroundColor?: string
  pageInfoTextStyle?: StyleProp<ViewStyle>
  pageInfoBottomContainerStyle?: StyleProp<ViewStyle>
  pageInfoTextSeparator?: string
  bullets?: boolean
  bulletsStyle?: StyleProp<ViewStyle>
  bulletsContainerStyle?: StyleProp<ViewStyle>
  bulletStyle?: StyleProp<ViewStyle>
  arrows?: boolean
  arrowsContainerStyle?: StyleProp<ViewStyle>
  arrowstyle?: StyleProp<ViewStyle>
  leftArrowText?: {}
  rightArrowText?: {}
  chosenBulletStyle?: StyleProp<ViewStyle>
  onAnimateNextPage?: Function
  swipe?: boolean
}
export class Carousel extends React.Component<ICarouselProps> {}
