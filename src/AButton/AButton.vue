<template>
  <wrapper
    v-bind="$props"
    v-on="$listeners"
    :as="component"
    :class="{
      'align-left': align === 'left',
      'align-right': align === 'right',
      'is-plain': variant === 'plain',
      'is-primary': isPrimary,
    }"
    :disabled="isDisabled"
    :type="type"
  >
    <slot></slot>
  </wrapper>
</template>

<script>
import { Wrapper } from './AButton.styles';

export default {
  name: 'a-button',
  components: {
    Wrapper,
  },
  props: {
    align: {
      default: 'center',
      type: String,
      validator: value => {
        return value.match(/(center|left|right)/);
      },
    },
    component: {
      default: 'button',
      type: [Object, String],
    },
    isDisabled: {
      default: false,
      type: Boolean,
    },
    isPrimary: {
      default: false,
      type: Boolean,
    },
    type: {
      default: 'button',
      type: String,
      validator: value => {
        return value.match(/(button|submit)/);
      },
    },
    variant: {
      default: 'default',
      type: String,
      validator: value => {
        return value.match(/(default|plain)/);
      },
    },
  },
};
</script>
