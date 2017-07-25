/// <reference types="react" />
import * as React from 'react'
import {
  ViewProperties,
  TextProperties
} from 'react-native'
interface ICarouselProps extends ViewProperties {
  autoplay?: boolean
  delay?: number
  currentPage?: number
  pageStyle?: ViewProperties
  contentContainerStyle?: ViewProperties
  pageInfo?: boolean
  pageInfoBackgroundColor?: string
  pageInfoTextStyle?: TextProperties
  pageInfoBottomContainerStyle?: ViewProperties
  pageInfoTextSeparator?: string
  bullets?: boolean
  bulletsStyle?: TextProperties
  bulletsContainerStyle?: TextProperties
  bulletStyle?: TextProperties
  arrows?: boolean
  arrowsContainerStyle?: TextProperties
  arrowstyle?: TextProperties
  leftArrowText?: {}
  rightArrowText?: {}
  chosenBulletStyle?: TextProperties
  onAnimateNextPage?: Function
  swipe?: boolean
}
export class Carousel extends Component<ICarouselProps> {}