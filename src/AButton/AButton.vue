<template>
  <button
    class="wrapper"
    v-bind="$props"
    :align-text="alignText"
    :as="component"
    :class="{
      'is-primary': isPrimary,
      'align-left': alignText === 'left',
      'align-center': alignText === 'center',
      'align-right': alignText === 'right',
    }"
    :disabled="isDisabled"
    :type="type"
    @click="onClick"
  >
    <div class="icon-left" v-if="$scopedSlots['icon-left']">
      <slot name="icon-left" />
    </div>
    <slot></slot>
    <div class="icon-right" v-if="$scopedSlots['icon-right']">
      <slot name="icon-right" />
    </div>
  </button>
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

<style lang="scss" scoped>
.wrapper {
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--button-color);
  flex-shrink: 0;
  fill: var(--button-color);
  cursor: pointer;
  display: flex;
  font-family: var(--button-font-family);
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
  height: 36px;
  line-height: var(--button-line-height);
  outline: transparent solid 2px;
  padding: 0 10px;
  text-decoration: none;
  transition: all 150ms ease-in-out;

  &.align-left {
    justify-content: flex-start;
  }

  &.align-center {
    justify-content: center;
  }

  &.align-right {
    justify-content: flex-end;
  }

  &:disabled {
    pointer-events: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px var(--button__focus-outline-color);
    color: var(--button__focus-color);
    fill: var(--button__focus-color);
  }

  &:hover {
    color: var(--button__hover-color);
    fill: var(--button__hover-color);
  }

  &.is-primary {
    color: var(--button__primary-color);
    fill: var(--button__primary-color);

    &:hover {
      color: var(--button__primary__hover-color);
      fill: var(--button__primary__hover-color);
    }

    &:focus {
      box-shadow: 0 0 0 2px --button__primary__focus-outline-color;
      color: var(--button__primary__focus-color);
      fill: var(--button__primary__focus-color);
    }
  }
}

.icon-left {
  align-items: center;
  display: flex;
  margin: 0 5px 0 0;
}

.icon-right {
  align-items: center;
  display: flex;
  margin: 0 0 0 5px;
}
</style>
