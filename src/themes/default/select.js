import { colors, fonts } from './variables';

export default {
  menu: {
    bgColor: colors.theme1,
    border: `1px solid ${colors.theme3}`,
    boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.2)',
  },
  menuItem: {
    bgColor: colors.theme1,
    borderBottom: `1px solid ${colors.theme3}`,
    color: colors.text1,
    fontFamily: fonts.secondary,
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: '1.6rem',
    _hover: {
      color: colors.primary1,
    },
  },
};
