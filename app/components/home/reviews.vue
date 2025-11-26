<!-- <template>
    <div class="flex flex-col justify-center items-center w-full h-screen">
        <div class="flex flex-col gap-12 h-auto w-[75vw] mx-auto">
            
            title section
            <div class="flex flex-col justify-center items-center gap-2">
                <h3 class="font-serif text-4xl md:text-5xl text-stone-900 leading-tight font-black">Guest Experiences</h3>
                <hr class="w-[6vw] h-1.5 rounded-full bg-[#059699]">
            </div>

            reviews
            <div class="grid grid-cols-4 gap-4 h-[55vh]">
                <div class="flex flex-col gap-10 border border-gray-200 rounded-2xl shadow-xl items-center p-10" v-for="item in reviews">
                    <div class="flex flex-row" >
                        <Icon name="material-symbols:kid-star" class="border p-3 text-amber-400" v-for="value in item.star"/>
                    </div>
                    <p class="text-center">{{ item.description }}</p>
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
</template> -->

<template>
    <div class="flex flex-col justify-center items-center w-full min-h-screen py-18 sm:py-12 lg:py-16 xl:min-h-screen">
        <div class="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 h-auto w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] mx-auto px-4 sm:px-0">
            
            <!-- title section -->
            <div class="flex flex-col justify-center items-center gap-2 sm:gap-3">
                <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-tight font-black text-center">
                    Guest Experiences
                </h3>
                <hr class="w-[20vw] sm:w-[15vw] md:w-[10vw] lg:w-[8vw] xl:w-[6vw] h-1 sm:h-1.5 rounded-full bg-[#059699]">
            </div>

            <!-- reviews -->
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 h-auto">
                <div 
                    class="flex flex-col gap-4 sm:gap-6 border border-gray-200 rounded-2xl shadow-lg sm:shadow-xl items-center p-6 sm:p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300 min-h-[320px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[420px]"
                    v-for="item in reviews"
                    :key="item.id"
                >
                    <!-- Stars -->
                    <div class="flex flex-row gap-1">
                        <Icon 
                            name="material-symbols:kid-star" 
                            class="p-1 sm:p-2 text-amber-400 text-xl sm:text-2xl" 
                            v-for="value in item.star"
                            :key="value"
                        />
                    </div>
                    
                    <!-- Review Text -->
                    <p class="text-center text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 flex-grow overflow-y-auto">
                        {{ item.description }}
                    </p>
                    
                    <!-- Reviewer Info -->
                    <div class="flex flex-row items-center w-full gap-3 sm:gap-4 mt-4">
                        <img 
                            :src="item.image" 
                            :alt="`${item.name} from ${item.country}`" 
                            class="rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover flex-shrink-0"
                        >
                        <div class="flex flex-col min-w-0">
                            <p class="font-semibold text-base sm:text-lg md:text-xl truncate">{{ item.name }}</p>
                            <p class="text-gray-500 text-sm sm:text-base truncate">{{ item.country }}</p>
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