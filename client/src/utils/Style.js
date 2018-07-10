import { Dimensions, Platform } from 'react-native';

// Dimensions
const { height, width } = Dimensions.get('window');

const ratioX = width < 375 ? (width < 320 ? 0.75 : 0.875) : 1; // eslint-disable-line
const ratioY = height < 568 ? (height < 480 ? 0.75 : 0.875) : 1; // eslint-disable-line

export const em = (tm) => { // eslint-disable-line
  const unit = 16 * ratioX;
  return unit * tm;
};

export const wp = (percentage) => {
  const value = (percentage * width) / 100;
  return Math.round(value);
};

export const isIOS = Platform.OS === 'ios';

// Colors, font, sizes
export default {
  colors: {
    white: '#ffffff',
    black: '#000000',
    googleColor: '#dd4b39',
    transparent: 'transparent'
  },
  button: {
    borderRadius: 25
  },
  fontSize: {
    tiny: em(0.6),
    small: em(0.8),
    regular: em(1),
    large: em(1.3),
    extraLarge: em(1.6),
    huge: em(2),
    extraHuge: em(2.5)
  },
  fontWeight: {
    light: '100',
    regular: '400',
    medium: '500',
    bold: '900'
  },
  fontFamily: '',
  width,
  height
};
