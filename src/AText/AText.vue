<template>
  <text-h1 v-if="variant === 'h1'"><slot /></text-h1>
  <text-h2 v-else-if="variant === 'h2'"><slot /></text-h2>
  <text-h3 v-else-if="variant === 'h3'"><slot /></text-h3>
  <text-h4 v-else-if="variant === 'h4'"><slot /></text-h4>
  <text-h5 v-else-if="variant === 'h5'"><slot /></text-h5>
  <text-h6 v-else-if="variant === 'h6'"><slot /></text-h6>
  <text-p v-else-if="variant === 'p'"><slot /></text-p>
</template>

<script>
import {
  TextH1,
  TextH2,
  TextH3,
  TextH4,
  TextH5,
  TextH6,
  TextP,
} from './AText.styles';

export default {
  name: 'a-text',
  components: {
    TextH1,
    TextH2,
    TextH3,
    TextH4,
    TextH5,
    TextH6,
    TextP,
  },
  props: {
    variant: {
      default: 'p',
      type: String,
    },
  },
};
</script>
