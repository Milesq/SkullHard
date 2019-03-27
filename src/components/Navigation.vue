<template>
    <nav :class="['nav', {
      active
    }]">
        <article>
          <router-link to="/">
            <span class="menu__icon">
              <img src="@/assets/home.svg" alt="strona główna">
            </span>
            <span class="menu__content">strona główna</span>
          </router-link>
        </article>
        <article>
          <router-link to="/rankings">
            <span class="menu__icon">
              <img src="@/assets/table-chart.svg" alt="rankingi użytkowników">
            </span>
            <span class="menu__content">rankingi</span>
          </router-link>
        </article>
        <article>
          <router-link to="/shop">
            <span class="menu__icon">
              <img src="@/assets/shop.svg" alt="Sklep z przedmiotami">
            </span>
            <span class="menu__content">sklep</span>
          </router-link>
        </article>
        <article>
          <router-link to="/plan">
            <span class="menu__icon">
              <img src="@/assets/notepad.svg" alt="plan edycji">
            </span>
            <span class="menu__content">plan edycji</span>
          </router-link>
        </article>
        <article>
          <router-link to="/events">
            <span class="menu__icon">
              <img src="@/assets/event.svg" alt="Wydarzenia dotyczące serwera">
            </span>
            <span class="menu__content">eventy</span>
          </router-link>
        </article>
        <article>
          <router-link to="/films">
            <span class="menu__icon">
              <img src="@/assets/movie.svg" alt="filmy z serwera">
            </span>
            <span class="menu__content">filmy z serwera</span>
          </router-link>
        </article>
        <article>
          <router-link to="/regulations">
            <span class="menu__icon">
              <img src="@/assets/settings.svg" alt="regulamin serwera">
            </span>
            <span class="menu__content">regulamin</span>
          </router-link>
        </article>
        <article>
          <router-link to="/contact">
            <span class="menu__icon">
              <img src="@/assets/contact.svg" alt="kontakt z administratorami">
            </span>
            <span class="menu__content">kontakt</span>
          </router-link>
        </article>
        <article>
          <router-link to="/sectors">
            <span class="menu__icon">
              <img src="@/assets/table-chart.svg" alt="sektory">
            </span>
            <span class="menu__content">podgląd sektorów</span>
          </router-link>
        </article>
        <article>
          <router-link to="/bans">
            <span class="menu__icon">
              <img src="@/assets/ban.svg" alt="Bany">
            </span>
            <span class="menu__content">bany</span>
          </router-link>
        </article>
        <article>
          <router-link to="/changes">
            <span class="menu__icon">
              <img src="@/assets/history.svg" alt="Ikonka historii zmian">
            </span>
            <span class="menu__content">zmiany</span>
          </router-link>
        </article>
    </nav>
</template>

<script>
export default {
  props: {
    active: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '@/mixins.scss';

a {
  color: $text-color;
  text-decoration: none;

  &:hover {
    color: $text-color + #222;
  }
}

.nav {
  color: $text-color;
  background-color: $nav-color;
  padding-left: 5%;
  padding-top: 20px;
  border-right: $border-color 1px solid;
  font-size: 17px;
  transition: 1s all ease-in;

  @include phone {
    display: none;
  }

  &.active {
    display: block;
  }

  article {
    margin: $margin-between-opts 0;
    text-transform: uppercase;
    display: flex;
    align-items: center;
  }
}

.menu__content {
  border-left: .6px solid $icon-color;
  padding-left: 13px;
  margin-left: 10px;
}
</style>
