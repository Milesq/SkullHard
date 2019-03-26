<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import url(https://necolas.github.io/normalize.css/8.0.1/normalize.css);
@import './variables';

body {
  background-color: $main-color;
  color: white;
  font-family: sans-serif;
  font-size: 18px;

  &,
  #app {
    height: 100vh;
  }
}

#app {
  display: grid;
  grid-template-columns: 3fr 16fr;
  grid-template-rows: $header-height 1fr;

  .main-page__header {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .main-page__footer {
    position: absolute;
    bottom: 10vh;
    width: 100% - (100 / 6);
    height: 2em;
  }
}
</style>
