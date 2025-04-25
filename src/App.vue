<template>
  <header class="">
    <div class="wrapper">
      <NavBar />
    </div>
  </header>

  <RouterView />
</template>


<script setup>
import { ref, provide } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from './components/NavBar.vue';

const searchQuery = ref('');
provide('searchQuery', searchQuery); // Provide the state globally

</script>

<style >
/* header {
  line-height: 1.5;
  max-height: 100vh;
  justify-content: start;
} */


nav {
  list-style-type: none;
  overflow: hidden;
  top: 0;
  background-color: #22303B;
  width: 100%;
  z-index: 1000;
  display: flex;
  position: fixed;
  
}

nav a {
  padding: 0 30px 0 30px;
  color: #ffffff;
  text-decoration: none;
  padding-bottom: 5px;
  margin-right: 20px;
  display: inline-block;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 600px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-end;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
