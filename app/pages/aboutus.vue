<template>
    <div class="">
        <menubar></menubar>
        <Headerimage  title="About us" description="Discover vibrant adventures right at your doorstep, then return to pure  tranquility."></Headerimage>
        
        <!-- introduction for the element -->
        <div class="flex flex-col gap-12 h-auto w-[75vw] mx-auto py-30">
            <div class="grid grid-cols-2">
                
                <!-- image -->
                <div class="">
                    <img src="https://hotelprojects.blr1.cdn.digitaloceanspaces.com/TeaGardenMorawaka/nature/DSC00139.jpg" alt="" class="">
                </div>
                
                <!-- description -->
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
    
                <!-- team -->
                <div class="flex flex-col justify-center items-center">
                    
                    <!-- title section -->
                    <div class="flex flex-col justify-center items-center p-10">
                        <h3 class="font-serif text-4xl md:text-3xl text-stone-900 leading-tight font-black">Our team</h3>
                        <p class="text-stone-500 text-lg leading-relaxed text-center">Discover vibrant adventures right at your doorstep, 
                            then return to pure  tranquility. Your perfect balance of 
                            excitement and serene relaxation  awaits.</p>
                    </div>
    
                    <!-- tema members -->
                    <div class="flex flex-row gap-10 justify-center items-center">
                        <div class="flex flex-col justify-center items-center" v-for="value in teamMemberDetails">
                            <img :src="value.image" alt="" class="rounded-full w-30  h-30">
                            <h4 class="font-serif text-4xl md:text-xl text-stone-900 leading-tight font-black">{{ value.name }}</h4>
                            <p class="text-stone-500 text-lg leading-relaxed text-center">{{ value.position }}</p>
                        </div>
                    </div>
                </div>
    
                <!-- image -->
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

</script>