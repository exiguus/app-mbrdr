<template>
  <div ref="loading">
    <vSpinner v-bind:styleSpinner="styleSpinner"></vSpinner>
  </div>
</template>

<script>
import vSpinner from './Spinner.vue';

export default {
  name: 'Loading',
  components: {
    vSpinner,
  },
  methods: {
    styleSpinner() {
      return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'block',
        'margin-top': '-1em',
        'margin-left': '-1em',
        'font-size': '12px',
      };
    },
  },
};
</script>
<style scoped>
div {
  position: relative;
  display: block;
  width: 100%;
  max-width: 100vw;
  height: 100%;
  min-height: 16rem;
  margin: .5rem;
  background-color: #eeeeee;
  border: 1px solid #333333;
}
</style>
