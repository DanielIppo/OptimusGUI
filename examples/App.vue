<template>
  <main class="app-container">
    <header class="app-header">
      <h1>🚀 OptimusGUI Showcase</h1>
      <p>Modern, Minimal, Lightweight Vue 3 Component Library</p>
    </header>

    <OgDivider />

    <ButtonExample />
    <FormInputsExample />
    <DataTableExample />
    <OverlaysAndPanelsExample />
  </main>
</template>

<script setup lang="ts">
import { OgDivider } from '../src';
import ButtonExample from './ButtonExample.vue';
import FormInputsExample from './FormInputsExample.vue';
import DataTableExample from './DataTableExample.vue';
import OverlaysAndPanelsExample from './OverlaysAndPanelsExample.vue';
</script>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: system-ui, -apple-system, sans-serif;
}
.app-header {
  text-align: center;
  margin-bottom: 2rem;
}
.app-header h1 {
  font-size: 2.25rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 0.5rem;
}
.app-header p {
  color: #64748b;
  font-size: 1.125rem;
}
</style>
