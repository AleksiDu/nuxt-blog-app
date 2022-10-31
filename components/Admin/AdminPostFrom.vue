<template>
  <form @submit.prevent="onSave">
    <UIAppControlInput v-model="editedPost.author"
      >Author Name {{ editedPost.author }}</UIAppControlInput
    >

    <UIAppControlInput v-model="editedPost.title">Title</UIAppControlInput>

    <UIAppControlInput v-model="editedPost.thumbnailLink"
      >Thumbnail Link</UIAppControlInput
    >

    <UIAppControlInput control-type="textarea" v-model="editedPost.content"
      >Content</UIAppControlInput
    >
    <UIAppButton type="submit">Save</UIAppButton>
    <UIAppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
      >Cancel
    </UIAppButton>
  </form>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    required: false,
  },
});

const editedPost = reactive(
  props.post
    ? { ...props.post }
    : {
        author: "",
        title: "",
        thumbnailLink: "",
        content: "",
      }
);

const router = useRouter();

function onSave() {
  //save the post
  console.log(editedPost);
}

function onCancel() {
  //go back
  router.push("/admin");
}
</script>
