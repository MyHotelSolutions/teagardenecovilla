<template>
    <div class="flex flex-col justify-center items-center w-full min-h-screen bg-[#fafaf9]">
        <div class="flex flex-col gap-10 md:gap-12 h-auto w-[90vw] lg:w-[85vw] xl:w-[75vw] mx-auto py-30    ">

            <div class="flex flex-col justify-center items-center gap-2">
                <h3 class="font-serif text-3xl md:text-5xl text-stone-900 leading-tight font-black">FAQ</h3>
                <hr class="w-10 md:w-[6vw] h-1.5 rounded-full bg-[#059699]">
            </div>

            <div class="flex flex-col gap-10 xl:grid xl:grid-cols-10 xl:gap-20 h-full">

                <div class="flex flex-col gap-8 md:gap-12 xl:gap-20 col-span-full xl:col-span-6">
                    <div class="flex flex-col gap-6 cursor-default">
                        <div class="flex flex-col gap-4" v-for="(item, index) in faq" :key="index">
                            
                            <div class="flex flex-row justify-between cursor-pointer py-2 border-b border-stone-200" @click="selectedQestion=index">
                                <p class="text-black font-medium text-base md:text-xl leading-relaxed pr-4">{{ item.question }}</p>
                                <Icon 
                                    name="material-symbols:keyboard-arrow-down-rounded" 
                                    class="text-3xl md:text-4xl text-black duration-300 transform" 
                                    :class="selectedQestion == index ? 'rotate-0' : '-rotate-90'" 
                                />
                            </div>
                            
                            <div :class="selectedQestion == index ? 'block pt-2 pb-4' : 'hidden'">
                                <p class="text-black/75 font-light text-base md:text-lg leading-relaxed">{{ item.answer }}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-4 h-full hidden xl:block">
                    <img 
                        src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/DSC00583.jpg" 
                        alt="Scenic view of the Tea Garden Eco Villa" 
                        class="w-full h-full object-cover rounded-2xl shadow-xl"
                    >
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

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