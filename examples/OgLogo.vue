<template>
  <div class="og-brand-logo" :style="{ width: `${size}px`, height: `${size}px` }">
    <svg
      :width="size"
      :height="size"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="og-brand-logo__svg"
    >
      <defs>
        <!-- Gradients -->
        <linearGradient id="ogGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7F23FF" stop-opacity="0.8" />
          <stop offset="50%" stop-color="#6366f1" stop-opacity="0.6" />
          <stop offset="100%" stop-color="#38bdf8" stop-opacity="0.8" />
        </linearGradient>

        <linearGradient id="ogFacetPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a855f7" />
          <stop offset="50%" stop-color="#7F23FF" />
          <stop offset="100%" stop-color="#4f46e5" />
        </linearGradient>

        <linearGradient id="ogFacetAccent" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="60%" stop-color="#0284c7" />
          <stop offset="100%" stop-color="#6366f1" />
        </linearGradient>

        <linearGradient id="ogFacetCore" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="60%" stop-color="#e0e7ff" />
          <stop offset="100%" stop-color="#38bdf8" />
        </linearGradient>

        <filter id="ogLogoShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#7F23FF" flood-opacity="0.35" />
        </filter>
      </defs>

      <!-- Glow aura for dark themes -->
      <circle cx="32" cy="32" r="26" fill="url(#ogGlowGrad)" opacity="0.15" filter="blur(8px)" />

      <!-- Left / Top Geometric Ribbon (Facet 1) -->
      <path
        d="M32 6L54 18.5V31L44 25.5V20.5L32 13.5L20 20.5V43.5L32 50.5L42 44.5L48 48L32 58L10 45.5V18.5L32 6Z"
        fill="url(#ogFacetPrimary)"
        filter="url(#ogLogoShadow)"
      />

      <!-- Right / Bottom Dynamic Interlocking Ribbon (Facet 2) -->
      <path
        d="M54 22V45.5L32 58L22 52.5L28 49L32 51.5L44 44.5V27.5L54 22Z"
        fill="url(#ogFacetAccent)"
      />

      <!-- Top Right Bridge -->
      <path
        d="M32 6L44 13L40 18L32 13.5L32 6Z"
        fill="#c084fc"
        opacity="0.9"
      />

      <!-- GUI Core / Floating Prismatic Diamond (Layer 3) -->
      <polygon
        points="32,22 42,32 32,42 22,32"
        fill="url(#ogFacetCore)"
        opacity="0.95"
      />

      <polygon
        points="32,25 39,32 32,39 25,32"
        fill="url(#ogFacetPrimary)"
        opacity="0.3"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number;
  }>(),
  {
    size: 32,
  }
);
</script>

<style scoped>
.og-brand-logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.og-brand-logo:hover {
  transform: scale(1.06) rotate(-2deg);
}

.og-brand-logo__svg {
  display: block;
}
</style>
