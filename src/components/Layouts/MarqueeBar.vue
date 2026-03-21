<template>
  <div class="marquee-bar">
    <div class="marquee-track">
      <span class="marquee-content">
        The Proceedings will be included in
        <strong>Scopus Indexed Lecture Notes in Networks and Systems Series</strong>
      </span>
    </div>
  </div>
</template>

<style scoped>
.marquee-bar {
  background: linear-gradient(90deg, #7f1d1d 0%, #991b1b 50%, #7f1d1d 100%);
  overflow: hidden;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.marquee-track {
  display: flex;
  width: 100%;
  padding: 10px 0;
}

.marquee-content {
  display: inline-block;
  white-space: nowrap;
  animation: marquee 18s linear infinite;
  font-family: 'Crimson Pro', serif;
  font-size: clamp(0.85rem, 1.5vw, 1.05rem);
  color: #fef2f2;
  letter-spacing: 0.01em;
}

.marquee-content strong {
  color: #fca5a5;
  font-weight: 700;
}

@keyframes marquee {
  from { transform: translateX(100vw); }
  to   { transform: translateX(-100%); }
}
</style>