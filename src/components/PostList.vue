<template>
  <div class="post-list">
    <h2>Postingan dari {{ nameFormat }}</h2>
    <ul class="posts">
      <PostItem
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
        :get-user-by-id="getUserById"
      />
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import PostItem from "../components/PostItem.vue";

const props = defineProps({
  posts: {
    type: Array,
    required: true,
  },
  selectedUser: {
    type: [Number, null],
    required: true,
  },
  getUserById: {
    type: Function,
    required: true,
  },
});

const filteredPosts = computed(() => {
  if (props.selectedUser === null) {
    return props.posts;
  }
  return props.posts.filter((post) => post.userId === props.selectedUser);
});

const nameFormat = computed(() => {
  if (props.selectedUser === null) {
    return "Semua User";
  }
  const user = props.getUserById(props.selectedUser);
  return user.name;
});
</script>

<style scoped>
.post-list {
  width: 100%;
  padding: 2rem;
}

.posts {
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
}

h2 {
  font-size: 1.8rem;
  font-weight: 700;
  color: #1565c0;
  margin-bottom: 1rem;
}
</style>
