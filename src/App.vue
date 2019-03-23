<template>
  <div id="app">
    <Header class="main-page__header" />
    <Navigation class="main-page__nav" />

    <section>
      <Content class="main-page__content" />
      <Footer class="main-page__footer" />
    </section>
  </div>
</template>

<script>
import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'
import Footer from './components/Footer'

export default {
  components: {
    Header,
    Navigation,
    Content,
    Footer
  }
}
</script>

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
