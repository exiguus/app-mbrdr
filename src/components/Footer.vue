<template>
  <footer>
    <ul>
      <li>
        <a href="https://github.com/exiguus/app-mbrdr" title="Github Repository">source</a>
      </li>
    </ul>
  </footer>
</template>
<script>
export default {
  name: 'vFooter',
};
</script>
<style scoped>
footer {
  margin-bottom: 3rem;
  padding: 1rem;
  font-size: .8rem;
  text-align: center;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a,
a:visited {
  color: inherit;
  text-decoration: none;
}

a:hover,
a:active,
a:focus {
  text-decoration: underline;
}
</style>
