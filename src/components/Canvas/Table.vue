<template>
  <table ref="table" v-bind:style="`height: ${table.length}rem`">
    <tr v-for="(tr, row) in table" v-bind:key="row" v-bind:style="`width: ${tr.length}rem`">
      <td
        v-for="(td, col) in tr"
        v-bind:key="`${row}-${col}`"
        v-on:click="$emit('color', { row, col, target: $event.target})"
        v-bind:style="`background-color: ${td}`"
      >
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'vCanvasTable',
  props: {
    table: {
      type: Array,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  border-collapse: collapse;
}

td {
  width: 1rem;
  height: 1rem;
  border: 1px solid #666666;
}
</style>
