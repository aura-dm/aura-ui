import { action } from '@storybook/addon-actions';

import AButton from './';
import AAddIcon from '../icons/AAddIcon';

export default { title: 'Button' };

export const defaultButton = () => ({
  components: { AButton },
  template: '<a-button>Button</a-button>',
});

export const buttonWithLeftIcon = () => ({
  components: { AButton, AAddIcon },
  template: '<a-button><template v-slot:icon-left><a-add-icon /></template>Button</a-button>',
});

export const buttonWithRightIcon = () => ({
  components: { AButton, AAddIcon },
  template: '<a-button>Button<template v-slot:icon-right><a-add-icon /></template></a-button>',
});

export const buttonPrimary = () => ({
  components: { AButton },
  template: '<a-button :is-primary="true">Button</a-button>',
});

export const buttonClick = () => ({
  components: { AButton },
  template: '<a-button @click="handleClick">Button</a-button>',
  methods: {
    handleClick: action('Click'),
  },
});
