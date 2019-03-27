<template>
  <div id="app">
    <Header @menuChange="active = !active" class="main-page__header" />
    <Navigation :active="active" class="main-page__nav" />

    <section>
      <router-view></router-view>
      <!-- <Footer class="main-page__footer" /> -->
    </section>
  </div>
</template>

<script>
import Header from './components/Header'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

export default {
  data () {
    return {
      active: true
    }
  },
  components: {
    Header,
    Navigation,
    Footer
  },
  mounted () {
    if (document.body.clientWidth < 565) {
      this.active = false;
    }
  }
}
</script>
<style lang="scss">
@import url(https://necolas.github.io/normalize.css/8.0.1/normalize.css);
@import './mixins';

body {
  background-color: $main-color;
  color: white;
  font-family: sans-serif;
  font-size: 18px;

  max-width: 100vw;
  width: 100vw;
  overflow-x: hidden;

  &,
  #app {
    height: 100vh;
  }
}

#app {
  display: grid;
  grid-template-columns: 3fr 16fr;
  grid-template-rows: $header-height 1fr;

  @include phone {
    display: flex;
    flex-direction: column;
  }

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
