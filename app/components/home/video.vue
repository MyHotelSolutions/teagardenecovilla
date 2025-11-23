<template>
    <!-- video -->
        <div class="flex flex-col justify-center gap-25 min-h-screen">
            <div class="flex flex-col justify-center gap-12 h-[75vh] w-[75vw] mx-auto relative">
                <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Video/Thumbnail.jpg" alt="" class="object-cover h-full w-full rounded-4xl">
                
                <!-- extra leyer -->
                <div class="flex flex-col justify-center items-center absolute w-full h-full top-0 bottom-0 left-0 right-0 rounded-4xl bg-gradient-to-b from-white/0  to-slate-950/40">
                    <!-- play button outer layer -->
                    <div class="border-6 p-10 rounded-full animate-ping border-white/30">
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center absolute w-full h-full top-0 bottom-0 left-0 right-0 rounded-4xl">
                    <div class="w-fit h-fit" @click="videoPopup=true">
                        <Icon name="material-symbols:play-circle-outline-rounded" class="text-9xl text-white"/>
                    </div>
                </div>
            </div>
            <div class="w-full h-full bg-black/70 border fixed top-0 bottom-0 left-0 right-0 z-100" v-if="videoPopup"></div>
        </div>
</template>

<script setup>

const videoPopup = ref(false)

</script>