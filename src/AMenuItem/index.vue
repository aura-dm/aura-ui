<template>
  <component-wrapper
    v-bind="$props"
    :active-class="activeClass"
    :class="{
      'is-active': isActive,
      'is-sub-menu-item': isSubMenu,
      'is-sub-menu-title': isSubMenuTitle
    }"
    alignText="left"
    :component="component"
  >
    <main-content>
      <content-left v-if="$slots['content-left']">
        <slot name="content-left" />
      </content-left>
      <slot />
    </main-content>
    <slot name="content-right" />
  </component-wrapper>
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
  mounted() {
    console.log(this.component);
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
