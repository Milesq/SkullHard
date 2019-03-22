<template>
  <div id="app">
    <section>
      <Header />
    </section>

    <section>
      <Navigation />
      <section>
        <Content />
        <Footer />
      </section>
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
