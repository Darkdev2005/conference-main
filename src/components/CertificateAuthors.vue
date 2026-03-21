<template>
  <section class="min-h-screen bg-slate-50 py-20 px-4">
    <div class="max-w-7xl mx-auto">

      <div class="text-center mb-12">
        <span class="inline-block text-xs font-bold tracking-widest uppercase text-blue-600 mb-2">Official Documents</span>
        <h1 class="font-serif text-4xl font-bold text-slate-900 mb-3">Certificate Authors</h1>
        <p class="text-slate-500 text-base max-w-md mx-auto leading-relaxed">Download or preview your official conference participation certificate</p>
      </div>

      <div v-if="images.length === 0" class="flex flex-col items-center justify-center py-24 gap-4">
        <div class="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center">
          <svg class="w-8 h-8 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
        </div>
        <p class="text-slate-400 text-sm font-medium">No certificates available yet</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(cert, index) in images"
          :key="index"
          class="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          <div
            @click="open(cert)"
            class="relative cursor-zoom-in bg-slate-50 flex items-center justify-center overflow-hidden"
            style="aspect-ratio: 4/3;"
          >
            <img
              :src="cert"
              loading="lazy"
              alt="Certificate"
              class="w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-all duration-300 flex items-center justify-center">
              <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
                <svg class="w-4 h-4 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                </svg>
                <span class="text-xs font-semibold text-slate-700">Preview</span>
              </div>
            </div>
          </div>

          <div class="px-4 py-3 flex items-center justify-between border-t border-slate-50">
            <div class="flex items-center gap-2">
              <div class="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center">
                <span class="text-blue-600 text-xs font-bold">{{ index + 1 }}</span>
              </div>
              <span class="text-sm font-medium text-slate-600">Certificate #{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <a
              :href="cert"
              :download="'certificate-' + (index + 1)"
              class="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
            >
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Download
            </a>
          </div>
        </div>
      </div>

    </div>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-all duration-200"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="preview"
          class="fixed inset-0 z-[999] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4"
          @click.self="preview = null"
        >
          <Transition
            enter-active-class="transition-all duration-200"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition-all duration-200"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div v-if="preview" class="md:mt-36 bg-white rounded-2xl max-w-4xl w-full shadow-2xl overflow-hidden">
              <div class="flex items-center justify-between px-5 py-4 border-b border-slate-100">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <svg class="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                    </svg>
                  </div>
                  <span class="font-semibold text-slate-800 text-sm">Certificate Preview</span>
                </div>
                <button
                  @click="preview = null"
                  class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <div class="p-6 bg-slate-50 flex justify-center">
                <img :src="preview" class="max-h-[75vh] object-contain rounded-xl shadow-md" />
              </div>
              <div class="px-5 py-3 border-t border-slate-100 flex justify-end">
                <a
                  :href="preview"
                  download
                  class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download Certificate
                </a>
              </div>
            </div>
          </Transition>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const images  = ref([])
const preview = ref(null)

function open(img) {
  preview.value = img
}

const modules = import.meta.glob('/src/assets/certificate/*.{jpg,jpeg,png,webp}', { eager: true })
images.value = Object.values(modules).map(m => m.default)
</script>