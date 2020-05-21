<template>
  <article>
    <h2>About</h2>
    <p>
      This is an <strong>online</strong> to edit your own <strong>embroidery design</strong>.
    </p>
    <ul>
      <li>
        You can edit a Current Canvas or add a new one to the bottom of the page.
      </li>
      <li>
        Select a color from the Color Picker.
      </li>
      <li>
        Fill the Canvas with Pixels.
      </li>
      <li>
        Changes save automatically.
      </li>
      <li>
        Changes are available from your Browser Storage the next Time.
      </li>
    </ul>
    <button title="Show the Help" v-on:click="$parent.showHelp = false">
      x
    </button>
  </article>
</template>
<script>
export default {
  name: 'vHelp',
};
</script>
<style scoped>
article {
  display: block;
  width: 100%;
  margin: 0 1rem;
  padding: 1rem;
  text-align: left;
  background-color: rgba(255, 255, 255, .8);
}

ul {
  margin-left: 1rem;
  padding: 0;
}

li {
  margin-bottom: 1rem;
}

button {
  position: absolute;
  top: 2rem;
  right: 1rem;
}
</style>
