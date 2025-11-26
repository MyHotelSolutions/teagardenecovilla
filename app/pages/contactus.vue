<!-- <template>
    <div class="">
        <menubar></menubar>
        <Headerimage  title="Contact us" description="Discover vibrant adventures right at your doorstep, then return to pure  tranquility."></Headerimage>
        
        content
        <div class="flex flex-col gap-12 h-auto w-[75vw] mx-auto py-30">
            map and contact form
            <div class="grid grid-cols-2">
                
                map section
                <div class="min-h-[40vh]">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0" 
                        :src="mapUrl"
                    >
                    </iframe>
                </div>

                form section
                <div class="">
                    <form action="" class="flex flex-col">
                        <div class="">
                            <h4 class="">Send us your request directly</h4>
                            <p class="">Use this form to contact us regarding your stay, questions,
                                or special requests. We aim to respond as quickly as possible</p>
                        </div>
                        <input type="text" class="" placeholder="Email">
                        <input type="text" class="" placeholder="First name">
                        <input type="text" class="" placeholder="Perpose">
                        <input type="text" class="" placeholder="Descripsion">
                        <button class="">Send message</button>
                    </form>
                </div>
            </div>
    
            contact
            <div class="">
                <div class="">
                    <h4 class="">Getting touch</h4>
                    <p class="">Your journey to serenity begins with a simple conversation. 
                        Reach  out—we're here to listen and craft your perfect escape amidst the palms.</p>
                </div>
                <div class="flex flex-row justify-around">
                    <div class="" v-for="value in contact">
                        <h5 class="">{{ value.title }}</h5>
                        <p class="">{{ value.details }}</p>
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

const mapUrl = computed(() => {
  const lat = 6.2568970265171275 
  const lng = 80.47748512953655
  const zoom = 0.010
  return `https://www.openstreetmap.org/export/embed.html?bbox=${lng-zoom}%2C${lat-zoom}%2C${lng+zoom}%2C${lat+zoom}&marker=${lat}%2C${lng}&layer=mapnik`
})

const contact = [
    {
        title : 'Direct calls',
        details : '041 23456789'
    },
    {
        title : 'Instance messages',
        details : '+61 71 23456789'
    },
    {
        title : 'Email address',
        details : 'info@teagarden.lk'
    },
    {
        title : 'Address',
        details : 'Neluwa Road,Rambuka Estate,81000, Morawaka,Matara'
    },
]

</script> -->

<template>
    <div class="min-h-screen">
        <menubar></menubar>
        <Headerimage 
            title="Contact us" 
            description="Discover vibrant adventures right at your doorstep, then return to pure tranquility."
        ></Headerimage>
        
        <!-- content -->
        <div class="flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-12 h-auto w-[90vw] sm:w-[85vw] md:w-[80vw] lg:w-[75vw] mx-auto py-12 sm:py-16 md:py-20 lg:py-30 px-4 sm:px-0">
            
            <!-- map and contact form -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-8">
                
                <!-- map section -->
                <div class="min-h-[40vh] sm:min-h-[50vh] lg:min-h-[40vh] order-2 lg:order-1 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                    <iframe 
                        width="100%" 
                        height="100%" 
                        frameborder="0" 
                        scrolling="no" 
                        marginheight="0" 
                        marginwidth="0" 
                        :src="mapUrl"
                        class="min-h-[40vh] sm:min-h-[50vh] lg:min-h-[40vh]"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="Tea Garden Eco Villa Location Map"
                    >
                    </iframe>
                </div>

                <!-- form section -->
                <div class="order-1 lg:order-2">
                    <form action="" class="flex flex-col gap-4 sm:gap-5 md:gap-6">
                        <div class="text-center lg:text-left mb-4 sm:mb-6">
                            <h4 class="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 leading-tight font-black mb-3 sm:mb-4">
                                Send us your request directly
                            </h4>
                            <p class="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed">
                                Use this form to contact us regarding your stay, questions,
                                or special requests. We aim to respond as quickly as possible
                            </p>
                        </div>
                        
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            <input 
                                type="email" 
                                class="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                                placeholder="Email"
                                required
                            >
                            <input 
                                type="text" 
                                class="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                                placeholder="First name"
                                required
                            >
                        </div>

                        <input 
                            type="text" 
                            class="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200"
                            placeholder="Purpose of contact"
                            required
                        >

                        <textarea 
                            rows="4"
                            class="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                            placeholder="Tell us more about your inquiry..."
                            required
                        ></textarea>
                        
                        <div class="">
                            <button 
                                type="submit"
                                class="w-fit bg-teal-800 hover:bg-teal-700 text-white py-2 sm:py-2 px-6 rounded-full sm:rounded-full font-semibold text-sm sm:text-base transition-colors duration-200 mt-2 float-end"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    
            <!-- contact information -->
            <div class="mt-8 sm:mt-12 md:mt-16 lg:mt-12">
                <div class="text-center mb-8 sm:mb-12 md:mb-16">
                    <h4 class="font-serif text-2xl sm:text-3xl md:text-4xl text-stone-900 leading-tight font-black mb-3 sm:mb-4">
                        Getting in touch
                    </h4>
                    <p class="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                        Your journey to serenity begins with a simple conversation. 
                        Reach out—we're here to listen and craft your perfect escape amidst the palms.
                    </p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-8">
                    <div 
                        class="text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors duration-200" 
                        v-for="value in contact" 
                        :key="value.title"
                    >
                        <h5 class="font-serif text-lg sm:text-xl md:text-2xl text-stone-900 leading-tight font-black mb-2 sm:mb-3">
                            {{ value.title }}
                        </h5>
                        <p class="text-stone-500 text-sm sm:text-base leading-relaxed">
                            {{ value.details }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        
        <Booknow></Booknow>
        <Footer></Footer>
    </div>
</template>

<script setup>
// Map URL (example - replace with your actual map embed URL)
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.073647668594!2d80.4748995!3d6.2567317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae15fbfdad0d799%3A0x64493cec2df8c3f7!2sTea+Garden+Eco+Villas!5e0!3m2!1sen!2slk"

// Contact information
const contact = [
    { title: 'WhatsApp', details: '+94 77 123 4567' },
    { title: 'Phone', details: '+94 77 123 4567' },
    { title: 'Email', details: 'contact@teagardenvilla.com' },
    { title: 'Address', details: 'Morawaka, Southern Province, Sri Lanka' },
]
</script>