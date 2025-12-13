<template>
    <!-- video section -->
    <div class="flex flex-col justify-center gap-4 sm:gap-6 h-[50vh] sm:h-[60vh] md:h-[75vh] w-full">
        <div class="flex flex-col justify-center gap-8 sm:gap-12 h-[50vh] sm:h-[60vh] md:h-[75vh] w-full mx-auto relative overflow-hidden">
            <!-- <img 
                src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Video/Thumbnail.jpg" 
                alt="Video thumbnail" 
                class="object-cover h-full w-full"
            > -->
            <NuxtImg 
                provider="imagekit" 
                :src="imagestore.common[0]" 
                :quality="90" 
                preset="cover"
                sizes="100vw sm:100vw" 
                class="object-cover h-full w-full"/>
            
            <!-- gradient overlay -->
            <div class="flex flex-col justify-center items-center absolute w-full h-full top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-white/0 to-slate-950/40">
                <!-- animated ping effect -->
                <div class="border-4 sm:border-6 md:border-8 p-6 sm:p-8 md:p-10 rounded-full animate-ping border-white/30 absolute">
                </div>
                
                <!-- play button -->
                <div class="w-fit h-fit cursor-pointer transform hover:scale-105 transition-transform duration-200" @click="videoPopup = true">
                    <Icon name="material-symbols:play-circle-rounded" class="text-6xl sm:text-7xl md:text-9xl text-white"/>
                </div>
            </div>
        </div>

        <!-- video popup modal -->
        <div class="flex flex-col justify-center items-center w-full h-full bg-black/90 fixed top-0 bottom-0 left-0 right-0 z-50 p-4 sm:p-6" v-if="videoPopup">
            <div class="w-full max-w-6xl mx-auto relative">
                <!-- close button -->
                <div class="flex justify-end mb-3 sm:mb-4">
                    <button 
                        @click="videoPopup = false" 
                        class="text-white hover:text-gray-300 transition-colors duration-200 bg-black/50 rounded-full p-2"
                        aria-label="Close video"
                    >
                        <Icon name="material-symbols:cancel-outline-rounded" class="text-2xl sm:text-3xl"/>
                    </button>
                </div>
                
                <!-- video player -->
                <vue-plyr autoplay>
                    <div class="plyr__video-embed">
                        <iframe
                            src="https://www.youtube.com/embed/qxN_dQk0dzI?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&autoplay=1"
                            allowfullscreen
                            allowtransparency
                            allow="autoplay"
                            class="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] rounded-lg sm:rounded-xl"
                            title="Accommodation video tour"
                        ></iframe>
                    </div>
                </vue-plyr>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useImageStore } from '@/store/imagestore';

const videoPopup = ref(false)
const imagestore = useImageStore()

</script>