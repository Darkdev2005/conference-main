<template>
    <div class="w-full max-w-4xl mx-auto">
      <Swiper
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        navigation
        class="rounded-2xl overflow-hidden shadow-lg"
      >
        <SwiperSlide v-for="(img, index) in images" :key="index">
          <img :src="img" class="w-full h-64 object-cover sm:h-96" />
        </SwiperSlide>
      </Swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
  
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  
  export default {
    name: 'ImageSlider',
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      images: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  /* Extra style if you need to tweak dots/buttons */
  </style>
  