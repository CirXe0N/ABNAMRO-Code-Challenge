<template>
  <div id='nodes-graph'>
    <div id="controls">
      <div>Use the mouse wheel to <span>zoom</span> in/out.</div>
      <div>Click and drag to <span>pan</span> canvas.</div>
    </div>

    <ModalComponent ref="modal" :node="selectedNode" @closed="onModalClose()"/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import * as d3 from 'd3';
import ModalComponent from '@/components/Modal.vue';
import { Node } from '@/interfaces/node.interface';

@Component({
  components: {
    ModalComponent,
  },
})
export default class NodesComponent extends Vue {
  private width = 460;

  private height = 460;

  private selectedNode: object = {};

  private host: string | undefined = process.env.VUE_APP_BACKEND_HOST;

  public created(): void {
    this.$nextTick(() => {
      this.generateGraph();
    });
  }

  /**
   * Select the node and open a modal.
   * @param {Node} node The node of the graph to select.
   */
  private selectNode(node: Node): void {
    this.selectedNode = node;
    (this.$refs.modal as ModalComponent).open();
  }

  /**
   * Remove the active class from nodes.
   */
  private onModalClose(): void {
    this.selectedNode = {};
    d3.selectAll('g.node').classed('active', false);
  }

  /**
   * Generate a D3.js Tree Graph.
   */
  private generateGraph(): void {
    const svg: any = d3
      .select('#nodes-graph')
      .append('svg')
      .attr('class', 'canvas') // @ts-ignore
      .call(d3.zoom().on('zoom', (ev) => svg.attr('transform', ev.transform)))
      .on('dblclick.zoom', null)
      .append('g');

    d3.json(`${this.host}/api/v1/nodes`).then((data: any) => {
      const tree = d3.tree()
        .size([this.height, this.width]);

      const root = d3.stratify()
        .id((d: any) => d.name)
        .parentId((d: any) => d.parent?.node.name)(data);

      tree(root);

      // Add the links between nodes:
      svg.selectAll('path')
        .data(root.descendants().slice(1))
        .enter()
        .append('path')
        .attr('d', (d: any) => `M${d.y},${d.x}C${(d.parent.y + 50)},${d.x} ${(d.parent.y + 150)},${d.parent.x} ${d.parent.y},${d.parent.x}`);

      // Add a rectangle for each node.
      const nodes = svg.selectAll('g')
        .data(root.descendants())
        .enter()
        .append('g')
        .attr('class', 'node')
        .attr('transform', (d: any) => `translate(${d.y}, ${d.x - 25})`);

      const rect = nodes.append('rect')
        .attr('rx', 2);

      // Add text to each node.
      const text = nodes.append('text')
        .attr('y', 28)
        .attr('x', 50)
        .html((d: any) => d.data.name);

      // Add click event to each rectangle.
      rect.on('click', (d: any, i: any) => {
        d.target.parentElement.classList.add('active');
        this.selectNode(i.data);
      });
      text.on('click', (d: any, i: any) => {
        d.target.parentElement.classList.add('active');
        this.selectNode(i.data);
      });
    });
  }
}
</script>

<style lang='scss'>
#nodes-graph {
  position: relative;
  text-align: center;
  height: calc(100% - 80px);
  overflow: hidden;

  #controls {
    position: absolute;
    border: 1px solid #000;
    padding: 10px 20px;
    bottom: 20px;
    left: 20px;
    text-align: left;
    font-size: 14px;

    span {
      font-weight: 700;
    }
  }

  .canvas {
    width: 100%;
    height: 100%;

    & > g {
      margin-left: 100px;
    }

    & > g > path {
      fill: none;
      stroke: #efc51e;
      stroke-width: 2px;
    }
  }
}

g.node {
  fill: #00857a;
  stroke-width: 2;

  &:hover {
    cursor: pointer;
    fill: #005e5d;
  }

  &.active {
    fill: #efc51e;
  }

  rect {
    width: 100px;
    height: 50px;
  }

  text {
    font-size: 30px;
    fill: #ffffff;
    text-anchor: middle;
    dominant-baseline: middle;
  }
}
</style>
