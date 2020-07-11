<template>
  <wrapper :height="height" viewBox="0 0 24 24" :width="width">
    <slot></slot>
  </wrapper>
</template>

<script>
import { Wrapper } from './AIcon.styles';

export default {
  name: 'a-icon',
  components: {
    Wrapper,
  },
  props: {
    height: {
      default: '20',
      type: String,
    },
    width: {
      default: '20',
      type: String,
    },
  },
};
</script>
