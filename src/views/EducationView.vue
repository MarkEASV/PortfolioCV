<template>
    <section class="education bg-[#22303B] fixed inset-0 top-0 bottom-0 left-0 right-0 grid grid-cols-12 gap-[10px] text-white">
        <div class=" !mt-40 col-start-2 col-span-5 ">
            <h3 class="text-3xl !font-bold">Education</h3>
        </div>

        <div class="eduRow col-start-2 h-30 p-1 flex col-span-10 border-b-1 justify-between border-solid border-red-500">
            <div class="w-50 aspect-rectangle">
                <img class="w-full h-full object-contain" src="/src/assets/img/eggtt.png" alt="Egg">
            </div>

            <div class="h-full w-40 flex flex-col justify-center items-center">
                <p>2019-2022</p>
                <p class="text-lg !font-bold">HTX</p>
            </div>
            <p class="text-l flex flex-col justify-center items-center h-full w-80">Grindsted Erhversgymnasie</p>
        </div>  

        <div class="eduRow col-start-2 h-30 p-1 flex col-span-10 border-b-1 justify-between border-solid border-red-500">
            <div class="w-50 aspect-rectangle">
                <img class="w-full h-full object-contain" src="/src/assets/img/EASYDVEST.png" alt="EASV">
            </div>
            
            <div class="h-full w-50 flex flex-col sm:flex-row justify-center items-center">
                <p>2024-2026</p>
                <p class="text-lg !font-bold">MMDE</p>
            </div>
            <p class="text-l flex flex-col justify-center items-center h-full w-80">Erhvervsakademi SydVest</p>
        </div>
    </section>
</template>
<script></script>
<style>
nav a.router-link-exact-active {
    color: var(--color-text);
    border-bottom: 3px solid #FF0505;

}

@media (max-width: 600px) {
    .education {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        position: relative;
    }

    .eduRow{
        margin-top: 80px;
        height: 300px;
        
    }
}
</style>