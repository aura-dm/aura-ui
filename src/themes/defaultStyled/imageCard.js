import { colors, fonts } from './variables';

export default {
  image: {
    outline: `1px solid ${colors.theme2}`,
    _focus: {
      outline: `3px solid ${colors.primary1}`,
    },
    _hover: {
      outline: `3px solid ${colors.primary1}`,
    },
  },
  title: {
    color: colors.text2,
    fontFamily: fonts.primary,
    fontSize: '1.1em',
    fontWeight: 600,
    _focus: {
      color: colors.primary1,
    },
    _hover: {
      color: colors.primary1,
    },
  },
};