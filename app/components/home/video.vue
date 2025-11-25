<template>
    <!-- video -->
        <div class="flex flex-col justify-center gap-6 h-[75vh] w-full">
            <div class="flex flex-col justify-center gap-12 h-[75vh] w-screen mx-auto relative">
                <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Video/Thumbnail.jpg" alt="" class="object-cover h-full w-full">
                
                <!-- extra leyer -->
                <div class="flex flex-col justify-center items-center absolute w-full h-full top-0 bottom-0 left-0 right-0 rounded-4xl bg-gradient-to-b from-white/0  to-slate-950/40">
                    <!-- play button outer layer -->
                    <div class="border-8 p-10 rounded-full animate-ping border-white/30">
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center absolute w-full h-full top-0 bottom-0 left-0 right-0 rounded-4xl">
                    <div class="w-fit h-fit" @click="videoPopup=true">
                        <Icon name="material-symbols:play-circle-rounded" class="text-9xl text-white"/>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center w-full h-full bg-black/70 border fixed top-0 bottom-0 left-0 right-0 z-100" v-if="videoPopup">
                <!-- youtube iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
                <div class="w-full">
                    <p>Lorem, ipsum dolor.</p>
                    <Icon name="material-symbols:cancel-outline-rounded flot-right" @click="videoPopup=false"></Icon>
                </div>
                <vue-plyr autoplay>
                    <div class="plyr__video-embed">
                        <iframe
                            src="https://www.youtube.com/embed/bTqVqk7FSmY?amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&autoplay=1"
                            allowfullscreen
                            allowtransparency
                            allow="autoplay"
                            class="w-[82vw] h-[94vh]"
                        ></iframe>
                    </div>
                </vue-plyr>
            </div>
        </div>
</template>

<script setup>

const videoPopup = ref(false)
</script>