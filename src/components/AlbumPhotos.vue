<template>
  <div class="container">
    <div class="album-photos">
      <h1>Photos in Album: {{ albumTitle }}</h1>
      <ul class="photo-list">
        <li v-for="photo in photos" :key="photo.id" @click="openModal(photo.url, photo.title)">
          <img
            :src="photo.thumbnailUrl"
            :alt="photo.title"
            class="thumbnail-img"
          />
        </li>
      </ul>
    </div>

    <div v-if="modalImageUrl" class="modal" @click="closeModal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <img :src="modalImageUrl" :alt="modalImageTitle" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const userId = ref(route.params.userId);
const photos = ref([]);
const albumTitle = ref("");
const modalImageUrl = ref(null);
const modalImageTitle = ref("");

const fetchPhotos = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${userId.value}`);
    const data = await response.json();
    photos.value = data;
  } catch (error) {
    console.error("Failed to fetch photos:", error);
  }
};

const fetchAlbumTitle = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${userId.value}`);
    const data = await response.json();
    albumTitle.value = data.title;
  } catch (error) {
    console.error("Failed to fetch album title:", error);
  }
};

const openModal = (imageUrl, imageTitle) => {
  modalImageUrl.value = imageUrl;
  modalImageTitle.value = imageTitle;
};

const closeModal = () => {
  modalImageUrl.value = null;
};

onMounted(() => {
  fetchPhotos();
  fetchAlbumTitle();
});
</script>

<style scoped>
.container {
  margin: 7rem auto;
  width: 800px;
  background-color: #526d82;
  border-radius: 7px;
  color: #fff;
  display: flex;
  justify-content: center;
}

.album-photos {
  margin-top: 2rem;
  max-width: 800px;
  padding: 1rem 2rem;
}

h1 {
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1.5rem;
}

.photo-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}

.photo-list li {
  text-align: center;
  cursor: pointer;
}

.photo-list img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; 
}

.photo-list img:hover {
  transform: scale(1.05);
}


.modal {
  display: none; 
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  overflow: auto;
  align-items: center;
  justify-content: center;
}

.modal-content {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  position: relative;
}

.modal-content img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.close {
  color: #fff;
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
}


.modal.active {
  display: flex;
}
</style>
