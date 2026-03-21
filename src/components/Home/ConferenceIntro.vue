<template>
  <div class="intro-wrapper">
    <section class="intro-section">
      <div class="section-grid">
        <div class="text-col">
          <div class="section-eyebrow">About the Conference</div>
          <h2 class="section-title">About TCCE 2026</h2>
          <div class="prose">
            <p>
              The International Conference on Trends in Computational and Cognitive Engineering (TCCE)
              is an annual interdisciplinary forum at the intersection of cognitive science and
              computational engineering.
            </p>
            <p>
              Established in 2019 by Prof. Kanad Ray and Prof. Anirban Bandyopadhyay, the conference
              series has evolved into a strong platform for researchers, academics, industry professionals,
              and students to exchange ideas and build collaborations.
            </p>
            <p>
              TCCE 2026 at Samarkand State University, Uzbekistan, focuses on AI, machine learning,
              neuroscience, data analytics, robotics, and sustainable computing applications across
              health, education, finance, environment, and engineering sectors.
            </p>
            <p>
              The event bridges theory and practice by combining technical discussion, interdisciplinary
              problem solving, and global networking in the historic city of Samarkand.
            </p>
          </div>
        </div>

        <div class="image-col">
          <div class="image-frame">
            <img
              :src="conferenceImage"
              alt="TCCE Conference"
              class="conference-img"
            />
            <div class="image-accent" />
          </div>
          <div class="stat-chips">
            <div class="chip">
              <span class="chip-num">8th</span>
              <span class="chip-label">Edition</span>
            </div>
            <div class="chip">
              <span class="chip-num">TCCE</span>
              <span class="chip-label">Series</span>
            </div>
            <div class="chip">
              <span class="chip-num">Samarkand</span>
              <span class="chip-label">2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="history-section">
      <div class="history-inner">
        <div class="section-eyebrow center">Conference History</div>
        <h2 class="section-title center">Timeline of TCCE (2019-2025)</h2>

        <div class="timeline">
          <div v-for="(event, i) in history" :key="i" class="timeline-item">
            <div class="timeline-dot">
              <span class="dot-year">{{ event.year }}</span>
            </div>
            <div class="timeline-card">
              <div class="timeline-edition">{{ event.edition }}</div>
              <h3 class="timeline-place">{{ event.place }}</h3>
              <p class="timeline-desc">{{ event.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import conferenceImage from '@/assets/images/2025-06-25 at 22.47.34_c011980b.jpg'

const history = [
  {
    year: '2019',
    edition: 'TCCE 2019 (Inception)',
    place: 'Central University of Haryana, Mahendergarh, India',
    desc: 'Held on November 28-30, 2019. First edition of the series with Springer proceedings in Advances in Intelligent Systems and Computing.'
  },
  {
    year: '2020',
    edition: 'TCCE 2020',
    place: 'Jahangirnagar University, Dhaka, Bangladesh',
    desc: 'Held on December 17-18, 2020. Focused on innovations in computational and cognitive engineering.'
  },
  {
    year: '2021',
    edition: 'TCCE 2021 (3rd)',
    place: 'UTHM, Batu Pahat, Malaysia',
    desc: 'Held on October 21-22, 2021 with online/hybrid participation and Springer LNNS Volume 348 proceedings.'
  },
  {
    year: '2022',
    edition: 'TCCE 2022 (4th)',
    place: 'MBSTU, Tangail, Bangladesh',
    desc: 'Held on December 18-19, 2022. Proceedings published in Springer LNNS Volume 618.'
  },
  {
    year: '2023',
    edition: 'TCCE 2023 (5th)',
    place: 'PSIT, Kanpur, India',
    desc: 'Held on November 24-25, 2023 with expanded scale and Springer proceedings in two volumes.'
  },
  {
    year: '2024',
    edition: 'TCCE 2024 (6th)',
    place: 'Amity University Rajasthan, Jaipur, India',
    desc: 'Held on December 26-27, 2024 with Springer LNNS publication.'
  },
  {
    year: '2025',
    edition: 'TCCE 2025 (7th)',
    place: 'UTeM, Malaysia',
    desc: 'Held on November 12-13, 2025 in collaboration with IIoIR and ACCBI Centre under the theme "Connecting Ideas, Computing Futures."',
    current: true
  },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');

.intro-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding-bottom: 5rem;
}

.intro-section,
.history-section {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 24px;
  padding: 3rem 2.5rem;
  box-shadow: 0 4px 32px rgba(0,0,0,0.05);
}

.section-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 900px) {
  .section-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.section-eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.section-eyebrow.center {
  text-align: center;
}

.section-title {
  font-family: 'Crimson Pro', serif;
  font-size: clamp(1.75rem, 3vw, 2.5rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1.5rem;
  line-height: 1.15;
}

.section-title.center {
  text-align: center;
}

.prose p {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.75;
  margin-bottom: 1rem;
}

.prose p:last-child {
  margin-bottom: 0;
}

.image-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;
}

.image-frame {
  position: relative;
  width: 100%;
  max-width: 480px;
}

.conference-img {
  width: 100%;
  border-radius: 16px;
  object-fit: cover;
  display: block;
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
  position: relative;
  z-index: 1;
}

.image-accent {
  position: absolute;
  inset: -10px;
  border-radius: 22px;
  background: linear-gradient(135deg, #dbeafe, #eff6ff);
  z-index: 0;
}

.stat-chips {
  display: flex;
  gap: 0.75rem;
}

.chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f0f4ff;
  border: 1px solid #c7d7fc;
  border-radius: 12px;
  padding: 10px 18px;
}

.chip-num {
  font-family: 'Crimson Pro', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #1d4ed8;
  line-height: 1;
}

.chip-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #64748b;
  margin-top: 2px;
}

.history-inner {
  max-width: 760px;
  margin: 0 auto;
}

.timeline {
  position: relative;
  margin-top: 2.5rem;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 54px;
  top: 12px;
  bottom: 12px;
  width: 2px;
  background: linear-gradient(180deg, #2563eb 0%, #93c5fd 100%);
  z-index: 0;
}

.timeline-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding-bottom: 2rem;
  position: relative;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-dot {
  flex-shrink: 0;
  width: 54px;
  display: flex;
  justify-content: center;
  padding-top: 2px;
  position: relative;
  z-index: 1;
}

.dot-year {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 26px;
  background: #2563eb;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  border-radius: 100px;
  letter-spacing: 0.05em;
  box-shadow: 0 0 0 4px #fff, 0 0 0 6px #bfdbfe;
}

.timeline-card {
  flex: 1;
  background: #f8faff;
  border: 1px solid #e0e7ff;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  transition: box-shadow 0.2s, transform 0.2s;
}

.timeline-card:hover {
  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.1);
  transform: translateX(3px);
}

.timeline-edition {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #3b82f6;
  margin-bottom: 3px;
}

.timeline-place {
  font-family: 'Crimson Pro', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 4px;
}

.timeline-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.6;
}

@media (max-width: 600px) {
  .intro-section,
  .history-section {
    padding: 2rem 1.25rem;
  }

  .timeline::before {
    left: 42px;
  }

  .timeline-dot {
    width: 42px;
  }
}
</style>
