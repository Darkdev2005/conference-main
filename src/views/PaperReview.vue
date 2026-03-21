<template>
  <section class="cfp-section">
    <div class="cfp-inner">

      <div class="section-header">
        <span class="eyebrow">Submissions Open</span>
        <h1 class="section-title">Call for Paper</h1>
        <p class="section-desc">Submit your research to TCCE 2026 and get published in a Scopus-indexed proceedings volume</p>
      </div>

      <div class="cfp-grid">

        <div class="cfp-card">
          <div class="card-title-row">
            <div class="card-icon-wrap card-icon-wrap--blue">
              <FileText class="card-icon" />
            </div>
            <h2 class="card-title">TCCE 2026 - Submission</h2>
          </div>

          <div class="info-rows">
            <div class="info-row">
              <span class="info-label">Paper Length</span>
              <span class="info-value">12 Pages</span>
            </div>
            <div class="info-row">
              <span class="info-label">Format</span>
              <span class="info-value">PDF and DOC/RTF (Springer LNAI/LNNS style)</span>
            </div>
            <div class="info-row">
              <span class="info-label">Recommended</span>
              <span class="info-value info-value--note">Use LaTeX and submit PDF files</span>
            </div>
          </div>

          <div class="divider" />

          <div class="templates-block">
            <p class="templates-heading">Style files</p>
            <a :href="templateDocUrl" download class="template-link">
              <div class="template-link-icon">
                <Download class="template-link-svg" />
              </div>
              <span>Microsoft Word Template</span>
              <span class="template-link-badge">Download</span>
            </a>
            <a
              href="https://www.overleaf.com/latex/templates/springer-lecture-notes-in-computer-science/kzwwpvhwnvfj"
              target="_blank"
              rel="noopener noreferrer"
              class="template-link"
            >
              <div class="template-link-icon template-link-icon--green">
                <ExternalLink class="template-link-svg" />
              </div>
              <span>LaTeX Template (Overleaf)</span>
              <span class="template-link-badge template-link-badge--green">Open</span>
            </a>
          </div>

          <div class="divider" />

          <div class="pub-note">
            <BookOpen class="pub-note-icon" />
            <p class="pub-note-text">
              Accepted and presented papers will be submitted for possible publication in the
              <strong>Springer-Nature Lecture Notes in Networks and Systems (LNNS)</strong> series
              - <span class="badge-scopus">Scopus Indexed</span>
            </p>
          </div>
        </div>

        <div class="cfp-card cfp-card--publisher">
          <div class="card-title-row">
            <div class="card-icon-wrap card-icon-wrap--amber">
              <Award class="card-icon" />
            </div>
            <h2 class="card-title">Publication Partner</h2>
          </div>

          <div class="publisher-logo-row">
            <div class="publisher-logo">
              <svg viewBox="0 0 120 40" class="springer-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="6" fill="#EC6300"/>
                <text x="12" y="26" font-family="Arial, sans-serif" font-size="14" font-weight="700" fill="white">Springer</text>
              </svg>
            </div>
            <span class="badge-scopus">Scopus Indexed</span>
          </div>

          <p class="publisher-text">
            The proceedings of the conference will be published by
            <strong>Springer</strong>, a leading global academic publisher known for
            rigorous peer-review and wide distribution across the scientific community.
          </p>

          <p class="publisher-text">
            Papers will be indexed in <strong>Scopus</strong>, an internationally recognized
            database of academic research - providing credibility and visibility to the
            conference and all its participants.
          </p>

          <div class="features-list">
            <div class="feature-item">
              <span class="feature-dot feature-dot--blue" />
              Peer-reviewed proceedings
            </div>
            <div class="feature-item">
              <span class="feature-dot feature-dot--green" />
              Scopus & Web of Science indexed
            </div>
            <div class="feature-item">
              <span class="feature-dot feature-dot--amber" />
              Digital Object Identifier (DOI) per paper
            </div>
            <div class="feature-item">
              <span class="feature-dot feature-dot--purple" />
              Open access option available
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { FileText, Download, ExternalLink, BookOpen, Award } from 'lucide-vue-next'
import { publicAsset } from '@/utils/publicAsset'

export default {
  name: 'CallForPaper',
  components: { FileText, Download, ExternalLink, BookOpen, Award },
  data() {
    return {
      templateDocUrl: publicAsset('docs/AIPCP_Article_Template.docx'),
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');

.cfp-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.cfp-inner {
  max-width: 1100px;
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
  margin-bottom: 0.5rem;
  line-height: 1.15;
}

.section-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #64748b;
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.65;
}

.cfp-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 860px) {
  .cfp-grid {
    grid-template-columns: 1fr 1fr;
  }
}

.cfp-card {
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: box-shadow 0.22s, transform 0.22s;
}

.cfp-card:hover {
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.09);
  transform: translateY(-2px);
}

.card-title-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.card-icon-wrap {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon-wrap--blue  { background: #dbeafe; }
.card-icon-wrap--amber { background: #fef3c7; }

.card-icon {
  width: 20px;
  height: 20px;
}

.card-icon-wrap--blue  .card-icon { color: #2563eb; }
.card-icon-wrap--amber .card-icon { color: #d97706; }

.card-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
}

.info-rows {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.info-row {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 9px 0;
  border-bottom: 1px solid #f1f5f9;
}

.info-row:last-child { border-bottom: none; }

.info-label {
  flex-shrink: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #94a3b8;
  min-width: 110px;
}

.info-value {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #1e293b;
  font-weight: 500;
}

.info-value--note {
  color: #2563eb;
  font-style: italic;
}

.divider {
  height: 1px;
  background: #f1f5f9;
}

.templates-block {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.templates-heading {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 2px;
}

.template-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 10px 12px;
  background: #f8faff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.16s, border-color 0.16s, transform 0.16s;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1e293b;
}

.template-link:hover {
  background: #eff6ff;
  border-color: #bfdbfe;
  transform: translateX(3px);
}

.template-link-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #dbeafe;
  display: flex;
  align-items: center;
  justify-content: center;
}

.template-link-icon--green { background: #dcfce7; }

.template-link-svg {
  width: 15px;
  height: 15px;
  color: #2563eb;
}

.template-link-icon--green .template-link-svg { color: #16a34a; }

.template-link-badge {
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #2563eb;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  padding: 2px 10px;
  border-radius: 100px;
}

.template-link-badge--green {
  color: #16a34a;
  background: #f0fdf4;
  border-color: #bbf7d0;
}

.pub-note {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: linear-gradient(135deg, #eff6ff, #f0fdf4);
  border: 1px solid #bfdbfe;
  border-radius: 12px;
  padding: 1rem 1.1rem;
}

.pub-note-icon {
  width: 18px;
  height: 18px;
  color: #2563eb;
  flex-shrink: 0;
  margin-top: 1px;
}

.pub-note-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #334155;
  line-height: 1.65;
}

.pub-note-text strong { color: #1e40af; font-weight: 600; }

.badge-scopus {
  display: inline-block;
  background: #059669;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 2px 9px;
  border-radius: 100px;
  vertical-align: middle;
}

.publisher-logo-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.springer-svg {
  height: 32px;
  width: auto;
}

.publisher-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #475569;
  line-height: 1.7;
}

.publisher-text strong { color: #0f172a; font-weight: 600; }

.features-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 1.1rem;
  background: #fafafa;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  margin-top: 0.25rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: #334155;
  font-weight: 500;
}

.feature-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
}

.feature-dot--blue   { background: #2563eb; }
.feature-dot--green  { background: #059669; }
.feature-dot--amber  { background: #d97706; }
.feature-dot--purple { background: #7c3aed; }
</style>



