<template>
    <div class="">
        <UStepper :items="items" size="xl" :model-value="step"/>
    </div>  
</template>

<script setup>

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
    icon: 'material-symbols-light:bedroom-parent'
},
{
    title: 'Payment',
    description: 'Set your preferred shipping method',
    icon: 'material-symbols-light:payments-outline-rounded'
},
{
    title: 'Complate',
    description: 'Confirm your order', 
    icon: 'material-symbols-light:bookmark-check-rounded'
  }
])
</script>