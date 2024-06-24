import { createRouter, createWebHistory } from "vue-router";
import TodoView from "../views/TodoView.vue";
import PostView from "../views/PostView.vue";
import AlbumsView from "../views/AlbumsView.vue";
import AlbumPhotos from "../components/AlbumPhotos.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/todos",
      name: "todo",
      component: TodoView,
    },
    {
      path: "/post",
      name: "post",
      component: PostView,
    },
    {
      path: "/",
      redirect: "/todos",
    },
    {
      path: "/albums",
      name: "AlbumsView",
      component: AlbumsView,
    },
    {
      path: "/albums/:userId",
      name: "AlbumPhotos",
      component: AlbumPhotos,
      props: true,
    },
  ],
});

export default router;
