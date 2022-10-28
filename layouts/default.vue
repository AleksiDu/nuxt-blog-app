<template>
  <div>
    <NavigationTheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <NavigationTheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <slot />
  </div>
</template>

<script setup>
const displaySidenav = ref(false);
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
}
body {
  margin: 0;
}
</style>
