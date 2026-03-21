<template>
  <section class="partners-section">
    <div class="partners-inner">

      <div class="section-header">
        <span class="eyebrow">Collaborating Institutions</span>
        <h1 class="section-title">Our Partners</h1>
        <p class="section-desc">TCCE 2026 is proudly organized in association with leading universities and research institutions worldwide</p>
      </div>

      <div class="partners-grid">
        <a
          v-for="(partner, index) in partners"
          :key="index"
          :href="partner.link"
          target="_blank"
          rel="noopener noreferrer"
          class="partner-card"
        >
          <div class="partner-logo-wrap">
            <img :src="partner.logo" :alt="partner.name" class="partner-logo" />
          </div>
          <div class="partner-footer">
            <span class="partner-name">{{ partner.name }}</span>
            <span class="partner-arrow">
              <ExternalLink class="partner-arrow-icon" />
            </span>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<script>
import { ExternalLink } from 'lucide-vue-next'
import Image1   from '@/assets/images/IMG_20240913_150533_321.jpg'
import Image3   from '@/assets/images/WashU-RGB.jpg'
import Image4   from '@/assets/images/GEORGIA-FS-CW.c49269db.png'
import Image5   from '@/assets/images/1734446924181.png'
import AiiLLogo from '@/assets/images/ACCBI Logo.png'
import IIoIR    from '@/assets/images/IIoIR Logo 150p.png'

export default {
  name: 'PartnersView',
  components: { ExternalLink },
  data() {
    return {
      partners: [
        { logo: Image1,   name: 'Samarkand State University',       link: 'https://www.samdu.uz/uz' },
        { logo: Image3,   name: 'WashU',                            link: 'https://washu.edu/' },
        { logo: Image4,   name: 'University of Georgia',            link: 'https://www.uga.edu' },
        { logo: Image5,   name: 'WUST',                             link: 'https://www.wust.edu/' },
        { logo: AiiLLogo, name: 'ACCBI Centre, India & AII Lab, UK', link: 'https://www.amity.edu/jaipur/accbi/' },
        { logo: IIoIR,    name: 'IIoIR',                            link: 'https://www.iioir.org/' },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');

.partners-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.partners-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.section-header {
  text-align: center;
}

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
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.65;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

@media (min-width: 640px) {
  .partners-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (min-width: 900px) {
  .partners-grid { grid-template-columns: repeat(3, 1fr); }
}

.partner-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 14px rgba(0,0,0,0.04);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.24s, transform 0.24s, border-color 0.24s;
}

.partner-card:hover {
  box-shadow: 0 12px 36px rgba(37, 99, 235, 0.12);
  transform: translateY(-4px);
  border-color: #bfdbfe;
}

.partner-logo-wrap {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem;
  min-height: 160px;
  background: #fff;
}

.partner-logo {
  max-width: 100%;
  max-height: 120px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.partner-card:hover .partner-logo {
  transform: scale(1.05);
}

.partner-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.9rem 1.25rem;
  background: #f8faff;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.partner-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.3;
  transition: color 0.18s;
}

.partner-card:hover .partner-name {
  color: #2563eb;
}

.partner-arrow {
  flex-shrink: 0;
  width: 26px;
  height: 26px;
  border-radius: 7px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.18s;
}

.partner-card:hover .partner-arrow {
  background: #2563eb;
}

.partner-arrow-icon {
  width: 13px;
  height: 13px;
  color: #2563eb;
  transition: color 0.18s;
}

.partner-card:hover .partner-arrow-icon {
  color: #fff;
}
</style>
