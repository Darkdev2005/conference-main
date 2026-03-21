<template>
  <section class="budget-section">
    <div class="budget-inner">

      <div class="section-header">
        <span class="eyebrow">Financial Overview</span>
        <h1 class="section-title">Detailed Budget for Conference</h1>
        <p class="section-desc">Transparent breakdown of income sources and planned expenditures for TCCE 2026</p>
      </div>

      <div class="budget-group">
        <div class="group-heading-row">
          <div class="group-line" />
          <h2 class="group-heading">
            <TrendingUp class="group-heading-icon" />
            Income Sources
          </h2>
          <div class="group-line" />
        </div>

        <div class="cards-grid">
          <div class="budget-card" v-for="item in incomeItems" :key="item.title" :style="{ '--accent': item.accent }">
            <div class="budget-card-icon" :style="{ background: item.iconBg }">
              <component :is="item.icon" class="budget-icon" :style="{ color: item.accent }" />
            </div>
            <div class="budget-card-body">
              <h3 class="budget-card-title">{{ item.title }}</h3>
              <p class="budget-card-text">{{ item.text }}</p>
              <p v-if="item.note" class="budget-card-note">{{ item.note }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="budget-group">
        <div class="group-heading-row">
          <div class="group-line" />
          <h2 class="group-heading">
            <TrendingDown class="group-heading-icon group-heading-icon--red" />
            Expenditures
          </h2>
          <div class="group-line" />
        </div>

        <div class="cards-grid">
          <div class="budget-card" v-for="item in expenditureItems" :key="item.title" :style="{ '--accent': item.accent }">
            <div class="budget-card-icon" :style="{ background: item.iconBg }">
              <component :is="item.icon" class="budget-icon" :style="{ color: item.accent }" />
            </div>
            <div class="budget-card-body">
              <h3 class="budget-card-title">{{ item.title }}</h3>
              <p class="budget-card-text">{{ item.text }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="budget-group">
        <div class="group-heading-row">
          <div class="group-line" />
          <h2 class="group-heading">
            <Building class="group-heading-icon" />
            Venue Preparation
          </h2>
          <div class="group-line" />
        </div>

        <div class="info-card">
          <div class="info-card-header">
            <div class="info-card-icon-wrap">
              <Building class="info-card-icon" />
            </div>
            <h3 class="info-card-title">Host Institute Facilities</h3>
          </div>
          <p class="info-card-lead">The host institute will provide the following facilities at no extra charge, reducing overall venue expenses:</p>
          <div class="facilities-list">
            <div class="facility-item" v-for="f in facilities" :key="f">
              <span class="facility-dot" />
              {{ f }}
            </div>
          </div>
        </div>
      </div>

      <div class="budget-group">
        <div class="group-heading-row">
          <div class="group-line" />
          <h2 class="group-heading">
            <BookOpen class="group-heading-icon" />
            Paper Review & Publication
          </h2>
          <div class="group-line" />
        </div>

        <div class="info-card">
          <div class="info-card-header">
            <div class="info-card-icon-wrap info-card-icon-wrap--purple">
              <BookOpen class="info-card-icon info-card-icon--purple" />
            </div>
            <h3 class="info-card-title">Publications from the Host Institute</h3>
          </div>

          <div class="pub-stats">
            <div class="pub-stat">
              <span class="pub-stat-num">15%</span>
              <span class="pub-stat-label">Host institute papers in proceedings</span>
            </div>
            <div class="pub-stat">
              <span class="pub-stat-num">40%</span>
              <span class="pub-stat-label">International contributor papers</span>
            </div>
          </div>

          <div class="pub-details">
            <div class="pub-detail-row">
              <span class="pub-detail-label">Publication Partner</span>
              <span class="pub-detail-value">
                <span class="badge-springer">Springer</span>
                — Scopus indexed proceedings
              </span>
            </div>
            <div class="pub-detail-row">
              <span class="pub-detail-label">Editor</span>
              <span class="pub-detail-value">Badrul Hasham Bin Ahmed, UTEM, Malaysia (Host University)</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import {
  TrendingUp, TrendingDown, Building, BookOpen,
  Users, Megaphone, Landmark, MapPin, Paintbrush,
  UtensilsCrossed, Heart, Plane
} from 'lucide-vue-next'

export default {
  name: 'BudgetView',
  components: {
    TrendingUp, TrendingDown, Building, BookOpen,
    Users, Megaphone, Landmark, MapPin, Paintbrush,
    UtensilsCrossed, Heart, Plane
  },
  data() {
    return {
      incomeItems: [
        {
          title: 'Conference Registration Fee',
          icon: 'Users',
          accent: '#2563eb',
          iconBg: '#dbeafe',
          text: 'Expected income from registration fees based on 60 submitted papers.',
          note: 'Income will come from participants who register and pay the registration fee.',
        },
        {
          title: 'Advertisement Revenue',
          icon: 'Megaphone',
          accent: '#7c3aed',
          iconBg: '#ede9fe',
          text: 'Income generated from advertising at the conference.',
          note: 'Includes sponsorship deals, advertisements in the program, and banner ads at the venue.',
        },
        {
          title: 'Contribution from Host Institute',
          icon: 'Landmark',
          accent: '#059669',
          iconBg: '#d1fae5',
          text: 'The host institute will contribute towards overall costs.',
          note: 'May include funding for venue, technical support, and other logistical requirements.',
        },
      ],
      expenditureItems: [
        {
          title: 'Venue Booking',
          icon: 'MapPin',
          accent: '#dc2626',
          iconBg: '#fee2e2',
          text: 'Estimated cost for booking the conference venue and associated spaces.',
        },
        {
          title: 'Venue Preparation & Decoration',
          icon: 'Paintbrush',
          accent: '#d97706',
          iconBg: '#fef3c7',
          text: 'Estimated cost for setting up and decorating the conference venue.',
        },
        {
          title: 'Food (Tea, Lunch & Gala Dinner)',
          icon: 'UtensilsCrossed',
          accent: '#ea580c',
          iconBg: '#ffedd5',
          text: 'Estimated total cost for all meals and refreshments throughout the conference.',
        },
        {
          title: 'Local Hospitality',
          icon: 'Heart',
          accent: '#db2777',
          iconBg: '#fce7f3',
          text: 'Estimated cost for local hospitality and guest reception arrangements.',
        },
        {
          title: 'Airfare for Speakers & Organizers',
          icon: 'Plane',
          accent: '#0891b2',
          iconBg: '#cffafe',
          text: 'Estimated cost for full or partial airfare reimbursement for invited speakers, dignitaries, and key organizers.',
        },
      ],
      facilities: [
        'Conference rooms and auditoriums',
        'Technological equipment (microphones, projectors, screens)',
        'Wi-Fi and internet access',
        'Seating arrangements and audio-visual support',
        'Office supplies and event materials (badges, stationery)',
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');

.budget-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.budget-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
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
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.65;
}

.budget-group {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.group-heading-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.group-line {
  flex: 1;
  height: 1px;
  background: #e2e8f0;
}

.group-heading {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
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

.group-heading-icon {
  width: 14px;
  height: 14px;
  color: #2563eb;
}

.group-heading-icon--red {
  color: #dc2626;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 960px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.budget-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-top: 3px solid var(--accent);
  border-radius: 16px;
  padding: 1.4rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: box-shadow 0.22s, transform 0.22s;
}

.budget-card:hover {
  box-shadow: 0 8px 28px rgba(0,0,0,0.09);
  transform: translateY(-2px);
}

.budget-card-icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.budget-icon {
  width: 18px;
  height: 18px;
}

.budget-card-body {
  flex: 1;
}

.budget-card-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.4rem;
  line-height: 1.25;
}

.budget-card-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.84rem;
  color: #475569;
  line-height: 1.6;
}

.budget-card-note {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #94a3b8;
  line-height: 1.55;
  margin-top: 0.4rem;
  font-style: italic;
}

.info-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 18px;
  padding: 1.75rem 2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.info-card-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.info-card-icon-wrap {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #dbeafe;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-card-icon-wrap--purple {
  background: #ede9fe;
}

.info-card-icon {
  width: 20px;
  height: 20px;
  color: #2563eb;
}

.info-card-icon--purple {
  color: #7c3aed;
}

.info-card-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
}

.info-card-lead {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.65;
}

.facilities-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
}

@media (min-width: 640px) {
  .facilities-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

.facility-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #334155;
  padding: 8px 12px;
  background: #f8faff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}

.facility-dot {
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #2563eb;
  opacity: 0.6;
}

.pub-stats {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.pub-stat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #f0f4ff;
  border: 1px solid #c7d7fc;
  border-radius: 12px;
  padding: 0.85rem 1.25rem;
  min-width: 120px;
}

.pub-stat-num {
  font-family: 'Crimson Pro', serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1d4ed8;
  line-height: 1;
}

.pub-stat-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: #64748b;
  margin-top: 4px;
  line-height: 1.4;
  max-width: 140px;
}

.pub-details {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid #f1f5f9;
  border-radius: 12px;
  overflow: hidden;
}

.pub-detail-row {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 11px 16px;
  border-bottom: 1px solid #f1f5f9;
}

.pub-detail-row:last-child {
  border-bottom: none;
}

.pub-detail-label {
  flex-shrink: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #94a3b8;
  min-width: 130px;
}

.pub-detail-value {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #1e293b;
  font-weight: 500;
}

.badge-springer {
  display: inline-block;
  background: #ec6300;
  color: #fff;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 2px 9px;
  border-radius: 100px;
  vertical-align: middle;
  margin-right: 3px;
}
</style>
