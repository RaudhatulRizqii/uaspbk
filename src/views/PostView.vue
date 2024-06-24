<template>
  <div class="container">
    <h1>Fitur Posting</h1>
    <div class="container-post">
      <div class="user-select">
        <label for="user">Pilih User:</label>
        <select id="user" v-model="selectedUser">
          <option :value="null">Semua User</option>
          <option v-for="user in users" :key="user.id" :value="user.id">
            {{ user.name }}
          </option>
        </select>
      </div>
      <div class="post-list">
        <h5>Postingan dari {{ nameFormat }}</h5>
        <ul class="posts-grid">
          <PostItem
            v-for="post in filteredPosts"
            :key="post.id"
            :post="post"
            :getUserById="getUserById"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import PostItem from "../components/PostItem.vue";

const users = ref([]);
const selectedUser = ref(null);
const posts = ref([]);

const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    users.value = data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
  }
};

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    posts.value = data;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
};

const filteredPosts = computed(() => {
  if (selectedUser.value === null) {
    return posts.value;
  }
  return posts.value.filter((post) => post.userId === selectedUser.value);
});

onMounted(() => {
  fetchUsers();
  fetchPosts();
});

const getUserById = (userId) => {
  return (
    users.value.find((user) => user.id === userId) || {
      name: "User Tidak Ditemukan",
    }
  );
};

const nameFormat = computed(() => {
  if (selectedUser.value === null) {
    return "Semua User";
  }
  const user = getUserById(selectedUser.value);
  return user.name;
});
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  font-weight: 800;
  padding-top: 2rem;
  text-align: center;
  color: #1565c0; /* Biru gelap */
}

.container {
  margin: 5rem auto;
  width: 800px;
  background-color: #f3f8fd; /* Biru muda */
  border-radius: 10px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.container-post {
  margin-top: 2rem;
}

.user-select {
  margin-bottom: 1.5rem;
}

label {
  font-size: 1.2rem;
  color: #1a237e; 
}

select {
  appearance: none;
  -webkit-appearance: none;
  font-size: 1rem;
  padding: 8px;
  background-color: #ffffff; 
  border: 1px solid #caced1; 
  border-radius: 5px;
  color: #333;
  cursor: pointer;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}

.posts-grid li {
  background-color: #ffffff; 
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

h5 {
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a237e; 
}
</style>
