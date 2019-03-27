<template>
  <div class="container">
    <div class="icon"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/variables.scss';
$h: 3px;
$padding: 10px;

.container {
  height: ($h * 3) + ($padding * 2);
  width: 30px;
  cursor: pointer;
  position: relative;
  top: $padding + $h;
}

.icon {
  z-index: 10;
  width: 30px;
  height: $h;
  background-color: $text-color;
  box-shadow:
    0 #{$padding} $text-color,
    0 -#{$padding} $text-color;
}
</style>
