<template>
  <a-icon v-bind="$props">
    <path d="M19 13H5v-2h14v2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </a-icon>
</template>

<script>
import AIcon from '../AIcon/AIcon';

export default {
  name: 'a-remove-icon',
  components: {
    AIcon,
  },
};
</script>
