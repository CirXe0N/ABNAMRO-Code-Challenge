<template>
    <div class="dialog" v-bind:class="{ 'dialog--open': isOpen }">
      <div class="dialog__overlay"></div>
      <div class="dialog__content">
        <div class="morph-shape">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 560 280" preserveAspectRatio="none">
            <rect x="3" y="3" fill="none" width="556" height="276"/>
          </svg>
        </div>
        <div class="dialog-inner">
          <h2>Node: {{ node.name }}</h2>
          <p>{{ node.description }}</p>
          <button v-on:click="close()">Close</button>
        </div>
      </div>
    </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Node } from '@/interfaces/node.interface';

@Component
export default class ModalComponent extends Vue {
  @Prop() private node: Node | undefined;

  private isOpen = false;

  /**
   * Open the modal.
   */
  public open(): void {
    this.isOpen = true;
  }

  /**
   * Close the modal.
   */
  private close(): void {
    this.isOpen = false;
    this.$emit('closed', true);
  }
}
</script>

<style lang='scss' scoped>
.dialog,
.dialog__overlay {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.dialog {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.dialog__overlay {
  position: absolute;
  z-index: 1;
  background: rgba(55, 58, 71, 0.9);
  opacity: 0;
  transition: opacity 0.3s;
}

.dialog-inner {
  opacity: 0;
  background: #fff;

  button {
    background-color: #00857a;
    color: #fff;
    border: none;
    font-weight: 700;
    padding: 10px 30px;

    &:hover {
      background-color: #005e5d;
    }
  }
}

.dialog__content {
  width: 50%;
  max-width: 560px;
  min-width: 290px;
  text-align: center;
  position: relative;
  z-index: 5;
  opacity: 0;
  padding: 0;

  p {
    margin-bottom: 30px;
  }
}

.morph-shape {
  position: absolute;
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  top: -2px;
  left: -2px;
  z-index: -1;

  svg rect {
    stroke: #fff;
    stroke-width: 2px;
    stroke-dasharray: 1680;
  }
}

.dialog--open {
  .dialog__overlay {
    opacity: 1;
    pointer-events: auto;
    transition-duration: 0.8s;
  }

  .dialog__content {
    opacity: 1;
    pointer-events: auto;
  }

  .dialog-inner {
    padding: 4em;
    opacity: 1;
    transition: opacity 0.85s 0.35s;
  }

  .morph-shape svg rect {
    animation: anim-dash 0.6s forwards;
  }

  h2, p {
    animation: anim-elem-1 0.7s ease-out both;
  }

  button {
    animation: anim-elem-2 0.7s ease-out both;

    &:hover {
      cursor: pointer;
    }
  }
}

@keyframes anim-dash {
  0% { stroke-dashoffset: 1680; }
  100% { stroke-dashoffset: 0; }
}

@keyframes anim-elem-1 {
  0% { opacity: 0; transform: translate3d(-150px, 0, 0); }
  100% { opacity: 1; transform: translate3d(0, 0, 0); }
}

@keyframes anim-elem-2 {
  0% { opacity: 0; transform: translate3d(150px, 0, 0); }
  100% { opacity: 1; transform: translate3d(0, 0, 0); }
}
</style>
