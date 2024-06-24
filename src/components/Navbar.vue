<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="navbar">
      <q-toolbar-title>
        <a href="#" class="navbar-logo">Raudhatul Rizqi</a>
      </q-toolbar-title>

      <div class="navbar-links">
        <router-link to="/todos" class="nav-link">Todo</router-link>
        <router-link to="/post" class="nav-link">Post</router-link>
        <router-link to="/albums" class="nav-link">Album</router-link>
      </div>
    </q-header>
  </q-layout>
</template>

<style scoped>
.navbar {
  background-color: #3f51b5; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.navbar-logo {
  font-size: 2rem;
  color: #f5f5f5;
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.navbar-logo:hover {
  color: #84d8ff;
}

.navbar-links {
  display: flex;
}

.nav-link {
  color: #fff; 
  font-size: 1.4rem;
  text-decoration: none;
  margin-left: 2rem;
  padding: 1rem 0.5rem;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #c0c6ff; 
  transition: width 0.3s;
}

.nav-link:hover {
  color: #f5f5f5;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-link:hover::before {
  width: 100%;
}
</style>
