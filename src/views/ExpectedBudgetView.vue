<template>
  <section class="summary-section">
    <div class="summary-inner">

      <div class="block-heading-row">
        <div class="block-line" />
        <h2 class="block-heading">Summary of Expected Budget</h2>
        <div class="block-line" />
      </div>

      <div class="table-wrap">
        <table class="budget-table">
          <thead>
            <tr>
              <th class="th-section" colspan="2">
                <span class="th-section-icon-wrap th-section-icon-wrap--green">
                  <TrendingUp class="th-section-icon" />
                </span>
                Income
              </th>
            </tr>
            <tr class="th-row">
              <th class="th-cat">Category</th>
              <th class="th-amt">Estimated Amount (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in incomeRows" :key="'inc-' + i" class="td-row" :class="{ 'row-total': row.total, 'row-even': i % 2 !== 0 }">
              <td class="td-cat" :class="{ 'td-cat--total': row.total }">{{ row.category }}</td>
              <td class="td-amt" :class="{ 'td-amt--total': row.total, 'td-amt--tba': row.tba }">{{ row.amount }}</td>
            </tr>
          </tbody>

          <thead>
            <tr>
              <th class="th-section th-section--red" colspan="2">
                <span class="th-section-icon-wrap th-section-icon-wrap--red">
                  <TrendingDown class="th-section-icon" />
                </span>
                Expenditures
              </th>
            </tr>
            <tr class="th-row">
              <th class="th-cat">Category</th>
              <th class="th-amt">Estimated Amount (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, i) in expenditureRows" :key="'exp-' + i" class="td-row" :class="{ 'row-total': row.total, 'row-even': i % 2 !== 0 }">
              <td class="td-cat" :class="{ 'td-cat--total': row.total }">{{ row.category }}</td>
              <td class="td-amt" :class="{ 'td-amt--total': row.total, 'td-amt--tba': row.tba, 'td-amt--red': row.total }">{{ row.amount }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="note-card">
        <div class="note-icon-wrap">
          <Info class="note-icon" />
        </div>
        <div class="note-body">
          <span class="note-label">Note</span>
          <p class="note-text">
            A publication waiver will be granted for one paper submitted by a member of the
            <strong>Steering Committee</strong>. For any additional papers, the registration fee must be paid.
            <strong>Partial Travel Grant</strong> can be given to Steering Committee members and Speakers
            based on the income of the Conference.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { TrendingUp, TrendingDown, Info } from 'lucide-vue-next'

export default {
  name: 'BudgetSummary',
  components: { TrendingUp, TrendingDown, Info },
  data() {
    return {
      incomeRows: [
        { category: 'Conference Registration Fee', amount: '40×$100 + 20×$250 = $9,000' },
        { category: 'Advertisement',               amount: 'TBA', tba: true },
        { category: 'Contribution from Host Institute', amount: 'TBA', tba: true },
        { category: 'Total Income',                amount: 'TBA', tba: true, total: true },
      ],
      expenditureRows: [
        { category: 'Venue Booking',                    amount: 'TBA', tba: true },
        { category: 'Venue Preparation & Decoration',   amount: 'TBA', tba: true },
        { category: 'Food (Tea, Lunch & Gala Dinner)',  amount: 'TBA', tba: true },
        { category: 'Local Hospitality',                amount: 'TBA', tba: true },
        { category: 'Full / Partial Airfare',           amount: 'TBA', tba: true },
        { category: 'Total Expenditures',               amount: 'TBA', tba: true, total: true },
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap');

.summary-section {
  background: #f8faff;
  padding: 0 0 6rem;
}

.summary-inner {
  max-width: 820px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
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

.table-wrap {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 2px 16px rgba(0,0,0,0.05);
}

.budget-table {
  width: 100%;
  border-collapse: collapse;
}

.th-section {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  background: linear-gradient(90deg, #f0fdf4, #f8faff);
  color: #059669;
  border-bottom: 1px solid #d1fae5;
}

.th-section--red {
  background: linear-gradient(90deg, #fff1f2, #f8faff);
  color: #dc2626;
  border-bottom-color: #fecdd3;
  border-top: 2px solid #e2e8f0;
}

.th-section-icon-wrap {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #dcfce7;
}

.th-section-icon-wrap--red { background: #fee2e2; }

.th-section-icon {
  width: 13px;
  height: 13px;
  color: #059669;
}

.th-section-icon-wrap--red .th-section-icon { color: #dc2626; }

.th-row {
  background: #f8faff;
}

.th-cat,
.th-amt {
  padding: 10px 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #64748b;
  border-bottom: 1px solid #e2e8f0;
  text-align: left;
}

.th-amt { text-align: right; }

.td-row {
  border-bottom: 1px solid #f1f5f9;
  transition: background 0.14s;
}

.td-row:last-child { border-bottom: none; }
.td-row:hover { background: #f0f4ff; }
.row-even { background: #fafbff; }

.row-total {
  background: #f0f4ff !important;
  border-top: 2px solid #e0e7ff;
}

.td-cat {
  padding: 13px 20px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1e293b;
}

.td-cat--total {
  font-weight: 700;
  color: #0f172a;
}

.td-amt {
  padding: 13px 20px;
  text-align: right;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.875rem;
  font-weight: 500;
  color: #334155;
}

.td-amt--total {
  font-weight: 700;
  color: #1d4ed8;
}

.td-amt--red {
  color: #dc2626 !important;
}

.td-amt--tba {
  color: #94a3b8;
  font-style: italic;
}

.note-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #fffbeb;
  border: 1px solid #fcd34d;
  border-left: 4px solid #f59e0b;
  border-radius: 14px;
  padding: 1.25rem 1.4rem;
}

.note-icon-wrap {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: #fef3c7;
  display: flex;
  align-items: center;
  justify-content: center;
}

.note-icon {
  width: 18px;
  height: 18px;
  color: #d97706;
}

.note-label {
  display: block;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #d97706;
  margin-bottom: 5px;
}

.note-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #78350f;
  line-height: 1.65;
}

.note-text strong {
  color: #92400e;
  font-weight: 700;
}
</style>