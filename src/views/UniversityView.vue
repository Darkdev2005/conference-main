<template>
  <section class="university-section">
    <div class="university-inner">

      <div class="section-header">
        <span class="eyebrow">Host Institution</span>
        <h1 class="section-title">Samarkand State University</h1>
        <p class="section-desc">One of Central Asia's oldest and most distinguished institutions of higher learning</p>
      </div>

      <div class="rector-block">
        <div class="rector-image-wrap">
          <img :src="rectorImageUrl" alt="Rector of Samarkand State University" class="rector-image" />
          <div class="rector-badge">
            <div class="rector-badge-dot" />
            Host University
          </div>
        </div>
        <div class="rector-info">
          <span class="rector-eyebrow">Message from the Rector</span>
          <h2 class="rector-name">Rustam Kholmurodov</h2>
          <p class="rector-title">Rector of Samarkand State University<br>Honored Scientist of the Republic of Uzbekistan<br>Member of the Senate of the Oliy Majlis</p>
        </div>
      </div>

      <div class="stats-row">
        <div class="stat-card" v-for="stat in stats" :key="stat.label">
          <span class="stat-num">{{ stat.num }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>

      <div class="content-block">
        <div class="block-heading-row">
          <div class="block-line" />
          <h2 class="block-heading">About the University</h2>
          <div class="block-line" />
        </div>

        <div class="prose-grid">
          <p v-for="(para, i) in paragraphs" :key="i" class="prose-p">{{ para }}</p>
        </div>
      </div>

      <div class="video-block">
        <div class="block-heading-row">
          <div class="block-line" />
          <h2 class="block-heading">University Video</h2>
          <div class="block-line" />
        </div>

        <div class="video-wrap">
          <p class="video-placeholder">University video will be published soon.</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { publicAsset } from '@/utils/publicAsset'

const rectorImageUrl = publicAsset('rektor.jpg')

const stats = [
  { num: '600+',  label: 'Years of History' },
  { num: '17,000+', label: 'Undergraduate Students' },
  { num: '700+',  label: 'Graduate Students' },
  { num: '900',   label: 'Professors & Teachers' },
  { num: '72',    label: 'Educational Programs' },
  { num: '3M+',   label: 'Library Books' },
]

const paragraphs = [
  'Samarkand State University is not only a famous and ancient higher education institution in Uzbekistan but also in many countries around the world. Although the official founding of SamDU dates back to 1927, its formation and acquisition of higher education status are closely linked to the Mirzo Ulughbek Madrasa — giving it a history of over 600 years.',
  'Great figures from our history, such as Mirzo Ulughbek, Qozizoda Rumi, Ali Qushchi, G\'iyosiddin Koshiy, Alisher Navoi, and Abdurahmon Jami, elevated enlightenment and culture in Samarkand and laid the foundations of world civilization.',
  'Samarkand State University was initially established in 1927 as the Higher Pedagogical Institute. In 1930 it became the Uzbekistan State Pedagogical Academy, in 1933 it transformed into Uzbekistan State University, and since 1960 it has been known by its current name.',
  'Currently, the university has 7 faculties and 4 institutes with 59 departments offering 72 educational programs. Students are taught by nearly 900 professors and teachers, including 3 academicians, 115 doctors of science, and 440 candidates of science and PhD holders.',
  'The university library holds more than 3 million scientific and educational publications, including nearly 15,000 rare books and Eastern manuscripts. The campus also operates 1 academic lyceum, 2 schools, 4 museums, 1 orangery, and 2 unique landmark structures.',
  'Among graduates, 13 have become world champions, 80 Asian champions, and over 170 Uzbekistan champions. Three have won Olympic and Paralympic gold medals — a testament to the university\'s holistic approach to student development.',
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');

.university-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.university-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.65;
}

.rector-block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.06);
}

@media (min-width: 720px) {
  .rector-block { flex-direction: row; }
}

.rector-image-wrap {
  position: relative;
  flex-shrink: 0;
  width: 100%;
}

@media (min-width: 720px) {
  .rector-image-wrap { width: 420px; }
}

.rector-image {
  width: 100%;
  height: 340px;
  object-fit: cover;
  display: block;
}

@media (min-width: 720px) {
  .rector-image { height: 100%; min-height: 300px; }
}

.rector-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(37, 99, 235, 0.25);
  border-radius: 100px;
  padding: 5px 14px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #1d4ed8;
}

.rector-badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #2563eb;
  animation: pulse-dot 2s ease infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.75); }
}

.rector-info {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
}

.rector-eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #2563eb;
}

.rector-name {
  font-family: 'Crimson Pro', serif;
  font-size: 2rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.1;
}

.rector-title {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.7;
  font-style: italic;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 540px) {
  .stats-row { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 860px) {
  .stats-row { grid-template-columns: repeat(6, 1fr); }
}

.stat-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-top: 3px solid #2563eb;
  border-radius: 14px;
  padding: 1.1rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.04);
  transition: box-shadow 0.2s, transform 0.2s;
}

.stat-card:hover {
  box-shadow: 0 6px 22px rgba(37, 99, 235, 0.1);
  transform: translateY(-2px);
}

.stat-num {
  font-family: 'Crimson Pro', serif;
  font-size: 1.65rem;
  font-weight: 700;
  color: #1d4ed8;
  line-height: 1;
}

.stat-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  color: #64748b;
  margin-top: 5px;
  line-height: 1.3;
}

.content-block,
.video-block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.block-heading-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.block-line {
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}

.block-heading {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2563eb;
  white-space: nowrap;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  padding: 6px 16px;
  border-radius: 100px;
}

.block-heading-icon {
  width: 13px;
  height: 13px;
}

.prose-grid {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.prose-p {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.8;
  text-align: justify;
}

.video-wrap {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 6px 32px rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.06);
  background: #eff6ff;
}

.video-placeholder {
  margin: 0;
  padding: 2rem 1.25rem;
  font-family: 'DM Sans', sans-serif;
  color: #1e40af;
  text-align: center;
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>