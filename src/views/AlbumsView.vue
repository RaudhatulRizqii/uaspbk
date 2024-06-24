<template>
  <div class="container">
    <div class="albums">
      <h1>Albums</h1>

      <div class="user-select">
        <label for="user">Pilih User: </label>
        <select id="user" v-model="selectedUser" @change="filterAlbums">
          <option :value="null">All Users</option>
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.name }}
          </option>
        </select>
      </div>

      <ul class="album-list">
        <AlbumItem
          v-for="album in filteredAlbums"
          :key="album.id"
          :album="album"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import AlbumItem from "../components/AlbumItem.vue";

const albums = ref([]);
const users = ref([]);
const selectedUser = ref(null);

const fetchAlbums = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    albums.value = data;
  } catch (error) {
    console.error("Failed to fetch albums:", error);
  }
};

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};

onMounted(() => {
  fetchAlbums();
  fetchUsers();
});

const filteredAlbums = computed(() => {
  if (selectedUser.value === null) {
    return albums.value;
  } else {
    return albums.value.filter((album) => album.userId === selectedUser.value);
  }
});

const filterAlbums = () => {
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  font-weight: 800;
  padding-top: 2rem;
  text-align: center;
  color: #fff;
}
.container {
  margin: 7rem auto;
  width: 800px;
  background-color: #526d82;
  border-radius: 7px;
  color: #fff;
}
.albums {
  margin: 0 5rem;
  padding: 2rem;
}
.album-list {
  list-style: none;
  padding: 0;
}
.user-select {
  margin-bottom: 1rem;
}
.user-select label {
  font-size: 1.2rem;
}
.user-select select {
  appearance: none;
  -webkit-appearance: none;
  font-size: 1rem;
  padding: 8px;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
}
</style>
