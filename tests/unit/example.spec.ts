import { shallowMount } from '@vue/test-utils';
import Button from '@/components/XButton/XButton.vue';

describe('XButton.vue', () => {
  it('renders XButton', () => {
    const wrapper = shallowMount(Button);

    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
