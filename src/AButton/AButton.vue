<template>
  <wrapper
    v-bind="$props"
    :as="component"
    :class="{
      'is-primary': isPrimary,
    }"
    :disabled="isDisabled"
    :type="type"
    @click="$emit('click', $event)"
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
    theme: {
      default: function() {
        return {
          button: {
            bgColor: '#ffffff',
            borderColor: '#dddddd',
            color: '#777777',
            _focus: {
              bgColor: '#ffffff',
              borderColor: '#7f226b',
              color: '#222222',
              outlineColor: '#cccccc',
            },
            _hover: {
              bgColor: '#f9f9f9',
              borderColor: '#cccccc',
              color: '#222222',
            },
            _primary: {
              bgColor: '#7f226b',
              borderColor: '#7f226b',
              color: '#ffffff',
              _hover: {
                bgColor: '#a73a8f',
                borderColor: '#7f226b',
                color: '#ffffff',
              },
            },
          },
        };
      },
      type: Object,
    },
    type: {
      default: 'button',
      type: String,
      validator: value => {
        return value.match(/(button|submit)/);
      },
    },
  },
};
</script>
