<template>
  <li class="post-item">
    <h4 class="post-title">{{ post.title }}</h4>
    <p class="post-body">{{ post.body }}</p>
    <p class="post-author">Ditulis oleh: {{ userName }}</p>
  </li>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  getUserById: {
    type: Function,
    required: true,
  },
});

const userName = computed(() => {
  const user = props.getUserById(props.post.userId);
  return user.name;
});
</script>

<style scoped>
.post-item {
  margin-bottom: 1.5rem;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: #f3f8fd;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
}

.post-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #1565c0; 
  margin-bottom: 0.5rem;
}

.post-body {
  font-size: 1rem;
  line-height: 1.5;
  color: #333;
}

.post-author {
  font-weight: bold;
  color: #1a237e; 
  margin-top: 0.8rem;
}
</style>
