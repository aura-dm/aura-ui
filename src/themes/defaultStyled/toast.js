import { colors, fonts } from './variables';

export default {
  bgColor: colors.theme1,
  border: `1px solid ${colors.theme2}`,
  boxShadow: '0 10px 10px 0px rgba(0, 0, 0, 0.15)',
  content: {
    borderLeft: `1px solid ${colors.theme3}`,
  },
  errorColor: colors.error,
  infoColor: colors.info,
  successColor: colors.success,
  text: {
    color: colors.text3,
    fontFamily: fonts.secondary,
    fontSize: '1em',
    fontWeight: 400,
    lineHeight: '1.4em',
  },
  title: {
    color: colors.text1,
    fontFamily: fonts.primary,
    fontSize: '1.2em',
    fontWeight: 600,
    lineHeight: '1.4em',
  },
};