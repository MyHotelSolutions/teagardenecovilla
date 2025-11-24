<template>
    <div class="flex flex-col justify-center items-center w-full h-screen">
        <div class="flex flex-col gap-12 h-auto w-[75vw] mx-auto">
            
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-6">
                <h3 class="font-serif text-4xl md:text-5xl text-stone-900 leading-tight font-black">Guest Experiences</h3>
                <p class="text-stone-500 text-lg leading-relaxed text-center w-[50%]">Every corner of the villa tells a story, 
                    and every view paints its own masterpiece. Our gallery takes 
                    you on a journey through misty mornings.</p>
            </div>

            <!-- reviews -->
            <div class="grid grid-cols-4 gap-4 h-[55vh]">
                <div class="flex flex-col gap-10 border border-gray-200 rounded-2xl shadow-xl items-center p-10" v-for="item in reviews">
                    <div class="flex flex-row" >
                        <Icon name="material-symbols:kid-star" class="border p-3" v-for="value in item.star"/>
                    </div>
                    <p class="">{{ item.description }}</p>
                    <div class="flex flex-row items-center w-full gap-4 mt-auto">
                        <img :src="item.image" alt="" class="rounded-full w-20 h-20">
                        <div class="flex flex-col ">
                            <p class="font-semibold text-xl">{{ item.name }}</p>
                            <p class="text-gray-500">{{ item.country }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
const reviews = [
    {
        star: 5,
        description: 'Absolutely stunning villa! The infinity pool overlooking the ocean was breathtaking. The staff was incredibly attentive and the amenities were top-notch. Perfect for our family vacation.The staff was incredibly attentive and the amenities were top-notch. Perfect for our family vacation.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        name: 'Sarah Johnson',
        country: 'United States'
    },
    {
        star: 5,
        description: 'This villa exceeded all our expectations. The architecture blends modern luxury with traditional charm. Waking up to panoramic mountain views every morning was magical. Highly recommended! Waking up to panoramic mountain views every morning was magical. Highly recommended!',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        name: 'Michael Chen',
        country: 'Canada'
    },
    {
        star: 4,
        description: 'Beautiful property with excellent facilities. The private beach access was a major plus. Minor issue with Wi-Fi connectivity, but overall a wonderful stay we would repeat. Minor issue with Wi-Fi connectivity, but overall a wonderful stay we would repeat.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
        name: 'Elena Rodriguez',
        country: 'Spain'
    },
    {
        star: 5,
        description: 'Pure paradise! The villa\'s design is impeccable and the sunset views are unforgettable. The chef prepared the most amazing local cuisine. Truly a 5-star experience. sunset views are unforgettable. The chef prepared the most amazing local cuisine. Truly a 5-star experience.',
        image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face',
        name: 'James Wilson',
        country: 'Australia'
    }
];
</script>