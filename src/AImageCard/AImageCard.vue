<template>
  <wrapper :class="{ 'can-hover': enableHover }">
    <card-image class="image">
      <a-picture :fill-type="fillType" :height="imageHeight" :src="imageUrl" />
    </card-image>
    <main-title v-if="title" component="h3" variant="h5">
      {{ title }}
    </main-title>
    <extra>
      <sub-title v-if="subTitle" component="h5" variant="p">
        {{ subTitle }}
      </sub-title>
      <controls>
        <slot name="controls" />
      </controls>
    </extra>
  </wrapper>
</template>

<script>
import APicture, { TYPES } from '../APicture';
import {
  CardImage,
  Controls,
  Extra,
  MainTitle,
  SubTitle,
  Wrapper,
} from './AImageCard.styles';

export default {
  name: 'a-image-card',
  components: {
    APicture,
    CardImage,
    Controls,
    Extra,
    MainTitle,
    SubTitle,
    Wrapper,
  },
  props: {
    enableHover: {
      default: false,
      type: Boolean,
    },
    fillType: {
      default: TYPES.FILL,
      type: String,
      validator: value => {
        return [TYPES.FILL, TYPES.FIT].includes(value);
      },
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
