<template>
  <section class="contact-section">
    <div class="contact-inner">

      <div class="section-header">
        <span class="eyebrow">Get in Touch</span>
        <h1 class="section-title">Contact & Register</h1>
        <p class="section-desc">Send us a message or register directly for TCCE 2026</p>
      </div>

      <div class="contact-grid">

        <div class="form-card">
          <div class="form-card-header">
            <div class="form-card-icon-wrap">
              <MessageSquare class="form-card-icon" />
            </div>
            <div>
              <h2 class="form-card-title">Send a Message</h2>
              <p class="form-card-sub">We'll get back to you as soon as possible</p>
            </div>
          </div>

          <form @submit.prevent="submitForm" class="form-fields">
            <div class="field">
              <label class="field-label">Email</label>
              <div class="field-wrap">
                <Mail class="field-icon" />
                <input
                  type="email"
                  v-model="form.email"
                  required
                  placeholder="your@email.com"
                  class="field-input"
                  :class="{ 'field-input--error': errors.email }"
                />
              </div>
            </div>

            <div class="field">
              <label class="field-label">Phone</label>
              <div class="field-wrap">
                <Phone class="field-icon" />
                <input
                  type="tel"
                  v-model="form.phone"
                  required
                  placeholder="+998 XX XXX XX XX"
                  class="field-input"
                />
              </div>
            </div>

            <div class="field">
              <label class="field-label">Message</label>
              <div class="field-wrap field-wrap--textarea">
                <MessageSquare class="field-icon field-icon--top" />
                <textarea
                  v-model="form.message"
                  rows="4"
                  required
                  placeholder="Write your message here..."
                  class="field-input field-input--textarea"
                />
              </div>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn btn-primary" :disabled="sending">
                <span v-if="sending" class="btn-spinner" />
                <Send v-else class="btn-icon" />
                {{ sending ? 'Sending...' : 'Send Message' }}
              </button>

              <RouterLink
                :to="{ name: 'register-form' }"
                class="btn btn-green"
              >
                <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
                Register for Conference
              </RouterLink>
            </div>

            <transition name="toast-fade">
              <div v-if="toast.show" class="toast" :class="toast.type === 'success' ? 'toast--success' : 'toast--error'">
                <component :is="toast.type === 'success' ? CheckCircle : XCircle" class="toast-icon" />
                {{ toast.message }}
              </div>
            </transition>
          </form>
        </div>

        <div class="side-col">
          <div class="contact-card">
            <h2 class="contact-card-title">Contact Us Directly</h2>

            <div class="contact-group">
              <div class="contact-group-label">
                <Mail class="contact-group-icon" />
                Email
              </div>
              <div class="contact-items">
                <a href="mailto:bobokhonov_a@samdu.uz" class="contact-item">
                  <span class="flag">UZ</span>
                  <span class="contact-item-text">bobokhonov_a@samdu.uz</span>
                </a>
                <a href="mailto:b_akhmadkhon@mail.ru" class="contact-item">
                  <span class="flag">UZ</span>
                  <span class="contact-item-text">b_akhmadkhon@mail.ru</span>
                </a>
                <a href="mailto:sazzad69@gmail.com" class="contact-item">
                  <span class="flag">UZ</span>
                  <span class="contact-item-text">sazzad69@gmail.com</span>
                </a>
              </div>
            </div>

            <div class="divider" />

            <div class="contact-group">
              <div class="contact-group-label">
                <Phone class="contact-group-icon contact-group-icon--green" />
                Phone
              </div>
              <div class="contact-items">
                
               
                <a href="tel:+998505009806" class="contact-item">
                  <span class="flag">UZ</span>
                  <span class="contact-item-text">+998 50 500 98 06</span>
                </a>
                <a href="tel:+998904469977" class="contact-item">
                  <span class="flag">UZ</span>
                  <span class="contact-item-text">+998 90 446 99 77</span>
                </a>
              </div>
            </div>

            <div class="divider" />

            <div class="contact-group">
              <div class="contact-group-label">
                <Globe class="contact-group-icon contact-group-icon--purple" />
                Website
              </div>
              <div class="contact-items">
                <a href="https://www.tcce2026.uz" target="_blank" rel="noopener noreferrer" class="contact-item">
                  <span class="flag">WEB</span>
                  <span class="contact-item-text"> www.tcce2026.uz</span>
                </a>
              </div>
            </div>

            <div class="divider" />

            <div class="quick-links">
              <p class="quick-links-label">Quick channels</p>
              <div class="quick-links-row">
                <a href="https://chat.whatsapp.com/HiFBmV7A1ukKUTonKbppzh?mode=gi_t" target="_blank" rel="noopener noreferrer" class="quick-btn quick-btn--wa">
                  <svg class="quick-svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <a href="https://t.me/tcce2026" target="_blank" rel="noopener noreferrer" class="quick-btn quick-btn--tg">
                  <svg class="quick-svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { Mail, Phone, Globe, MessageSquare, Send, CheckCircle, XCircle } from 'lucide-vue-next'

export default {
  name: 'ContactView',
  components: { Mail, Phone, Globe, MessageSquare, Send, CheckCircle, XCircle },
  setup() {
    return { CheckCircle, XCircle }
  },
  data() {
    return {
      sending: false,
      errors: {},
      toast: { show: false, type: '', message: '' },
      form: { email: '', phone: '', message: '' },
    }
  },
  methods: {
    showToast(type, message) {
      this.toast = { show: true, type, message }
      setTimeout(() => { this.toast.show = false }, 4000)
    },
    async submitForm() {
      this.sending = true
      const token = (import.meta.env.VITE_TELEGRAM_TOKEN || '').trim()
      const chatId = (import.meta.env.VITE_TELEGRAM_CHAT_ID || '').trim()
      const plainText = `New Contact Submission\nEmail: ${this.form.email}\nPhone: ${this.form.phone}\nMessage: ${this.form.message}`
      const markdownText = `*New Contact Submission*\nEmail: ${this.form.email}\nPhone: ${this.form.phone}\nMessage: ${this.form.message}`

      try {
        if (!token || !chatId) {
          throw new Error('Telegram bot settings are missing')
        }

        const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: chatId, text: markdownText, parse_mode: 'Markdown' }),
        })

        const result = await response.json()
        if (!response.ok || !result.ok) {
          throw new Error(result?.description || 'Telegram API error')
        }

        this.showToast('success', 'Your message has been sent successfully!')
        this.form = { email: '', phone: '', message: '' }
      } catch {
        const fallback = `https://t.me/share/url?url=${encodeURIComponent('https://www.tcce2026.uz')}&text=${encodeURIComponent(plainText)}`
        window.open(fallback, '_blank', 'noopener,noreferrer')
        this.showToast('error', 'Telegram bot is unavailable. Opened Telegram share as fallback.')
      } finally {
        this.sending = false
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;700&family=DM+Sans:wght@400;500;600&display=swap');

.contact-section {
  background: #f8faff;
  padding: 5rem 0 6rem;
}

.contact-inner {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.section-header { text-align: center; }

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
  font-size: clamp(2rem, 4vw, 2.75rem);
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 0.5rem;
  line-height: 1.15;
}

.section-desc {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  color: #64748b;
  max-width: 420px;
  margin: 0 auto;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 760px) {
  .contact-grid { grid-template-columns: 1fr 1fr; }
}

.form-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-card-header {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.form-card-icon-wrap {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #dbeafe;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-card-icon {
  width: 20px;
  height: 20px;
  color: #2563eb;
}

.form-card-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
}

.form-card-sub {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #94a3b8;
}

.form-fields {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.field { display: flex; flex-direction: column; gap: 5px; }

.field-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  color: #374151;
  letter-spacing: 0.03em;
}

.field-wrap {
  position: relative;
}

.field-icon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  color: #94a3b8;
  pointer-events: none;
}

.field-wrap--textarea .field-icon { top: 12px; transform: none; }

.field-input {
  width: 100%;
  padding: 10px 14px 10px 38px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #1e293b;
  background: #f8faff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  outline: none;
  transition: border-color 0.18s, box-shadow 0.18s;
}

.field-input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  background: #fff;
}

.field-input--textarea {
  resize: vertical;
  min-height: 110px;
  padding-top: 10px;
}

.form-actions {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 11px 20px;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: background 0.18s, transform 0.18s, box-shadow 0.18s;
}

.btn:hover:not(:disabled) { transform: translateY(-1px); }
.btn:disabled { opacity: 0.6; cursor: not-allowed; }

.btn-primary {
  background: #2563eb;
  color: #fff;
  box-shadow: 0 3px 14px rgba(37, 99, 235, 0.3);
}

.btn-primary:hover:not(:disabled) {
  background: #1d4ed8;
  box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
}

.btn-green {
  background: #059669;
  color: #fff;
  box-shadow: 0 3px 14px rgba(5, 150, 105, 0.25);
}

.btn-green:hover { background: #047857; }

.btn-icon { width: 16px; height: 16px; }

.btn-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255,255,255,0.35);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.toast {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
}

.toast--success { background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; }
.toast--error   { background: #fff1f2; color: #991b1b; border: 1px solid #fecdd3; }

.toast-icon { width: 16px; height: 16px; flex-shrink: 0; }

.toast-fade-enter-active, .toast-fade-leave-active { transition: opacity 0.3s, transform 0.3s; }
.toast-fade-enter-from, .toast-fade-leave-to { opacity: 0; transform: translateY(-6px); }

.side-col { display: flex; flex-direction: column; gap: 1rem; }

.contact-card {
  background: #fff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.04);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact-card-title {
  font-family: 'Crimson Pro', serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #0f172a;
}

.contact-group { display: flex; flex-direction: column; gap: 0.75rem; }

.contact-group-label {
  display: flex;
  align-items: center;
  gap: 7px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #64748b;
}

.contact-group-icon {
  width: 15px;
  height: 15px;
  color: #2563eb;
}

.contact-group-icon--green { color: #059669; }
.contact-group-icon--purple { color: #7c3aed; }

.contact-items { display: flex; flex-direction: column; gap: 0.5rem; }

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 9px 12px;
  background: #f8faff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.15s, border-color 0.15s;
}

.contact-item:hover {
  background: #eff6ff;
  border-color: #bfdbfe;
}

.flag { font-size: 1rem; }

.contact-item-text {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #2563eb;
}

.divider {
  height: 1px;
  background: #f1f5f9;
}

.quick-links { display: flex; flex-direction: column; gap: 0.6rem; }

.quick-links-label {
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #94a3b8;
}

.quick-links-row { display: flex; gap: 0.75rem; }

.quick-btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 16px;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.83rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  transition: opacity 0.18s, transform 0.18s;
}

.quick-btn:hover { opacity: 0.88; transform: translateY(-1px); }

.quick-btn--wa { background: #22c55e; }
.quick-btn--tg { background: #38bdf8; }

.quick-svg { width: 16px; height: 16px; }
</style>

