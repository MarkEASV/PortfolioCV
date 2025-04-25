<template>
  <section class="about bg-[#22303B] fixed inset-0 top-0 bottom-0 left-0 right-0 grid grid-cols-12 gap-[10px]">
    <div class="textBread !mt-40 col-start-2 col-span-5 text-white">
      <h3 class="text-3xl !pb-10 !font-bold">About me</h3>
      <p>
        Hello! My name is Mark, and I am passionate about creating innovative and user-friendly web applications. 
        With a strong background in software development and a keen eye for design, I strive to deliver high-quality 
        solutions that meet the needs of users and businesses alike. Over the years, I have honed my skills in various 
        programming languages and frameworks, including Vue.js, which I particularly enjoy for its simplicity and 
        flexibility. When I'm not coding, I love exploring new technologies, learning about emerging trends in the tech 
        industry, and sharing knowledge with the developer community. Thank you for visiting this page, and I look 
        forward to connecting with you!
      </p>
    </div>

    <div class="videoSec !mt-60 h-auto col-start-8 col-span-4 ">
      <video controls class="border-3 border-solid border-red-500">
        <source
          src="/src/assets/img/CvMarkVideo.mp4" type="video/mp4" alt="cvVideo">
        />
    </video>
    </div>
  </section>
  
</template> 

<script>
</script>

<style>
nav a.router-link-exact-active {
    color: var(--color-text);
    border-bottom: 3px solid #FF0505;

}

  @media (max-width: 600px) {
    .about {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        position: relative;
    }

    .videoSec {
      position: relative;
      top: -180px;
    }

    .textBread p{
      font-size: 18px;
      font-weight: 400;
    }

  }
</style>
