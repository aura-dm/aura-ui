import { colors, fonts } from './variables';

export default {
  errors: {
    color: colors.error,
    fontFamily: fonts.secondary,
    fontSize: '1em',
    fontWeight: 600,
    lineHeight: '1.4em',
  },
  input: {
    bgColor: colors.theme1,
    border: `1px solid ${colors.theme3}`,
    borderRadius: '3px',
    color: colors.text1,
    fontFamily: fonts.secondary,
    fontSize: '1em',
    fontWeight: 600,
    lineHeight: '1.4em',
    _focus: {
      bgColor: colors.theme1,
      border: `1px solid ${colors.theme3}`,
      boxShadow: `0 0 0 2px ${colors.theme3}`,
      color: colors.text1,
    },
  },
  label: {
    color: colors.text1,
    fontFamily: fonts.secondary,
    fontSize: '1em',
    fontWeight: 600,
    lineHeight: '1.4em',
    _focus: {
      color: colors.primary1,
    },
  },
};