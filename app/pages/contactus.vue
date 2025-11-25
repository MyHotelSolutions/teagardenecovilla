<template>
    <div class="">
        <menubar></menubar>
        <Headerimage  title="Contact us" description="Discover vibrant adventures right at your doorstep, then return to pure  tranquility."></Headerimage>
        
        <!-- content -->
        <div class="flex flex-col gap-12 h-auto w-[75vw] mx-auto py-30">
            <!-- map and contact form -->
            <div class="grid grid-cols-2">
                
                <!-- map section -->
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

                <!-- form section -->
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
    
            <!-- contact -->
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

</script>