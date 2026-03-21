<template>
  <div id="app">
    <AppNavbar />
    <main class="page-content">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/Layouts/AppNavbar.vue';
import AppFooter from './components/Layouts/AppFooter.vue';

export default {
  name: 'App',
  components: { AppNavbar, AppFooter }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'DM Sans', sans-serif;
  background: #fafaf8;
  color: #1c1917;
  -webkit-font-smoothing: antialiased;
}

.page-content {
  padding-top: calc(72px + 40px);
  min-height: 100vh;
}

a {
  color: inherit;
}

img {
  max-width: 100%;
}
</style>