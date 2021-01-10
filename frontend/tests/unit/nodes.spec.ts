import { mount } from '@vue/test-utils';
import NodesComponent from '@/components/Nodes.vue';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
let nodes: any[];

describe('Nodes.vue', () => {
  beforeEach(() => {
    nodes = [{
      _id: 38,
      _labels: [
        'Node',
      ],
      name: 'A',
      description: 'This is a description of A',
    },
    {
      _id: 37,
      _labels: [
        'Node',
      ],
      name: 'B',
      description: 'This is a description of B',
      parent: {
        _id: 12,
        _type: 'IS_PARENT_OF',
        node: {
          _id: 38,
          _labels: [
            'Node',
          ],
          name: 'A',
          description: 'This is a description of A',
        },
      },
    }];
  });

  it('renders the nodes', () => {
    fetchMock.mockResponseOnce(JSON.stringify(nodes), { status: 200 });
    const wrapper = mount(NodesComponent);
    (wrapper.vm as any).generateGraph();
    expect(wrapper.element).toMatchSnapshot();
  });
});
