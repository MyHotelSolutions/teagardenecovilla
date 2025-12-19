<template>
    <div class="">
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

            <div class="absolute bottom-0 w-full pb-12">
                <Searchbox></Searchbox>
            </div>
        </div>

        <div class="w-full h-auto py-20 p-2">
            
            <div class="lg:max-w-5xl md:max-w-3xl max-w-lg lg:grid lg:grid-cols-8 flex flex-col gap-6 bg-red-300/20 h-auto mx-auto rounded-xl shadow-lg">
                <div class="lg:col-span-4 flex flex-col gap-6 bg-white lg:rounded-l-xl rounded-t-xl p-6">
                    <div class="flex flex-col justify-center items-center bg-red-300/40 w-16 h-16 rounded-full">
                        <Icon name="material-symbols:timelapse-outline-rounded" class="text-red-500 text-4xl"></Icon>
                    </div>
                    <h2 class="sm:text-2xl text-lg font-black text-black">Sorry for the inconvinientce</h2>
                    <p class="sm:text-base text-base">Thre are no enough rooms avilable for your selected date.<span class="font-black"> please adjest date or rooms requirements.</span></p>
                    <div class="flex flex-col gap-4 p-8 rounded-xl bg-red-300/20 border-2 border-red-300/40">
                        <div class="flex flex-row gap-4">
                            <Icon name="material-symbols:calendar-month-outline-rounded" class="text-3xl"></Icon>
                            <h5 class="text-lg font-bold">{{ roomCountByString }} rooms Un-available dates.</h5>
                        </div>
                        <div class="flex felx-row flex-wrap gap-2">
                            <div class="bg-red-300/50 py-2 px-4 rounded-full whitespace-nowrap" v-for="item in value">{{ getDate(item) }}</div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-6 lg:col-span-4 w-full mx-auto sm:p-12 p-4">
                    <UCalendar multiple v-model="value" disabled :month-controls="false" :year-controls="false" color="error" :size="calenderSize" />
                    <hr class="">
                    <div class="flex flex-row justify-start items-center gap-4">
                        <div class="w-6 h-6 rounded-full bg-red-400"></div>
                        <p class="">Unavailable dates</p>
                    </div>
                </div>
            </div>

        </div>

        <Footer></Footer>
    </div>
</template>
<script setup>
import { CalendarDate } from '@internationalized/date'
import { useHotelStore } from '~/store/hotelstore'
import { useImageStore } from '~/store/imagestore'
const imagestore = useImageStore()

const calenderSize = ref('xl')
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const hotelstore =  useHotelStore()
const qualityCal = ref(20)

const value = shallowRef([
  new CalendarDate(2026, 1, 4),
  new CalendarDate(2026, 1, 9),
  new CalendarDate(2026, 1, 22),
  new CalendarDate(2026, 1, 28),
])

const getDate = (val) => {
    const actualDate = new Date(val)
    return `${monthNames[actualDate.getMonth()]} ${actualDate.getDate()}`
}

const roomCountByString = computed(() => {
    const roomCountNames = ['One', 'Two', 'Three', 'Four']
    return `${roomCountNames[0]}`
})

onMounted(() => {
    if(window.innerWidth < 640){
        calenderSize.value = 'lg'
    }else if(window.innerWidth >= 640){

        calenderSize.value = 'xl'
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

onBeforeMount(() => {
    calculateImageQuality()
})

</script>