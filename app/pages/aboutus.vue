<!-- <template>
    <div class="">
        <menubar></menubar>
        <Headerimage  title="About us" description="Discover vibrant adventures right at your doorstep, then return to pure  tranquility."></Headerimage>
        
        introduction for the element
        <div class="flex flex-col gap-12 h-auto w-[75vw] mx-auto py-30">
            <div class="grid grid-cols-2">
                
                image
                <div class="">
                    <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/nature/DSC00139.jpg" alt="" class="">
                </div>
                
                description
                <div class="flex flex-col justify-center items-center p-10">
                    <p class="text-stone-500 text-lg leading-relaxed text-center">Nestled in the lush, rolling hills of Morawaka, 
                        Tea Garden Eco Villa is your sanctuary of sustainable serenity. 
                        We invite you to awaken to misty mountain vistas, breathe in the crisp, 
                        fragrant air of a working tea estate, and immerse yourself in nature’s gentle rhythm.
                        Our villa is thoughtfully crafted to offer harmonious comfort with a light
                        ecological footprint, ensuring your stay is both restorative and respectful
                        of the beautiful land we call home. Discover a unique blend of authentic
                        rustic charm and mindful hospitality.</p>
                </div>
    
                team
                <div class="flex flex-col justify-center items-center">
                    
                    title section
                    <div class="flex flex-col justify-center items-center p-10">
                        <h3 class="font-serif text-4xl md:text-3xl text-stone-900 leading-tight font-black">Our team</h3>
                        <p class="text-stone-500 text-lg leading-relaxed text-center">Discover vibrant adventures right at your doorstep, 
                            then return to pure  tranquility. Your perfect balance of 
                            excitement and serene relaxation  awaits.</p>
                    </div>
    
                    tema members
                    <div class="flex flex-row gap-10 justify-center items-center">
                        <div class="flex flex-col justify-center items-center" v-for="value in teamMemberDetails">
                            <img :src="value.image" alt="" class="rounded-full w-30  h-30">
                            <h4 class="font-serif text-4xl md:text-xl text-stone-900 leading-tight font-black">{{ value.name }}</h4>
                            <p class="text-stone-500 text-lg leading-relaxed text-center">{{ value.position }}</p>
                        </div>
                    </div>
                </div>
    
                image
                <div class="">
                    <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/nature/DSC00139.jpg" alt="" class="">
                </div>
            </div>
        </div>
        
        <Booknow></Booknow>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Booknow from '~/components/booknow.vue';
import Footer from '~/components/footer.vue';

const teamMemberDetails = [
    {
        image : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        name : 'Mr. Nanayakkara',
        position : 'Managin director'
    },
    {
        image : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        name : 'Mr. Athukorala',
        position : 'Head Cheaff'
    },
]

</script> -->


<template>
    <div class="">
        <menubar></menubar>
        <Headerimage  title="About us" description="Discover vibrant adventures right at your doorstep, then return to pure  tranquility."></Headerimage>
        
        <!-- introduction for the element -->
        <div class="flex flex-col gap-8 sm:gap-10 md:gap-12 h-auto w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] mx-auto py-12 sm:py-20 md:py-24 lg:py-30 px-4 sm:px-0">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
                
                <!-- image section 1 -->
                <div class="order-1 lg:order-1">
                    <img 
                        src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/nature/DSC00139.jpg" 
                        alt="Tea Garden Eco Villa landscape" 
                        class="w-full h-auto object-cover rounded-xl"
                    >
                </div>
                
                <!-- description -->
                <div class="flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 order-2 lg:order-2">
                    <p class="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed text-center">
                        Nestled in the lush, rolling hills of Morawaka, 
                        Tea Garden Eco Villa is your sanctuary of sustainable serenity. 
                        We invite you to awaken to misty mountain vistas, breathe in the crisp, 
                        fragrant air of a working tea estate, and immerse yourself in nature's gentle rhythm.
                        Our villa is thoughtfully crafted to offer harmonious comfort with a light
                        ecological footprint, ensuring your stay is both restorative and respectful
                        of the beautiful land we call home. Discover a unique blend of authentic
                        rustic charm and mindful hospitality.
                    </p>
                </div>

                <!-- team section -->
                <div class="flex flex-col justify-center items-center order-4 lg:order-3 col-span-1 lg:col-span-2">
                    
                    <!-- title section -->
                    <div class="flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 lg:p-10 text-center max-w-2xl mx-auto">
                        <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 leading-tight font-black mb-3 sm:mb-4">Our Team</h3>
                        <p class="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed">
                            Discover vibrant adventures right at your doorstep, 
                            then return to pure tranquility. Your perfect balance of 
                            excitement and serene relaxation awaits.
                        </p>
                    </div>

                    <!-- team members -->
                    <div class="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10 justify-center items-center w-full flex-wrap">
                        <div class="flex flex-col justify-center items-center text-center w-full sm:w-auto" v-for="value in teamMemberDetails" :key="value.id">
                            <img 
                                :src="value.image" 
                                :alt="`${value.name} - ${value.position}`" 
                                class="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-30 lg:h-30 object-cover mb-3 sm:mb-4"
                            >
                            <h4 class="font-serif text-lg sm:text-xl md:text-2xl lg:text-xl text-stone-900 leading-tight font-black mb-1 sm:mb-2">
                                {{ value.name }}
                            </h4>
                            <p class="text-stone-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-[150px] sm:max-w-none">
                                {{ value.position }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <Booknow></Booknow>
        <Footer></Footer>
    </div>
</template>

<script setup>
import Booknow from '~/components/booknow.vue';
import Footer from '~/components/footer.vue';

const teamMemberDetails = [
    {
        image : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        name : 'Mr. Nanayakkara',
        position : 'Managin director'
    },
    {
        image : 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        name : 'Mr. Athukorala',
        position : 'Head Cheaff'
    },
]

</script>