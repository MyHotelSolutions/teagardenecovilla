<template>
    <div class="">
        <Menubar></Menubar>
        
        <div class="h-[40vh] sm:h-[44vh] md:h-[48vh] lg:h-[44vh] w-full relative">
            <img 
                src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/Restaurant%20/DSC00577%20(2).jpg" 
                :alt="title || 'Hero banner image'" 
                class="w-full h-full object-cover"
            >
            <div class="absolute bottom-0 w-full pb-12">
                <Searchbox></Searchbox>
            </div>
        </div>

        <div class="w-full h-auto py-20">
            
            <div class="lg:max-w-5xl md:max-w-3xl max-w-lg grid grid-cols-2 gap-6 bg-red-300/20 border-red-300/80 border-4 h-auto mx-auto rounded-xl sm:p-8 p-4">
                <div class="lg:col-span-1 col-span-2 flex flex-col gap-10 justify-center items-center">
                    <h2 class="text-2xl font-black text-red-400/80 text-center">Sorry for the inconvinientce !</h2>
                    <p class="text-lg text-center">Thre is no enoghf rooms <span class="font-black">that you request according to the above parameters</span> in the bellow dates. change your parametes and check agian.</p>
                </div>
                <div class="lg:col-span-1 col-span-2 w-fit mx-auto sm:p-12 p-4">
                    <UCalendar multiple v-model="value" disabled :month-controls="false" :year-controls="false" color="error" size="xl" />
                </div>
            </div>

        </div>

        <Footer></Footer>
    </div>
</template>
<script setup>
import { CalendarDate } from '@internationalized/date'

const value = shallowRef([
  new CalendarDate(2026, 1, 4),
  new CalendarDate(2026, 1, 9),
  new CalendarDate(2026, 1, 22),
  new CalendarDate(2026, 1, 28),
])

</script>