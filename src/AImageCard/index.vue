<template>
  <wrapper :class="{ 'can-hover': enableHover }">
    <card-image class="image">
      <a-picture :height="imageHeight" :src="imageUrl" />
    </card-image>
    <card-title v-if="title" class="title">{{ title }}</card-title>
  </wrapper>
</template>

<script>
import APicture from '../APicture';
import { CardImage, CardTitle, Wrapper } from './AImageCard.styles';

export const TYPES = {
  FILL: 'fill',
  FIT: 'fit',
};

export default {
  name: 'a-image-card',
  components: {
    APicture,
    CardImage,
    CardTitle,
    Wrapper,
  },
  props: {
    enableHover: {
      default: false,
      type: Boolean,
    },
    imageHeight: {
      default: '200px',
      type: String,
    },
    imageUrl: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>
