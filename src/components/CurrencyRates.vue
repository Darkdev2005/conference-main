<template>
  <section class="rates-section">
    <div class="rates-inner">

      <div class="block-heading-row">
        <div class="block-line" />
        <h2 class="block-heading">Amount of Fee Required</h2>
        <div class="block-line" />
      </div>

      <div class="rate-bar">
        <div class="rate-bar-left">
          <DollarSign class="rate-dollar-icon" />
          <span v-if="loading" class="rate-text rate-loading">Loading exchange rate…</span>
          <span v-else-if="usdRate" class="rate-text">
            {{ dataTime }} &nbsp; 1 USD = <strong>{{ usdRate.toFixed(2) }} UZS</strong>
          </span>
          <span v-else class="rate-text rate-error">Failed to load rate</span>

          <div v-if="!loading && rateChange !== 0" class="rate-change" :class="rateChange > 0 ? 'rate-up' : 'rate-down'">
            <TrendingUp v-if="rateChange > 0" class="trend-icon" />
            <TrendingDown v-else class="trend-icon" />
            {{ rateChange > 0 ? '+' : '' }}{{ rateChange.toFixed(2) }}
          </div>
        </div>

        <button class="refresh-btn" @click="fetchUSDRate" :disabled="loading">
          <RefreshCw :class="['refresh-icon', loading ? 'spin' : '']" />
          Refresh
        </button>
      </div>

      <div class="table-wrap">
        <table class="fee-table">
          <thead>
            <tr>
              <th class="th-cat">Category</th>
              <th class="th-usd">Fee (USD)</th>
              <th class="th-uzs">Fee (UZS)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in fees" :key="index" class="fee-row">
              <td class="td-cat">{{ item.category }}</td>
              <td class="td-usd" :class="item.usd === 0 ? 'free' : ''">{{ item.fee }}</td>
              <td class="td-uzs">
                <span v-if="loading" class="loading-dot">…</span>
                <span v-else>{{ formatUZS(item.usd) }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p class="rate-note">
        * Exchange rates are updated daily from the Central Bank of Uzbekistan
      </p>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { DollarSign, TrendingUp, TrendingDown, RefreshCw } from 'lucide-vue-next'

const usdRate   = ref(null)
const loading   = ref(true)
const rateChange = ref(0)
const dataTime  = ref('')

const fees = [
  { category: 'Registration',              fee: 'Free', usd: 0 },
  { category: 'Local PhD Student (SamSU)', fee: '$100', usd: 100 },
  { category: 'International PhD Student', fee: '$125', usd: 125 },
  { category: 'Local Professor',           fee: '$150', usd: 150 },
  { category: 'International Professor',   fee: '$250', usd: 250 },
]

async function fetchUSDRate() {
  loading.value = true
  try {
    const today     = new Date().toISOString().split('T')[0]
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

    const [r1, r2] = await Promise.all([
      fetch(`https://cbu.uz/oz/arkhiv-kursov-valyut/json/USD/${today}/`),
      fetch(`https://cbu.uz/oz/arkhiv-kursov-valyut/json/USD/${yesterday}/`),
    ])

    const todayData     = await r1.json()
    const yesterdayData = await r2.json()

    if (todayData?.[0]) {
      usdRate.value  = parseFloat(todayData[0].Rate)
      dataTime.value = `As of ${todayData[0].Date}`
      if (yesterdayData?.[0]) {
        rateChange.value = parseFloat(todayData[0].Rate) - parseFloat(yesterdayData[0].Rate)
      }
    }
  } catch {
    usdRate.value = null
  } finally {
    loading.value = false
  }
}

function formatUZS(usd) {
  if (!usdRate.value || usd === 0) return '—'
  return new Intl.NumberFormat('uz-UZ').format(Math.round(usd * usdRate.value)) + ' UZS'
}

onMounted(fetchUSDRate)
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

.rates-section {
  background: #f8faff;
  padding: 0 0 5rem;
}

.rates-inner {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 1.5rem;
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
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
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

.rate-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 10px 16px;
  flex-wrap: wrap;
}

.rate-bar-left {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.rate-dollar-icon {
  width: 18px;
  height: 18px;
  color: #2563eb;
  flex-shrink: 0;
}

.rate-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #334155;
}

.rate-text strong {
  font-weight: 700;
  color: #0f172a;
}

.rate-loading { color: #94a3b8; font-style: italic; }
.rate-error   { color: #ef4444; }

.rate-change {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 100px;
}

.rate-up   { background: #dcfce7; color: #16a34a; }
.rate-down { background: #fee2e2; color: #dc2626; }

.trend-icon { width: 13px; height: 13px; }

.refresh-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  background: #2563eb;
  color: #fff;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.18s;
}

.refresh-btn:hover:not(:disabled) { background: #1d4ed8; }
.refresh-btn:disabled { opacity: 0.5; cursor: not-allowed; }

.refresh-icon { width: 14px; height: 14px; }

@keyframes spin {
  to { transform: rotate(360deg); }
}

.spin { animation: spin 0.8s linear infinite; }

.table-wrap {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}

.fee-table {
  width: 100%;
  border-collapse: collapse;
}

.fee-table thead tr {
  background: linear-gradient(90deg, #1e40af 0%, #2563eb 100%);
}

.th-cat,
.th-usd,
.th-uzs {
  padding: 14px 18px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
  border: none;
}

.th-usd,
.th-uzs { text-align: center; }

.fee-row {
  transition: background 0.15s;
  border-bottom: 1px solid #f1f5f9;
}

.fee-row:last-child { border-bottom: none; }

.fee-row:nth-child(even) { background: #f8faff; }
.fee-row:hover { background: #eff6ff; }

.td-cat {
  padding: 14px 18px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #1e293b;
}

.td-usd {
  padding: 14px 18px;
  text-align: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1d4ed8;
}

.td-usd.free { color: #059669; }

.td-uzs {
  padding: 14px 18px;
  text-align: center;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85rem;
  font-weight: 500;
  color: #475569;
}

.loading-dot { color: #cbd5e1; }

.rate-note {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: #94a3b8;
  text-align: center;
}
</style>