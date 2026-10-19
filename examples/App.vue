<template>
  <div class="explorer-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar__brand">
        <div class="sidebar__logo-wrap">
          <span class="sidebar__logo-icon">🚀</span>
          <span class="sidebar__logo-text">Optimus<strong>GUI</strong></span>
        </div>
        <span class="sidebar__badge">v1.0</span>
      </div>

      <!-- Search Input -->
      <div class="sidebar__search-wrap">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cerca componenti..."
          class="sidebar__search-input"
        />
        <span v-if="searchQuery" class="sidebar__search-clear" @click="searchQuery = ''">✕</span>
      </div>

      <!-- Categories Navigation -->
      <nav class="sidebar__nav">
        <div v-for="cat in filteredCategories" :key="cat" class="sidebar__category">
          <div class="sidebar__category-title">
            {{ cat }}
            <span class="sidebar__category-count">{{ getComponentsByCategory(cat).length }}</span>
          </div>
          <ul class="sidebar__list">
            <li
              v-for="comp in getComponentsByCategory(cat)"
              :key="comp.id"
              :class="['sidebar__item', { 'sidebar__item--active': activeComponent.id === comp.id }]"
              @click="activeComponent = comp"
            >
              <span class="sidebar__item-name">{{ comp.name }}</span>
            </li>
          </ul>
        </div>

        <div v-if="filteredCategories.length === 0" class="sidebar__empty">
          Nessun componente trovato per "{{ searchQuery }}".
        </div>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="main-content">
      <!-- Header -->
      <header class="content-header">
        <div class="content-header__meta">
          <span class="content-header__category">{{ activeComponent.category }}</span>
          <h1 class="content-header__title">{{ activeComponent.name }}</h1>
          <p class="content-header__desc">{{ activeComponent.description }}</p>
        </div>
      </header>

      <!-- Sub Navigation Tabs -->
      <div class="content-tabs">
        <button
          type="button"
          :class="['content-tab', { 'content-tab--active': activeTab === 'preview' }]"
          @click="activeTab = 'preview'"
        >
          <span>🎯 Live Preview & Playground</span>
        </button>
        <button
          type="button"
          :class="['content-tab', { 'content-tab--active': activeTab === 'code' }]"
          @click="activeTab = 'code'"
        >
          <span>💻 Codice Esempio</span>
        </button>
        <button
          type="button"
          :class="['content-tab', { 'content-tab--active': activeTab === 'props' }]"
          @click="activeTab = 'props'"
        >
          <span>📋 Props & API ({{ activeComponent.props.length }})</span>
        </button>
      </div>

      <!-- Tab 1: Live Preview -->
      <section v-show="activeTab === 'preview'" class="tab-panel">
        <div class="preview-card">
          <div class="preview-card__header">
            <span class="preview-card__tag">Live Interactive Demo</span>
          </div>

          <div class="preview-card__canvas">
            <!-- OgButton Demo -->
            <div v-if="activeComponent.id === 'button'" class="demo-box">
              <div class="demo-row">
                <OgButton label="Primary" severity="primary" :variant="btnVariant" :size="btnSize" :loading="btnLoading" :disabled="btnDisabled" />
                <OgButton label="Secondary" severity="secondary" :variant="btnVariant" :size="btnSize" :disabled="btnDisabled" />
                <OgButton label="Success" severity="success" :variant="btnVariant" :size="btnSize" :disabled="btnDisabled" />
                <OgButton label="Info" severity="info" :variant="btnVariant" :size="btnSize" :disabled="btnDisabled" />
                <OgButton label="Warning" severity="warning" :variant="btnVariant" :size="btnSize" :disabled="btnDisabled" />
                <OgButton label="Danger" severity="danger" :variant="btnVariant" :size="btnSize" :disabled="btnDisabled" />
              </div>
              <div class="demo-controls">
                <label>Variante:</label>
                <select v-model="btnVariant" class="demo-select">
                  <option :value="undefined">Default (Filled)</option>
                  <option value="outlined">Outlined</option>
                  <option value="text">Text</option>
                  <option value="link">Link</option>
                </select>
                <label>Dimensione:</label>
                <select v-model="btnSize" class="demo-select">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
                <label class="demo-checkbox-label">
                  <input v-model="btnLoading" type="checkbox" /> Loading
                </label>
                <label class="demo-checkbox-label">
                  <input v-model="btnDisabled" type="checkbox" /> Disabled
                </label>
              </div>
            </div>

            <!-- OgInputNumber Demo -->
            <div v-else-if="activeComponent.id === 'inputnumber'" class="demo-box">
              <div class="demo-field">
                <label>Prova a digitare a mano più di 100 (es. 1000) o meno di 0:</label>
                <OgInputNumber
                  v-model="inputNumVal"
                  :min="0"
                  :max="100"
                  showButtons
                  prefix="€ "
                />
                <span class="demo-val-badge">Valore reattivo v-model: <strong>{{ inputNumVal ?? 'null' }}</strong></span>
              </div>
            </div>

            <!-- OgDatePicker Demo -->
            <div v-else-if="activeComponent.id === 'datepicker'" class="demo-box">
              <div class="demo-field">
                <label>Seleziona una data con il nuovo calendario personalizzato OptimusGUI:</label>
                <OgDatePicker v-model="dateVal" placeholder="Clicca per aprire il calendario..." showClear />
                <span class="demo-val-badge">Data selezionata: <strong>{{ dateVal ? dateVal.toString() : 'Nessuna data' }}</strong></span>
              </div>
            </div>

            <!-- OgMultiSelect Demo -->
            <div v-else-if="activeComponent.id === 'multiselect'" class="demo-box">
              <div class="demo-field">
                <label>Selezione multipla con checkbox OptimusGUI integrati:</label>
                <OgMultiSelect
                  v-model="multiVal"
                  :options="countriesList"
                  optionLabel="name"
                  optionValue="code"
                  placeholder="Seleziona nazioni..."
                />
                <span class="demo-val-badge">Valori selezionati: <strong>{{ multiVal.join(', ') || 'Nessuno' }}</strong></span>
              </div>
            </div>

            <!-- OgSelect Demo -->
            <div v-else-if="activeComponent.id === 'select'" class="demo-box">
              <div class="demo-field">
                <label>Select a tendina con filtro di ricerca e reset rapido:</label>
                <OgSelect
                  v-model="selectCity"
                  :options="citiesList"
                  optionLabel="name"
                  optionValue="code"
                  placeholder="Seleziona una città..."
                  filter
                  showClear
                />
                <span class="demo-val-badge">Città selezionata: <strong>{{ selectCity || 'Nessuna' }}</strong></span>
              </div>
            </div>

            <!-- OgRadioButton Demo -->
            <div v-else-if="activeComponent.id === 'radiobutton'" class="demo-box">
              <div class="demo-field">
                <label>Radio Button rigorosamente circolari (anti-ovalizzazione):</label>
                <div class="demo-radio-group">
                  <label class="demo-choice">
                    <OgRadioButton v-model="radioChoice" value="starter" name="pricing" />
                    <span>Starter Plan</span>
                  </label>
                  <label class="demo-choice">
                    <OgRadioButton v-model="radioChoice" value="pro" name="pricing" />
                    <span>Professional Plan</span>
                  </label>
                  <label class="demo-choice">
                    <OgRadioButton v-model="radioChoice" value="enterprise" name="pricing" />
                    <span>Enterprise Plan</span>
                  </label>
                </div>
                <span class="demo-val-badge">Piano attivo: <strong>{{ radioChoice }}</strong></span>
              </div>
            </div>

            <!-- OgCheckbox Demo -->
            <div v-else-if="activeComponent.id === 'checkbox'" class="demo-box">
              <div class="demo-field">
                <label class="demo-choice">
                  <OgCheckbox v-model="chkVal" binary />
                  <span>Abilita opzione avanzata</span>
                </label>
                <span class="demo-val-badge">Stato checkbox: <strong>{{ chkVal ? 'Attivo' : 'Disattivo' }}</strong></span>
              </div>
            </div>

            <!-- OgSlider Demo -->
            <div v-else-if="activeComponent.id === 'slider'" class="demo-box">
              <div class="demo-field" style="width: 20rem; max-width: 100%;">
                <label>Trascina il cursore (Mouse / Touch Drag fluido):</label>
                <OgSlider v-model="sliderVal" :min="0" :max="100" />
                <span class="demo-val-badge">Livello: <strong>{{ sliderVal }}%</strong></span>
              </div>
            </div>

            <!-- OgRating Demo -->
            <div v-else-if="activeComponent.id === 'rating'" class="demo-box">
              <div class="demo-field">
                <label>Valutazione utente:</label>
                <OgRating v-model="ratingVal" :stars="5" />
                <span class="demo-val-badge">Punteggio: <strong>{{ ratingVal ?? 0 }} / 5</strong></span>
              </div>
            </div>

            <!-- OgInputOtp Demo -->
            <div v-else-if="activeComponent.id === 'inputotp'" class="demo-box">
              <div class="demo-field">
                <label>Codice di sicurezza OTP (prova a incollare un codice a 6 cifre):</label>
                <OgInputOtp v-model="otpVal" :length="6" integerOnly />
                <span class="demo-val-badge">Codice inserito: <strong>{{ otpVal || '...' }}</strong></span>
              </div>
            </div>

            <!-- OgDataTable Demo -->
            <div v-else-if="activeComponent.id === 'datatable'" class="demo-box" style="width: 100%;">
              <OgDataTable :value="tableData" paginator :rows="3" stripedRows showGridlines>
                <template #header>
                  <div style="font-weight: 600;">Inventario Prodotti</div>
                </template>
                <OgColumn field="id" header="ID" sortable style="width: 80px;" />
                <OgColumn field="name" header="Nome Prodotto" sortable />
                <OgColumn field="category" header="Categoria" sortable />
                <OgColumn field="price" header="Prezzo" sortable>
                  <template #body="{ data }">
                    € {{ data.price.toFixed(2) }}
                  </template>
                </OgColumn>
                <OgColumn field="status" header="Disponibilità">
                  <template #body="{ data }">
                    <OgTag :value="data.status" :severity="data.status === 'In Stock' ? 'success' : 'danger'" />
                  </template>
                </OgColumn>
              </OgDataTable>
            </div>

            <!-- OgTree Demo -->
            <div v-else-if="activeComponent.id === 'tree'" class="demo-box">
              <div class="demo-field">
                <label>Albero gerarchico ricorsivo:</label>
                <div style="padding: 1rem; border: 1px solid var(--og-border-color); border-radius: 8px; width: 18rem;">
                  <OgTree :value="treeData" />
                </div>
              </div>
            </div>

            <!-- OgDialog Demo -->
            <div v-else-if="activeComponent.id === 'dialog'" class="demo-box">
              <OgButton label="Apri Modale Dialog" severity="primary" @click="isDialogOpen = true" />
              <OgDialog v-model:visible="isDialogOpen" header="Conferma Operazione" modal dismissableMask>
                <p>Sei sicuro di voler procedere con le modifiche apportate?</p>
                <template #footer>
                  <OgButton label="Annulla" variant="outlined" severity="secondary" @click="isDialogOpen = false" />
                  <OgButton label="Conferma" severity="primary" @click="isDialogOpen = false" />
                </template>
              </OgDialog>
            </div>

            <!-- OgDrawer Demo -->
            <div v-else-if="activeComponent.id === 'drawer'" class="demo-box">
              <OgButton label="Apri Drawer Laterale" severity="secondary" @click="isDrawerOpen = true" />
              <OgDrawer v-model:visible="isDrawerOpen" position="left" header="Pannello Laterale">
                <p>Contenuto di navigazione laterale o opzioni utente.</p>
                <OgDivider />
                <OgButton label="Chiudi" variant="text" severity="danger" @click="isDrawerOpen = false" />
              </OgDrawer>
            </div>

            <!-- OgToast Demo -->
            <div v-else-if="activeComponent.id === 'toast'" class="demo-box">
              <OgToast position="top-right" />
              <div class="demo-row">
                <OgButton label="Toast Success" severity="success" @click="sendToast('success', 'Completato', 'Operazione riuscita con successo!')" />
                <OgButton label="Toast Info" severity="info" @click="sendToast('info', 'Informazione', 'Nuovo aggiornamento disponibile.')" />
                <OgButton label="Toast Error" severity="danger" @click="sendToast('error', 'Attenzione', 'Si è verificato un errore nel caricamento.')" />
              </div>
            </div>

            <!-- OgTabs Demo -->
            <div v-else-if="activeComponent.id === 'tabs'" class="demo-box" style="width: 100%;">
              <OgTabs :value="0">
                <OgTabPanel header="Dashboard">
                  <p>Panoramica delle statistiche di utilizzo del sistema.</p>
                </OgTabPanel>
                <OgTabPanel header="Impostazioni">
                  <p>Configurazione delle preferenze personali dell'account.</p>
                </OgTabPanel>
                <OgTabPanel header="Sicurezza">
                  <p>Gestione chiavi API e autenticazione a due fattori.</p>
                </OgTabPanel>
              </OgTabs>
            </div>

            <!-- OgAccordion Demo -->
            <div v-else-if="activeComponent.id === 'accordion'" class="demo-box" style="width: 100%;">
              <OgAccordion :value="0">
                <OgAccordionTab header="1. Cos'è OptimusGUI?">
                  <p>È una libreria UI per Vue 3 ispirata all'architettura PrimeVue con design moderno e minimal.</p>
                </OgAccordionTab>
                <OgAccordionTab header="2. Come si tematizza?">
                  <p>Basta importare un file CSS con le variabili custom subito dopo style.css.</p>
                </OgAccordionTab>
                <OgAccordionTab header="3. Supporta il Tree-Shaking?">
                  <p>Sì, ogni componente ed headless composable può essere importato on-demand.</p>
                </OgAccordionTab>
              </OgAccordion>
            </div>

            <!-- Default Fallback Preview -->
            <div v-else class="demo-box">
              <p>Demo interattiva per <strong>{{ activeComponent.name }}</strong> in arrivo.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Tab 2: Code Example -->
      <section v-show="activeTab === 'code'" class="tab-panel">
        <div class="code-card">
          <div class="code-card__header">
            <span>Template & Script Setup</span>
            <button type="button" class="copy-btn" @click="copyCode">
              {{ copied ? '✓ Copiato!' : 'Copia Codice' }}
            </button>
          </div>
          <pre class="code-block"><code>{{ activeComponent.defaultCode }}</code></pre>
        </div>
      </section>

      <!-- Tab 3: Props & API -->
      <section v-show="activeTab === 'props'" class="tab-panel">
        <div class="table-card">
          <table class="api-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Tipo</th>
                <th>Default</th>
                <th>Descrizione</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prop in activeComponent.props" :key="prop.name">
                <td class="prop-name"><code>{{ prop.name }}</code></td>
                <td class="prop-type"><code>{{ prop.type }}</code></td>
                <td class="prop-default"><code>{{ prop.default }}</code></td>
                <td class="prop-desc">{{ prop.description }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { componentsData, type ComponentDoc } from './componentsData';
import {
  OgButton,
  OgInputText,
  OgInputNumber,
  OgDatePicker,
  OgSelect,
  OgMultiSelect,
  OgRadioButton,
  OgCheckbox,
  OgSlider,
  OgRating,
  OgInputOtp,
  OgDataTable,
  OgColumn,
  OgTag,
  OgTree,
  OgDialog,
  OgDrawer,
  OgToast,
  useToast,
  OgTabs,
  OgTabPanel,
  OgAccordion,
  OgAccordionTab,
  OgDivider,
} from '../src';

const searchQuery = ref('');
const activeComponent = ref<ComponentDoc>(componentsData[0]);
const activeTab = ref<'preview' | 'code' | 'props'>('preview');
const copied = ref(false);

const toast = useToast();

const sendToast = (severity: 'success' | 'info' | 'error', summary: string, detail: string) => {
  toast.add({ severity, summary, detail, life: 3000 });
};

// Button demo state
const btnVariant = ref<any>(undefined);
const btnSize = ref<'small' | 'medium' | 'large'>('medium');
const btnLoading = ref(false);
const btnDisabled = ref(false);

// InputNumber demo state
const inputNumVal = ref<number | null>(25);

// DatePicker demo state
const dateVal = ref<Date | null>(new Date());

// Select demo state
const selectCity = ref('MIL');
const citiesList = [
  { name: 'Roma', code: 'ROM' },
  { name: 'Milano', code: 'MIL' },
  { name: 'Napoli', code: 'NAP' },
  { name: 'Torino', code: 'TOR' },
  { name: 'Firenze', code: 'FIR' },
];

// MultiSelect demo state
const multiVal = ref(['ITA', 'FRA']);
const countriesList = [
  { name: 'Italia', code: 'ITA' },
  { name: 'Francia', code: 'FRA' },
  { name: 'Germania', code: 'GER' },
  { name: 'Spagna', code: 'SPA' },
  { name: 'Giappone', code: 'JPN' },
];

// Radio demo state
const radioChoice = ref('pro');

// Checkbox demo state
const chkVal = ref(true);

// Slider demo state
const sliderVal = ref(60);

// Rating demo state
const ratingVal = ref(4);

// InputOtp demo state
const otpVal = ref('123456');

// Dialog & Drawer state
const isDialogOpen = ref(false);
const isDrawerOpen = ref(false);

// DataTable demo state
const tableData = ref([
  { id: 101, name: 'MacBook Pro 16', category: 'Laptop', price: 2499.0, status: 'In Stock' },
  { id: 102, name: 'Dell XPS 15', category: 'Laptop', price: 1899.0, status: 'In Stock' },
  { id: 103, name: 'Keychron K2 Keyboard', category: 'Accessori', price: 99.0, status: 'Esaurito' },
  { id: 104, name: 'Sony WH-1000XM5', category: 'Audio', price: 349.0, status: 'In Stock' },
  { id: 105, name: 'Logitech MX Master 3S', category: 'Mouse', price: 119.0, status: 'In Stock' },
]);

// Tree demo state
const treeData = ref([
  {
    key: '0',
    label: 'src',
    children: [
      {
        key: '0-0',
        label: 'components',
        children: [
          { key: '0-0-0', label: 'button' },
          { key: '0-0-1', label: 'select' },
          { key: '0-0-2', label: 'datepicker' },
        ],
      },
      {
        key: '0-1',
        label: 'theme',
        children: [{ key: '0-1-0', label: 'index.css' }],
      },
    ],
  },
  {
    key: '1',
    label: 'package.json',
  },
]);

// Search filtering
const filteredComponents = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return componentsData;
  return componentsData.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q)
  );
});

const filteredCategories = computed(() => {
  const cats = new Set<string>();
  filteredComponents.value.forEach((c) => cats.add(c.category));
  return Array.from(cats);
});

const getComponentsByCategory = (cat: string) => {
  return filteredComponents.value.filter((c) => c.category === cat);
};

const copyCode = () => {
  navigator.clipboard.writeText(activeComponent.value.defaultCode);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2000);
};
</script>

<style scoped>
.explorer-layout {
  display: flex;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  color: #0f172a;
  background-color: #f8fafc;
}

/* Sidebar Styles */
.sidebar {
  width: 18rem;
  background-color: #ffffff;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: sticky;
  top: 0;
  height: 100vh;
}

.sidebar__brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #f1f5f9;
}

.sidebar__logo-wrap {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.sidebar__logo-icon {
  font-size: 1.5rem;
}
.sidebar__logo-text {
  font-size: 1.15rem;
  font-weight: 500;
  color: #0f172a;
  letter-spacing: -0.02em;
}
.sidebar__badge {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.15rem 0.4rem;
  background-color: #f1f5f9;
  color: #475569;
  border-radius: 9999px;
}

.sidebar__search-wrap {
  position: relative;
  padding: 0.75rem 1.25rem;
}
.sidebar__search-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  outline: none;
  background-color: #f8fafc;
  box-sizing: border-box;
  transition: all 0.15s ease;
}
.sidebar__search-input:focus {
  background-color: #ffffff;
  border-color: #0f172a;
  box-shadow: 0 0 0 2px rgba(15, 23, 42, 0.1);
}
.sidebar__search-clear {
  position: absolute;
  right: 1.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
  cursor: pointer;
  font-size: 0.8rem;
}

.sidebar__nav {
  flex: 1;
  overflow-y: auto;
  padding: 0.5rem 1rem 1.5rem;
}

.sidebar__category {
  margin-bottom: 1.25rem;
}
.sidebar__category-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 0.4rem;
  padding: 0 0.5rem;
}
.sidebar__category-count {
  font-size: 0.7rem;
  color: #94a3b8;
}

.sidebar__list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.sidebar__item {
  padding: 0.5rem 0.75rem;
  margin: 0.125rem 0;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #334155;
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
}
.sidebar__item:hover {
  background-color: #f1f5f9;
  color: #0f172a;
}
.sidebar__item--active {
  background-color: #0f172a !important;
  color: #ffffff !important;
  font-weight: 500;
}
.sidebar__empty {
  font-size: 0.875rem;
  color: #94a3b8;
  padding: 1rem 0.5rem;
  text-align: center;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  padding: 2.5rem 3.5rem;
  max-width: 1100px;
  box-sizing: border-box;
}

.content-header {
  margin-bottom: 1.5rem;
}
.content-header__category {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  background-color: #e2e8f0;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}
.content-header__title {
  font-size: 2.25rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 0.5rem;
  letter-spacing: -0.03em;
}
.content-header__desc {
  font-size: 1.05rem;
  color: #475569;
  margin: 0;
  line-height: 1.6;
}

/* Content Tabs */
.content-tabs {
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1.5rem;
}
.content-tab {
  padding: 0.75rem 0;
  background: transparent;
  border: none;
  border-bottom: 2px solid transparent;
  font-size: 0.95rem;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  transition: all 0.15s ease;
}
.content-tab:hover {
  color: #0f172a;
}
.content-tab--active {
  color: #0f172a;
  border-bottom-color: #0f172a;
  font-weight: 600;
}

/* Preview Card */
.preview-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
.preview-card__header {
  padding: 0.75rem 1.25rem;
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
}
.preview-card__tag {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #64748b;
  letter-spacing: 0.05em;
}
.preview-card__canvas {
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 14rem;
}

/* Demo Box Internals */
.demo-box {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}
.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
}
.demo-controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.85rem;
}
.demo-select {
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
}
.demo-checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  cursor: pointer;
}
.demo-field {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}
.demo-val-badge {
  font-size: 0.825rem;
  color: #475569;
  background-color: #f1f5f9;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
}
.demo-radio-group {
  display: flex;
  gap: 1.5rem;
}
.demo-choice {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
}

/* Code Card */
.code-card {
  background-color: #0f172a;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.code-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  background-color: #1e293b;
  color: #94a3b8;
  font-size: 0.8rem;
  font-family: monospace;
}
.copy-btn {
  background-color: #334155;
  color: #f8fafc;
  border: none;
  padding: 0.35rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.15s ease;
}
.copy-btn:hover {
  background-color: #475569;
}
.code-block {
  margin: 0;
  padding: 1.5rem;
  overflow-x: auto;
  font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;
  font-size: 0.875rem;
  color: #f8fafc;
  line-height: 1.6;
}

/* Table Card */
.table-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
}
.api-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 0.875rem;
}
.api-table th {
  background-color: #f8fafc;
  padding: 0.75rem 1rem;
  font-weight: 600;
  color: #475569;
  border-bottom: 1px solid #e2e8f0;
}
.api-table td {
  padding: 0.75rem 1rem;
  border-bottom: 1px solid #f1f5f9;
  color: #334155;
}
.api-table tr:last-child td {
  border-bottom: none;
}
.prop-name code {
  color: #0f172a;
  font-weight: 600;
  background-color: #f1f5f9;
  padding: 0.15rem 0.35rem;
  border-radius: 4px;
}
.prop-type code {
  color: #0284c7;
  font-family: monospace;
}
.prop-default code {
  color: #64748b;
  font-family: monospace;
}
.prop-desc {
  color: #475569;
  line-height: 1.5;
}
</style>
