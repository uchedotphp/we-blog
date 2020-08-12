<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

*,
::before,
::after {
  box-sizing: border-box;
}

body {
  color: rgb(41, 41, 41);
  overflow-x: hidden;
  height: 100%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0px;
  font-family: Poppins, sans-serif;
}

p {
  line-height: 2;
  margin: 0 0 1.7em;
}

.title::after {
  content: "";
  width: 68px;
  height: 1px;
  display: block;
  margin-top: 8px;
  background: rgb(41, 41, 41);
}
</style>
