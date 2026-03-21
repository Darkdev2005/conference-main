<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="visible" class="fixed inset-0 z-[999] flex items-center justify-center px-4">

        <div class="absolute inset-0 bg-slate-900/75 backdrop-blur-sm" @click="closeModal" />

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-2"
        >
          <div
            v-if="visible"
            class="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden z-10"
          >
            <div class="h-1 w-full" :class="accentBar" />

            <button
              @click="closeModal"
              class="absolute top-4 right-4 w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <div class="px-6 pt-7 pb-6 flex flex-col items-center text-center gap-4">

              <div class="w-16 h-16 rounded-2xl flex items-center justify-center" :class="iconBg">
                <component :is="icon" class="w-8 h-8" :class="iconColor" />
              </div>

              <div class="space-y-1.5">
                <h2 class="text-xl font-bold text-slate-900">{{ title }}</h2>
                <div class="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-full px-3 py-1">
                  <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  <span class="text-xs font-medium text-slate-500">23.09.2025</span>
                </div>
              </div>

              <p class="text-sm text-slate-600 leading-relaxed">{{ message }}</p>

              <button
                @click="closeModal"
                class="w-full py-2.5 px-6 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
                :class="btnClass"
              >
                Got it
              </button>
            </div>
          </div>
        </Transition>

      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed } from 'vue'
import { CheckCircle, AlertTriangle, Info, XCircle } from 'lucide-vue-next'

const props = defineProps({
  title:   { type: String, default: 'Notice' },
  message: { type: String, required: true },
  type:    { type: String, default: 'info' },
})

const visible    = ref(true)
const closeModal = () => (visible.value = false)

const config = {
  info:    { icon: Info,          iconBg: 'bg-blue-50',   iconColor: 'text-blue-500',   accentBar: 'bg-blue-500',   btnClass: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-400'   },
  success: { icon: CheckCircle,   iconBg: 'bg-green-50',  iconColor: 'text-green-500',  accentBar: 'bg-green-500',  btnClass: 'bg-green-600 hover:bg-green-700 focus:ring-green-400'  },
  warning: { icon: AlertTriangle, iconBg: 'bg-amber-50',  iconColor: 'text-amber-500',  accentBar: 'bg-amber-400',  btnClass: 'bg-amber-500 hover:bg-amber-600 focus:ring-amber-300'  },
  error:   { icon: XCircle,       iconBg: 'bg-red-50',    iconColor: 'text-red-500',    accentBar: 'bg-red-500',    btnClass: 'bg-red-600 hover:bg-red-700 focus:ring-red-400'        },
}

const icon      = computed(() => config[props.type]?.icon      ?? Info)
const iconBg    = computed(() => config[props.type]?.iconBg    ?? 'bg-blue-50')
const iconColor = computed(() => config[props.type]?.iconColor ?? 'text-blue-500')
const accentBar = computed(() => config[props.type]?.accentBar ?? 'bg-blue-500')
const btnClass  = computed(() => config[props.type]?.btnClass  ?? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-400')
</script>