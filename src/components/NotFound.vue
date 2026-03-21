<template>
  <section class="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-20">
    <div class="flex flex-col items-center gap-8 text-center max-w-lg w-full">

      <div class="relative">
        <div class="w-40 h-40 rounded-full bg-indigo-50 flex items-center justify-center mx-auto">
          <div class="w-28 h-28 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg class="w-14 h-14 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
        </div>
        <div class="absolute -top-2 -right-2 w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-200 rotate-12">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
          </svg>
        </div>
        <div class="absolute -bottom-1 -left-3 w-7 h-7 rounded-lg bg-violet-400 flex items-center justify-center shadow-md -rotate-12">
          <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </div>
      </div>

      <div class="space-y-1">
        <p class="text-xs font-bold tracking-widest uppercase text-indigo-400">Error 404</p>
        <h1 class="text-6xl font-black text-slate-900 tracking-tight leading-none">
          4<span class="text-indigo-500">0</span>4
        </h1>
      </div>

      <div class="space-y-2">
        <h2 class="text-xl font-semibold text-slate-800">
          <span class="text-indigo-600">Oops!</span> Page not found
        </h2>
        <p class="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
          It seems like you've taken a wrong turn. The page you're looking for doesn't exist or has been moved.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 w-full justify-center">
        <RouterLink
          to="/"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          Back to Home
        </RouterLink>
        <button
          @click="$router.go(-1)"
          class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-700 text-sm font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 transition-all duration-200"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 17l-5-5m0 0l5-5m-5 5h12"/>
          </svg>
          Go Back
        </button>
      </div>

      <div class="flex items-center gap-6 pt-2">
        <RouterLink to="/tracks"    class="text-xs text-slate-400 hover:text-indigo-600 transition-colors font-medium">Tracks</RouterLink>
        <span class="w-1 h-1 rounded-full bg-slate-300" />
        <RouterLink to="/committee" class="text-xs text-slate-400 hover:text-indigo-600 transition-colors font-medium">Committee</RouterLink>
        <span class="w-1 h-1 rounded-full bg-slate-300" />
        <RouterLink to="/register"  class="text-xs text-slate-400 hover:text-indigo-600 transition-colors font-medium">Contact</RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>