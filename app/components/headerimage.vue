<template>
    <div class="h-[44vh] w-full relative">
        <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Restaurant%20/DSC00577%20(2).jpg" alt="" class="w-full h-full object-cover">
        <div class="flex flex-col justify-center items-center gap-4 absolute top-0 bottom-0 left-0 right-0 bg-black/50">
            <h1 class="font-serif text-5xl md:text-4xl text-white/80 leading-tight font-black">{{ title }}</h1>
            <p class="text-white/70 text-lg leading-relaxed text-center w-[50%]">{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>