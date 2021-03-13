<template>
  <div
    class="wrapper"
    v-bind="$props"
    :class="{
      'is-active': isActive,
      'is-sub-menu-item': isSubMenu,
      'is-sub-menu-title': isSubMenuTitle,
    }"
    alignText="left"
    :component="component"
  >
    <div class="main-content">
      <div class="content-left" v-if="$slots['content-left']">
        <slot name="content-left" />
      </div>
      <slot />
    </div>
    <slot name="content-right" />
  </div>
</template>

<script>
import { ComponentWrapper, ContentLeft, MainContent } from './AMenuItem.styles';

export default {
  name: 'a-menu-item',
  components: {
    ContentLeft,
    MainContent,
    ComponentWrapper,
  },
  props: {
    activeClass: {
      default: 'is-active',
      type: String,
    },
    component: {
      default: 'button',
      type: [Function, Object, String],
    },
    isActive: {
      default: false,
      type: Boolean,
    },
    isSubMenu: {
      default: false,
      type: Boolean,
    },
    isSubMenuTitle: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  background-color: var(--menu-item-bg-color);
  border: none;
  border-bottom: var(--menu-item-border-bottom);
  border-left: var(--menu-item-border-left);
  color: var(--menu-item-color);
  cursor: pointer;
  flex-direction: column;
  font-family: var(--menu-item-font-family);
  font-size: var(--menu-item-font-size);
  font-weight: var(--menu-item-font-weight);
  display: flex;
  height: 50px;
  justify-content: space-between;
  line-height: var(--menu-item-line-height);
  min-height: 50px;
  padding: 0 10px 0 26px;
  text-decoration: none;
  width: 100%;

  &.is-sub-menu-title {
    border-bottom: none;

    &:not(last-child) {
      border-bottom: none;
    }
  }

  &.is-sub-menu-item {
    padding: 0 10px 0 46px;

    &:not(last-child) {
      border-bottom: none;
    }
  }

  &:hover {
    color: var(--menu-item__hover-color);
  }

  &.is-active {
    border-left: var(--menu-item__active-border-left);
    color: var(--menu-item__active-bg-color);
  }
}

.main-content {
  align-items: center;
  display: flex;
  flex-grow: 1;
}

.content-left {
  align-items: center;
  display: flex;
  margin: 0 10px 0 0;
}
</style>
