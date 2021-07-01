<template>
  <a-icon v-bind="$props">
    <path d="M15 18H3V16H15V18ZM21 13H3V11H21V13ZM15 8H3V6H15V8Z" />
  </a-icon>
</template>

<script>
import AIcon from '../AIcon/AIcon';

export default {
  name: 'a-menu-icon',
  components: {
    AIcon,
  },
};
</script>
