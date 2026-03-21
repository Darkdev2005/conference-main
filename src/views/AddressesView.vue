<template>
  <section class="attractions-section">
    <div class="attractions-inner">

      <div class="section-header">
        <span class="eyebrow">Explore Samarkand</span>
        <h1 class="section-title">Famous Tourist Spots</h1>
        <p class="section-desc">Discover the timeless monuments and cultural treasures of Samarkand — a UNESCO World Heritage city on the ancient Silk Road</p>
      </div>

      <div class="places-grid">
        <div
          v-for="(place, index) in places"
          :key="index"
          class="place-card"
          @mouseenter="hovered = index"
          @mouseleave="hovered = null"
        >
          <div class="place-image-wrap">
            <img :src="place.image" :alt="place.name" class="place-image" />
            <div class="place-overlay" :class="{ visible: hovered === index }" />
            <span class="place-number">{{ String(index + 1).padStart(2, '0') }}</span>
          </div>
          <div class="place-body">
            <h3 class="place-name">{{ place.name }}</h3>
            <p class="place-desc">{{ place.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import Image1 from '@/assets/images/dsc04966.jpg'
import Image2 from '@/assets/images/foto-2022-06-03t213449063.jpg'
import Image3 from '@/assets/images/40924194715_5216490bee_o.jpg'
import Image4 from '@/assets/images/imgonline-com-ua-resize-gh0d1vld0wbv_1608117910.jpg'
import Image5 from '@/assets/images/tild3632-3764-4035-b531-373262633537__43.jpg'
import Image6 from '@/assets/images/ph001.jpg'
import Image7 from '@/assets/images/6yaaagctxea-1920.jpg'
import Image8 from '@/assets/images/2024-09-26.jpg'

export default {
  name: 'AttractionsView',
  data() {
    return {
      hovered: null,
      places: [
        {
          name: 'Registan Ensemble',
          image: Image1,
          description: 'The iconic heart of Samarkand — three stunning madrasahs surrounding a grand central square, built during the Timurid era and considered one of the finest examples of Islamic architecture.',
        },
        {
          name: 'Amir Timur Mausoleum',
          image: Image2,
          description: 'The Gur-e-Amir is the final resting place of the great conqueror Amir Timur (Tamerlane), adorned with a ribbed turquoise dome that has become a symbol of Central Asian grandeur.',
        },
        {
          name: 'Bibi-Khanym Mosque',
          image: Image3,
          description: 'Once one of the largest mosques in the Islamic world, this magnificent monument dedicated to Timur\'s chief wife showcases the ambition and artistry of Timurid architecture.',
        },
        {
          name: 'Shah-i-Zinda Complex',
          image: Image4,
          description: 'A breathtaking necropolis of mausoleums lined with vibrant blue-glazed tilework, spanning centuries of Samarkand\'s history and honoring nobles, courtiers, and saints.',
        },
        {
          name: 'Konigil Tourism Village',
          image: Image5,
          description: 'A living showcase of Uzbek craftsmanship where traditional Samarkand paper is still made by hand — a rare glimpse into centuries-old artisanal heritage.',
        },
        {
          name: 'Hazrati Khizr Mosque',
          image: Image6,
          description: 'Perched on a hilltop overlooking the city, this ancient mosque holds deep spiritual significance and offers sweeping panoramic views over the historical skyline of Samarkand.',
        },
        {
          name: 'Mirzo Ulugh Beg Observatory',
          image: Image7,
          description: 'Ruins of a 15th-century astronomical marvel built by the scientist-ruler Ulugh Beg, whose star catalogues were among the most accurate produced before the invention of the telescope.',
        },
        {
          name: 'Bog\'i-Baland Tourism District',
          image: Image8,
          description: 'A lush, garden-filled district offering a serene escape with scenic landscapes, cultural venues, and a relaxed atmosphere ideal for experiencing the natural beauty of Samarkand.',
        },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&display=swap');

.attractions-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.attractions-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
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
  margin-bottom: 0.6rem;
  line-height: 1.15;
}

.section-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #64748b;
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.65;
}

.places-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 600px) {
  .places-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1000px) {
  .places-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.place-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.25s, transform 0.25s;
  cursor: default;
}

.place-card:hover {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

.place-image-wrap {
  position: relative;
  overflow: hidden;
  height: 220px;
}

.place-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}

.place-card:hover .place-image {
  transform: scale(1.06);
}

.place-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 40%, rgba(10, 20, 60, 0.55) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.place-overlay.visible {
  opacity: 1;
}

.place-number {
  position: absolute;
  top: 12px;
  left: 12px;
  font-family: 'Crimson Pro', serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  background: rgba(37, 99, 235, 0.85);
  backdrop-filter: blur(6px);
  padding: 2px 10px;
  border-radius: 100px;
  letter-spacing: 0.04em;
  z-index: 1;
}

.place-body {
  padding: 1.25rem 1.4rem 1.5rem;
}

.place-name {
  font-family: 'Crimson Pro', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
  line-height: 1.25;
}

.place-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.7;
}
</style>