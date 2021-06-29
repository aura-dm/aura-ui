import { colors, fonts } from './variables';
import breakpoints from '../breakpoints';

// components
import actionBar from './actionBar';
import button from './button';
import iconButton from './iconButton';
import imageCard from './imageCard';
import loading from './loading';
import menuItem from './menuItem';
import messagePanel from './messagePanel';
import modal from './modal';
import select from './select';
import tab from './tab';
import textField from './textField';
import toast from './toast';
import typography from './typography';

export default {
  breakpoints,
  colors,
  fonts,
  actionBar,
  app: {
    bgColor: colors.theme2,
    color: colors.text1,
    fontFamily: fonts.primary,
  },
  button,
  iconButton,
  imageCard,
  loading,
  menuItem,
  messagePanel,
  modal,
  select,
  tab,
  textField,
  toast,
  typography,
};
