<template>
    <section class="contact bg-[#22303B] fixed inset-0 top-0 bottom-0 left-0 right-0 overflow-hidden grid grid-cols-12 gap-[10px]">
        <div class=" !mt-40 col-start-2 col-span-7 text-white">
            <h3 class="text-3xl !pb-10 !font-bold">Reach me on:</h3>
            <ul class="contactText">
                <li class="li"><svg class="w-10 h-10 text-red-500 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/></svg><p>+45 42747546</p></li>
                <li class="li"><svg class="w-10 h-10 text-red-500 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/></svg><p>achi0009@gmail.com</p></li>
                <li class="li"><svg class="w-10 h-10 text-red-500 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd"/><path d="M7.2 8.809H4V19.5h3.2V8.809Z"/></svg><a class="text-blue-500 underline " href="https://www.linkedin.com/in/achita-songkhroraj-4861b1358/">Achita Songkhroraj</a></li>
                <li class="li"><svg class="w-10 h-10 text-red-500 dark:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17v-5h1.5a1.5 1.5 0 1 1 0 3H5m12 2v-5h2m-2 3h2M5 10V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1v6M5 19v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1M10 3v4a1 1 0 0 1-1 1H5m6 4v5h1.375A1.627 1.627 0 0 0 14 15.375v-1.75A1.627 1.627 0 0 0 12.375 12H11Z"/></svg><a href="https://drive.google.com/file/d/1mAMsy8wsK2oeyqDh62Jla6mkjyvIOh_U/view?usp=drive_link" taget="_blank" rel="noopener noreferrer" download class="text-blue-500 underline">Download CV</a></li> 
            </ul>   
        </div>
    </section>
</template>
<script></script>
<style>
.li{
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    
}

nav a.router-link-exact-active {
    color: var(--color-text);
    border-bottom: 3px solid #FF0505;

}

@media (max-width: 600px) {
    .contact {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        position: relative;
        height: 900px;
        
    }
      
    .contactText p, a{
      font-size: 20px;
      font-weight: 400;
    }
    }
</style>