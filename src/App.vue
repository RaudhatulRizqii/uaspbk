<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";
import { createRouter, createWebHistory } from "vue-router";
import TodoView from "./views/TodoView.vue";
import PostView from "./views/PostView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TodoView },
    { path: "/post", component: PostView },
  ],
});

defineComponent({
  components: {
    Navbar,
  },
  router,
});
</script>
