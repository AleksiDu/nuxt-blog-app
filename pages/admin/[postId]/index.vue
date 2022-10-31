<template>
  <NuxtLayout name="admin">
    <div class="admin-post-page">
      <section class="update-form"></section>
      <AdminPostFrom :post="loadedPost" />
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: false,
});
const loadedPost = {
  author: "Alekis",
  title: "My Post",
  content: "Amazing",
  thumbnailLink:
    "https://mytechdecisions.com/wp-content/uploads/2019/10/AdobeStock_256229414.jpg",
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-from {
    width: 500px;
  }
}
</style>
