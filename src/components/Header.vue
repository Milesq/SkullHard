<template>
  <header class="header">
    <span @click="home" class="header__logo">
      skull<span>hard.pl</span>
    </span>
    <span class="header__online-players">
      <span>aktualnie online:</span> 2594
    </span>
    <span @click="home" class="header__logo header__logo--image">
      <img src="@/assets/logo.png" alt="">
    </span>
    <span class="header__lang">
      <img
        src="https://www.countryflags.io/pl/flat/32.png"
        alt="Ikona wyboru języka">
      <span>polski</span>
    </span>
    <span class="header__admin">panel administracyjny</span>
  </header>
</template>

<script>
export default {
  methods: {
    home () {
      window.location.href = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';

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
  user-select: none;
  & > span {
    color: $logo-color;
  }

  &--image {
    $size: 200px;
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
</style>
