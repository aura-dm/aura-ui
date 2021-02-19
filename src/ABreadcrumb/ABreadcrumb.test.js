import { shallowMount } from '@vue/test-utils';
import Component from './index.vue';

describe('ABreadcrumb', () => {
  let vm;
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Component);
    vm = wrapper.vm;
  });
});
