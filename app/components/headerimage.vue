<template>
    <div class="h-[40vh] sm:h-[44vh] md:h-[48vh] lg:h-[44vh] w-full relative">
        <NuxtImg 
            provider="imagekit" 
            :src="imagestore.restaurant[6]" 
            :quality="qualityCal" 
            preset="cover" 
            class="w-full h-full object-cover" />

        <div class="flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-4 lg:gap-4 absolute top-0 bottom-0 left-0 right-0 bg-black/40 md:bg-black/50 px-4 sm:px-6 md:px-8">
            <h1 class="font-serif text-2xl sm:text-3xl md:text-3xl text-white leading-tight font-black text-center">
                {{ title }}
            </h1>
            <p class="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed text-center w-[80%] sm:w-[60%] md:w-[50%] lg:w-[50%] xl:w-[30%]">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { useImageStore } from '@/store/imagestore';

defineProps({
  title: String,
  description: String
})

const imagestore = useImageStore()

</script>