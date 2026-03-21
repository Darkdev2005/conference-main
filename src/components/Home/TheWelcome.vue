<template>
  <section class="hero">
    <div class="hero-slider">
      <transition-group name="fade-slide" tag="div" class="slider-track">
        <div
          v-for="(img, i) in images"
          :key="img"
          v-show="i === currentIndex"
          class="slide"
          :style="{ backgroundImage: `url(${img})` }"
        />
      </transition-group>
      <div class="hero-overlay" />

      <button class="slide-btn slide-btn--left" @click="prevSlide" aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
      </button>
      <button class="slide-btn slide-btn--right" @click="nextSlide" aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
      </button>

      <div class="slide-dots">
        <button
          v-for="(_, i) in images"
          :key="i"
          class="dot"
          :class="{ active: i === currentIndex }"
          @click="currentIndex = i"
          :aria-label="`Slide ${i + 1}`"
        />
      </div>
    </div>

    <div class="hero-content">
      <div class="content-card">
        <div class="conference-badge">
          <span class="badge-dot" />
          8th International Conference
        </div>

        <h1 class="hero-title">
          <span class="title-main">TCCE</span>
          <span class="title-year">2026</span>
        </h1>

        <p class="hero-subtitle">
          Trends in Computational and Cognitive Engineering
        </p>

        <div class="hero-meta">
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="meta-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            2026 (Dates to be announced)
          </div>
          <div class="meta-divider" />
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="meta-icon"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
            Hybrid Mode
          </div>
          <div class="meta-divider" />
          <div class="meta-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="meta-icon"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            Samarkand, Uzbekistan
          </div>
        </div>

        <div class="hero-actions">
          <a :href="registerFormUrl" target="_blank" class="btn btn-primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
            Register Now
          </a>
          <a :href="submissionDetailsUrl" class="btn btn-outline">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            Submission Details
          </a>
        </div>

        <div class="organizer">
          <span class="organizer-label">Organized by</span>
          <p class="organizer-text">
            <a href="https://www.samdu.uz" target="_blank" class="organizer-link">Samarkand State University named after Sharof Rashidov</a>,
            Uzbekistan - in association with IIoIR, India and ACCBI Centre, India.
          </p>
        </div>
      </div>

      <div class="countdown-wrap">
        <div class="status-badge status-live">
          <CalendarDays class="status-icon" />
          Official dates will be announced soon
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { CalendarDays } from 'lucide-vue-next'
import { publicAsset } from '@/utils/publicAsset'

const images = [
  'slider/samdu.jpg',
  'slider/samarkand-uzbekistan-kupol-mechet-ploshchad.png',
  'slider/78fb3fe8-2cf3-bb08-dc43-f1dc8a012c09_lists_slider_.jpeg',
  'slider/activity-1316-1-2000-0-20230119171148.jpg',
  'slider/samrkand.jpg',
  'slider/shutterstock_1979665571-0-0-0-0-1738745770.jpg',
  'slider/unnamed.jpg',
  'slider/unnamed1.jpg',
  'slider/unnamed2.jpg',
].map(publicAsset)
const registerFormUrl = publicAsset('register-form')
const submissionDetailsUrl = publicAsset('paper')

const currentIndex = ref(0)
let sliderTimer = null

const nextSlide = () => { currentIndex.value = (currentIndex.value + 1) % images.length }
const prevSlide = () => { currentIndex.value = (currentIndex.value - 1 + images.length) % images.length }

onMounted(() => {
  sliderTimer = setInterval(nextSlide, 4500)
})

onBeforeUnmount(() => {
  clearInterval(sliderTimer)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-slider {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.slider-track {
  position: relative;
  width: 100%;
  height: 100%;
}

.slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(7, 15, 43, 0.82) 0%,
    rgba(10, 25, 70, 0.65) 60%,
    rgba(0,0,0,0.5) 100%
  );
  z-index: 1;
}

.slide-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  backdrop-filter: blur(4px);
}

.slide-btn:hover {
  background: rgba(255,255,255,0.25);
  transform: translateY(-50%) scale(1.1);
}

.slide-btn svg {
  width: 18px;
  height: 18px;
  stroke-width: 2.5;
}

.slide-btn--left { left: 16px; }
.slide-btn--right { right: 16px; }

.slide-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.35);
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
}

.dot.active {
  background: #fff;
  transform: scale(1.3);
}

.hero-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 860px;
  margin: 0 auto;
  padding: 6rem 1.5rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.content-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(18px);
  border-radius: 20px;
  padding: 2.5rem 2rem;
  text-align: center;
  color: #fff;
  width: 100%;
}

.conference-badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  background: rgba(59, 130, 246, 0.25);
  border: 1px solid rgba(96, 165, 250, 0.4);
  color: #bfdbfe;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 100px;
  margin-bottom: 1.25rem;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #60a5fa;
  animation: pulse-dot 2s ease infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.75); }
}

.hero-title {
  font-family: 'Crimson Pro', serif;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 0.2em;
}

.title-main {
  font-size: clamp(3.5rem, 8vw, 6rem);
  color: #fff;
  letter-spacing: 0.06em;
}

.title-year {
  font-size: clamp(1.8rem, 4vw, 3rem);
  color: #60a5fa;
  letter-spacing: 0.04em;
}

.hero-subtitle {
  font-family: 'DM Sans', sans-serif;
  font-size: clamp(0.9rem, 2vw, 1.15rem);
  color: rgba(255,255,255,0.7);
  letter-spacing: 0.02em;
  margin-bottom: 1.5rem;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 1rem;
  margin-bottom: 2rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  color: rgba(255,255,255,0.85);
}

.meta-icon {
  width: 15px;
  height: 15px;
  stroke-width: 2;
  color: #93c5fd;
  flex-shrink: 0;
}

.meta-divider {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.22s ease;
  border: 1px solid transparent;
}

.btn svg {
  width: 16px;
  height: 16px;
  stroke-width: 2;
}

.btn-primary {
  background: #2563eb;
  color: #fff;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.5);
}

.btn-primary:hover {
  background: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(37, 99, 235, 0.55);
}

.btn-outline {
  background: transparent;
  color: #fff;
  border-color: rgba(255,255,255,0.35);
}

.btn-outline:hover {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.6);
  transform: translateY(-2px);
}

.organizer {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 1.25rem;
  text-align: center;
}

.organizer-label {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #93c5fd;
  margin-bottom: 0.4rem;
}

.organizer-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.6;
}

.organizer-link {
  color: rgba(255,255,255,0.8);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: color 0.15s;
}

.organizer-link:hover {
  color: #fff;
}

.countdown-wrap {
  display: flex;
  justify-content: center;
}

.countdown {
  display: flex;
  gap: 1rem;
}

.countdown-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.12);
  backdrop-filter: blur(10px);
  border-radius: 14px;
  padding: 1rem 1.25rem;
  min-width: 72px;
}

.countdown-num {
  font-family: 'Crimson Pro', serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  letter-spacing: 0.02em;
}

.countdown-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin-top: 4px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 50px;
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  position: relative;
}

.status-live {
  background: rgba(22, 163, 74, 0.25);
  border: 1px solid rgba(74, 222, 128, 0.4);
}

.status-ended {
  background: rgba(71, 85, 105, 0.4);
  border: 1px solid rgba(148, 163, 184, 0.3);
}

.status-icon {
  width: 22px;
  height: 22px;
}

.pulse-ring {
  position: absolute;
  left: 20px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #4ade80;
  animation: pulse-ring 2s ease infinite;
}

@keyframes pulse-ring {
  0% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0.6); }
  70% { box-shadow: 0 0 0 12px rgba(74, 222, 128, 0); }
  100% { box-shadow: 0 0 0 0 rgba(74, 222, 128, 0); }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 1s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .countdown { gap: 0.5rem; }
  .countdown-unit { min-width: 58px; padding: 0.75rem 0.75rem; }
  .countdown-num { font-size: 1.75rem; }
  .hero-meta { flex-direction: column; gap: 0.4rem; }
  .meta-divider { display: none; }
}
</style>


