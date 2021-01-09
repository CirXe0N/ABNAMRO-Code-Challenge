<template>
  <div id="app">
    <nav>
      <img class="logo" alt="ABN AMRO Logo" src=./assets/logo.png>
      <div class="title">Coding Challenge</div>
    </nav>
    <NodesComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NodesComponent from './components/Nodes.vue';

@Component({
  components: {
    NodesComponent,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

html, body, #app {
  height: 100%;
}

body {
  margin: 0;
  background-color: rgb(249, 249, 249);
}

#app {
  font-family: 'Roboto', Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  display: flex;
  width: 100%;
  height: 75px;
  background-color: #fff;
  border-bottom: solid 5px;
  border-image-slice: 1;
  border-image-source: linear-gradient(-296deg, #005e5d, #00857a);
  align-items: center;
  justify-content: space-between;

  .logo {
    height: 2.5em;
    margin-left: 20px;
  }

  .title {
    display: inline-block;
    margin-right: 20px;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    text-transform: uppercase;
  }
}
</style>
