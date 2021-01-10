import { shallowMount } from '@vue/test-utils';
import ModalComponent from '@/components/Modal.vue';

describe('Modal.vue', () => {
  it('renders props.node when passed', () => {
    const node = { name: 'Test Node', description: 'Test Description' };
    const wrapper = shallowMount(ModalComponent, {
      propsData: { node },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('close the modal', () => {
    const node = { name: 'Test Node', description: 'Test Description' };
    const wrapper = shallowMount(ModalComponent, {
      propsData: { node },
    });

    (wrapper.vm as any).close();

    expect((wrapper.vm as any).isOpen).toBeFalsy();
  });

  it('open the modal', () => {
    const node = { name: 'Test Node', description: 'Test Description' };
    const wrapper = shallowMount(ModalComponent, {
      propsData: { node },
    });

    (wrapper.vm as any).open();

    expect((wrapper.vm as any).isOpen).toBeTruthy();
  });
});
