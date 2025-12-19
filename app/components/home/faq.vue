<template>
    <div class="flex flex-col justify-center items-center w-full min-h-screen">
        <div class="flex flex-col gap-16 h-auto max-w-7xl mx-auto py-30">

            <div class="flex flex-col justify-center items-center gap-2">
                <h3 class="font-serif text-2xl sm:text-3xl text-stone-900 leading-tight font-black text-center">FAQ</h3>
                <hr class="w-10 md:w-[6vw] h-1.5 rounded-full bg-[#059699]">
                <p class="text-sm sm:text-base font-light leading-relaxed text-gray-700 overflow-y-auto max-w-lg text-center">Discover our spacious, inviting rooms: Comfortable beds, modern amenities, and serene views for ultimate relaxation. Guest favorites inside!</p>
            </div>

            <div class="flex flex-row gap-20 h-full p-2">
                <div class="flex flex-col gap-6 w-[96vw] xl:w-[60%] cursor-default">
                    
                    <!-- single question -->
                    <div class="flex flex-col gap-4 w-full" v-for="(item, index) in faq" :key="index">
                        <div class="flex flex-row justify-between cursor-pointer py-2 border-b border-stone-200" @click="selectedQestion=index">
                            <p class="text-black font-medium text-base md:text-lg leading-relaxed pr-4">{{ item.question }}</p>
                            <Icon 
                                name="material-symbols:keyboard-arrow-down-rounded" 
                                class="text-3xl md:text-4xl text-black duration-300 transform border" 
                                :class="selectedQestion == index ? 'rotate-0' : '-rotate-90'" 
                            />
                        </div>
                        
                        <!-- answare -->
                        <div :class="selectedQestion == index ? 'block pt-2 pb-4' : 'hidden'">
                            <p class="text-black/75 font-light text-base md:text-lg leading-relaxed">{{ item.answer }}</p>
                        </div>
                    </div>
                </div>
                <!-- </div> -->

                <div class="col-span-4 xl:w-[40%] hidden xl:block overflow-clip rounded-2xl">
                    <NuxtImg 
                        provider="imagekit" 
                        :src="imageStore.garden[1]" 
                        :quality="qualityCal" 
                        sizes="175vw md:120vw"
                        preset="cover" 
                        class="w-full object-cover rounded-2xl hover:scale-110 active:scale-110 duration-300 h-full" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useImageStore } from '~/store/imagestore';

const imageStore = useImageStore()
const selectedQestion = ref(0)

const faq = [
    {
        question: 'Does Tea Garden Eco Villas have a pool?',
        answer: 'Yes, this hotel has a pool. You can find more details about the pool and other facilities on our amenities page.'
    },
    {
        question: 'What type of room can I book at Tea Garden Eco Villas?',
        answer: 'Room options at Tea Garden Eco Villas currently include: Quadruple rooms.'
    },
    {
        question: 'What are the check-in and check-out times at Tea Garden Eco Villas?',
        answer: 'Check-in at Tea Garden Eco Villas is from 16:00 (4:00 PM), and check-out is until 11:00 (11:00 AM).'
    },
    {
        question: 'How much does it cost to stay at Tea Garden Eco Villas?',
        answer: 'The prices at Tea Garden Eco Villas may vary depending on your stay (e.g., the dates you select, the villa\'s policy, etc.). Please enter your dates on the booking page to see the accurate price for your desired stay.'
    },
    {
        question: 'Does Tea Garden Eco Villas have a restaurant on site?',
        answer: 'Yes, Tea Garden Eco Villas has one on-site dining facility: Restaurant #1.'
    },
    {
        question: 'What activities and services are offered at Tea Garden Eco Villas?',
        answer: 'Tea Garden Eco Villas offers the following activities and services (charges may apply): Hiking, Walking tours, and access to the Swimming pool.'
    },
    {
        question: 'How far is Tea Garden Eco Villas from the centre of Morawaka?',
        answer: 'Tea Garden Eco Villas is approximately 1.5 km (0.9 miles) from the centre of Morawaka.'
    }
];

</script>