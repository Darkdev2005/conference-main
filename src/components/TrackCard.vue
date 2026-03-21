<!-- TrackCard.vue -->
<script setup>
defineProps({
  icon: Object,
  title: String,
  subtitle: String
})
</script>

<template>
  <div class="bg-white border border-gray-300 rounded-xl shadow-lg p-6 w-full max-w-xs text-center transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
    <component :is="icon" class="w-10 h-10 mx-auto text-indigo-600 mb-4" />
    <h2 class="text-xl font-bold text-indigo-700 mb-2">{{ title }}</h2>
    <h3 class="text-base font-medium text-gray-800">{{ subtitle }}</h3>
  </div>
</template>
