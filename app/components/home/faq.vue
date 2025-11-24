<template>
    <div class="flex flex-col justify-center items-center w-full h-screen">
        <div class="flex flex-col gap-12 h-auto w-[75vw] mx-auto">

            <!-- reviews -->
            <div class="flex flex-col gap-4 h-[55vh]">
                <div class="grid grid-cols-8 gap-20 h-full">
                    <!-- content section -->
                    <div class="flex flex-col gap-20 col-span-6">

                        <!-- title section -->
                        <div class="flex flex-col justify-center items-center gap-6">
                            <h3 class="font-serif text-4xl md:text-5xl text-stone-900 leading-tight font-black">FAQ section</h3>
                            <p class="text-stone-500 text-lg leading-relaxed text-center w-[75%]">Every corner of the villa tells a story, 
                                and every view paints its own masterpiece. Our gallery takes 
                                you on a journey through misty mornings.</p>
                        </div>
    
                        <!-- q&a section -->
                         <div class="flex flex-col gap-6 cursor-default">
                             <div class="flex flex-col gap-4" v-for="(item, index) in faq">
                                 <!-- question -->
                                 <div class="flex flex-row justify-between" @click="selectedQestion=index">
                                     <p class="text-black font-semibold text-xl leading-relaxed">{{ item.question }}</p>
                                     <Icon name="material-symbols:keyboard-arrow-down-rounded" class="text-4xl text-black duration-200" :class="selectedQestion == index ? 'r-otate-180' : 'rotate-180'"/>
                                 </div>
                                 <!-- answare -->
                                 <div @click="console.log('this ooe')" :class="selectedQestion == index ? 'block' : 'hidden'">
                                     <p class="text-black/75 font-light text-lg leading-relaxed">{{ item.answer }}</p>
                                 </div>
                             </div>
                         </div>
                    </div>
    
                    <!-- image section -->
                    <div class="col-span-2 h-full">
                        <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/DSC00583.jpg" alt="" class="w-full h-full object-cover rounded-2xl">
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>

const selectedQestion = ref(0)

const faq = [
    {
        question: 'What makes Tea Garden Eco Villa different from regular villas?',
        answer: 'Our Tea Garden Eco Villa in Morawaka is uniquely designed with sustainability at its core. We feature solar power, rainwater harvesting systems, and organic waste management. The villa is constructed using locally sourced, eco-friendly materials and is nestled within a working tea estate, offering guests an immersive experience in sustainable living while surrounded by lush tea plantations and breathtaking natural beauty.'
    },
    {
        question: 'What amenities and facilities are included in the villa?',
        answer: 'The villa includes a fully equipped kitchen with modern appliances, spacious living areas with traditional decor, private bedrooms with ensuite bathrooms, free Wi-Fi, and outdoor dining spaces. Eco-features include solar-heated water, energy-efficient lighting, and natural ventilation systems. Outdoor amenities feature a private garden, tea plantation views, walking trails through the estate, and dedicated spaces for yoga and meditation amidst nature.'
    },
    {
        question: 'Are meals provided and can dietary restrictions be accommodated?',
        answer: 'Yes, we offer authentic Sri Lankan cuisine prepared with fresh ingredients from our organic garden and local markets. Our package includes daily breakfast, and additional meals can be arranged. We happily accommodate dietary restrictions including vegetarian, vegan, gluten-free, and specific allergies. Cooking classes with our local chef are also available upon request to learn traditional Sri Lankan recipes.'
    },
    {
        question: 'What activities and experiences are available nearby?',
        answer: 'Guests can enjoy guided tea plantation tours, tea plucking experiences, hiking through surrounding hills, bird watching, and visits to nearby waterfalls. We also arrange cultural tours to local temples, traditional craft villages, and spice gardens. Within the estate, you can participate in daily yoga sessions, meditation workshops, and enjoy stunning sunset views over the tea-covered mountains.'
    },
    {
        question: 'What is the best way to reach Morawaka and is transportation provided?',
        answer: 'Morawaka is easily accessible from major cities - approximately 3 hours from Colombo by car or train. The nearest airport is Mattala Rajapaksa International Airport (2 hours drive). We provide complimentary pickup from Morawaka town and can arrange private transfers from airports or other locations at an additional cost. For guests driving, secure parking is available on the property.'
    }
];  

</script>