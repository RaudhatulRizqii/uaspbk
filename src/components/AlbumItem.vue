<template>
  <li class="album-item">
    <div class="album-item-content">
      <h5>Title: {{ album.title }}</h5>
      <router-link :to="albumLink" class="view-album-button">
        View Album
      </router-link>
    </div>
  </li>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  album: Object,
});

const router = useRouter();

const albumLink = computed(() => `/albums/${props.album.userId}`);
</script>

<style scoped>
h5 {
  font-weight: bold;
}

.album-item {
  margin-bottom: 1rem;
  border-radius: 7px;
  padding: 10px;
  background-color: #9db2bf;
}

.album-item-content {
  margin-bottom: 1rem;
}

.view-album-button {
  display: inline-block;
  background-color: #007bff;
  color: #fff;
  padding: 8px 16px;
  font-size: 14px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s ease; 
}

.view-album-button:hover {
  background-color: #0056b3;
}

.view-album-button:focus {
  outline: none;
}
</style>
