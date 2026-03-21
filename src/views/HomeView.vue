<template>
  <main class="home">
    <TheWelcome />
    <ConferenceIntro />
  </main>
</template>

<script>
import TheWelcome from '@/components/Home/TheWelcome.vue'
import ConferenceIntro from '@/components/Home/ConferenceIntro.vue'

export default {
  name: 'HomeView',
  components: { TheWelcome, ConferenceIntro }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
}
</style>