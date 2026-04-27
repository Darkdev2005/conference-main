<template>
  <footer class="site-footer">
    <div class="footer-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8689.20138598831!2d66.9576484925305!3d39.64754021413086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d18d2c22d77cb%3A0x5cfaf9320fc9a299!2z0KHQsNC80LDRgNC60LDQvdC0INCU0LDQstC70LDRgiDQo9C90LjQstC10YDRgdC40YLQtdGC0LgsIDE1IFVuaXZlcnNpdGV0IHhpeW9ib25pLCBTYW1hcnFhbmQsIE9nemJla2lzdG9u!5e0!3m2!1suz!2s!4v1683710519026!5m2!1suz!2s"
        allowfullscreen=""
        loading="lazy"
        title="Conference Location"
      />
      <div class="map-overlay">
        <div class="map-card">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" class="pin-icon">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <span class="map-card-title">Samarkand State University</span>
            <span class="map-card-sub">15 Universitetxiyoboni, Samarqand</span>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-body">
      <div class="footer-top">
        <div class="footer-brand">
          <RouterLink to="/" class="footer-brand-link">
            <img :src="footerLogoUrl" alt="TCCE" class="footer-logo" />
            <img :src="footerUniversityLogoUrl" alt="SamSU" class="footer-logo footer-logo-university" />
          </RouterLink>
          <div class="footer-brand-name">TCCE 2026</div>
          <p class="footer-tagline">
            Trends in Computational and Cognitive Engineering - International Scientific Conference
          </p>
          <div class="footer-contact-list">
            <a href="https:// www.tcce2026.uz" target="_blank" rel="noopener noreferrer" class="footer-contact-link">
             www.tcce2026.uz
            </a>
            <a href="tel:+998904469977" class="footer-contact-link">+998 90 446 99 77</a>
            <a href="mailto:sazzad69@gmail.com" class="footer-contact-link">sazzad69@gmail.com</a>
            <a href="tel:+998505009806" class="footer-contact-link">+998 50 500 98 06</a>
            <a href="mailto:b_akhmadkhon@mail.ru" class="footer-contact-link">b_akhmadkhon@mail.ru</a>
          </div>
          <a
            href="https://t.me/tcce2026"
            target="_blank"
            rel="noopener noreferrer"
            class="telegram-btn"
          >
            <svg viewBox="0 0 24 24" class="tg-icon" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Join Telegram Group
          </a>
        </div>

        <div class="footer-nav-grid">
          <div class="footer-nav-col">
            <h4 class="footer-nav-heading">Conference</h4>
            <RouterLink to="/tracks" class="footer-link">Track / Topics</RouterLink>
            <RouterLink to="/committee" class="footer-link">Committee</RouterLink>
            <RouterLink to="/partners" class="footer-link">Partners</RouterLink>
            <RouterLink to="/gallery" class="footer-link">Gallery</RouterLink>
          </div>
          <div class="footer-nav-col">
            <h4 class="footer-nav-heading">Programme</h4>
            <RouterLink to="/session" class="footer-link">Session Details</RouterLink>
            <RouterLink to="/paper" class="footer-link">Call for Paper</RouterLink>
            <RouterLink to="/certificate-authors" class="footer-link">Certificates</RouterLink>
          </div>
          <div class="footer-nav-col">
            <h4 class="footer-nav-heading">Submission</h4>
            <RouterLink to="/paper-review" class="footer-link">Paper Submission</RouterLink>
            <RouterLink to="/payment" class="footer-link">Payment</RouterLink>
            <RouterLink to="/register" class="footer-link">Contact Us</RouterLink>
          </div>
          <div class="footer-nav-col">
            <h4 class="footer-nav-heading">Venue</h4>
            <RouterLink to="/hotels" class="footer-link">Hotels & Visa</RouterLink>
            <RouterLink to="/addresses" class="footer-link">Attractions</RouterLink>
            <RouterLink to="/university" class="footer-link">University</RouterLink>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <span class="footer-copy">
          (c) 2026
          <a href="/" class="footer-copy-link">TCCE Conference</a>.
          All Rights Reserved.
        </span>
        <span class="footer-dev">
          Developed by
          <a href="https://t.me/Husniddin77_7" target="_blank" rel="noopener noreferrer" class="footer-copy-link">
            Normo'minov Husniddin
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import { publicAsset } from '@/utils/publicAsset'

export default {
  name: 'AppFooter',
  data() {
    return {
      footerLogoUrl: publicAsset('images/samarkand State University-Photoroom.png'),
      footerUniversityLogoUrl: publicAsset('IMG_20240913_150533_321.jpg'),
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');

.site-footer {
  background: #0c0f1a;
  color: #e2e8f0;
  margin-top: 5rem;
}

.footer-map {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
}

.footer-map iframe {
  width: 100%;
  height: 100%;
  border: none;
  filter: grayscale(30%) brightness(0.9);
}

.map-overlay {
  position: absolute;
  bottom: 16px;
  left: 16px;
}

.map-card {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(12, 15, 26, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 10px 16px;
  border-radius: 10px;
}

.pin-icon {
  width: 20px;
  height: 20px;
  color: #60a5fa;
  flex-shrink: 0;
}

.map-card-title {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #f1f5f9;
  line-height: 1.2;
}

.map-card-sub {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  color: #94a3b8;
  line-height: 1.2;
}

.footer-body {
  padding: 3rem 1.5rem 1.5rem;
  max-width: 1280px;
  margin: 0 auto;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}

@media (min-width: 768px) {
  .footer-top {
    grid-template-columns: 280px 1fr;
  }
}

.footer-brand-link {
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 0.75rem;
}

.footer-logo {
  height: 90px;
  width: auto;
}

.footer-logo-university {
  height: 64px;
  width: auto;
  border-radius: 50%;
  object-fit: contain;
  display: block;
}

.footer-brand-name {
  font-family: 'Crimson Pro', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #f8fafc;
  letter-spacing: 0.04em;
  margin-bottom: 0.5rem;
}

.footer-tagline {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 0.75rem;
}

.footer-contact-list {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 1rem;
}

.footer-contact-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #93c5fd;
  text-decoration: none;
  line-height: 1.35;
  width: fit-content;
}

.footer-contact-link:hover {
  color: #dbeafe;
  text-decoration: underline;
}

.telegram-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 18px;
  background: #2563eb;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.telegram-btn:hover {
  background: #1d4ed8;
  transform: translateY(-1px);
}

.tg-icon {
  width: 16px;
  height: 16px;
}

.footer-nav-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (min-width: 640px) {
  .footer-nav-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.footer-nav-heading {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #3b82f6;
  margin-bottom: 0.85rem;
}

.footer-link {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #94a3b8;
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.15s, transform 0.15s;
}

.footer-link:hover {
  color: #e2e8f0;
  transform: translateX(3px);
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 1.25rem;
}

@media (min-width: 640px) {
  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer-copy,
.footer-dev {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  color: #475569;
}

.footer-copy-link {
  color: #60a5fa;
  text-decoration: none;
}

.footer-copy-link:hover {
  text-decoration: underline;
}
</style>
