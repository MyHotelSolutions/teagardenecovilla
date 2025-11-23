<template>
    <div class="flex flex-col bg-primary text-white">
        <!-- level one -->
        <div class="flex flex-row justify-between items-center max-w-7xl px-4 w-full h-auto py-4 mx-auto bg-[var(--color-primary)]">
            <h1 class="text-2xl font-[Sora] font-extrabold whitespace-nowrap cursor-default"
                @click="router.push('/')">Tea garden eco villas</h1>
            <div class="block md:hidden" @click="menuOpen = true">
                <icon name="mdi-light:menu" class="" size="40"></icon>
            </div>
            <div class="hidden md:flex flex-row items-center">
                <NuxtLink to="/">
                    <button
                        class="border border-[#F9F8F3] bg-[#F9F8F3] text-[#C1AA7F] font-bold text-base font-[Sora] py-2 px-5 rounded-r-sm hover:bg-[#C1AA7F] hover:text-[#F9F8F3] cursor-pointer">Book now</button>
                </NuxtLink>
            </div>
        </div>

        <!-- mobile menu bar -->
        <div class="flex flex-col bg-[#f3eee5] fixed top-2 bottom-2 left-2 right-2 z-100 rounded-2xl border-4 border-[#C1AA7F]"
            v-if="menuOpen">
            <div class="flex flex-col justify-end items-end py-6 px-8" @click="menuOpen = false">
                <icon name="si:close-circle-line" size="40" class="text-[#C1AA7F]"></icon>
            </div>
            <div class="w-full h-full flex flex-col justify-center">
                <ul class="flex flex-col gap-10 text-[#C1AA7F] font-[Sora] text-4xl font-bold text-center">
                    <li class="cursor-pointer" @click="router.push('/')">Home</li>
                    <li class="cursor-pointer" @click="router.push('/')">Gallery</li>
                    <li class="cursor-pointer" @click="router.push('/')">Events</li>
                    <li class="cursor-pointer" @click="router.push('/')">Place to visit</li>
                    <li class="cursor-pointer" @click="router.push('/')">About us</li>
                    <li class="cursor-pointer" @click="router.push('/')">Contact us</li>
                </ul>
            </div>
            <div class="flex flex-col items-center justify-center gap-4 text-black py-5">
                <h4 class="font-[Sora] font-light text-base text-[#C1AA7F]">Follow us on</h4>
                <div class="flex flex-row gap-4 items-center">
                    <div class="flex flex-col justify-center items-center" v-for="value in hotelStore.socialLinks">
                        <icon :name="value.icon" size="30" class=" text-[#C1AA7F]"></icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useHotelStore } from '~/store/hotelstore';
import { useWindowSize } from '#imports';

const hotelStore = useHotelStore()
const { width, height } = useWindowSize()

const router = useRouter();

const menuOpen = ref(false);

watch(width,(newVal, oldVal) => {
    if(newVal >= 768 && menuOpen.value == true){
        menuOpen.value = false
    }
})

</script>