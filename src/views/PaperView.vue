<template>
  <section class="paper-section">
    <div class="paper-inner">

      <div class="section-header">
        <span class="eyebrow">Submission Guidelines</span>
        <h1 class="section-title">Paper Submission & Publication</h1>
        <p class="section-desc">
          Although we accept submissions in PDF, PS, and DOC/RTF, it is strongly recommended
          to use LaTeX and submit PDF files.
        </p>
      </div>

      <div class="publication-banner">
        <div class="banner-icon">
          <BookOpen class="banner-icon-svg" />
        </div>
        <div class="banner-text">
          <h3 class="banner-title">Publication</h3>
          <p class="banner-desc">
            Accepted and presented conference papers will be submitted for possible publication in the
            <strong>Springer-Nature Lecture Notes in Networks and Systems (LNNS)</strong> series
            — <span class="badge-scopus">Scopus Indexed</span>
          </p>
        </div>
      </div>

      <div class="templates-block">
        <div class="block-heading-row">
          <div class="block-line" />
          <h2 class="block-heading">Paper Template Files</h2>
          <div class="block-line" />
        </div>

        <div class="files-grid">
          <a
            v-for="file in files"
            :key="file.name"
            :href="file.url"
            download
            class="file-card"
          >
            <div class="file-icon-wrap">
              <FileDown class="file-icon" />
            </div>
            <div class="file-info">
              <span class="file-name">{{ file.name }}</span>
              <span class="file-action">
                <Download class="file-dl-icon" />
                Download
              </span>
            </div>
          </a>
        </div>
      </div>

      <ConferenceTable />

      <div class="payment-cta">
        <RouterLink to="/payment" class="payment-btn">
          <Info class="payment-btn-icon" />
          View Payment Details
          <svg class="payment-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script>
import ConferenceTable from '@/components/ConferenceTable.vue'
import { Download, FileDown, Info, BookOpen } from 'lucide-vue-next'
import { publicAsset } from '@/utils/publicAsset'

export default {
  name: 'PaperReview',
  components: { ConferenceTable, Download, FileDown, Info, BookOpen },
  data() {
    return {
      files: [
        { name: 'AIPCP Article Template.docx',         url: publicAsset('docs/splnproc2501.docm') },
        { name: 'Instructions.pdf',                    url: publicAsset('docs/SPLNPROC Technical Instructions.pdf') },
        { name: 'Article Preparation Checklist.pdf',   url: publicAsset('docs/Springer_Instructions_for_Authors_of_Proceedings_CS-1.pdf') },
        { name: 'Quick Start.pdf',                     url: publicAsset('docs/Quick Start.pdf') },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');

.paper-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.paper-inner {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
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
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.6rem;
  line-height: 1.15;
}

.section-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.65;
}

.publication-banner {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  background: linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%);
  border: 1px solid #bfdbfe;
  border-left: 4px solid #2563eb;
  border-radius: 16px;
  padding: 1.5rem;
}

.banner-icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  background: #2563eb;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner-icon-svg {
  width: 22px;
  height: 22px;
  color: #fff;
}

.banner-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 0.35rem;
}

.banner-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #334155;
  line-height: 1.65;
}

.banner-desc strong {
  color: #1e40af;
  font-weight: 600;
}

.badge-scopus {
  display: inline-block;
  background: #059669;
  color: #fff;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  padding: 2px 9px;
  border-radius: 100px;
  text-transform: uppercase;
  vertical-align: middle;
}

.templates-block {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
}

.block-heading-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.block-line {
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}

.block-heading {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #2563eb;
  white-space: nowrap;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  padding: 5px 16px;
  border-radius: 100px;
}

.files-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.file-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.25rem;
  background: #f8faff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  text-decoration: none;
  transition: background 0.18s, box-shadow 0.18s, transform 0.18s;
}

.file-card:hover {
  background: #eff6ff;
  border-color: #bfdbfe;
  box-shadow: 0 4px 16px rgba(37, 99, 235, 0.1);
  transform: translateX(3px);
}

.file-icon-wrap {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  background: #dbeafe;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.file-icon {
  width: 20px;
  height: 20px;
  color: #2563eb;
}

.file-info {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.file-name {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1e293b;
}

.file-action {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: #2563eb;
  white-space: nowrap;
}

.file-dl-icon {
  width: 14px;
  height: 14px;
}

.payment-cta {
  display: flex;
  justify-content: center;
}

.payment-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #fff;
  border: 1px solid #bfdbfe;
  color: #1d4ed8;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(37, 99, 235, 0.1);
  transition: background 0.2s, box-shadow 0.2s, transform 0.2s;
}

.payment-btn:hover {
  background: #2563eb;
  color: #fff;
  box-shadow: 0 6px 24px rgba(37, 99, 235, 0.3);
  transform: translateY(-2px);
}

.payment-btn-icon {
  width: 17px;
  height: 17px;
}

.payment-arrow {
  width: 15px;
  height: 15px;
  margin-left: 2px;
}
</style>
