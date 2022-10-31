<template>
  <div class="admin-page">
    <NuxtLayout name="admin">
      <section class="new-post">
        <UIAppButton @click="redirect">Create Post</UIAppButton>
      </section>
      <section class="existing-posts">
        <h1>Existing Posts</h1>
        <PostList isAdmin />
      </section>
    </NuxtLayout>
  </div>
</template>

<script setup>
const router = useRouter();
definePageMeta({
  layout: false,
});

function redirect() {
  router.push("/admin/new-post");
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>
