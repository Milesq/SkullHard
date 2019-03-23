<template>
  <main>
    <article class="about">
      o nas <br>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore
      et dolore magna aliqua. Libero justo laoreet sit amet.
      Malesuada bibendum arcu vitae elementum curabitur vitae
      nunc sed velit. Adipiscing commodo elit at imperdiet dui
      accumsan sit. Sed velit dignissim sodales
      ut eu sem integer. Ac turpis egestas maecenas pharetra
      convallis posuere morbi. Libero volutpat sed cras ornare
      arcu dui vivamus. Felis eget nunc lobortis mattis aliquam.
      Mus mauris vitae ultricies leo. Nisl pretium fusce id velit ut.
      Ut tristique et egestas quis ipsum. Platea dictumst vestibulum
      rhoncus est pellentesque elit ullamcorper. Felis eget velit
      aliquet sagittis id consectetur. Viverra nibh cras pulvinar mattis nunc.
      Aenean euismod elementum nisi quis eleifend quam. Ipsum dolor sit amet
      consectetur adipiscing elit ut aliquam. Velit laoreet id donec ultrices
      tincidunt arcu non sodales neque.
    </article>
    <article class="some-else">
      <img src="https://placeimg.com/400/250/any">
    </article>
  </main>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
main {
  display: flex;
  justify-content: space-around;
  padding-top: 10%;
}

.about {
  text-align: center;

  &::first-line {
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 800;
  }
}

article {
  width: 40%;
  display: inline-block;
}
</style>
