<template>
  <wrapper
    :class="{
      'is-active': isActive,
      'is-left': alignMenu === 'left',
      'is-right': alignMenu === 'right',
    }"
    v-click-outside="onClickOutside"
  >
    <slot
      aria-haspopup="true"
      aria-controls="select-menu"
      :on="onTriggerClick"
    />
    <select-menu v-if="isActive" class="select-menu" role="menu">
      <a-button
        v-for="item in items"
        :key="item.id"
        @click="onSelect(item.id)"
        align="left"
        style="height: 44px;"
        variant="plain"
      >
        {{ item.label }}
      </a-button>
    </select-menu>
  </wrapper>
</template>

<script>
import AButton from '../AButton';
import vClickOutside from 'v-click-outside';
import { SelectMenu, Wrapper } from './ASelect.styles';

export default {
  name: 'a-select',
  components: {
    AButton,
    SelectMenu,
    Wrapper,
  },
  data() {
    return {
      isActive: false,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    onTriggerClick() {
      this.isActive = !this.isActive;
    },
    onClickOutside() {
      this.isActive = false;
    },
    onSelect(id) {
      this.isActive = false;
      this.$emit('select', id);
    },
  },
  props: {
    alignMenu: {
      default: 'left',
      type: String,
      validator: value => {
        return value.match(/(left|right)/);
      },
    },
    isDisabled: {
      default: false,
      type: Boolean,
    },
    items: {
      type: Array,
    },
  },
};
</script>
