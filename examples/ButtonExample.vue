<template>
  <section class="example-section">
    <h2>OgButton Examples</h2>

    <div class="example-row">
      <!-- Severities -->
      <OgButton label="Primary" severity="primary" />
      <OgButton label="Secondary" severity="secondary" />
      <OgButton label="Success" severity="success" />
      <OgButton label="Info" severity="info" />
      <OgButton label="Warning" severity="warning" />
      <OgButton label="Danger" severity="danger" />
    </div>

    <div class="example-row">
      <!-- Variants -->
      <OgButton label="Outlined" variant="outlined" severity="primary" />
      <OgButton label="Text" variant="text" severity="primary" />
      <OgButton label="Link" variant="link" severity="primary" />
      <OgButton label="Raised" raised severity="primary" />
      <OgButton label="Rounded" rounded severity="primary" />
    </div>

    <div class="example-row">
      <!-- Loading & Badge -->
      <OgButton label="Loading State" loading severity="primary" />
      <OgButton label="Notifications" badge="5" badgeSeverity="danger" severity="primary" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { OgButton } from '../src';
</script>

<style scoped>
.example-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}
.example-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}
</style>
