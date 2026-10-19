<template>
  <section class="example-section">
    <h2>Overlays, Dialogs & Panels</h2>

    <div class="example-row">
      <!-- OgDialog Trigger -->
      <OgButton label="Open Dialog Modal" severity="primary" @click="dialogVisible = true" />

      <!-- OgDrawer Trigger -->
      <OgButton label="Open Left Drawer" severity="secondary" @click="drawerVisible = true" />

      <!-- OgToast Trigger -->
      <OgButton label="Trigger Toast Notification" severity="success" @click="triggerToast" />
    </div>

    <!-- OgToast Container -->
    <OgToast position="top-right" />

    <!-- OgDialog Component -->
    <OgDialog v-model:visible="dialogVisible" header="Confirmation Modal" modal dismissableMask>
      <p>Are you sure you want to perform this action?</p>
      <template #footer>
        <OgButton label="Cancel" variant="outlined" severity="secondary" @click="dialogVisible = false" />
        <OgButton label="Confirm" severity="primary" @click="dialogVisible = false" />
      </template>
    </OgDialog>

    <!-- OgDrawer Component -->
    <OgDrawer v-model:visible="drawerVisible" position="left" header="Navigation Drawer">
      <p>Sidebar content and menu options here.</p>
    </OgDrawer>

    <!-- Card & Accordion & Tabs Demo -->
    <div class="example-grid" style="margin-top: 1.5rem;">
      <OgCard title="User Profile Card" subtitle="Administrator Level">
        <template #content>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <OgAvatar label="JD" size="large" shape="circle" />
            <div>
              <strong>John Doe</strong>
              <p style="margin: 0; color: #64748b; font-size: 0.875rem;">john.doe@example.com</p>
            </div>
          </div>
        </template>
        <template #footer>
          <OgBadge value="Active" severity="success" />
        </template>
      </OgCard>

      <OgAccordion :value="0">
        <OgAccordionTab header="Section 1: General Info">
          <p>This is the content for section 1.</p>
        </OgAccordionTab>
        <OgAccordionTab header="Section 2: Security & Privacy">
          <p>This is the content for section 2.</p>
        </OgAccordionTab>
      </OgAccordion>

      <OgTabs :value="0">
        <OgTabPanel header="Tab 1">
          <p>Tab 1 panel content.</p>
        </OgTabPanel>
        <OgTabPanel header="Tab 2">
          <p>Tab 2 panel content.</p>
        </OgTabPanel>
      </OgTabs>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  OgButton,
  OgDialog,
  OgDrawer,
  OgToast,
  useToast,
  OgCard,
  OgAvatar,
  OgBadge,
  OgAccordion,
  OgAccordionTab,
  OgTabs,
  OgTabPanel,
} from '../src';

const dialogVisible = ref(false);
const drawerVisible = ref(false);
const toast = useToast();

const triggerToast = () => {
  toast.add({
    severity: 'success',
    summary: 'Action Completed',
    detail: 'OptimusGUI notification triggered successfully!',
    life: 3000,
  });
};
</script>

<style scoped>
.example-section {
  margin-bottom: 2rem;
}
.example-row {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
</style>
