<template>
  <footer>
    <span class="title">znajdziesz nas na:</span>
    <span class="title hide-on-phone">partnerzy:</span>
    <article>
      <span><i class="fab fa-facebook"></i> facebook</span>
      <span><i class="fab fa-youtube"></i> youtube</span>
      <span><i class="fab fa-teamspeak"></i> teamspeak</span>
    </article>

    <span class="title show-on-phone">partnerzy:</span>
    <article class="partners">
      <a href="http://blazingpack.pl" target="blank">blazingpack.pl</a>
      <a href="http://xlajthc.pl" target="blank">xlajthc.pl</a>
      <a href="truestgaming.pl" target="blank">trustgaming</a>
      <a href="http://pvpstar.pl" target="blank">pvpstar.pl</a>
    </article>
  </footer>
</template>

<style lang="scss" scoped>
@import url(https://use.fontawesome.com/releases/v5.8.1/css/all.css);
@import '@/mixins.scss';

footer {
  @include not-phone {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 5vmin;
  }

  text-align: center;

  @include phone {
    border-top: $border-color 1px solid;
    padding-top: 10px;
    & > * {
      margin-bottom: 5%;
    }
  }
}

article:not(.partners) {
  display: flex;
  align-items: center;
  justify-content: center;

  @include phone {
    flex-direction: column;
  }

  span {
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
}

article.partners {
  color: $border-color;
  @include phone {
    display: flex;
    flex-direction: column;
  }

  a {
    margin: 2px 5px;
    color: $border-color;
  }
}

.title,
.partners {
  text-transform: uppercase;
  color: $text-color;
}
</style>
