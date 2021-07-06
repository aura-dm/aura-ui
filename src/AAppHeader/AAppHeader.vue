<template>
  <wrapper>
    <menu-icon>
      <a-icon-button
        @click="() => (isMenuOpen = true)"
        style="margin: 0 10px 0 0"
        variant="plain"
      >
        <a-menu-icon height="24px" style="margin: 0 0 0 2px;" width="24px" />
      </a-icon-button>
    </menu-icon>
    <menu-small :class="{ 'is-open': isMenuOpen }">
      <menu-small-header>
        <a-icon-button @click="() => (isMenuOpen = false)" variant="plain">
          <a-close-icon height="24px" width="24px" />
        </a-icon-button>
      </menu-small-header>
      <menu-small-content>
        <menu-item v-for="item in menuItems" :key="item.id">
          <component v-if="item.component" :is="item.component" />
          <menu-link
            v-else
            @click="item.onClick && item.onClick(item, $event)"
            :active-class="activeClass"
            :as="menuItemComponent"
            :class="{
              'is-active': item.isActive,
            }"
            :to="item.to"
          >
            <a-typography style="margin: 0;" variant="h3">
              {{ item.label }}
            </a-typography>
          </menu-link>
        </menu-item>
      </menu-small-content>
    </menu-small>
    <logo>
      <slot name="logo" />
    </logo>
    <menu-large>
      <menu-item v-for="item in menuItems" :key="item.id">
        <component v-if="item.component" :is="item.component" />
        <menu-link
          v-else
          @click="item.onClick && item.onClick(item, $event)"
          :active-class="activeClass"
          :as="menuItemComponent"
          :class="{
            'is-active': item.isActive,
          }"
          :to="item.to"
        >
          <a-typography style="margin: 0;" variant="h6">
            {{ item.label }}
          </a-typography>
        </menu-link>
      </menu-item>
    </menu-large>
  </wrapper>
</template>

<script>
import AIconButton from '../AIconButton/AIconButton.vue';
import ATypography from '../ATypography/ATypography.vue';
import ACloseIcon from '../icons/ACloseIcon.vue';
import AMenuIcon from '../icons/AMenuIcon.vue';
import {
  Logo,
  MenuIcon,
  MenuItem,
  MenuLarge,
  MenuLink,
  MenuSmall,
  MenuSmallContent,
  MenuSmallHeader,
  Wrapper,
} from './AAppHeader.styles';

export default {
  name: 'a-app-header',
  components: {
    ACloseIcon,
    AIconButton,
    AMenuIcon,
    ATypography,
    Logo,
    MenuLarge,
    MenuLink,
    MenuIcon,
    MenuItem,
    MenuSmall,
    MenuSmallContent,
    MenuSmallHeader,
    Wrapper,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  props: {
    activeClass: {
      default() {
        return 'is-active';
      },
      type: String,
    },
    menuItemComponent: {
      default() {
        return 'span';
      },
      type: [Object, String],
    },
    menuItems: {
      type: Array,
    },
  },
};
</script>
