<template>
    <div class="">
        <Menubarcheckout></Menubarcheckout>
        <div class="flex flex-col gap-20 max-w-7xl mx-auto md:py-50 py-30">
            <checkoutsteps :step="stepNumber"></checkoutsteps>
    
            <!-- content  -->
            <div class="grid xl:grid-cols-5 gap-6 max-w-7xl mx-auto w-full lg:p-0 p-2">
                <!-- payment related data -->
                <div class="flex flex-col col-span-3 sm:p-6 py-6 px-2 rounded-xl shadow-lg border border-gray-100 gap-8 h-fit xl:w-full max-w-4xl mx-auto w-full">
                    <div class="flex flex-col gap-4 col-span-1">
                        <div class="flex flex-row items-center gap-4">
                            <Icon name="material-symbols:account-circle" class="text-3xl"></Icon>
                            <h2 class="text-2xl font-black">Personal details</h2>
                        </div>
        
                        <!-- Personal Detial -->
                        <div class="grid sm:grid-cols-2 grid-cols-1 gap-x-2 gap-y-4">
                            <div class="flex flex-col gap-3 pt-6 pb-0">
                                <div class="flex flex-row sm:gap-6 gap-10">
                                    <div class="flex felx-row gap-3">
                                        <input type="radio" name="title" value="mr" id="mr" class="scale-150">
                                        <label for="mr">Mr.</label>
                                    </div>
                                    <div class="flex felx-row gap-3">
                                        <input type="radio" name="title" value="ms" id="ms" class="scale-150">
                                        <label for="ms">Ms.</label>
                                    </div>
                                    <div class="flex felx-row gap-3">
                                        <input type="radio" name="title" value="miss" id="miss" class="scale-150">
                                        <label for="miss">Miss.</label>
                                    </div>
                                </div>
                                <p class="" v-if="errormessage.title">{{ errormessage.title }}</p>
                            </div>
                            <!-- this represent empty cell -->
                            <div class=""></div>
                            
                            <div class="flex flex-col gap-2 w-full">
                                <label for="" class="text-sm font-semibold">First name <span class="text-red-500 text-lg">*</span></label>
                                <input type="text" class="border border-gray-400 rounded-lg w-full py-2 px-3" placeholder="Romel" v-model="hotelStore.personalData.firstName">
                                <p class="" v-if="errormessage.firstName">{{ errormessage.firstName }}</p>
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="" class="text-sm font-semibold">Last name <span class="text-red-500 text-lg">*</span></label>
                                <input type="text" class="border border-gray-400 rounded-lg w-full py-2 px-3" placeholder="de silva" v-model="hotelStore.personalData.lastName">
                                <p class="" v-if="errormessage.lastName">{{ errormessage.lastName }}</p>
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="" class="text-sm font-semibold">Email address <span class="text-red-500 text-lg">*</span></label>
                                <input type="text" class="border border-gray-400 rounded-lg w-full py-2 px-3" placeholder="romeldesilva@gmail.com" v-model="hotelStore.accountDetails.email">
                                <p class="" v-if="errormessage.emailAddress">{{ errormessage.emailAddress }}</p>
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="" class="text-sm font-semibold">Mobile number <span class="text-red-500 text-lg">*</span></label>
                                <input type="text" class="border border-gray-400 rounded-lg w-full py-2 px-3" placeholder="071 000 0000" v-model="hotelStore.personalData.mobile">
                                <p class="" v-if="errormessage.mobileNumber">{{ errormessage.mobileNumber }}</p>
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="" class="text-sm font-semibold">Password <span class="text-red-500 text-lg">*</span></label>
                                <input type="password" class="border border-gray-400 rounded-lg w-full py-2 px-3" placeholder="" v-model="hotelStore.accountDetails.password">
                                <p class="" v-if="errormessage.password">{{ errormessage.password }}</p>
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="" class="text-sm font-semibold">Re enter password <span class="text-red-500 text-lg">*</span></label>
                                <input type="password" class="border border-gray-400 rounded-lg w-full py-2 px-3" placeholder=""  v-model="hotelStore.accountDetails.repassword">
                                <p class="" v-if="errormessage.rePassword">{{ errormessage.rePassword }}</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="flex flex-col gap-4 col-span-1 ">
                        <div class="flex flex-row items-center gap-4">
                            <Icon name="icon-park-solid:bank-card" class="text-3xl"></Icon>
                            <h2 class="text-2xl font-black">Card detials</h2>
                        </div>
                        
                        <!-- Card Detial -->
                        <div class="grid sm:grid-cols-2 grid-cols-1 gap-2">
                            <div class="flex flex-col gap-2 w-full">
                                <label for="" class="text-sm font-semibold">Card number</label>
                                <input type="text" class="border border-gray-400 rounded-lg w-full py-2 px-3" placeholder="Card number"  v-model="hotelStore.cardDetails.cardNumber">
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="" class="text-sm font-semibold">Card name</label>
                                <input type="text" class="border border-gray-400 rounded-lg w-full py-2 px-3" placeholder="Card Name"  v-model="hotelStore.cardDetails.cardName">
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="" class="text-sm font-semibold">Expire</label>
                                <input type="text" class="border border-gray-400 rounded-lg w-full py-2 px-3" placeholder="Expire date" v-model="hotelStore.cardDetails.expireDate">
                            </div>
                            <div class="flex flex-col gap-2 w-full">
                                <label for="" class="text-sm font-semibold">CSV</label>
                                <input type="text" class="border border-gray-400 rounded-lg w-full py-2 px-3" placeholder="CSV code" v-model="hotelStore.cardDetails.csv">
                            </div>
                        </div>
                        
                    </div>
    
                </div>
                
                <!-- selected rooms -->
                <div class="xl:col-span-2 col-span-3 sm:p-6 py-6 px-2 rounded-xl shadow-lg border border-gray-100 flex flex-col gap-6 h-fit xl:w-full max-w-4xl mx-auto w-full">
                    <div class="flex flex-row items-center gap-4">
                        <Icon name="material-symbols:add-box-outline-rounded" class="text-3xl"></Icon>
                        <h2 class="text-2xl font-black">Your selections</h2>
                    </div>
    
                    <!-- resevetion details -->
                    <div class="flex flex-col gap-6 text-base sm:text-lg xl:w-full">
                        <!-- date related informations -->
                        <div class="flex flex-col gap-3">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4 justify-center items-center">
                                    <Icon name="uim:calender" class="text-2xl text-black/20"></Icon>
                                    <p class="">Check-in</p>
                                </div>
                                <p class="">{{ hotelStore.modelValue.start ? hotelStore.modelValue.start : '2025-12-15' }}</p>
                            </div>
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4 justify-center items-center">
                                    <Icon name="uim:calender" class="text-2xl text-black/20"></Icon>
                                    <p class="">Check-out</p>
                                </div>
                                <p class="">{{ hotelStore.modelValue.end ? hotelStore.modelValue.end : '2025-12-18' }}</p>
                            </div>
                            <hr class="text-gray-300">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4 justify-center items-center">
                                    <Icon name="material-symbols:dark-mode-rounded" class="text-2xl  justify-betweentext-black/20"></Icon>
                                    <p class="font-black">Total nights</p>
                                </div>
                                <p class="font-black">{{ String(nightCal).padStart(2, '0') }}</p>
                            </div>
                        </div>

                        <!-- head count related infomations -->
                        <div class="flex flex-col gap-3">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4 justify-center items-center">
                                    <Icon name="material-symbols:person-2" class="text-2xl text-black/20"></Icon>
                                    <p class="">Total Adults</p>
                                </div>
                                <p class="">{{ String(hotelStore.adultsCount).padStart(2, '0') }}</p>
                            </div>
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4 justify-center items-center">
                                    <Icon name="ic:round-child-friendly" class="text-2xl text-black/20"></Icon>
                                    <p class="">Total Childrens</p>
                                </div>
                                <p class="">{{ String(hotelStore.childCount).padStart(2, '0') }}</p>
                            </div>
                            <hr class="text-gray-300">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4 justify-center items-center">
                                    <Icon name="carbon:pedestrian-family" class="text-2xl text-black/20"></Icon>
                                    <p class="font-black">Total head count</p>
                                </div>
                                <p class="font-black">{{ String(hotelStore.childCount + hotelStore.adultsCount).padStart(2, '0') }}</p>
                            </div>
                        </div>

                        <!-- rooms related infomations -->
                        <div class="flex flex-col gap-3">
                            <hr class="text-gray-300">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4 justify-center items-center">
                                    <Icon name="material-symbols:door-open-outline-rounded" class="text-2xl text-black/20"></Icon>
                                    <p class="font-black">Total room count</p>
                                </div>
                                <p class="font-black">{{ String(hotelStore.selectedRooms.length).padStart(2, '0') }}</p>
                            </div>
                        </div>
                        
                        <!-- total cost infomations -->
                        <div class="flex flex-col gap-3 pt-20">
                            <hr class="text-gray-300">
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-row gap-4 justify-center items-center">
                                    <Icon name="solar:dollar-minimalistic-bold-duotone" class="text-2xl text-black/20"></Icon>
                                    <p class="font-black text-2xl">Total Cost</p>
                                </div>
                                <p class="font-black text-2xl">Rs. {{ totalCost }}.00</p>
                            </div>
                        </div>
                    </div>
    
                    <!-- action button -->
                    <div class="mb-auto w-full">
                        <NuxtLink to="/booking/compleate">
                            <button class="w-full py-2 px-4 text-base rounded-lg whitespace-nowrap bg-teal-800 text-white font-medium">Checkout</button>
                        </NuxtLink>
                    </div>
                </div>
    
            </div>

        </div>

    <Footer></Footer>
    </div>
</template>

<script setup>
import { useHotelStore } from '~/store/hotelstore'

const hotelStore = useHotelStore()
const stepNumber = 1

useSeoMeta({
  title: 'Payment',

  description: 'Pay for the booking and make you resevesion',

  // Robots & Canonical
  robots: 'noindex, nofollow',
  canonical: 'https://www.teagardenecovillas.com/booking/payment',

})

const errormessage = ref({
    title : null,
    firstName : null,
    lastName : null,
    emailAddress : null,
    mobileNumber : null,
    password : null,
    rePassword : null
})

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