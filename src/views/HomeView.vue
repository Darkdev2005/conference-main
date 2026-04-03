<template>
  <main class="home">
    <TheWelcome />
    <ConferenceIntro />
    <PartnersView />
  </main>
</template>

<script>
import TheWelcome from '@/components/Home/TheWelcome.vue'
import ConferenceIntro from '@/components/Home/ConferenceIntro.vue'
import PartnersView from '@/views/PartnersView.vue'

export default {
  name: 'HomeView',
  components: { TheWelcome, ConferenceIntro, PartnersView }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>
