<template>
  <header>
    <vHelp v-if="showHelp" />
    <div>
      <h1 v-bind:title="description">{{ title }}</h1>
      <vNavigation />
    </div>
  </header>
</template>
<script>
import vNavigation from './Navigation.vue';
import vLoading from './Loading.vue';

export default {
  name: 'vHeader',
  components: {
    vNavigation,
    vHelp: () => ({
      component: import('./Help.vue'),
      delay: 200,
      timeout: 10000,
      loading: vLoading,
      error: vLoading,
    }),
  },
  props: {
    title: {
      type: String,
      default: 'mbrdr',
    },
    description: {
      type: String,
      default: 'Embroidery Editor',
    },
  },
  data() {
    return {
      showHelp: false,
    };
  },
};
</script>
<style scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  color: #666666;
  background-color: rgba(255, 255, 255, .5);
}

div {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  text-align: left;
}

h1 {
  margin: 0;
  padding: .2em 1.2em;
  color: #ff0000;
  font-size: inherit;
  font-family: inherit;
  line-height: 2.8em;
  background-color: #ffffff;
  border: 1px solid #666666;
}
</style>
