<template>
  <section class="yt-section">
    <div class="yt-inner">

      <div class="section-header">
        <span class="eyebrow">Conference Gallery</span>
        <h1 class="section-title">TCCE 2026 - Videos</h1>
        <p class="section-desc">Watch highlights, presentations, and conference moments from the official YouTube channel</p>
      </div>

      <div v-if="loading" class="loading-grid">
        <div v-for="i in 6" :key="i" class="skeleton-card">
          <div class="skeleton-thumb" />
          <div class="skeleton-body">
            <div class="skeleton-line skeleton-line--title" />
            <div class="skeleton-line skeleton-line--sub" />
            <div class="skeleton-line skeleton-line--short" />
          </div>
        </div>
      </div>

      <div v-else-if="error" class="error-state">
        <AlertCircle class="error-icon" />
        <p class="error-text">{{ error }}</p>
        <button class="retry-btn" @click="loadVideos">Try Again</button>
      </div>

      <div v-else-if="videos.length" class="videos-grid">
        <div
          v-for="v in videos"
          :key="v.videoId"
          class="video-card"
          :class="{ 'video-card--active': activeVideo === v.videoId }"
        >
          <div class="video-thumb-wrap">
            <iframe
              v-if="activeVideo === v.videoId"
              :src="`https://www.youtube.com/embed/${v.videoId}?autoplay=1&rel=0`"
              class="video-iframe"
              allow="autoplay; encrypted-media; picture-in-picture"
              frameborder="0"
              allowfullscreen
            />
            <template v-else>
              <img :src="v.thumbnail" :alt="v.title" class="video-thumb" />
              <div class="video-play-overlay" @click="activeVideo = v.videoId">
                <div class="play-btn">
                  <Play class="play-icon" />
                </div>
                <span class="play-label">Watch</span>
              </div>
            </template>
          </div>

          <div class="video-body">
            <h3 class="video-title">{{ v.title }}</h3>
            <p class="video-date">{{ formatDate(v.publishedAt) }}</p>

            <div class="video-stats">
              <div class="stat-pill">
                <Eye class="stat-pill-icon" />
                {{ formatNumber(v.views) }}
              </div>
              <div class="stat-pill">
                <ThumbsUp class="stat-pill-icon" />
                {{ formatNumber(v.likes) }}
              </div>
            </div>

            <button class="watch-btn" @click="activeVideo = v.videoId">
              <Youtube class="watch-btn-icon" />
              Watch Here
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Eye, ThumbsUp, Youtube, Play, AlertCircle } from 'lucide-vue-next'

const props = defineProps({
  handle: { type: String, required: true }
})

const API_KEY    = 'AIzaSyD1BWbVd-qNe0BBv75y9J7r394yulJ99po'
const loading    = ref(false)
const error      = ref(null)
const videos     = ref([])
const activeVideo = ref(null)

async function getChannelId(handle) {
  const res  = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${handle}&key=${API_KEY}`)
  const data = await res.json()
  if (!data.items?.length) throw new Error('Channel not found')
  return data.items[0].snippet.channelId
}

async function loadVideos() {
  loading.value = true
  error.value   = null
  try {
    const channelId = await getChannelId(props.handle)
    const listRes   = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=18&type=video&key=${API_KEY}`)
    const listData  = await listRes.json()
    const ids       = listData.items.map(i => i.id.videoId).join(',')
    const statsRes  = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=${ids}&key=${API_KEY}`)
    const statsData = await statsRes.json()

    videos.value = statsData.items.slice().reverse().map(v => ({
      videoId:     v.id,
      title:       v.snippet.title,
      publishedAt: v.snippet.publishedAt,
      thumbnail:   v.snippet.thumbnails.medium.url,
      views:       v.statistics.viewCount,
      likes:       v.statistics.likeCount,
    }))
  } catch (err) {
    error.value = err.message
  }
  loading.value = false
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatNumber(n) {
  if (!n) return '0'
  const num = Number(n)
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
  return num.toLocaleString()
}

onMounted(loadVideos)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');

.yt-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.yt-inner {
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
  color: #dc2626;
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
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.65;
}

.loading-grid,
.videos-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 600px) {
  .loading-grid,
  .videos-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 960px) {
  .loading-grid,
  .videos-grid { grid-template-columns: repeat(3, 1fr); }
}

.skeleton-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 18px;
  overflow: hidden;
}

.skeleton-thumb {
  width: 100%;
  height: 180px;
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

.skeleton-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-line {
  height: 12px;
  border-radius: 6px;
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 200% 100%;
  animation: shimmer 1.4s infinite;
}

.skeleton-line--title { width: 85%; height: 16px; }
.skeleton-line--sub   { width: 50%; }
.skeleton-line--short { width: 35%; }

@keyframes shimmer {
  to { background-position: -200% 0; }
}

.error-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 3rem;
  background: #fff;
  border: 1px solid #fecdd3;
  border-radius: 18px;
  text-align: center;
}

.error-icon { width: 32px; height: 32px; color: #dc2626; }

.error-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: #991b1b;
}

.retry-btn {
  padding: 8px 20px;
  background: #dc2626;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.18s;
}

.retry-btn:hover { background: #b91c1c; }

.video-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 14px rgba(0,0,0,0.05);
  transition: box-shadow 0.24s, transform 0.24s;
  display: flex;
  flex-direction: column;
}

.video-card:hover {
  box-shadow: 0 10px 34px rgba(0,0,0,0.1);
  transform: translateY(-3px);
}

.video-card--active {
  border-color: #fca5a5;
  box-shadow: 0 6px 28px rgba(220, 38, 38, 0.12);
}

.video-thumb-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: #000;
}

.video-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}

.video-card:hover .video-thumb { transform: scale(1.04); }

.video-iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}

.video-play-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.25);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: opacity 0.22s;
}

.video-thumb-wrap:hover .video-play-overlay { opacity: 1; }

.play-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #dc2626;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(220, 38, 38, 0.5);
  transition: transform 0.18s;
}

.play-btn:hover { transform: scale(1.1); }

.play-icon {
  width: 22px;
  height: 22px;
  color: #fff;
  margin-left: 2px;
}

.play-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.video-body {
  padding: 1.1rem 1.25rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.video-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.35;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.video-date {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: #94a3b8;
}

.video-stats {
  display: flex;
  gap: 0.6rem;
  margin-top: 2px;
}

.stat-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #f8faff;
  border: 1px solid #e2e8f0;
  padding: 3px 10px;
  border-radius: 100px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #475569;
}

.stat-pill-icon { width: 12px; height: 12px; color: #94a3b8; }

.watch-btn {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 9px 16px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.83rem;
  font-weight: 600;
  color: #dc2626;
  cursor: pointer;
  transition: background 0.16s, border-color 0.16s;
}

.watch-btn:hover {
  background: #fff1f2;
  border-color: #fca5a5;
}

.watch-btn-icon { width: 16px; height: 16px; }
</style>
