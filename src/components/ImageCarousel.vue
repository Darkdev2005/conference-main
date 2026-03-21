<template>
  <div class="relative max-w-5xl w-auto h-80 overflow-hidden rounded-2xl shadow-lg">
    <div
      class="flex transition-transform duration-700 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="min-w-full flex-shrink-0"
      >
        <img :src="image" alt="Carousel Image" class="w-full h-64 object-cover" />
      </div>
    </div>

    <!-- Navigation buttons -->
    <div class="flex flex-wrap justify-center mt-4 gap-3">
      <button
        v-for="(image, index) in images"
        :key="'btn-' + index"
        @click="goToSlide(index)"
        :class="[
          'w-4 h-4 rounded-full',
          currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
        ]"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const images = [
  'https://picsum.photos/id/1018/800/400',
  'https://picsum.photos/id/1015/800/400',
  'https://picsum.photos/id/1019/800/400',
  'https://picsum.photos/id/1020/800/400',
  'https://picsum.photos/id/1021/800/400',
  'https://picsum.photos/id/1022/800/400',
  // Kerak bo'lsa, yana ko'paytir
];

const currentIndex = ref(0);
let intervalId;

const startCarousel = () => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 3000);
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  startCarousel();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>
