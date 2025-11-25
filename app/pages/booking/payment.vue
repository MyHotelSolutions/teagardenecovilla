<template>
    <div class="">
        <p>this is for room selection</p>
        <checkoutsteps :step="stepNumber"></checkoutsteps>

        <!-- content  -->
        <div class="grid grid-cols-2 w-full h-auto border">

            <!-- payment related data -->
            <div class="">
                <div class="col-span-1 border">
                    <h2 class="">Personal Infomations</h2>
    
                    <!-- Personal Detial -->
                    <div class="grid grid-cols-2">
                        <div class="flex flex-row justify-between">
                            <div class="">
                                <input type="radio" name="title" value="mr">
                                <label for="">Mr.</label>
                            </div>
                            <div class="">
                                <input type="radio" name="title" value="ms">
                                <label for="">Ms.</label>
                            </div>
                            <div class="">
                                <input type="radio" name="title" value="miss">
                                <label for="">Miss.</label>
                            </div>
                        </div>
                        <!-- this represent empty cell -->
                        <div class=""></div>

                        <input type="text" class="border" placeholder="First name" v-model="hotelStore.personalData.firstName">
                        <input type="text" class="border" placeholder="Last Name" v-model="hotelStore.personalData.lastName">
                        <input type="text" class="border" placeholder="Email" v-model="hotelStore.accountDetails.email">
                        <input type="text" class="border" placeholder="Mobile number" v-model="hotelStore.personalData.mobile">
                        <input type="password" class="border" placeholder="Password" v-model="hotelStore.accountDetails.password">
                        <input type="password" class="border" placeholder="Re enter password"  v-model="hotelStore.accountDetails.repassword">
                    </div>
                    
                </div>
                <div class="col-span-1 border">
                    <h2 class="">Card Details</h2>
    
                    <!-- Card Detial -->
                    <div class="grid grid-cols-2">
                        <input type="text" class="border" placeholder="Card number"  v-model="hotelStore.cardDetails.cardNumber">
                        <input type="text" class="border" placeholder="Card Name"  v-model="hotelStore.cardDetails.cardName">
                        <input type="text" class="border" placeholder="Expire date" v-model="hotelStore.cardDetails.expireDate">
                        <input type="text" class="border" placeholder="CSV code" v-model="hotelStore.cardDetails.csv">
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
                    <div class="grid grid-cols-8 gap-4 border p-4" v-for="(items, index) in hotelStore.selectedRooms">
                        <div class="col-span-2 border">
                            <img :src="items.image" alt="" class="">
                        </div>
                        <div class="col-span-4 border">
                            <p class="">{{ items.floor }} floor - {{ items.side }} side</p>
                            <p class="">for {{ items.count }} persons</p>
                            <p class="">for {{ items.bedsize }} persons</p>
                            <p class="">{{ items.name}}</p>
                        </div>
                        <div class="col-span-2 border">
                            <p class="">Rs.{{ items.price }}.00</p>
                        </div>
                    </div>

                </div>

                <p class="flex flex-row justify-between">
                    <span class="">Total Cost</span>
                    <span class="">{{ totalCost }}</span>
                </p>

                <NuxtLink to="/booking/compleate">
                    <button class="border">Checkout</button>
                </NuxtLink>
            </div>

        </div>

    </div>
</template>

<script setup>
import { useHotelStore } from '~/store/hotelstore'

const hotelStore = useHotelStore()
const stepNumber = 1

const selecteRoom = (id, index) => {
    hotelStore.selectedRooms.push(hotelStore.availableRooms[index])
    hotelStore.availableRooms = hotelStore.availableRooms.filter((itm) => itm.id != id)
}

const deSelecteRoom = (id, index) => {
    hotelStore.availableRooms.push(hotelStore.selectedRooms[index])
    hotelStore.selectedRooms = hotelStore.selectedRooms.filter((itm) => itm.id != id)

}

const totalCost = computed(() => {
  return hotelStore.selectedRooms.reduce((total, room) => {
    return total + (room.price || 0)
  }, 0)
})

onMounted(() => {
    // this place use for default selection
    hotelStore.availableRooms = hotelStore.roomDetails
})

</script> 