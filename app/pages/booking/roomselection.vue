<template>
    <div class="">
        <p>this is for room selection</p>
        <checkoutsteps :step="stepNumber"></checkoutsteps>

        <!-- content  -->
        <div class="grid grid-cols-2 w-full h-auto border">

            <!-- available rooms -->
            <div class="col-span-1 border">
                <h2 class="">Available rooms</h2>

                <!-- room list -->
                <div class="grid grid-cols-8 gap-4 border p-4" v-for="(items, index) in hotelStore.availableRooms">
                    <div class="col-span-2 border">
                        <img :src="items.image" alt="" class="">
                    </div>
                    <div class="col-span-5 border">
                        <p class="">{{ items.floor }} floor - {{ items.side }} side</p>
                        <p class="">for {{ items.count }} persons</p>
                        <p class="">for {{ items.bedsize }} persons</p>
                        <p class="">{{ items.name}}</p>
                        <div class="flex flex-row gap-4">
                            <Icon :name="item" v-for="item in items.facility"></Icon>
                        </div>
                    </div>
                    <div class="col-span-1 border">
                        <p class="">Rs.{{ items.price }}.00</p>
                        <button class="border py-1 px-4 rounded-md" @click="selecteRoom(items.id, index)">ADD</button>
                    </div>
                </div>
            </div>
            
            <!-- selected rooms -->
            <div class="col-span-1 border">
                <h2 class="">Your selections</h2>

                <!-- resevetion details -->
                <div class="">
                    <div class="flex flex-row justify-between">
                        <p class="">Check in date</p>
                        <p class="">2025.03.10</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p class="">Check out date</p>
                        <p class="">2025.03.10</p>
                    </div>
                    <div class="flex flex-row justify-betweenJ">
                        <p class="">Total number of peoples</p>
                        <p class="">6</p>
                    </div>
                </div>

                <!-- resevetion rooms -->
                <div class="flex flex-col gap-2">
                    <!-- room list -->
                    <div class="grid grid-cols-9 gap-4 border p-4" v-for="(items, index) in hotelStore.selectedRooms">
                        <div class="col-span-2 border">
                            <img :src="items.image" alt="" class="">
                        </div>
                        <div class="col-span-4 border">
                            <p class="">{{ items.floor }} floor - {{ items.side }} side</p>
                            <p class="">for {{ items.count }} persons</p>
                            <p class="">for {{ items.bedsize }} persons</p>
                            <p class="">{{ items.name}}</p>
                        </div>
                        <button class="col-span-2 border py-1 px-4 rounded-md" @click="deSelecteRoom(items.id, index)">Remove</button>
                        <div class="col-span-1 border">
                            <p class="">Rs.{{ items.price }}.00</p>
                        </div>
                    </div>

                </div>

                <NuxtLink to="/booking/payment">
                    <button class="border">Checkout</button>
                </NuxtLink>
            </div>

        </div>

    </div>
</template>

<script setup>
import { useHotelStore } from '~/store/hotelstore'

const hotelStore = useHotelStore()
const stepNumber = 0

const selecteRoom = (id, index) => {
    hotelStore.selectedRooms.push(hotelStore.availableRooms[index])
    hotelStore.availableRooms = hotelStore.availableRooms.filter((itm) => itm.id != id)
}

const deSelecteRoom = (id, index) => {
    hotelStore.availableRooms.push(hotelStore.selectedRooms[index])
    hotelStore.selectedRooms = hotelStore.selectedRooms.filter((itm) => itm.id != id)

}

onMounted(() => {
    // this place use for default selection
    hotelStore.availableRooms = hotelStore.roomDetails
})

</script> 