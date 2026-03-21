<template>
  <div class="nav-dropdown" @mouseenter="open = true" @mouseleave="open = false">
    <button class="dropdown-trigger" :class="{ active: open }">
      <slot name="label" />
      <svg class="chevron" :class="{ rotated: open }" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <transition name="dropdown-fade">
      <div v-show="open" class="dropdown-panel">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'NavDropdown',
  data() {
    return { open: false };
  }
};
</script>

<style scoped>
.nav-dropdown {
  position: relative;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1c1917;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px 0;
  transition: color 0.2s;
}

.dropdown-trigger:hover,
.dropdown-trigger.active {
  color: #1d4ed8;
}

.chevron {
  width: 14px;
  height: 14px;
  transition: transform 0.25s ease;
  opacity: 0.6;
}

.chevron.rotated {
  transform: rotate(180deg);
}

.dropdown-panel {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  min-width: 220px;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 12px;
  box-shadow: 0 16px 40px rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.06);
  overflow: hidden;
  z-index: 200;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>