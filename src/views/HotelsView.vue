<template>
  <section class="hotels-section">
    <div class="hotels-inner">

      <div class="section-header">
        <span class="eyebrow">Accommodation</span>
        <h1 class="section-title">Hotels in Samarkand</h1>
        <p class="section-desc">Recommended hotels near the conference venue — book early to secure the best rates</p>
      </div>

      <div class="hotels-grid">
        <div v-for="(hotel, index) in hotels" :key="hotel.name" class="hotel-card">
          <div class="hotel-image-wrap">
            <img :src="hotel.image" :alt="hotel.name" class="hotel-image" />
            <span class="hotel-number">{{ String(index + 1).padStart(2, '0') }}</span>
          </div>
          <div class="hotel-body">
            <h3 class="hotel-name">{{ hotel.name }}</h3>
            <div class="hotel-detail">
              <MapPin class="hotel-detail-icon" />
              <span>{{ hotel.address }}</span>
            </div>
            <div class="hotel-detail">
              <Phone class="hotel-detail-icon hotel-detail-icon--green" />
              <a :href="'tel:' + hotel.phone" class="hotel-phone">{{ hotel.phone }}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="map-block">
        <div class="block-heading-row">
          <div class="block-line" />
          <h2 class="block-heading">
            <Map class="block-heading-icon" />
            Samarkand Hotels Map
          </h2>
          <div class="block-line" />
        </div>
        <div class="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d98316.39350465868!2d66.88497141450938!3d39.64099748232781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSamarqand%20hotels!5e0!3m2!1suz!2s!4v1744290187134!5m2!1suz!2s"
            class="map-iframe"
            height="460"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { MapPin, Phone, Map } from 'lucide-vue-next'
import Image1 from '@/assets/images/moven_pick.jpg'
import Image2 from '@/assets/images/bibikhanim.jpg'
import Image3 from '@/assets/images/zilol_baxt.jpg'
import Image4 from '@/assets/images/royal.jpg'
import Image5 from '@/assets/images/2025-02-22.jpg'
import Image6 from '@/assets/images/D26A8960++++++.jpg'

export default {
  name: 'HotelsView',
  components: { MapPin, Phone, Map },
  data() {
    return {
      hotels: [
        { name: 'Mövenpick Hotel Samarkand',    address: '53 Shokhrukh Str, 140100, Samarkand, Uzbekistan',               phone: '+998 55 703 08 08', image: Image1 },
        { name: 'Bibikhanum Hotel',              address: 'Tashkent Street 10, 140101, Samarkand, Uzbekistan',              phone: '+998 78 210 08 11', image: Image2 },
        { name: 'Zilol Baxt Hotel',              address: 'Usmon Yusupov 5, University Boulevard, Samarkand, Uzbekistan',   phone: '+998 66 239 85 14', image: Image3 },
        { name: 'Royal Hotel Samarkand',         address: 'Bobur Mirzo 46, 140100, Samarkand, Uzbekistan',                  phone: '+998 95 507 01 00', image: Image4 },
        { name: 'DiliMah Premium Luxury Hotel',  address: '79A Mirzo Ulugbek Street, Samarkand region, Uzbekistan',         phone: '+998 93 720 00 25', image: Image5 },
        { name: 'Reikartz Amar Samarkand',       address: 'Orzu Makhmudov 14, 140164, Samarkand, Uzbekistan',               phone: '+998 78 113 99 74', image: Image6 },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');

.hotels-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.hotels-inner {
  max-width: 1200px;
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
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.65;
}

.hotels-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 600px) {
  .hotels-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 960px) {
  .hotels-grid { grid-template-columns: repeat(3, 1fr); }
}

.hotel-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 14px rgba(0,0,0,0.05);
  transition: box-shadow 0.24s, transform 0.24s;
}

.hotel-card:hover {
  box-shadow: 0 12px 36px rgba(0,0,0,0.11);
  transform: translateY(-4px);
}

.hotel-image-wrap {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.hotel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.hotel-card:hover .hotel-image {
  transform: scale(1.05);
}

.hotel-number {
  position: absolute;
  top: 12px;
  left: 12px;
  font-family: 'Crimson Pro', serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  background: rgba(37, 99, 235, 0.85);
  backdrop-filter: blur(6px);
  padding: 2px 10px;
  border-radius: 100px;
  letter-spacing: 0.04em;
}

.hotel-body {
  padding: 1.2rem 1.4rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.hotel-name {
  font-family: 'Crimson Pro', serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
}

.hotel-detail {
  display: flex;
  align-items: flex-start;
  gap: 7px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.5;
}

.hotel-detail-icon {
  flex-shrink: 0;
  width: 14px;
  height: 14px;
  color: #94a3b8;
  margin-top: 2px;
}

.hotel-detail-icon--green { color: #059669; }

.hotel-phone {
  color: #2563eb;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s;
}

.hotel-phone:hover { text-decoration: underline; }

.map-block {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
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
  font-size: 0.7rem;
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

.map-wrap {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border: 1px solid rgba(0,0,0,0.06);
}

.map-iframe {
  width: 100%;
  border: none;
  display: block;
}
</style>