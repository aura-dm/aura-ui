import { colors, fonts } from './variables';

export default {
  footer: {
    bgColor: colors.theme1,
    borderTop: `1px solid ${colors.theme2}`,
  },
  header: {
    bgColor: colors.theme1,
    borderBottom: `1px solid ${colors.theme2}`,
  },
  modal: {
    bgColor: colors.theme1,
    border: 'none',
    boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.2)',
  },
  overlay: {
    bgColor: 'rgba(255, 255, 255, 0.8)',
  },
  title: {
    color: colors.text1,
    fontFamily: fonts.primary,
    fontSize: '1.2em',
    fontWeight: 600,
    lineHeight: '1.2em',
  },
  fontFamily: fonts.secondary,
  fontSize: '1em',
  fontWeight: 600,
  lineHeight: '1em',
};