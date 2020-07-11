import { shallowMount } from '@vue/test-utils';
import Component from './index.vue';

describe('AActionBar', () => {
  let vm;
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Component);
    vm = wrapper.vm;
  });
});
