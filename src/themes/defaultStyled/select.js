import { colors, fonts } from './variables';

export default {
  menu: {
    bgColor: colors.theme1,
    border: `1px solid ${colors.theme3}`,
    boxShadow: '0 0 2px 1px rgba(0, 0, 0, 0.1)',
  },
  menuItem: {
    bgColor: colors.theme1,
    borderBottom: `1px solid ${colors.theme3}`,
    color: colors.text1,
    fontFamily: fonts.secondary,
    fontSize: '1em',
    fontWeight: 600,
    lineHeight: '1em',
    _hover: {
      color: colors.primary1,
    },
  },
};