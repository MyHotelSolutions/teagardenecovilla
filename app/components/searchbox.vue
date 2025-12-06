<template>
    <div class="grid grid-cols-5 gap-4 p-6 lg:max-w-5xl md:max-w-3xl max-w-lg mx-auto h-full w-full bg-gray-400/30 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 text-white">
        
        <!-- date selection -->
        <div class="flex flex-col gap-2 lg:col-span-2 col-span-5  bg-white/10 p-2 rounded-md">
            <UPopover>
                <div class="flex flex-row gap-4 items-center">
                    <Icon name="uim:calender" class="md:text-3xl text-xl"></Icon>
                    <div class="flex flex-row justify-center items-center gap-2 md:text-lg text-md">
                        <p class="felx flex-row ">{{ modelValue.start == null ? 'Check-in date' : modifiedStartDate }}</p> 
                        <Icon name="bi:dash-lg"></Icon> 
                        <p class="felx flex-row">{{ modelValue.end == null ? 'Check-out date' : modifiedEndDate  }}</p>
                    </div>
                </div>
            
                <template #content>
                    <UCalendar v-model="modelValue" class="p-2" :number-of-months="2" range :min-value="minDate" :max-value="maxDate"/>
                </template>
            </UPopover>
        </div>

        <!-- rooms and head count -->
        <div class="lg:col-span-2 md:col-span-3 col-span-5 bg-white/10 p-2 rounded-md">
            <UPopover>
                <div class="flex flex-row gap-4 items-center">
                    <Icon name="material-symbols:person-2-rounded" class="md:text-3xl text-xl"></Icon>
                    <div class="flex flex-row justify-center items-center gap-2 md:text-lg text-md">
                        <p class="felx flex-row ">{{ adultsCount }} Adults</p> 
                        <Icon name="ci:dot-02-s"></Icon> 
                        <p class="felx flex-row">{{ childCount }} Childs</p>
                        <Icon name="ci:dot-02-s"></Icon> 
                        <p class="felx flex-row">{{ roomsCount }} Rooms</p>
                    </div>
                </div>
            
                <template #content>
                    <div class="flex flex-col gap-4 w-96 h-auto p-4 text-lg">
                        <!-- adult count -->
                        <div class="flex flex-row justify-between items-center">
                            <p class="">Adults</p>
                            <div class="flex flex-row gap-4 justify-between items-center">
                                <UButton variant="outline" color="neutral" class="px-3" @click="changeAdultCount('remove')">-</UButton>
                                <p class="">{{ adultsCount }}</p>
                                <UButton variant="outline" color="neutral"  class="px-3" @click="changeAdultCount('add')">+</UButton>
                            </div>
                        </div>
                        <!-- child count -->
                        <div class="flex flex-row justify-between items-center">
                            <p class="">Childs</p>
                            <div class="flex flex-row gap-4 justify-between items-center">
                                <UButton variant="outline" color="neutral"  class="px-3" @click="changeChildCount('remove')">-</UButton>
                                <p class="">{{ childCount }}</p>
                                <UButton variant="outline" color="neutral"  class="px-3" @click="changeChildCount('add')">+</UButton>
                            </div>
                        </div>
                        <!-- child adge -->
                        <div class="" v-if="childCount != 0">
                            <div class="grid grid-cols-2 gap-2">
                                <USelect variant="outline" color="neutral" v-model="childAgeSelectedList[index]" :items="childAgeList" v-for="(item, index) in childCount"/>
                            </div>
                        </div>
                        <!-- room count -->
                        <div class="flex flex-row justify-between items-center">
                            <p class="">Rooms</p>
                            <div class="flex flex-row gap-4 justify-between items-center">
                                <UButton variant="outline" color="neutral"  class="px-3" @click="changeRoomCount('remove')">-</UButton>
                                <p class="">{{ roomsCount }}</p>
                                <UButton variant="outline" color="neutral"  class="px-3" @click="changeRoomCount('add')">+</UButton>
                            </div>
                        </div>
                    </div>
                </template>
            </UPopover>
        </div>
        
        <!-- search button -->
        <div class="lg:col-span-1 md:col-span-2 col-span-5">
            <button class="w-full h-full bg-teal-600 rounded-md md:text-lg text-base text-white py-2" @click="bookNow">Book Now</button>
        </div>
    </div>
</template>

<script setup>
import { CalendarDate, DateFormatter, getLocalTimeZone } from '@internationalized/date'
const today = new Date()
const endDate = new Date()
endDate.setDate(today.getDate() + 180)
const adultsCount = ref(2)
const childCount = ref(0)
const roomsCount = ref(1)

// for child age
const childAgeList = ref(['Age needed',
  '1 years old', '2 years old', '3 years old', '4 years old', 
  '5 years old', '6 years old', '7 years old', '8 years old', 
  '9 years old', '10 years old', '11 years old', '12 years old', 
  '13 years old', '14 years old', '15 years old', '16 years old', 
  '17 years old'
])
const childAgeSelectedList = ref([])

const df = new DateFormatter('en-US', {
  dateStyle: 'medium'
})

const minDate = ref(new CalendarDate(today.getFullYear(), today.getMonth() + 1, today.getDate()))
const maxDate = ref(new CalendarDate(endDate.getFullYear(), endDate.getMonth() + 1, endDate.getDate()))

const modelValue = shallowRef({
  start: null,
  end: null
})

const getWeedDayName = (dateNumber) => {
    const dateNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    return dateNames[dateNumber]
}

const getMonthName = (monthNum) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    return monthNames[monthNum]
}

const modifiedStartDate = computed(() => {
    const startDate = new Date(modelValue.value.start)
    return `${getWeedDayName(startDate.getDay())}, ${getMonthName(startDate.getMonth())} ${startDate.getDate()}`
})

const modifiedEndDate = computed(() => {
    const endDate = new Date(modelValue.value.end)
    return `${getWeedDayName(endDate.getDay())}, ${getMonthName(endDate.getMonth())} ${endDate.getDate()}`
})

const isStartdateSet = computed(() => {
    if(modelValue.value.start !== null){
        return false
    }else if(modelValue.value.start == null){
        return true
    }
})

const changeAdultCount = (parameter) => {
    if(parameter == 'add'){
        if((adultsCount.value + childCount.value) != 16){
            adultsCount.value += 1
        }
    }else if(parameter  == 'remove'){
        if((adultsCount.value + childCount.value) != 1 && adultsCount.value != 1){
            adultsCount.value -= 1
        }
    }
}
const changeChildCount = (parameter) => {
    if(parameter == 'add'){
        if((adultsCount.value + childCount.value) != 16){
            childCount.value += 1
            childAgeSelectedList.value.push(childAgeList.value[0])
        }
    }else if(parameter  == 'remove'){
        if((adultsCount.value + childCount.value) != 1 && childCount.value != 0){
            childCount.value -= 1
            childAgeSelectedList.value.pop()
        }
    }
}
const changeRoomCount = (parameter) => {
    if(parameter == 'add'){
        if(roomsCount.value != 4){
            roomsCount.value += 1
        }
    }else if(parameter  == 'remove'){
        if(roomsCount.value != 1){
            roomsCount.value -= 1
        }
    }
}

const bookNow = () => {
    alert(childAgeSelectedList.value)
}

</script>

