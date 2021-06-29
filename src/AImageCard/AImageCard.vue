<template>
  <wrapper :class="{ 'can-hover': enableHover }">
    <card-image class="image">
      <a-picture :height="imageHeight" :src="imageUrl" />
    </card-image>
    <card-title v-if="title" component="h3" variant="h5">
      {{ title }}
    </card-title>
    <card-sub-title v-if="subTitle" component="h5" variant="p">
      {{ subTitle }}
    </card-sub-title>
  </wrapper>
</template>

<script>
import APicture from '../APicture';
import {
  CardImage,
  CardSubTitle,
  CardTitle,
  Wrapper,
} from './AImageCard.styles';

export const TYPES = {
  FILL: 'fill',
  FIT: 'fit',
};

export default {
  name: 'a-image-card',
  components: {
    APicture,
    CardImage,
    CardSubTitle,
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
    subTitle: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>
