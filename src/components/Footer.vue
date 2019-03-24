<template>
  <footer>
    <span class="title">znajdziesz nas na:</span>
    <span class="title">partnerzy:</span>
    <article>
      <span><i class="fab fa-facebook"></i> facebook</span>
      <span><i class="fab fa-youtube"></i> youtube</span>
      <span><i class="fab fa-teamspeak"></i> teamspeak</span>
    </article>
    <article class="partners">
      <span>blazingpack.pl</span>
      <span>xlajthc.pl</span>
      <span>trustgaming</span>
      <span>pvpstar.pl</span>
    </article>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import url(https://use.fontawesome.com/releases/v5.8.1/css/all.css);
@import '@/variables.scss';

footer {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 5vmin;
}

article:not(.partners) span {
  display: inline-flex;
  align-items: center;
  color: $border-color;
  margin: 0 10px;

  i {
    margin-right: 5px;
    font-size: 28px;
    color: $text-color;
  }
}

article.partners {
  color: $border-color;

  span {
    margin: 0 5px;
  }
}

.title,
.partners {
  text-transform: uppercase;
  color: $text-color;
}
</style>
