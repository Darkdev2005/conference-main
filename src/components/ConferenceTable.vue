<template>
  <div class="flex flex-col gap-8">

    <div class="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
      <div class="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50">
        <div class="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
          <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </div>
        <h2 class="text-sm font-bold tracking-widest uppercase text-slate-600">Important Dates</h2>
      </div>

      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-emerald-600">
            <th class="px-5 py-3 text-xs font-bold tracking-widest uppercase text-white/80 w-3/5">Event</th>
            <th class="px-5 py-3 text-xs font-bold tracking-widest uppercase text-white/80">Deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in dates"
            :key="i"
            class="border-b border-slate-50 last:border-0 hover:bg-emerald-50/60 transition-colors"
            :class="i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'"
          >
            <td class="px-5 py-3.5 text-sm font-medium text-slate-700 flex items-center gap-2.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
              {{ row.event }}
            </td>
            <td class="px-5 py-3.5">
              <span class="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                {{ row.deadline }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
      <div class="flex items-center gap-3 px-5 py-4 border-b border-slate-100 bg-slate-50">
        <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
          <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <h2 class="text-sm font-bold tracking-widest uppercase text-slate-600">Amount of Fee Required</h2>
      </div>

      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-blue-600">
            <th class="px-5 py-3 text-xs font-bold tracking-widest uppercase text-white/80">Category</th>
            <th class="px-5 py-3 text-xs font-bold tracking-widest uppercase text-white/80 text-right">Fee (USD)</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in fees"
            :key="i"
            class="border-b border-slate-50 last:border-0 hover:bg-blue-50/60 transition-colors"
            :class="i % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'"
          >
            <td class="px-5 py-3.5 text-sm font-medium text-slate-700 flex items-center gap-2.5">
              <span class="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              {{ row.category }}
            </td>
            <td class="px-5 py-3.5 text-right">
              <span
                class="inline-block text-xs font-bold px-2.5 py-1 rounded-full"
                :class="row.free
                  ? 'bg-green-50 text-green-700 border border-green-100'
                  : 'bg-blue-50 text-blue-700 border border-blue-100'"
              >
                {{ row.fee }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ConferenceTable',
  data() {
    return {
      dates: [
        { event: 'Paper submission opens',      deadline: 'To be announced' },
        { event: 'Notification of acceptance',  deadline: 'To be announced' },
        { event: 'Camera-ready submission',     deadline: 'To be announced' },
        { event: 'Registration deadline',       deadline: 'To be announced' },
        { event: 'Conference dates',            deadline: '2026 (TBA)'      },
      ],
      fees: [
        { category: 'Registration',              fee: 'Free', free: true  },
        { category: 'Local PhD Student (SamSU)', fee: '$100', free: false },
        { category: 'International PhD Student', fee: '$125', free: false },
        { category: 'Local Professor',           fee: '$150', free: false },
        { category: 'International Professor',   fee: '$250', free: false },
      ],
    }
  },
}
</script>
