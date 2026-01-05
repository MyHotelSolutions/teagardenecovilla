<template>
    <div class="w-full h-auto">
        <Menubar></Menubar>
        <div class="h-[40vh] sm:h-[44vh] md:h-[48vh] lg:h-[44vh] w-full relative">
            <NuxtImg 
                provider="imagekit" 
                :src="imagestore.pool[0]" 
                :quality="qualityCal" 
                sizes="175vw md:120vw"
                preset="cover" 
                class="w-full h-full object-cover" 
            />

            <!-- background bluer -->
            <div class="absolute top-0 left-0 right-0 h-[50%] bg-linear-to-b from-black to-slate-50/0 w-full"></div>

            <div class="absolute bottom-0 w-full pb-4 md:pb-12 px-6 md:px-">
                <Searchbox></Searchbox>
            </div>
        </div>
        <div class="flex flex-col gap-20 max-w-7xl mx-auto py-30">
            <checkoutsteps :step="stepNumber"></checkoutsteps>
    
            <!-- content  -->
            <div class="xl:grid xl:grid-cols-2 flex flex-col gap-4 w-full h-auto xl:p-0 p-2">
    
                <!-- available rooms -->
                <div class="col-span-1 sm:p-6 py-6 px-2 rounded-xl shadow-lg border border-gray-100 flex flex-col gap-8 h-fit xl:w-full max-w-4xl mx-auto w-full">
                    <div class="flex flex-row items-center gap-4">
                        <Icon name="material-symbols:door-open-outline-rounded" class="text-3xl"></Icon>
                        <h2 class="text-2xl font-black">Available rooms</h2>
                    </div>
    
                    <!-- room list -->
                    <div class="flex flex-col gap-4">
                        <div class="grid grid-cols-8 sm:gap-4 gap-0 border border-gray-300 rounded-lg bg-gray-100" v-for="(items, index) in hotelStore.availableRooms">
                            <div class="col-span-2">
                                <!-- <img :src="items.image" alt="" class="w-full h-full object-cover rounded-l-lg"> -->
                                <NuxtImg 
                                    provider="imagekit" 
                                    :src="imagestore.insiderooms[1]" 
                                    :quality="qualityCal" 
                                    sizes="100vw md:80vw"
                                    preset="cover" 
                                    class="w-full h-full object-cover rounded-l-lg" 
                                />
                            </div>
                            <div class="flex flex-col sm:gap-1 gap-2 sm:col-span-4 col-span-6 sm:p-4 p-3">
                                <p class="sm:text-base text-sm"><span class="py-1 px-2 bg-gray-300 rounded-full border-2 border-gray-400">{{ items.floor }} floor</span> - <span class="py-1 px-2 bg-gray-300 rounded-full border-2 border-gray-400">{{ items.side }} side</span></p>
                                <div class="sm:flex sm:flex-col grid grid-cols-2 sm:gap-0 gap-1 sm:text-base text-sm">
                                    <div class="flex felx-col items-center">
                                        <Icon name="ci:dot-03-m"></Icon>
                                        <p class="">For {{ items.count }} persons</p>
                                    </div>
                                    <div class="flex felx-col items-center">
                                        <Icon name="ci:dot-03-m"></Icon>
                                        <p class="">Changing room</p>
                                    </div>
                                    <div class="flex felx-col items-center">
                                        <Icon name="ci:dot-03-m"></Icon>
                                        <p class="">Atach bathroom</p>
                                    </div>
                                    <div class="flex felx-col items-center">
                                        <Icon name="ci:dot-03-m"></Icon>
                                        <p class="">Balcony view</p>
                                    </div>
                                    <div class="flex felx-col items-center whitespace-nowrap col-span-2">
                                        <Icon name="ci:dot-03-m"></Icon>
                                        <p class="">{{ items.bedsize }}</p>
                                    </div>
                                </div>
                                <!-- <p class="">{{ items.name}}</p> -->
                                <div class="flex flex-row gap-4">
                                    <div class="flex flex-col justify-center items-center w-10 h-7 rounded-full bg-white border-2 border-gray-200" v-for="item in items.facility">
                                        <Icon :name="item" class="text-black"></Icon>
                                    </div>
                                </div> 
                                <!-- action button and price for mobile view -->
                                <div class="flex flex-row justify-between sm:hidden">
                                    <p class="text-sm">Rs. <span class="text-lg font-black">{{ items.price }}.00</span></p>
                                    <button class="px-4 border-2 rounded-md border-teal-800 font-base bg-teal-800 text-white" @click="selecteRoom(items.id, index)">ADD</button>
                                </div>
                            </div>
                            <div class="sm:flex sm:flex-col flex-row mt-auto sm:col-span-2 col-span-4 ml-auto p-4 hidden">
                                <p class="text-sm">Rs. <span class="text-lg font-black">{{ items.price }}.00</span></p>
                                <button class="border-2 px-4 rounded-md w-full border-teal-800 font-semibold bg-teal-800 text-white" @click="selecteRoom(items.id, index)">ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- selected rooms -->
                <div class="col-span-1 sm:p-6 py-6 px-2 rounded-xl shadow-lg border border-gray-100 flex flex-col gap-6 h-fit  xl:w-full max-w-4xl mx-auto w-full">
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
                                    <Icon name="material-symbols:dark-mode-rounded" class="text-2xl text-black/20"></Icon>
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
                    </div>
    
                    <!-- resevetion rooms -->
                    <div class="flex flex-col gap-2 pb-16">

                        <!-- room list -->
                        <div class="grid grid-cols-9 border border-gray-300 rounded-lg bg-gray-100" v-for="(items, index) in hotelStore.selectedRooms">
                            
                            <!-- rooom image -->
                            <div class="col-span-2">
                                <!-- <img :src="items.image" alt="" class="w-full h-full object-cover rounded-l-lg"> -->
                                <NuxtImg 
                                    provider="imagekit" 
                                    :src="imagestore.insiderooms[1]" 
                                    :quality="qualityCal" 
                                    sizes="100vw md:80vw"
                                    preset="cover" 
                                    class="w-full h-full object-cover rounded-l-lg" 
                                />
                            </div>

                            <!-- room description, action button and price -->
                            <div class="col-span-7 flex flex-col sm:flex-row gap-4 p-3 sm:p-4">

                                <!-- room description -->
                                <div class="flex flex-col gap-2 sm:w-full">
                                    <!-- <p class="sm:text-base text-sm"><span class="py-1 px-2 bg-gray-300 rounded-full border-2 border-gray-400">{{ items.floor }} floor</span> - <span class="py-1 px-2 bg-gray-300 rounded-full border-2 border-gray-400">{{ items.side }} side</span></p> -->
                                    <div class="sm:flex sm:flex-col grid grid-cols-2 sm:gap-0 gap-1 sm:text-base text-sm">
                                        <div class="flex felx-col items-center">
                                            <Icon name="ci:dot-03-m"></Icon>
                                            <p class="">For {{ items.count }} persons</p>
                                        </div>
                                        <div class="flex felx-col items-center">
                                            <Icon name="ci:dot-03-m"></Icon>
                                            <p class="">Changing room</p>
                                        </div>
                                        <div class="flex felx-col items-center">
                                            <Icon name="ci:dot-03-m"></Icon>
                                            <p class="">Atach bathroom</p>
                                        </div>
                                        <div class="flex felx-col items-center">
                                            <Icon name="ci:dot-03-m"></Icon>
                                            <p class="">Balcony view</p>
                                        </div>
                                        <div class="flex felx-col items-center whitespace-nowrap col-span-2">
                                            <Icon name="ci:dot-03-m"></Icon>
                                            <p class="">{{ items.bedsize }}</p>
                                        </div>
                                    </div>
                                </div>
                        
                                <!-- action button and price -->
                                <div class="flex flex-row sm:flex-col justify-between items-center">
                                    <button class="ml-auto rounded-md h-fit text-red-400/60 hover:text-red-400 sm:order-1 order-2"  @click="deSelecteRoom(items.id, index)">
                                        <Icon class="text-2xl" name="material-symbols:cancel-rounded"></Icon>
                                    </button>
                                    <p class="text-sm sm:order-2 order-1 whitespace-nowrap">Rs. <span class="text-lg font-black">{{ items.price }}.00</span></p>
                                </div>
                            </div>
                        </div>
    
                    </div>
                    <div class="mb-auto w-full">
                        <NuxtLink to="/booking/payment">
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
import { useImageStore } from '~/store/imagestore'

const hotelStore = useHotelStore()
const imagestore = useImageStore()
const stepNumber = 0
const qualityCal = ref(20)

useSeoMeta({
  title: 'Select Rooms',

  description: 'select how many rooms you want from the selected datas',

  // Robots & Canonical
  robots: 'noindex, nofollow',
  canonical: 'https://www.teagardenecovillas.com/booking/roomselection',

})

const selecteRoom = (id, index) => {
    hotelStore.selectedRooms.push(hotelStore.availableRooms[index])
    hotelStore.availableRooms = hotelStore.availableRooms.filter((itm) => itm.id != id)
}

const deSelecteRoom = (id, index) => {
    hotelStore.availableRooms.push(hotelStore.selectedRooms[index])
    hotelStore.selectedRooms = hotelStore.selectedRooms.filter((itm) => itm.id != id)

}

const nightCal = computed(() => {
    if(hotelStore.modelValue.start != null){
        return hotelStore.modelValue.end - hotelStore.modelValue.start
    }else if(hotelStore.modelValue.start == null){
        return 0
    }
})


const calculateImageQuality = () => {
    
    const width = window.innerWidth

    if(width >= 1536){
        qualityCal.value = 45
    }else if(width >= 1280){
        qualityCal.value = 40
    }else if(width >= 1024){
        qualityCal.value = 35
    }else if(width >= 768){
        qualityCal.value = 30
    }else if(width >= 640){
        qualityCal.value = 18
    }else if(width < 640){
        qualityCal.value = 16
    }
}

const assignRoomToAvailableAndSelection = () => {
    for (let i = 0; i < hotelStore.roomsCount; i++) {
        hotelStore.selectedRooms.push(hotelStore.roomDetails[i])
        hotelStore.roomDetails.pop(i)        
    }
    console.log(hotelStore.selectedRooms)
    console.log(hotelStore.roomDetails)
    hotelStore.availableRooms = hotelStore.roomDetails
}

onMounted(() => {
    console.log('this is executed')
    assignRoomToAvailableAndSelection()
})

onBeforeMount(() => {
    calculateImageQuality()
})

</script> 