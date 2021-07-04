import { colors, fonts } from './variables';

export default {
  errors: {
    color: colors.error,
  },
  input: {
    bgColor: colors.theme1,
    borderBottom: `1px solid ${colors.theme6}`,
    borderRadius: 0,
    color: colors.text1,
    _focus: {
      bgColor: colors.theme1,
      borderBottom: `1px solid ${colors.primary1}`,
      boxShadow: 'none',
      color: colors.text1,
    },
  },
  label: {
    color: colors.text2,
    _focus: {
      color: colors.primary1,
    },
  },
};
