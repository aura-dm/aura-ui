<template>
  <a-icon v-bind="$props">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
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
