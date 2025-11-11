<template>
    <div class="">
        <Menubar></Menubar>
        <p>this is home page</p>
        <p class="">{{ hotelStore.count }}</p>
        <Booknow></Booknow>
        <Footer></Footer>
    </div>
</template>

<script setup>
import { useHotelStore } from '~/store/hotelstore';

const hotelStore = useHotelStore()

</script>