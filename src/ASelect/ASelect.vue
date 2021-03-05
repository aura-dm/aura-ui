<template>
  <wrapper
    :class="{
      'is-active': isActive,
      'is-left': alignMenu === 'left',
      'is-right': alignMenu === 'right'
    }"
    v-click-outside="onClickOutside"
  >
    <a-button
      aria-haspopup="true"
      aria-controls="select-menu"
      class="trigger-btn"
      style="margin: 0 0 2px 3px;"
      @click="onTriggerClick"
    >
      <template v-slot:icon-left>
        <a-more-icon></a-more-icon>
      </template>
      <span>{{ title }}</span>
    </a-button>
    <select-menu v-if="isActive" class="select-menu" role="menu">
      <select-menu-item
        v-for="item in items"
        :key="item.id"
        :title="item.label"
        @click="onSelect(item.id)"
      >
        {{ item.label }}
      </select-menu-item>
    </select-menu>
  </wrapper>
</template>

<script>
import AButton from '../AButton';
import AMoreIcon from '../icons/AMoreIcon';
import vClickOutside from 'v-click-outside';
import {
  SelectMenu,
  SelectMenuItem,
  TriggerBtnTitle,
  Wrapper,
} from './ASelect.styles';

export default {
  name: 'a-select',
  components: {
    AButton,
    AMoreIcon,
    SelectMenu,
    SelectMenuItem,
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
    showIcon: {
      default: true,
      type: Boolean,
    },
    title: {
      default: 'Options',
      type: String,
    },
  },
};
</script>
