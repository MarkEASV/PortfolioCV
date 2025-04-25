<template>
    <nav class=" top-0 fixed"></nav>
  
    <section class="project bg-[#22303B] relative grid grid-cols-12 gap-[10px]">
      <div class="!mt-40 col-start-2 text-white">
        <h3 class="text-3xl !pb-10 !font-bold">Projects</h3>
      </div>
  
      <div class="cardsPro col-start-2 col-span-10 h-auto pb-50 grid grid-cols-4 gap-4 overflow-visible">
        <div class="card">
          <img src="/src/assets/img/LOGO_1.png" alt="logo" class="media"/>
        </div>
        <div class="card">
          <img src="/src/assets/img/MiniMe.png" alt="minime" class="media"/>
        </div>
        <div class="card">
          <img src="/src/assets/img/sdfgh.png" alt="brocoli" class="media"/>
        </div>
        <div class="card">
          <img src="/src/assets/img/Plastic_poster.png" alt="plasticproject" class="media" />
        </div>
        <div class="card">
          <img src="/src/assets/img/infografikfr.png" alt="plasticgrafik" class="media" />
        </div>
        <div class="card">
          <img src="/src/assets/img/rollupLogo2.png" alt="projectBanner" class="media" />
        </div>
        <div class="card">
          <video src="/src/assets/img/qwedrf.mp4" class="wavesHolo" autoplay loop muted></video>
        </div>
      </div>
    </section>
  </template>
  
  <style>
  nav a.router-link-exact-active {
    color: var(--color-text);
    border-bottom: 3px solid #FF0505;
  }
  
  .card {
    background-color: #1A252F;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 12rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease;
  }
  .card:hover {
    transform: scale(1.1);
    z-index: 20;
  }
  
  .media {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
  
  @media (max-width: 600px) {
    .project {
      display: flex;
      flex-direction: column;
      padding: 1rem;
    }
    .cardsPro {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
  }
  </style>