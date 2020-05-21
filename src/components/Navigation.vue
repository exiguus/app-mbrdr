<template>
  <nav>
    <ul v-if="$root.$data.showEdit">
      <li>
        <input
          type="color"
          title="Choose a Color"
          v-model="$root.canvas.color"
        />
      </li>
      <li>
        <button
          title="Create New Canvas at the bottom of the page"
          v-on:click="preCreateCanvas"
        >
          Create
        </button>
        <input
          v-if="showCreateName"
          type="text"
          placeholder="Name"
          pattern="[A-Za-z]+"
          ref="name"
          v-model="name"
        />
        <button
          v-if="showCreateName"
          v-on:click="createCanvas"
        >Save</button>
        <button
          v-if="showCreateName"
          v-on:click="showCreateName = false"
        >x</button>
      </li>
      <li>
        <button title="Remove the last Canvas at the bottom of the page" v-on:click="removeCanvas">
          Remove
        </button>
      </li>
      <li>
        <button title="Restore to inicial Canvas Items" v-on:click="restoreCanvas">
          Restore
        </button>
      </li>
      <li>
        <button title="Show the Help" v-on:click="toggleHelp">
          Help
        </button>
      </li>
      <li>
        <button title="Leave the Editor Mode" v-on:click="toggleEdit">
          x
        </button>
      </li>
    </ul>
    <ul v-else>
      <li>
        <button title="Show the Help" v-on:click="toggleHelp">
          About
        </button>
      </li>
      <li>
        <button title="Enter the Editor Mode" v-on:click="toggleEdit">
          Edit
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'vNavigation',
  data() {
    return {
      showCreateName: false,
      name: '',
    };
  },
  methods: {
    toggleHelp() {
      this.$parent.showHelp = !(this.$parent.showHelp);
    },
    toggleEdit() {
      this.$root.showEdit = !(this.$root.showEdit);
    },
    preCreateCanvas() {
      this.showCreateName = true;
      this.$nextTick(() => this.$refs.name.focus());
    },
    createCanvas() {
      this.showCreateName = false;
      this.$root.canvas.add(this.name);
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    },
    removeCanvas() {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      this.$root.canvas.remove();
    },
    restoreCanvas() {
      this.$root.canvas.restore();
    },
  },
};
</script>
<style scoped>
nav {
  font-size: inherit;
  font-family: inherit;
}

ul {
  list-style: none;
}

li {
  display: inline-block;
  padding: 0 .2em;
  vertical-align: top;
}

</style>
