<template>
    <div class="min-h-screen">
        <menubar></menubar>
        <Headerimage 
            title="Contact us" 
            description="Discover vibrant adventures right at your doorstep, then return to pure tranquility."
        ></Headerimage>
        
        <!-- content -->
        <div class="flex flex-col gap-8 xl:max-w-7xl lg:max-w-5xl md:max-w-3xl mx-auto px-4 md:px-0 py-20">
            
            <!-- map and contact form -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                
                <!-- map section -->
                <div class="min-h-[40vh] sm:min-h-[50vh] lg:min-h-[40vh] order-2 lg:order-1 rounded-xl sm:rounded-2xl overflow-hidden">
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
                <div class="order-1 lg:order-2 p-4 lg:p-6 xl:p-10 rounded-xl sm:rounded-2xl bg-stone-50 hover:bg-stone-100">
                    <div class="flex flex-col gap-4 sm:gap-5 md:gap-6">
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
                            <label for="email" class="hidden">Email:</label>
                            <input 
                            type="email" 
                            name="email"
                            v-model="formData.email"
                            class="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 bg-white"
                                placeholder="Email"
                                required
                            >
                            <label for="first name" class="hidden">First Name:</label>
                            <input 
                            type="text"
                            name="first name" 
                                v-model="formData.name"
                                class="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 bg-white"
                                placeholder="First name"
                                required
                                >
                            </div>
                            
                        <label for="Perpose" class="hidden">First Name:</label>
                        <input 
                        type="text" 
                        name="Perpose"
                            v-model="formData.perpose"
                            class="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 bg-white"
                            placeholder="Purpose of contact"
                            required
                            >
                            
                        <label for="Message" class="hidden">First Name:</label>
                        <textarea 
                        name="Message"
                            v-model="formData.description"
                            rows="4"
                            class="w-full px-3 py-2.5 sm:px-4 sm:py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors duration-200 resize-vertical bg-white"
                            placeholder="Tell us more about your inquiry..."
                            required
                        ></textarea>
                        
                        <div class="">
                            <button
                                @click="sendMail"
                                class="w-fit bg-teal-800 hover:bg-teal-700 text-white py-2 sm:py-2 px-6 rounded-full sm:rounded-full font-semibold text-sm sm:text-base transition-colors duration-200 mt-2 float-end"
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    
            <!-- contact information -->
            <div class="pt-20">
                <div class="text-center ">
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
import { useHotelStore } from '~/store/hotelstore';

// Map URL (example - replace with your actual map embed URL)
const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.073647668594!2d80.4748995!3d6.2567317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae15fbfdad0d799%3A0x64493cec2df8c3f7!2sTea+Garden+Eco+Villas!5e0!3m2!1sen!2slk"

const config = useRuntimeConfig()
const hotelstore = useHotelStore()
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute()
const router = useRouter()

// Contact information
const contact = [
    { title: 'WhatsApp', details: '+44 770 277 8744' },
    { title: 'Phone', details: '+44 770 277 8744' },
    { title: 'Email', details: 'teagardenecovilla@gmail.com' },
    { title: 'Address', details: 'Morawaka, Southern Province, Sri Lanka' },
]

const formData = ref({
    email : null,
    name : null,
    perpose : null,
    description : null,
    apiKey : config.public.apiBase
})

const sendMail = async () => {
    try{
        const data = await $fetch('https://api.staticforms.dev/submit', {
            method : 'POST',
            body : formData.value
        })
        hotelstore.formsubmit = true
        router.push('/contactus/thanks')
    }catch{
        hotelstore.formsubmit = false
        router.push('/contactus/thanks')
    }
}

useSeoMeta({
  title: 'Contact Us | Tea Garden Eco Villas Morawaka',

  description: 'Contact Tea Garden Eco Villas in Morawaka for bookings and inquiries. Phone: +94 77 687 4714 | Email: teagardenecovilla@gmail.com | Located on Rambukana-Kodikaradoda Road near Sinharaja Rainforest.',  // 148 characters

  // Open Graph
  ogTitle: 'Contact Us - Tea Garden Eco Villas | Book Your Stay in Morawaka, Sri Lanka',
  ogDescription: 'Contact Tea Garden Eco Villas in Morawaka for bookings and inquiries. Phone: +94 77 687 4714 | Email: teagardenecovilla@gmail.com | Located on Rambukana-Kodikaradoda Road near Sinharaja Rainforest.',
  ogImage: 'https://ik.imagekit.io/myHotelSolutions/TeaGardenEcovillas/Accomodation%20view/DSC00583.jpg?updatedAt=1765251356513',
  ogImageAlt: 'Serene view of lush tea estates and mountains at Tea Garden Eco Villas, Morawaka, Sri Lanka',
  ogType: 'website',
  ogUrl: 'https://www.teagardenecovillas.com/contactus',
  ogSiteName: 'Tea Garden Eco Villas',
  ogLocale: 'en_US',

  // Twitter Card
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contact Us - Tea Garden Eco Villas | Book Your Stay in Morawaka, Sri Lanka',
  twitterDescription: 'Contact Tea Garden Eco Villas in Morawaka for bookings and inquiries. Phone: +94 77 687 4714 | Email: teagardenecovilla@gmail.com | Located on Rambukana-Kodikaradoda Road near Sinharaja Rainforest.',
  twitterImage: 'https://ik.imagekit.io/myHotelSolutions/TeaGardenEcovillas/Accomodation%20view/DSC00583.jpg?updatedAt=1765251356513',
  twitterImageAlt: 'Serene view of lush tea estates and mountains at Tea Garden Eco Villas, Morawaka, Sri Lanka',

  // Robots & Canonical
  robots: 'index, follow',
  canonical: 'https://www.teagardenecovillas.com/contactus', 

  // Geo locations (helpful for local searches on contact pages)
  geoPosition: '6.7667;80.5833',
  geoPlacename: 'Morawaka, Sri Lanka',
  geoRegion: 'LK',

  // Branding
  applicationName: 'Tea Garden Eco Villas',
})

</script>