<template>
  <div class="wrapper">
    <div class="menu-button">
      <a-button><a-menu-icon /></a-button>
    </div>
    <slot name="logo" />
  </div>
</template>

<script>
import AButton from '../AButton/AButton.vue';
import AMenuIcon from '../icons/AMenuIcon.vue';

export default {
  name: 'a-app-header',
  components: {
    AButton,
    AMenuIcon,
  },
  props: {
    menuItems: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  align-items: center;
  display: flex;
  padding: 50px;
  width: 100%;
}

.menu-button {
  margin: 0 10px 0 0;
}
</style>
