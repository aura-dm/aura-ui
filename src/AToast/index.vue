<template>
  <wrapper :class="type">
    <a-error-icon v-if="type === TOAST_TYPES.ERROR" class="icon" />
    <a-info-icon v-if="type === TOAST_TYPES.INFO" class="icon" />
    <a-check-circle-icon v-if="type === TOAST_TYPES.SUCCESS" class="icon" />
    <toast-content>
      <toast-title v-if="title">{{ title }}</toast-title>
      <toast-text v-if="text">{{ text }}</toast-text>
    </toast-content>
    <a-button class="close-btn" @click="$emit('dismiss', id)">
      <a-close-icon />
    </a-button>
  </wrapper>
</template>

<script>
import AButton from '../AButton';
import ACheckCircleIcon from '../icons/ACheckCircleIcon';
import ACloseIcon from '../icons/ACloseIcon';
import AErrorIcon from '../icons/AErrorIcon';
import AInfoIcon from '../icons/AInfoIcon';
import { ToastContent, ToastText, ToastTitle, Wrapper } from './AToast.styles';

export const TOAST_TYPES = {
  ERROR: 'error',
  INFO: 'info',
  SUCCESS: 'success',
};

export default {
  name: 'a-toast',
  components: {
    AButton,
    ACheckCircleIcon,
    ACloseIcon,
    AErrorIcon,
    AInfoIcon,
    ToastContent,
    ToastText,
    ToastTitle,
    Wrapper,
  },
  computed: {
    TOAST_TYPES() {
      return TOAST_TYPES;
    },
  },
  props: {
    id: {
      required: true,
      type: String,
    },
    text: {
      type: String,
    },
    title: {
      type: String,
    },
    type: {
      default: TOAST_TYPES.INFO,
      type: String,
    },
  },
};
</script>
