import { colors, fonts } from './variables';

export default {
  '--toast-bg-color': colors.theme1,
  '--toast-border': `1px solid ${colors.theme2}`,
  '--toast-box-shadow': '0 10px 10px 0px rgba(0, 0, 0, 0.15)',
  '--toast-box-content-border-left': `1px solid ${colors.theme3}`,
  '--toast-box-error-color': colors.error,
  '--toast-box-info-color': colors.info,
  '--toast-box-success-color': colors.success,
  '--toast-box-text-color': colors.text3,
  '--toast-box-text-font-family': fonts.secondary,
  '--toast-box-text-font-size': '1rem',
  '--toast-box-text-font-weight': 400,
  '--toast-box-text-line-height': '1.4rem',
  '--toast-box-title-color': 'colors.text1',
  '--toast-box-title-font-family': '1.2rem',
  '--toast-box-title-font-weight': 600,
  '--toast-box-title-line-height': '1.4rem',
};
