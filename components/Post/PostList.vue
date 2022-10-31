<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://cdn.thetealmango.com/wp-content/uploads/2021/08/tech-Companies-pic.jpg"
      title="Hello there!"
      previewText="This my first post!"
    />
    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://cdn.thetealmango.com/wp-content/uploads/2021/08/tech-Companies-pic.jpg"
      title="Hello there - the second time!"
      previewText="This my second post!"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://cdn.thetealmango.com/wp-content/uploads/2021/08/tech-Companies-pic.jpg"
      title="Hello!"
      previewText="This my third post!"
    />
  </section>
</template>

<script setup>
const props = defineProps({
  isAdmin: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
