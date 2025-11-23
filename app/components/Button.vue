<!-- <template>
  <button :class="buttonClasses">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

const baseStyle = "px-8 py-3 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
const variants = {
  primary: "bg-teal-900 text-white hover:bg-teal-800 focus:ring-teal-900 shadow-lg hover:shadow-xl",
  secondary: "bg-stone-100 text-stone-800 hover:bg-stone-200 focus:ring-stone-500 border border-stone-200",
  outline: "border-2 border-white text-white hover:bg-white hover:text-teal-900 focus:ring-white"
}

const buttonClasses = computed(() => {
  return `${baseStyle} ${variants[variants]} ${className}`
})
</script> -->


<template>
  <button :class="`${variants[variant]} ${baseStyle}`">
    <slot />
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary'
  }
})

const baseStyle = "px-8 py-3 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2"
const variants = {
  primary: "bg-teal-900 text-white hover:bg-teal-800 focus:ring-teal-900 shadow-lg hover:shadow-xl",
  secondary: "bg-stone-100 text-stone-800 hover:bg-stone-200 focus:ring-stone-500 border border-stone-200",
  outline: "border-2 border-white text-white hover:bg-white hover:text-teal-900 focus:ring-white"
}

</script>