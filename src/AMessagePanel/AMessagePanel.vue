<template>
  <Wrapper>
    <a-typography component="h3" style="margin: 0 0 15px;" variant="h5">
      {{ text }}
    </a-typography>
    <slot></slot>
  </Wrapper>
</template>

<script>
import ATypography from '../ATypography/ATypography.vue';
import { Wrapper } from './AMessagePanel.styles';

export default {
  name: 'a-message-panel',
  components: {
    ATypography,
    Wrapper,
  },
  props: {
    text: {
      type: String,
    },
  },
};
</script>
