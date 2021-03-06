<template>
  <wrapper>
    <menu-button>
      <a-button><a-menu-icon /></a-button>
    </menu-button>
    <slot name="logo" />
  </wrapper>
</template>

<script>
import AButton from '../AButton/AButton.vue';
import AMenuIcon from '../icons/AMenuIcon.vue';
import { MenuButton, Wrapper } from './AAppHeader.styles';

export default {
  name: 'a-app-header',
  components: {
    AButton,
    AMenuIcon,
    MenuButton,
    Wrapper,
  },
  props: {
    menuItems: {
      type: Array,
    },
  },
};
</script>
