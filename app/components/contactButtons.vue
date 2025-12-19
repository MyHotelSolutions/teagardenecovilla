<template>
    <div class="flex flex-col gap-4 fixed bottom-20 right-10 xl:right-20 z-100">
        <!-- this is for lager screens -->
        <div class="hidden xl:block">
            <div class="flex flex-col gap-2" v-if="!hideContact">
                <a href="https://www.google.com/maps/search/?api=1&query=Tea+Garden+Eco+Villa+Morawaka" 
                    target="_blank">
                    <div class="group w-12 h-12 bg-teal-800 rounded-full flex flex-col justify-center items-center hover:bg-teal-500">
                        <Icon name="material-symbols:add-location-alt" class="group-hover:text-teal-800 text-xl text-white"></Icon>
                    </div>
                </a>
                <div class="group w-12 h-12 bg-teal-800 rounded-full flex flex-col justify-center items-center hover:bg-teal-500" @click="openWhatsapp">
                    <Icon name="garden:whatsapp-stroke-12" class="group-hover:text-teal-800 text-xl text-white"></Icon>
                </div>
                <a href="tel:+9477 687 4714">
                    <div class="group w-12 h-12 bg-teal-800 rounded-full flex flex-col justify-center items-center hover:bg-teal-500">
                        <Icon name="material-symbols:add-call-rounded" class="group-hover:text-teal-800 text-xl text-white"></Icon>
                    </div>
                </a>
                <a href="mailto:teagardenecovilla@gmail.com">
                    <div class="group w-12 h-12 bg-teal-800 rounded-full flex flex-col justify-center items-center hover:bg-teal-500">
                        <Icon name="uil:envelope-add" class="group-hover:text-teal-800 text-xl text-white"></Icon>
                    </div>
                </a>
            </div>
            <div class="group p-3 bg-teal-800 rounded-full flex flex-col justify-center items-center hover:bg-teal-500" v-if="hideContact" @click="hideContact = false">
                <Icon name="ri:customer-service-2-fill" class="group-hover:text-teal-800 text-3xl text-white"></Icon>
            </div>
        </div>

        <!-- this is for small screen -->
        <div class="group w-12 h-12 bg-teal-800 rounded-full flex flex-col justify-center items-center hover:bg-teal-500 xl:hidden" @click="openWhatsapp">
            <Icon name="garden:whatsapp-stroke-12" class="group-hover:text-teal-800 text-xl text-white"></Icon>
        </div>
    </div>
</template>

<script setup>

const hideContact = ref(true)

const openWhatsapp = () => {
    window.open('https://wa.me/+447702778744?text=Hi...%20I%20woud%20like%20to%20book%20this%20vill.%20can%20I%20know%20what%20are%20the%20dates%20available%20in%20next%20week%20?')
}

</script>