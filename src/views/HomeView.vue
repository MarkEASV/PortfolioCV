<template setup>
    <section>
        <div class="heroContainer">  
            <video class="h-full w-full object-cover -z-10 fixed left-0 top-0" loop autoplay playsinline muted preload>
                <source src="/src/assets/img/qwedrf.mp4" type="video/mp4" alt="videoWave" label="720p"/>
            </video>
        
            
            <div class="textHead col-span-10 !mt-55 col-start-3 text-white">
                <h1 class="rollText text-4xl !font-bold">Achita (Mark) Songkhroraj</h1>
                <p class="text-2xl pt-5">Multimediedesigner</p>
            </div>

            <div class="redB h-20 w-20 col-start-2 z-20 relative flex -top-35">
                <div class="h-20 w-1 bg-red-500"></div>
                <div class="h-1 w-20 bg-red-500"></div>
            </div>
           

            <div class="redB2 h-20 w-20 z-20 col-start-8 relative flex -top-15 rotate-90">
                <div class="h-1 w-20 bg-red-500"></div>
                <div class="h-20 w-1 bg-red-500"></div>
            </div>
            <div class="imgBox w-[200px] h-[200px] relative -top-45 left-20">
                <img src="/src/assets/img/CVmarkRen.jpg" alt="MarkPhoto" class="imgMe object-cover border-3 border-solid border-red-500">
            </div>
            
                       
        </div>       
    </section>
</template>

<script setup>
/* import anime from 'animejs'
import { onMounted } from 'vue'

onMounted(() => {
  anime({
    targets: '.rollText', 
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1000,
    easing: 'easeOutExpo'
  })
}) */
</script> 


<style>
    .heroContainer {
        position: relative;
        height: 500px;
        width: 100%;
        overflow: hidden;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        gap: 10px
    }

    nav a.router-link-exact-active {
    color: var(--color-text);
    border-bottom: 3px solid #FF0505;
    }

    @media (max-width: 600px) {
    
    .heroContainer {
        height: 600px;
    }
    .textHead{
        grid-column: 2 / span 10;
        position: relative;
        top: -50px;
    }

    .imgBox{
        position: relative;
        left: 90px;
        top: 100px;
    }

    .redB {
        position: relative;
        left: -10px;
        top: -250px;
    }

    .redB2 {
        position: relative;
        left: 160px;
        top: 100px;
    }

    .imgMe {
        position: relative;
        left: -70px;
        top: -140px;
        height: 160px;
        width: 100px;
    }

    .textHead {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        position: relative;
    }
    }
</style>