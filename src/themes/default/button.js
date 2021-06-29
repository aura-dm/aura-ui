import { colors, fonts } from './variables';

export default {
  backgroundColor: colors.theme1,
  borderColor: colors.theme5,
  color: colors.text2,
  fontFamily: fonts.primary,
  fontSize: '1.4rem',
  fontWeight: 400,
  lineHeight: 1.5,
  _focus: {
    color: colors.text1,
    outlineColor: colors.theme5,
  },
  _hover: {
    color: colors.text1,
    outlineColor: colors.theme2,
  },
  _primary: {
    backgroundColor: colors.primary1,
    borderColor: colors.primary1,
    color: colors.textAlt1,
    _focus: {
      color: colors.textAlt1,
      outlineColor: colors.primary2,
    },
    _hover: {
      color: colors.textAlt1,
      outlineColor: colors.primary2,
    },
  },
};
