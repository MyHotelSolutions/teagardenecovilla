<template>
    <div class="max-w-5xl mx-auto w-full md:pl-0 pl-10 h-auto">
        <UStepper :items="items" size="lg" :model-value="step" color="neutral" :orientation="axis" disabled/>
    </div>  
</template>

<script setup>

const axis = ref(null)
const props = defineProps(
  {
    step : {
      default : 0,
      type : Number
    }
  }
)

const items = ref([
  {
    title: 'Room selection',
    description: 'Select your desire rooms.',
    icon: 'material-symbols:door-open-outline-rounded'
},
{
    title: 'Payment',
    description: 'Set your preferred shipping method',
    icon: 'material-symbols:add-card-rounded'
},
{
    title: 'Complate',
    description: 'Confirm your order', 
    icon: 'material-symbols:check-circle'
  }
])

onMounted(() => {
  const screenWidth = window.innerWidth
  if(screenWidth >= 768){
    axis.value = 'horizontal'
  }else if(screenWidth < 768){
    axis.value = 'vertical'
  }
})

</script>