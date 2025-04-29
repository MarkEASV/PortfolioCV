<template>
    <section class="compe bg-[#22303B] fixed inset-0 top-0 bottom-0 left-0 right-0 grid grid-cols-12 gap-[10px]">
        <div class="textBread !mt-40 col-start-2 col-span-5 text-white">
            <h3 class="competen text-3xl !pb-10 !font-bold">Competencies</h3>
            <p>
                I specialize in front-end web development, with hands-on experience in <span style="color: #50c878; font-style: italic;">HTML</span>, <span style="color: #50c878; font-style: italic;">CSS</span>, <span style="color: #50c878; font-style: italic;">JavaScript</span>, <span style="color: #50c878; font-style: italic;">Tailwind CSS</span>, 
                and <span style="color: #50c878; font-style: italic;">Wordpress</span> building modern, responsive websites with clean code and strong functionality. 
                <br>
                <br>
                On the creative side, 
                Im well-versed in Adobe Creative Suite, including <span style="color: #FF9A00; font-style: italic;">Illustrator</span>, <span style="color: #31A8FF; font-style: italic;">Photoshop</span>, <span style="color: #9999FF; font-style: italic;">After Effect</span>, <span style="color: #9999FF; font-style: italic;">Premiere Pro</span> and <span style="color: #D6249F; font-style: italic;">Indesign</span>, allowing me to craft 
                compelling visuals and motion graphics. I also bring UI/UX design skills to the table through tools like <span style="color: #F24E1E; font-style: italic;">Figma</span>, bridging the 
                gap between design and development for seamless user experiences.


            </p>
        </div>

        <div class="w-[380px] center !mt-40 col-start-8 col-span-4">
            <h4 class="text-1xl text-white !font-bold flex justify-center">Code</h4>
            <div class="carousel !mb-10">
                <img class="left" :src="leftImage" />
                <img class="center" :src="centerImage" />
                <img class="right" :src="rightImage" />
            </div>

            <h4 class="text-1xl w-[380px] center text-white !font-bold flex justify-center">Design Tools</h4>
            <div class="carousel2">
                <img class="left" :src="leftImage2" />
                <img class="center" :src="centerImage2" />
                <img class="right" :src="rightImage2" />
            </div>
        </div>
    </section>
</template>

<script> //inspiration from youtube video
export default {
    data() {
        return {
            imageSlideBox: [
                "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg",
                "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
                "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
                "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
                "https://www.vectorlogo.zone/logos/wordpress/wordpress-icon.svg",
                "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
            ],
            imageSlideBox2: [      
                "https://upload.wikimedia.org/wikipedia/commons/7/70/Figma.svg",
                "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
                "https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg",
                "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
                "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg"
            ],
            currentIndex: 1,
            currentIndex2: 1,
            transitioning: false,
            transitioning2: false
        };
    },
    computed: {
        leftImage() {
            const total = this.imageSlideBox.length;
            return this.imageSlideBox[(this.currentIndex - 1 + total) % total];
        },
        centerImage() {
            return this.imageSlideBox[this.currentIndex % this.imageSlideBox.length];
        },
        rightImage() {
            return this.imageSlideBox[(this.currentIndex + 1) % this.imageSlideBox.length];
        },

        leftImage2() {
            const total = this.imageSlideBox2.length;
            return this.imageSlideBox2[(this.currentIndex2 - 1 + total) % total];
        },
        centerImage2() {
            return this.imageSlideBox2[this.currentIndex2 % this.imageSlideBox2.length];
        },
        rightImage2() {
            return this.imageSlideBox2[(this.currentIndex2 + 1) % this.imageSlideBox2.length];
        }
    },
    methods: {
        nextImage() {
            if (!this.transitioning) {
                this.transitioning = true;
                this.currentIndex = (this.currentIndex + 1) % this.imageSlideBox.length;
                setTimeout(() => {
                    this.transitioning = false;
                }, 600);
            }
        },
        nextImage2() {
            if (!this.transitioning2 && this.imageSlideBox2.length > 0) {
                this.transitioning2 = true;
                this.currentIndex2 = (this.currentIndex2 + 1) % this.imageSlideBox2.length;
                setTimeout(() => {
                    this.transitioning2 = false;
                }, 600);
            }
        }
        },
    
    mounted() {
        setInterval(() => {
            this.nextImage();
            this.nextImage2();
        }, 2000);
    }
};
</script>

<style>
.carousel, .carousel2 {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    width: 380px;
    height: 100px;
    perspective: 1000px;
}

.carousel img, .carousel2 img {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    object-fit: cover;
    align-items: center;
    transition: transform 0.8s ease, opacity 0.8s ease, filter 0.8s ease;
    transform-style: preserve-3d; 
    
}

.carousel img.right, .carousel2 img.right {
    opacity: 0.5;
    transform: scale(0.8) rotateY(45deg) translateX(-10px);
    filter: blur(2px);
}

.carousel img.left, .carousel2 img.left {
    opacity: 0.5;
    transform: scale(0.8) rotateY(-45deg) translateX(10px);
    filter: blur(2px);
}

.carousel img.center, .carousel2 img.center {
    opacity: 1;
    transform: scale(1) rotateY(0deg) translateX(0);
    filter: none;
    z-index: 2;
}

nav a.router-link-exact-active {
    color: var(--color-text);
    border-bottom: 3px solid #FF0505;

}


@media (max-width: 600px) {
  
    .compe {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        position: relative;
    }


    .carousel, .carousel2 {
        width: 100%;
        height: 150px;
        

    }
    .carousel img, .carousel2 img {
        width: 100px;
        height: 100px;
    }

    .rotateBox {
        position: relative;
        top: -120px;
        padding: 1rem;
        justify-content: center;
        align-items: center;
    }

    .textBread p{
      font-size: 18px;
      font-weight: 400;
    }
}
</style>