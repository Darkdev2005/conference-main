<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4 my-24">
    <div class="w-full max-w-xl bg-white rounded-lg shadow-lg p-6">
      <h1 class="text-2xl font-semibold text-slate-800 mb-4">Conference Registration</h1>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <!-- First & Last name -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="text-sm font-medium text-slate-700">First name</label>
            <input
              v-model="form.firstName"
              required
              class="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-slate-700">Last name</label>
            <input
              v-model="form.lastName"
              required
              class="mt-1 block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>

        <!-- Country select -->
        <div>
          <label class="text-sm font-medium text-slate-700">Country</label>

          <div class="mt-1 relative">
            <div class="flex items-center gap-2 border border-slate-200 rounded-md px-3 py-2 bg-white">
              <img
                v-if="selectedCountry?.flags?.svg"
                :src="selectedCountry.flags.svg"
                alt="flag"
                class="w-6 h-4 object-cover rounded-sm"
              />
              <div class="flex-1">
                <input
                  type="text"
                  v-model="countrySearch"
                  @input="onCountrySearch"
                  @focus="open = true"
                  placeholder="Type to search country..."
                  class="w-full outline-none bg-transparent"
                />
              </div>

              <button v-if="selectedCountry" type="button" class="text-slate-500" @click="clearCountry">✕</button>
              <button type="button" class="text-slate-400" @click="toggleOpen" aria-label="toggle">▾</button>
            </div>

            <!-- Dropdown -->
            <div
              v-if="open"
              class="absolute z-40 left-0 right-0 mt-1 bg-white border border-slate-200 rounded-md shadow-lg max-h-64 overflow-auto country-list"
            >
              <div class="p-2 sticky top-0 bg-white border-b border-slate-100">
                <input
                  type="text"
                  v-model="countrySearch"
                  @input="onCountrySearch"
                  placeholder="Search country..."
                  class="w-full rounded-md border border-slate-200 px-2 py-1"
                />
              </div>

              <ul>
                <li
                  v-for="country in pagedCountries"
                  :key="country.cca3"
                  @click="selectCountry(country)"
                  class="flex items-center gap-3 px-3 py-2 hover:bg-indigo-50 cursor-pointer"
                >
                  <img :src="country.flags.svg" alt="flag" class="w-6 h-4 object-cover rounded-sm" />
                  <div class="flex-1">
                    <div class="text-sm font-medium text-slate-800">{{ country.name.common }}</div>
                    <div class="text-xs text-slate-500">{{ country.cca2 }} · {{ country.region }}</div>
                  </div>
                </li>

                <li v-if="pagedCountries.length === 0" class="px-3 py-4 text-sm text-slate-500">
                  No countries found.
                </li>
              </ul>

              <div
                class="flex items-center justify-between px-3 py-2 border-t border-slate-100 bg-slate-50 text-xs text-slate-500"
              >
                <div>Showing {{ startIndex + 1 }}–{{ Math.min(endIndex, filtered.length) }} of {{ filtered.length }}</div>
                <div class="flex gap-2">
                  <button type="button" class="px-2 py-1 rounded disabled:opacity-40" :disabled="page === 1" @click="prevPage">Prev</button>
                  <button
                    type="button"
                    class="px-2 py-1 rounded disabled:opacity-40"
                    :disabled="endIndex >= filtered.length"
                    @click="nextPage"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <input type="hidden" v-model="form.country" />
        </div>

        <!-- Article info -->

        <div class="space-y-4">
          <div>
            <label class= "text-sm font-medium text-slate-700 block mb-1">Article ID</label>
            <input
              v-model="form.articleId"
              required
              class="block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          <div>
            <label class="text-sm font-medium text-slate-700 block mb-1">Article title</label>
            <textarea
              v-model="form.articleTitle"
              required
              rows="3"
              class="block w-full rounded-md border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none"
            ></textarea>
          </div>
        </div>

        <!-- Participation -->
        <div>
          <label class="text-sm font-medium text-slate-700 mb-2 block">Participation type</label>
          <div class="inline-flex bg-slate-100 rounded-lg p-1">
            <button
              type="button"
              @click="form.participation = 'Online'"
              :class="segClass('Online')"
              class="px-4 py-2 rounded-md text-sm"
            >
              Online
            </button>
            <button
              type="button"
              @click="form.participation = 'Offline'"
              :class="segClass('Offline')"
              class="px-4 py-2 rounded-md text-sm"
            >
              Offline
            </button>
          </div>
          <p v-if="!form.participation" class="text-xs text-red-500 mt-1">Please choose participation type.</p>
        </div>

        <!-- Buttons -->
        <div class="flex items-center justify-between mt-6">
          <button type="submit" :disabled="!valid" class="bg-indigo-600 text-white px-4 py-2 rounded-md disabled:opacity-50">
            Submit
          </button>
          <button type="button" @click="reset" class="text-sm text-slate-600">Reset</button>
        </div>
      </form>

      <!-- Result -->
      <div
        v-if="resultMessage"
        class="mt-4 p-3 rounded-md"
        :class="resultSuccess ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-700'"
      >
        {{ resultMessage }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
import axios from 'axios'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

const open = ref(false)
const countries = ref([])
const filtered = ref([])
const countrySearch = ref('')
const selectedCountry = ref(null)
const page = ref(1)
const perPage = 50

const form = reactive({
  firstName: '',
  lastName: '',
  country: '',
  articleId: '',
  articleTitle: '',
  participation: '',
})

const resultMessage = ref('')
const resultSuccess = ref(false)

const valid = computed(() => {
  return (
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.country.trim() &&
    form.articleId.trim() &&
    form.articleTitle.trim() &&
    (form.participation === 'Online' || form.participation === 'Offline')
  )
})

function segClass(val) {
  return form.participation === val ? 'bg-white shadow text-indigo-700' : 'text-slate-700'
}

const startIndex = computed(() => (page.value - 1) * perPage)
const endIndex = computed(() => page.value * perPage)
const pagedCountries = computed(() => filtered.value.slice(startIndex.value, endIndex.value))

function prevPage() {
  if (page.value > 1) page.value--
}
function nextPage() {
  if (endIndex.value < filtered.value.length) page.value++
}
function toggleOpen() {
  open.value = !open.value
}
function clearCountry() {
  selectedCountry.value = null
  form.country = ''
  countrySearch.value = ''
}
async function fetchCountries() {
  try {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,cca2,cca3,region')
    const data = await res.json()
    countries.value = data
      .map(c => ({
        name: c.name || {},
        flags: c.flags || {},
        cca2: c.cca2 || '',
        cca3: c.cca3 || '',
        region: c.region || '',
      }))
      .sort((a, b) => (a.name.common || '').localeCompare(b.name.common || ''))
    filtered.value = countries.value
  } catch (err) {
    console.error('Failed to fetch countries', err)
    filtered.value = []
  }
}
function onCountrySearch() {
  const q = (countrySearch.value || '').toLowerCase().trim()
  page.value = 1
  if (!q) {
    filtered.value = countries.value
    return
  }
  filtered.value = countries.value.filter(c => {
    const name = (c.name.common || '').toLowerCase()
    const code = (c.cca2 || '').toLowerCase()
    return name.includes(q) || code.includes(q)
  })
}
function selectCountry(c) {
  selectedCountry.value = c
  form.country = c.name.common || ''
  countrySearch.value = c.name.common || ''
  open.value = false
}
function reset() {
  Object.assign(form, {
    firstName: '',
    lastName: '',
    country: '',
    articleId: '',
    articleTitle: '',
    participation: '',
  })
  selectedCountry.value = null
  countrySearch.value = ''
}

// ✅ Telegram message sender
async function handleSubmit() {
  resultMessage.value = ''
  resultSuccess.value = false

  if (!valid.value) {
    resultMessage.value = 'Please fill required fields correctly.'
    toastr.error(resultMessage.value, '⚠️ Warning')
    return
  }

  const token = '7760774030:AAGthk__sJtQa6V6kBVtdAKkBfJznA29Jr0'
  const chatIds = [
    '6840537054',
    '80265294',
  ]

  const message = `
📝 *New Registration:*
👤 *Name:* ${form.firstName} ${form.lastName}
🌍 *Country:* ${form.country}
🆔 *Article ID:* ${form.articleId || '-'}
📘 *Article Title:* ${form.articleTitle || '-'}
🎯 *Participation:* ${form.participation || '-'}
`

  try {

    await Promise.all(
      chatIds.map(id =>
        axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
          chat_id: id,
          text: message,
          parse_mode: 'Markdown',
        })
      )
    )

    toastr.success('Your message has been sent!', '✅ Success')
    resultMessage.value = 'Message successfully sent to Telegram.'
    resultSuccess.value = true
    reset()
  } catch (error) {
    console.error('Telegram send error:', error)
    toastr.error('Message failed to send. Try again later.', '❌ Error')
    resultMessage.value = 'Message failed to send. Try again later.'
  }
}

onMounted(() => {
  fetchCountries()
  document.addEventListener('click', e => {
    if (!e.target.closest('.relative')) open.value = false
  })
})

watch(countrySearch, v => {
  if (v && v.length > 0) open.value = true
})
</script>

<style scoped>
.relative {
  position: relative;
}
.country-list img {
  display: inline-block;
}
</style>
