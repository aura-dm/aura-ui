import { colors, fonts } from './variables';

export default {
  color: colors.text2,
  fontFamily: fonts.primary,
  fontSize: '1em',
  fontWeight: 600,
  lineHeight: '1.2em',
  _focus: {
    color: colors.text1,
    outlineColor: colors.theme5,
  },
  _hover: {
    color: colors.primary1,
  },
  _primary: {
    color: colors.primary1,
    _focus: {
      color: colors.primary1,
      outlineColor: colors.primary2,
    },
    _hover: {
      color: colors.text1,
    },
  },
};