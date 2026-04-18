<template>
  <header class="site-header">
    <MarqueeBar />

    <nav class="navbar">
      <div class="navbar-inner">
        <RouterLink to="/" class="brand">
          <img :src="logoUrl" alt="TCCE 2026" class="brand-logo" />
          <div class="brand-text">
            <span class="brand-title">TCCE</span>
            <span class="brand-year">2026</span>
          </div>
        </RouterLink>

        <div class="nav-links">
          <RouterLink to="/tracks" class="nav-link">Track / Topics</RouterLink>
          <RouterLink to="/committee" class="nav-link">Committee</RouterLink>

          <NavDropdown>
            <template #label>Programme</template>
            <RouterLink to="/session" class="dropdown-item">Programme / Session Details</RouterLink>
            <RouterLink to="/paper" class="dropdown-item">Call for Paper</RouterLink>
          </NavDropdown>

          <NavDropdown>
            <template #label>Submission</template>
            <RouterLink to="/paper-review" class="dropdown-item">Paper Submission & Publication</RouterLink>
            <RouterLink to="/payment" class="dropdown-item">Payment</RouterLink>
          </NavDropdown>

          <NavDropdown>
            <template #label>Information</template>
            <RouterLink to="/hotels" class="dropdown-item">Hotels / Visa & Travel</RouterLink>
            <RouterLink to="/addresses" class="dropdown-item">Attractions</RouterLink>
            <RouterLink to="/university" class="dropdown-item">University</RouterLink>
          </NavDropdown>

          <RouterLink to="/partners" class="nav-link">Partners</RouterLink>
          <RouterLink to="/gallery" class="nav-link">Gallery</RouterLink>
          <RouterLink to="/certificate-authors" class="nav-link">Certificates</RouterLink>
          <RouterLink to="/register" class="nav-link">Contact</RouterLink>
        </div>

        <a href="https://www.samdu.uz/en" target="_blank" rel="noopener noreferrer" class="uni-badge">
          <img
            :src="universityAvatarUrl"
            alt="Samarkand State University"
            class="uni-avatar"
          />
          <div class="uni-info">
            <span class="uni-name">Samarkand State University</span>
            <span class="uni-sub">named after Sharof Rashidov</span>
          </div>
        </a>

        <button class="hamburger" @click="mobileOpen = !mobileOpen" :class="{ open: mobileOpen }" aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>

    <transition name="mobile-slide">
      <div v-if="mobileOpen" class="mobile-menu">
        <RouterLink to="/tracks" class="mobile-link" @click="mobileOpen = false">Track / Topics</RouterLink>
        <RouterLink to="/committee" class="mobile-link" @click="mobileOpen = false">Committee</RouterLink>

        <div class="mobile-group">
          <button class="mobile-group-btn" @click="toggleMobile('programme')">
            Programme
            <svg class="mobile-chevron" :class="{ rotated: mobileExpanded === 'programme' }" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition name="mobile-expand">
            <div v-if="mobileExpanded === 'programme'" class="mobile-sub">
              <RouterLink to="/session" class="mobile-sub-link" @click="mobileOpen = false">Programme / Session Details</RouterLink>
              <RouterLink to="/paper" class="mobile-sub-link" @click="mobileOpen = false">Call for Paper</RouterLink>
            </div>
          </transition>
        </div>

        <div class="mobile-group">
          <button class="mobile-group-btn" @click="toggleMobile('submission')">
            Submission
            <svg class="mobile-chevron" :class="{ rotated: mobileExpanded === 'submission' }" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition name="mobile-expand">
            <div v-if="mobileExpanded === 'submission'" class="mobile-sub">
              <RouterLink to="/paper-review" class="mobile-sub-link" @click="mobileOpen = false">Paper Submission & Publication</RouterLink>
              <RouterLink to="/payment" class="mobile-sub-link" @click="mobileOpen = false">Payment</RouterLink>
            </div>
          </transition>
        </div>

        <div class="mobile-group">
          <button class="mobile-group-btn" @click="toggleMobile('info')">
            Information
            <svg class="mobile-chevron" :class="{ rotated: mobileExpanded === 'info' }" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <transition name="mobile-expand">
            <div v-if="mobileExpanded === 'info'" class="mobile-sub">
              <RouterLink to="/hotels" class="mobile-sub-link" @click="mobileOpen = false">Hotels / Visa & Travel</RouterLink>
              <RouterLink to="/addresses" class="mobile-sub-link" @click="mobileOpen = false">Attractions</RouterLink>
              <RouterLink to="/university" class="mobile-sub-link" @click="mobileOpen = false">University</RouterLink>
            </div>
          </transition>
        </div>

        <RouterLink to="/partners" class="mobile-link" @click="mobileOpen = false">Partners</RouterLink>
        <RouterLink to="/gallery" class="mobile-link" @click="mobileOpen = false">Gallery</RouterLink>
        <RouterLink to="/certificate-authors" class="mobile-link" @click="mobileOpen = false">Certificates</RouterLink>
        <RouterLink to="/register" class="mobile-link contact-mobile" @click="mobileOpen = false">Contact Us</RouterLink>
      </div>
    </transition>
  </header>
</template>

<script>
import MarqueeBar from './MarqueeBar.vue';
import NavDropdown from './NavDropdown.vue';
import { publicAsset } from '@/utils/publicAsset';

export default {
  name: 'AppNavbar',
  components: { MarqueeBar, NavDropdown },
  data() {
    return {
      mobileOpen: false,
      mobileExpanded: null,
      logoUrl: publicAsset('images/samarkand State University-Photoroom.png'),
      universityAvatarUrl: publicAsset('IMG_20240913_150533_321.jpg')
    };
  },
  methods: {
    toggleMobile(key) {
      this.mobileExpanded = this.mobileExpanded === key ? null : key;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;600;700&family=DM+Sans:wght@400;500;600&display=swap');

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.navbar {
  background: rgba(255, 255, 255, 0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0 1px 24px rgba(0,0,0,0.06);
}

.navbar-inner {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-logo {
  height: 85px;
  width: auto;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1e3a8a;
  letter-spacing: 0.06em;
}

.brand-year {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  color: #64748b;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.nav-links {
  display: none;
  align-items: center;
  gap: 0.25rem;
  flex: 1;
  justify-content: center;
}

@media (min-width: 1400px) {
  .nav-links {
    display: flex;
  }
}

.nav-link {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1c1917;
  text-decoration: none;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  padding: 6px 10px;
  border-radius: 6px;
  transition: color 0.2s, background 0.2s;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #1d4ed8;
  background: rgba(29, 78, 216, 0.06);
}

.uni-badge {
  display: none;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%);
  padding: 8px 14px 8px 8px;
  border-radius: 40px;
  text-decoration: none;
  transition: box-shadow 0.2s, transform 0.2s;
}

.uni-badge:hover {
  box-shadow: 0 6px 20px rgba(29, 78, 216, 0.35);
  transform: translateY(-1px);
}

@media (min-width: 1400px) {
  .uni-badge {
    display: flex;
  }
}

.uni-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255,255,255,0.4);
}

.uni-info {
  display: flex;
  flex-direction: column;
}

.uni-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.2;
}

.uni-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.2;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;
}

@media (min-width: 1400px) {
  .hamburger {
    display: none;
  }
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #1c1917;
  border-radius: 2px;
  transition: all 0.25s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.mobile-menu {
  background: #fff;
  border-top: 1px solid rgba(0,0,0,0.06);
  box-shadow: 0 12px 32px rgba(0,0,0,0.1);
  padding: 0.5rem 0 1rem;
}

.mobile-link {
  display: block;
  padding: 11px 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1c1917;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  transition: background 0.15s, color 0.15s;
}

.mobile-link:hover {
  background: #f0f4ff;
  color: #1d4ed8;
}

.contact-mobile {
  margin: 6px 16px 0;
  background: #1d4ed8;
  color: #fff;
  border-radius: 8px;
  text-align: center;
}

.contact-mobile:hover {
  background: #1e40af;
  color: #fff;
}

.mobile-group-btn {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 11px 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1c1917;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}

.mobile-group-btn:hover {
  background: #f0f4ff;
  color: #1d4ed8;
}

.mobile-chevron {
  width: 16px;
  height: 16px;
  transition: transform 0.25s ease;
  opacity: 0.5;
}

.mobile-chevron.rotated {
  transform: rotate(180deg);
}

.mobile-sub {
  background: #f8faff;
  border-left: 3px solid #1d4ed8;
  margin: 0 20px 4px;
  border-radius: 0 6px 6px 0;
  overflow: hidden;
}

.mobile-sub-link {
  display: block;
  padding: 9px 14px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #374151;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}

.mobile-sub-link:hover {
  background: #e0e7ff;
  color: #1d4ed8;
}

.mobile-slide-enter-active,
.mobile-slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-slide-enter-from,
.mobile-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.mobile-expand-enter-active,
.mobile-expand-leave-active {
  transition: opacity 0.18s ease;
  overflow: hidden;
}

.mobile-expand-enter-from,
.mobile-expand-leave-to {
  opacity: 0;
}
</style>

<style>
.dropdown-item {
  display: block;
  padding: 10px 16px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  color: #374151;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
  border-bottom: 1px solid rgba(0,0,0,0.04);
}

.dropdown-item:last-child {
  border-bottom: none;
}

.dropdown-item:hover {
  background: #eff6ff;
  color: #1d4ed8;
  padding-left: 20px;
}
</style>
