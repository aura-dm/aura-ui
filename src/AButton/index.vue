<template>
  <wrapper
    v-bind="$props"
    :align-text="alignText"
    :as="component"
    :class="{
      'is-primary': isPrimary,
      'align-left': alignText === 'left',
      'align-center': alignText === 'center',
      'align-right': alignText === 'right'
    }"
    :disabled="isDisabled"
    :type="type"
    @click="onClick"
  >
    <icon-left v-if="$scopedSlots['icon-left']">
      <slot name="icon-left" />
    </icon-left>
    <slot></slot>
    <icon-right v-if="$scopedSlots['icon-right']">
      <slot name="icon-right" />
    </icon-right>
  </wrapper>
</template>

<script>
import { IconLeft, IconRight, Wrapper } from './AButton.styles';

export default {
  name: 'a-button',
  components: {
    IconLeft,
    IconRight,
    Wrapper,
  },
  methods: {
    onClick(evt) {
      this.$emit('click', evt);
    },
  },
  props: {
    alignText: {
      default: 'center',
      type: String,
      validator: value => {
        return value.match(/(left|center|right)/);
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
