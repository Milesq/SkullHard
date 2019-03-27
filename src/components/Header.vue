<template>
  <header class="header">
    <span @click="home" class="header__logo">
      <span class="text">skull</span><span class="red-text">hard.pl</span>
    </span>
    <span class="header__online-players text hide-on-phone">
      <span>aktualnie online:</span> 2594
    </span>
    <span @click="home" class="header__logo header__logo--image hide-on-phone">
      <img src="@/assets/logo.png" alt="">
    </span>
    <span class="header__lang hide-on-phone">
      <img
        src="https://www.countryflags.io/pl/flat/32.png"
        alt="Ikona wyboru języka">
      <span class="text">polski</span>
    </span>
    <span class="header__admin text hide-on-phone">panel administracyjny</span>
    <span
      @click="$emit('menuChange')"
      class="show-on-phone">
      <Dropdown />
    </span>
  </header>
</template>

<script>
import Dropdown from '@/components/Dropdown'

export default {
  components: {
    Dropdown
  },
  methods: {
    home () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';
@import '@/mixins.scss';

*,
*::before {
  box-sizing: border-box;
}

.header {
  border-bottom: $border-color 1px solid;

  background-color: $secondary-color;
  text-transform: uppercase;

  display: flex;
  justify-content: space-around;
  align-items: center;

  & > span:not(.header__logo) {
    cursor: pointer;
  }
}

.header__online-players {
  position: relative;
  bottom: $online-players-circle-size * .75;

  span {
    color: $online-color;

    &::before {
      content: '';
      display: block;
      height: $online-players-circle-size;
      width: $online-players-circle-size;
      background-color: currentColor;
      border-radius: 50%;

      position: relative;
      top: 14px;
      right: 13px;
    }
  }
}

.header__lang {
  display: flex;
  align-items: center;

  * {
    display: inline-block;
  }

  img {
    margin-right: 5px;
  }
}

.header__logo {
  cursor: pointer;
  user-select: none;
  & > .red-text {
    color: $border-color;
  }

  @media (max-width: $phone) {
    font-size: 2em;
    font-weight: bold;
  }

  &--image {
    $size: 150px;
    height: $size;
    width: $size;

    img {
      max-width: 100%;
      max-height: 100%;

      position: relative;
      top: $size / 2 * (.75);
    }
  }
}

.text {
  color: $text-color;
}
</style>
