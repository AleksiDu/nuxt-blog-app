<template>
  <NuxtLayout name="admin">
    <div class="new-post-form">
      <AdminPostFrom />
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    widows: 500px;
  }
} ;
</style>
