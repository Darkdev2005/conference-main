<template>
  <section class="payment-section">
    <div class="payment-inner">

      <div class="section-header">
        <span class="eyebrow">Registration & Fees</span>
        <h1 class="section-title">Payment Information</h1>
        <p class="section-desc">Complete your registration by submitting payment via card or bank transfer</p>
      </div>

      <div class="cards-row">
        <div class="pay-card pay-card--uz">
          <div class="pay-card-icon">
            <CreditCard class="pay-card-svg" />
          </div>
          <div class="pay-card-body">
            <div class="pay-card-label">For Uzbekistan Citizens</div>
            <div class="pay-card-number">9860 0101 3577 8479</div>
          </div>
          <button class="copy-btn" @click="copy('9860 0101 3577 8479', 0)" :class="{ copied: copied[0] }">
            <Check v-if="copied[0]" class="copy-icon" />
            <Copy v-else class="copy-icon" />
          </button>
        </div>

        <div class="pay-card pay-card--intl">
          <div class="pay-card-icon">
            <Globe class="pay-card-svg" />
          </div>
          <div class="pay-card-body">
            <div class="pay-card-label">For Foreign Citizens</div>
            <div class="pay-card-number">4108 5901 1141 5702</div>
          </div>
          <button class="copy-btn" @click="copy('4108 5901 1141 5702', 1)" :class="{ copied: copied[1] }">
            <Check v-if="copied[1]" class="copy-icon" />
            <Copy v-else class="copy-icon" />
          </button>
        </div>
      </div>

      <div class="bank-block">
        <div class="block-heading-row">
          <div class="block-line" />
          <h2 class="block-heading">Bank Transfer Details</h2>
          <div class="block-line" />
        </div>

        <div class="bank-grid">
          <div v-for="item in bankDetails" :key="item.label" class="bank-item">
            <span class="bank-label">{{ item.label }}</span>
            <span class="bank-value">{{ item.value }}</span>
          </div>
        </div>
      </div>

      <div class="contact-block">
        <div class="contact-header">
          <Mail class="contact-mail-icon" />
          <div>
            <p class="contact-instruction">
              After payment, send the receipt to
              <a href="mailto:mehriddinnur@gmail.com" class="contact-email">mehriddinnur@gmail.com</a>
            </p>
            <p class="contact-or">or reach us via</p>
          </div>
        </div>

        <div class="contact-channels">
          <a href="tel:+998939995149" class="channel-btn channel-phone">
            <span class="channel-icon-wrap channel-icon-wrap--phone">
              <svg class="channel-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </span>
            <span class="channel-label">Phone</span>
          </a>

          <a href="https://wa.me/998939995149" target="_blank" rel="noopener noreferrer" class="channel-btn">
            <span class="channel-icon-wrap channel-icon-wrap--wa">
              <svg class="channel-svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </span>
            <span class="channel-label">WhatsApp</span>
          </a>

          <a href="https://t.me/mnq1011" target="_blank" rel="noopener noreferrer" class="channel-btn">
            <span class="channel-icon-wrap channel-icon-wrap--tg">
              <svg class="channel-svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </span>
            <span class="channel-label">Telegram</span>
          </a>
        </div>

        <p class="contact-phone">+998 93 999 51 49</p>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { CreditCard, Globe, Mail, Copy, Check } from 'lucide-vue-next'

const copied = ref([false, false])

function copy(text, idx) {
  navigator.clipboard.writeText(text).then(() => {
    copied.value[idx] = true
    setTimeout(() => { copied.value[idx] = false }, 2000)
  })
}

const bankDetails = [
  { label: 'Beneficiary',            value: 'NURMAMATOV MEXRIDDIN KAHRAMANOVICH' },
  { label: 'Address',                value: 'Uzbekistan, Samarkand, 95 Buyuk Turonli Str.' },
  { label: 'Account',                value: '22618840360597852411' },
  { label: 'Bank',                   value: 'PCJSCB «Orient Finans», Samarkand BSC, Uzbekistan' },
  { label: 'SWIFT Code',             value: 'ORFBUZ22' },
  { label: 'Correspondent Bank',     value: 'National Bank of Uzbekistan' },
  { label: 'Correspondent Account',  value: '21002840200001071001' },
  { label: 'Correspondent SWIFT',    value: 'NBFAUZ2X' },
]
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap');

.payment-section {
  background: #f8faff;
  padding: 5rem 0 4rem;
}

.payment-inner {
  max-width: 760px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  line-height: 1.6;
}

.cards-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 560px) {
  .cards-row {
    grid-template-columns: 1fr 1fr;
  }
}

.pay-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.07);
  border-radius: 16px;
  padding: 1.1rem 1.25rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  transition: box-shadow 0.2s;
  position: relative;
}

.pay-card:hover {
  box-shadow: 0 6px 24px rgba(0,0,0,0.09);
}

.pay-card--uz  { border-top: 3px solid #2563eb; }
.pay-card--intl { border-top: 3px solid #059669; }

.pay-card-icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pay-card--uz  .pay-card-icon { background: #dbeafe; }
.pay-card--intl .pay-card-icon { background: #d1fae5; }

.pay-card-svg {
  width: 20px;
  height: 20px;
}

.pay-card--uz  .pay-card-svg { color: #2563eb; }
.pay-card--intl .pay-card-svg { color: #059669; }

.pay-card-body {
  flex: 1;
  min-width: 0;
}

.pay-card-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #94a3b8;
  margin-bottom: 3px;
}

.pay-card-number {
  font-family: 'JetBrains Mono', monospace;
  font-size: 1rem;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: 0.04em;
}

.copy-btn {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.15s;
}

.copy-btn:hover { background: #e2e8f0; }
.copy-btn.copied { background: #d1fae5; border-color: #6ee7b7; }

.copy-icon {
  width: 14px;
  height: 14px;
  color: #64748b;
}

.copy-btn.copied .copy-icon { color: #059669; }

.bank-block {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 18px;
  padding: 1.75rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
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

.bank-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.bank-item {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  padding: 9px 0;
  border-bottom: 1px solid #f1f5f9;
}

.bank-item:last-child {
  border-bottom: none;
}

.bank-label {
  flex-shrink: 0;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  min-width: 160px;
}

.bank-value {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #1e293b;
  font-weight: 500;
}

.contact-block {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 18px;
  padding: 1.75rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  text-align: center;
}

.contact-header {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.contact-mail-icon {
  width: 20px;
  height: 20px;
  color: #ef4444;
  flex-shrink: 0;
  margin-top: 2px;
}

.contact-instruction {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.6;
  text-align: left;
}

.contact-email {
  color: #2563eb;
  font-weight: 600;
  text-decoration: none;
}

.contact-email:hover { text-decoration: underline; }

.contact-or {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #94a3b8;
  margin-top: 4px;
  text-align: left;
}

.contact-channels {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
}

.channel-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  transition: transform 0.18s;
}

.channel-btn:hover { transform: translateY(-3px); }

.channel-icon-wrap {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
}

.channel-icon-wrap--phone { background: #2563eb; }
.channel-icon-wrap--wa   { background: #22c55e; }
.channel-icon-wrap--tg   { background: #38bdf8; }

.channel-svg {
  width: 24px;
  height: 24px;
  color: #fff;
}

.channel-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  color: #64748b;
}

.contact-phone {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  font-weight: 600;
  color: #475569;
  letter-spacing: 0.04em;
}
</style>