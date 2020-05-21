<template>
  <figure>
      <vCanvasTable
        v-bind:table="data"
        v-on:color="setColor"
      />
      <figcaption>{{ name }}</figcaption>
  </figure>
</template>

<script>
import vCanvasTable from './Canvas/Table.vue';

export default {
  name: 'vCanvas',
  components: {
    vCanvasTable,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  methods: {
    setColor({ row, col, target }) {
      if (this.$root.showEdit) {
        this.$root.canvas.items[this.id].data[row][col] = this.$root.canvas.color;
        this.$root.canvas.update();
        target.style.setProperty('background-color', this.$root.canvas.color);
      } else {
        this.$root.showEdit = true;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
figure {
  display: block;
  margin: 0 auto 1em auto;
  padding: 0;
}

figcaption {
  display: block;
  padding: .6em 0 0;
  text-transform: capitalize;
}
</style>
