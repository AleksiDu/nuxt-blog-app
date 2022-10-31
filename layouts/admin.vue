<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
console.log("admin");
</script>

<style>
html {
  font-family: "Open Sans", sans-serif;
}
body {
  margin: 0;
}
</style>
