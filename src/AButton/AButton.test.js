import { shallowMount } from '@vue/test-utils';
import Component from './index.vue';

describe('AButton', () => {
  let vm;
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Component);
    vm = wrapper.vm;
  });

  describe('onClick', () => {
    it('emits click', () => {
      vm.$emit = jest.fn();
      vm.onClick();
      expect(vm.$emit).toHaveBeenCalledWith('click');
    });
  });
});
