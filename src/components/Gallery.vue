<template>
  <section class="gallery-section">
    <div class="gallery-inner">

      <div class="section-header">
        <span class="eyebrow">Conference Memories</span>
        <h1 class="section-title">Photo Gallery</h1>
        <p class="section-desc">Captured moments from the TCCE series - presentations, networking, and collaboration across institutions</p>
      </div>

      <div v-if="loading" class="skeleton-grid">
        <div v-for="i in 9" :key="i" class="skeleton-item" />
      </div>

      <template v-else>
        <div class="photos-grid">
          <a
            v-for="(image, i) in paginatedImages"
            :key="i"
            :href="image"
            data-fancybox="gallery"
            class="photo-item"
          >
            <img :src="image" loading="lazy" alt="Gallery photo" class="photo-img" />
            <div class="photo-overlay">
              <ZoomIn class="photo-zoom-icon" />
            </div>
          </a>
        </div>

        <div v-if="totalPages > 1" class="pagination">
          <button class="page-btn" @click="prevPage" :disabled="currentPage === 1">
            <ChevronLeft class="page-btn-icon" />
            Previous
          </button>

          <div class="page-indicator">
            <span class="page-current">{{ currentPage }}</span>
            <span class="page-sep">/</span>
            <span class="page-total">{{ totalPages }}</span>
          </div>

          <button class="page-btn" @click="nextPage" :disabled="currentPage === totalPages">
            Next
            <ChevronRight class="page-btn-icon" />
          </button>
        </div>
      </template>

    </div>
  </section>

  <YouTubeChannelVideos handle="TEHI2025Samarkand" />
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-vue-next'
import YouTubeChannelVideos from '@/components/YouTubeChannelVideos.vue'

const images      = ref([])
const loading     = ref(true)
const perPage     = 16
const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(images.value.length / perPage))

const paginatedImages = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return images.value.slice(start, start + perPage)
})

const nextPage = () => { if (currentPage.value < totalPages.value) currentPage.value++ }
const prevPage = () => { if (currentPage.value > 1) currentPage.value-- }

onMounted(async () => {
  try {
    const modules = import.meta.glob('/src/assets/images/gallery/*.{jpg,jpeg,png,webp}', { eager: true })
    images.value = Object.values(modules).map(m => m.default)

    setTimeout(() => {
      loading.value = false
      Fancybox.bind("[data-fancybox='gallery']", {
        Thumbs: false,
        Toolbar: { display: ['close'] },
      })
    }, 800)
  } catch (err) {
    console.error('Image loading error:', err)
    loading.value = false
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');

.gallery-section {
  background: #f8faff;
  padding: 5rem 0 4rem;
}

.gallery-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.section-header { text-align: center; }

.eyebrow {
  display: inline-block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.section-title {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
  line-height: 1.15;
}

.section-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #64748b;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.65;
}

.skeleton-grid,
.photos-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.85rem;
}

@media (min-width: 600px) {
  .skeleton-grid,
  .photos-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 960px) {
  .skeleton-grid,
  .photos-grid { grid-template-columns: repeat(4, 1fr); }
}

.skeleton-item {
  aspect-ratio: 4/3;
  border-radius: 14px;
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

@keyframes shimmer { to { background-position: -200% 0; } }

.photo-item {
  display: block;
  position: relative;
  aspect-ratio: 4/3;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  cursor: pointer;
  text-decoration: none;
}

.photo-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.45s ease;
}

.photo-item:hover .photo-img { transform: scale(1.07); }

.photo-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.25s;
}

.photo-item:hover .photo-overlay { opacity: 1; }

.photo-zoom-icon {
  width: 28px;
  height: 28px;
  color: #fff;
  filter: drop-shadow(0 2px 6px rgba(0,0,0,0.4));
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.page-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 20px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  color: #1e293b;
  cursor: pointer;
  transition: background 0.18s, border-color 0.18s, transform 0.18s;
}

.page-btn:hover:not(:disabled) {
  background: #eff6ff;
  border-color: #bfdbfe;
  color: #2563eb;
  transform: translateY(-1px);
}

.page-btn:disabled { opacity: 0.4; cursor: not-allowed; }

.page-btn-icon { width: 15px; height: 15px; }

.page-indicator {
  display: flex;
  align-items: center;
  gap: 5px;
  background: #f0f4ff;
  border: 1px solid #c7d7fc;
  padding: 7px 18px;
  border-radius: 10px;
}

.page-current {
  font-family: 'Crimson Pro', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1d4ed8;
}

.page-sep {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #94a3b8;
}

.page-total {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #64748b;
}
</style>
