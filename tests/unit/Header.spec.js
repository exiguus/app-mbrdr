import { mount, shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Header.vue', () => {
  it('render', () => {
    const wrapper = mount(Header);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('Header.vue Props', () => {
  it('renders props.msg when passed', () => {
    const title = 'test title';
    const wrapper = shallowMount(Header, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
