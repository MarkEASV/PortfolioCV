<template>
  <header class="nav grid grid-cols-12 items-center px-4 py-2">
    <nav class="col-span-10 col-start-1 flex items-center w-full">
      <a href="/" class="logoMobile">
        <img class="logo" alt="marklogo" src="/src/assets/img/LOGO_1.png" />
      </a>
      <div class="router-links ml-4 flex space-x-4">
        <RouterLink to="/" class="text-white">Home</RouterLink>
        <RouterLink to="/about" class="text-white">About</RouterLink>
        <RouterLink to="/compentencies" class="text-white">Competencies</RouterLink>
        <RouterLink to="/projects" class="text-white">Projects</RouterLink>
        <RouterLink to="/education" class="text-white">Education</RouterLink>
        <RouterLink to="/contact" class="text-white">Contact</RouterLink>
      </div>
    </nav>
  </header>
</template>

<script setup>
    import { RouterLink } from 'vue-router'
</script>


<style>

.nav {
  list-style-type: none;
  overflow: hidden;
  top: 0;
  background-color: #22303B;
  width: 100%;
  z-index: 300;
  position: fixed;
  object-fit: cover;
  height: 80px;
}


.logo {
  width: 40px;
  height: 80px;
  object-fit: contain;
}

.router-links {
  display: flex;
  gap: 1rem;
  height: 40px;
  font-size: 20px;
  padding: 10px 0 -20px 10px;
  
}
  @media (max-width: 600px) {
  .router-links {
    overflow-x: auto;
    white-space: nowrap;
    flex-wrap: nowrap;
  }

  .router-links::-webkit-scrollbar {
    display: none; 
  }

  .logoMobile {
    display: none;
  }


}

</style>