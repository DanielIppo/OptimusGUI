<template>
  <div class="welcome-container">
    <!-- Hero Section -->
    <section class="welcome-hero">
      <div class="welcome-hero__badges">
        <OgTag value="v1.0.1" severity="primary" rounded />
        <OgTag value="Vue 3 & TypeScript Native" severity="info" rounded />
        <OgTag value="Zero Bloat" severity="success" rounded />
      </div>

      <div class="welcome-hero__brand">
        <OgLogo :size="84" class="welcome-hero__logo" />
        <h1 class="welcome-hero__title">
          Optimus<span class="welcome-hero__title-accent">GUI</span>
        </h1>
      </div>

      <p class="welcome-hero__tagline">
        Design System minimale, elegante e performante per Vue 3
      </p>

      <p class="welcome-hero__description">
        Una libreria di componenti UI moderna e ad alta reattività, senza dipendenze monolitiche pesanti.
        Architettura multi-tema nativa con CSS Custom Properties, perfetta integrazione con Tailwind CSS
        e pensata per dashboard, gestionali e prodotti web evoluti.
      </p>

      <!-- Action Buttons -->
      <div class="welcome-hero__actions">
        <OgButton
          label="Esplora i Componenti"
          severity="primary"
          size="large"
          class="welcome-hero__btn-main"
          @click="$emit('explore')"
        />
        <OgButton
          label="GitHub Repository"
          severity="secondary"
          variant="outlined"
          size="large"
          @click="openExternal('https://github.com/DanielIppo/OptimusGUI')"
        />
        <OgButton
          label="NPM Package"
          severity="secondary"
          variant="outlined"
          size="large"
          @click="openExternal('https://www.npmjs.com/package/@danielippo/optimus-gui')"
        />
      </div>

      <!-- Quick Install Snippet -->
      <div class="welcome-install-card">
        <span class="welcome-install-prompt">$</span>
        <code class="welcome-install-cmd">npm install @danielippo/optimus-gui</code>
        <OgButton
          :label="copiedInstall ? '✓ Copiato!' : 'Copia'"
          :severity="copiedInstall ? 'success' : 'secondary'"
          variant="outlined"
          size="small"
          @click="copyInstallCommand"
        />
      </div>
    </section>

    <!-- Live Interactive Preview Widget -->
    <section class="welcome-sandbox">
      <div class="welcome-sandbox__card">
        <div class="welcome-sandbox__header">
          <div class="welcome-sandbox__header-left">
            <span class="welcome-sandbox__dot red"></span>
            <span class="welcome-sandbox__dot yellow"></span>
            <span class="welcome-sandbox__dot green"></span>
            <span class="welcome-sandbox__title">Anteprima Componenti Interattivi</span>
          </div>
          <OgTag value="Reattività Live" severity="primary" />
        </div>

        <div class="welcome-sandbox__body">
          <div class="welcome-sandbox__controls">
            <div class="welcome-sandbox__field">
              <label class="welcome-sandbox__label">Nome Progetto</label>
              <OgInputText v-model="demoProjectName" placeholder="Inserisci nome..." fluid />
            </div>

            <div class="welcome-sandbox__field">
              <label class="welcome-sandbox__label">Ambiente di Rilascio</label>
              <OgSelect
                v-model="demoEnvironment"
                :options="demoEnvironments"
                optionLabel="label"
                optionValue="value"
                fluid
              />
            </div>

            <div class="welcome-sandbox__field welcome-sandbox__field--inline">
              <div>
                <div class="welcome-sandbox__label">Notifiche Realtime</div>
                <div class="welcome-sandbox__hint">Abilita eventi e toast automatici</div>
              </div>
              <OgToggleSwitch v-model="demoNotifications" />
            </div>

            <div class="welcome-sandbox__actions-row">
              <OgButton
                :label="isDemoSaving ? 'Salvataggio...' : 'Salva Modifiche'"
                :loading="isDemoSaving"
                severity="primary"
                @click="simulateSave"
              />
              <OgButton
                label="Ripristina"
                severity="secondary"
                variant="outlined"
                @click="resetDemo"
              />
              <OgTag
                v-if="demoSavedStatus"
                value="Configurazione salvata con successo!"
                severity="success"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Architecture Features -->
    <section class="welcome-features">
      <div class="welcome-section-header">
        <h2 class="welcome-section-title">Perché scegliere OptimusGUI?</h2>
        <p class="welcome-section-desc">
          Costruita da zero per offrire flessibilità, velocità di caricamento e un'estetica raffinata.
        </p>
      </div>

      <div class="welcome-features__grid">
        <div class="feature-card">
          <div class="feature-card__icon-box">⚡</div>
          <h3 class="feature-card__title">Zero Bloat & Performance</h3>
          <p class="feature-card__desc">
            Bundle ultra-leggero (~22kB gzip) senza dipendenze monolitiche esterne. Tree-shaking completo per importare solo ciò che usi.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-card__icon-box">🎨</div>
          <h3 class="feature-card__title">Multi-Tema Nativo via CSS</h3>
          <p class="feature-card__desc">
            100% basato su CSS Custom Properties. Include temi pronti per Dark Slate, Obsidian & Violet, Indigo Modern e Light, tutti personalizzabili.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-card__icon-box">💼</div>
          <h3 class="feature-card__title">Enterprise & FinTech Ready</h3>
          <p class="feature-card__desc">
            Pensato per gestionali, dashboard e contesti ad alta precisione numerica. Supporta validazione, tabelle dati flessibili, dialog e overlay.
          </p>
        </div>

        <div class="feature-card">
          <div class="feature-card__icon-box">🛡️</div>
          <h3 class="feature-card__title">TypeScript First-Class</h3>
          <p class="feature-card__desc">
            Tipizzazione completa da zero con dichiarazioni <code>.d.ts</code> incluse. Autocompletamento e sicurezza dei tipi in ogni IDE.
          </p>
        </div>
      </div>
    </section>

    <!-- Quick Start Guide -->
    <section class="welcome-quickstart">
      <div class="welcome-section-header">
        <h2 class="welcome-section-title">Inizia in 3 Semplici Passaggi</h2>
        <p class="welcome-section-desc">
          Configura e inizia a sviluppare con OptimusGUI in meno di due minuti.
        </p>
      </div>

      <div class="quickstart-steps">
        <!-- Step 1 -->
        <div class="quickstart-step">
          <div class="quickstart-step__badge">1</div>
          <div class="quickstart-step__content">
            <h4 class="quickstart-step__title">Installa il pacchetto npm</h4>
            <div class="quickstart-step__code">
              <code>npm install @danielippo/optimus-gui</code>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="quickstart-step">
          <div class="quickstart-step__badge">2</div>
          <div class="quickstart-step__content">
            <h4 class="quickstart-step__title">Registra la libreria in main.ts</h4>
            <pre class="quickstart-step__code"><code>import { createApp } from 'vue';
import App from './App.vue';
import OptimusGUI from '@danielippo/optimus-gui';
import '@danielippo/optimus-gui/style.css';

// Opzionale: importa un preset di tema
import '@danielippo/optimus-gui/themes/obsidian-violet.css';

const app = createApp(App);
app.use(OptimusGUI);
app.mount('#app');</code></pre>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="quickstart-step">
          <div class="quickstart-step__badge">3</div>
          <div class="quickstart-step__content">
            <h4 class="quickstart-step__title">Usa i componenti nei tuoi file .vue</h4>
            <pre class="quickstart-step__code"><code>&lt;template&gt;
  &lt;OgButton label="Conferma Operazione" severity="primary" @click="doAction" /&gt;
  &lt;OgSelect v-model="selectedItem" :options="items" optionLabel="name" /&gt;
&lt;/template&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Component Category Quick Nav -->
    <section class="welcome-catalog-teaser">
      <div class="welcome-catalog-teaser__inner">
        <h2 class="welcome-catalog-teaser__title">30+ Componenti Pronti all'Uso</h2>
        <p class="welcome-catalog-teaser__desc">
          Dalle form interattive agli overlay modali, fino a tabelle avanzate, tab e alberi dati gerarchici.
        </p>
        <div class="welcome-catalog-teaser__categories">
          <div
            v-for="cat in quickCategories"
            :key="cat.name"
            class="category-teaser-card"
            @click="$emit('exploreCategory', cat.name)"
          >
            <span class="category-teaser-card__icon">{{ cat.icon }}</span>
            <div class="category-teaser-card__info">
              <span class="category-teaser-card__name">{{ cat.name }}</span>
              <span class="category-teaser-card__count">{{ cat.count }} componenti</span>
            </div>
          </div>
        </div>
        <div class="welcome-catalog-teaser__cta">
          <OgButton
            label="Apri lo Showcase Completo →"
            severity="primary"
            size="large"
            @click="$emit('explore')"
          />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="welcome-footer">
      <div class="welcome-footer__content">
        <div class="welcome-footer__left">
          <div class="welcome-footer__brand">
            <OgLogo :size="24" />
            <span class="welcome-footer__title">Optimus<strong>GUI</strong></span>
          </div>
          <span class="welcome-footer__license">Distribuito sotto licenza MIT. Creato da Daniel Ippolito.</span>
        </div>

        <div class="welcome-footer__links">
          <a href="https://github.com/DanielIppo/OptimusGUI" target="_blank" rel="noopener noreferrer" class="welcome-footer__link">
            GitHub
          </a>
          <a href="https://www.npmjs.com/package/@danielippo/optimus-gui" target="_blank" rel="noopener noreferrer" class="welcome-footer__link">
            NPM Package
          </a>
          <button class="welcome-footer__link-btn" @click="$emit('explore')">
            Showcase Componenti
          </button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OgLogo from './OgLogo.vue';
import {
  OgButton,
  OgTag,
  OgInputText,
  OgSelect,
  OgToggleSwitch,
} from '../src';

defineEmits<{
  (e: 'explore'): void;
  (e: 'exploreCategory', category: string): void;
}>();

const copiedInstall = ref(false);

const copyInstallCommand = () => {
  navigator.clipboard.writeText('npm install @danielippo/optimus-gui');
  copiedInstall.value = true;
  setTimeout(() => {
    copiedInstall.value = false;
  }, 2200);
};

const openExternal = (url: string) => {
  window.open(url, '_blank');
};

// Interactive Sandbox Demo State
const demoProjectName = ref('Monetra FinTech Core');
const demoEnvironment = ref('production');
const demoEnvironments = [
  { label: 'Sviluppo (Development)', value: 'development' },
  { label: 'Staging / QA', value: 'staging' },
  { label: 'Produzione (Production)', value: 'production' },
];
const demoNotifications = ref(true);
const isDemoSaving = ref(false);
const demoSavedStatus = ref(false);

const simulateSave = () => {
  isDemoSaving.value = true;
  demoSavedStatus.value = false;
  setTimeout(() => {
    isDemoSaving.value = false;
    demoSavedStatus.value = true;
    setTimeout(() => {
      demoSavedStatus.value = false;
    }, 3500);
  }, 750);
};

const resetDemo = () => {
  demoProjectName.value = 'Monetra FinTech Core';
  demoEnvironment.value = 'production';
  demoNotifications.value = true;
  demoSavedStatus.value = false;
};

// Category Highlights
const quickCategories = [
  { name: 'General', count: '1', icon: '🔘' },
  { name: 'Form & Inputs', count: '20', icon: '📝' },
  { name: 'Data & Display', count: '9', icon: '📊' },
  { name: 'Overlays & Panels', count: '7', icon: '🪟' },
  { name: 'Navigation & Layout', count: '5', icon: '🧭' },
];
</script>

<style scoped>
.welcome-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 3rem 1.5rem 0;
  box-sizing: border-box;
}

/* Hero Section */
.welcome-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2.5rem 0 3.5rem;
}

.welcome-hero__badges {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1.75rem;
  flex-wrap: wrap;
  justify-content: center;
}

.welcome-hero__brand {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 0.75rem;
}

.welcome-hero__logo {
  filter: drop-shadow(0 10px 20px rgba(127, 35, 255, 0.25));
}

.welcome-hero__title {
  font-size: 3.5rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: var(--og-text-primary, #0f172a);
  margin: 0;
  line-height: 1.1;
}

.welcome-hero__title-accent {
  background: linear-gradient(135deg, #7F23FF 0%, #38bdf8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.welcome-hero__tagline {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--og-text-primary, #0f172a);
  margin: 0.75rem 0 1rem;
  max-width: 750px;
  letter-spacing: -0.02em;
}

.welcome-hero__description {
  font-size: 1.05rem;
  color: var(--og-text-secondary, #475569);
  max-width: 720px;
  line-height: 1.65;
  margin: 0 0 2.25rem;
}

.welcome-hero__actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.welcome-hero__btn-main {
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.35);
}

.welcome-install-card {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.5rem 1rem;
  background-color: var(--og-bg-surface, #ffffff);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-lg, 12px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.welcome-install-prompt {
  color: var(--og-text-muted, #94a3b8);
  font-family: monospace;
  font-size: 0.9rem;
}

.welcome-install-cmd {
  font-family: 'Fira Code', Consolas, monospace;
  font-size: 0.9rem;
  color: var(--og-color-primary-500, #4f46e5);
  font-weight: 500;
}

/* Sandbox Widget */
.welcome-sandbox {
  margin: 1.5rem 0 4.5rem;
}

.welcome-sandbox__card {
  background-color: var(--og-bg-surface, #ffffff);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-xl, 16px);
  overflow: hidden;
  box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.08);
}

.welcome-sandbox__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.25rem;
  background-color: var(--og-bg-muted, #f8fafc);
  border-bottom: 1px solid var(--og-border-color, #e2e8f0);
}

.welcome-sandbox__header-left {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.welcome-sandbox__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.welcome-sandbox__dot.red { background-color: #ef4444; }
.welcome-sandbox__dot.yellow { background-color: #f59e0b; }
.welcome-sandbox__dot.green { background-color: #10b981; }

.welcome-sandbox__title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--og-text-secondary, #475569);
  margin-left: 0.4rem;
}

.welcome-sandbox__body {
  padding: 1.75rem 2rem;
}

.welcome-sandbox__controls {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.welcome-sandbox__field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.welcome-sandbox__field--inline {
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  background-color: var(--og-bg-subtle, #f8fafc);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-md, 8px);
}

.welcome-sandbox__label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--og-text-primary, #0f172a);
}

.welcome-sandbox__hint {
  font-size: 0.75rem;
  color: var(--og-text-muted, #64748b);
}

.welcome-sandbox__actions-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

/* Features Grid */
.welcome-features {
  margin-bottom: 5rem;
}

.welcome-section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.welcome-section-title {
  font-size: 2.2rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--og-text-primary, #0f172a);
  margin: 0 0 0.6rem;
}

.welcome-section-desc {
  font-size: 1.05rem;
  color: var(--og-text-secondary, #64748b);
  margin: 0;
}

.welcome-features__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  background-color: var(--og-bg-surface, #ffffff);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-xl, 16px);
  padding: 1.75rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: var(--og-color-primary-500, #4f46e5);
  box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.08);
}

.feature-card__icon-box {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  display: inline-block;
}

.feature-card__title {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--og-text-primary, #0f172a);
  margin: 0 0 0.6rem;
}

.feature-card__desc {
  font-size: 0.9rem;
  color: var(--og-text-secondary, #475569);
  line-height: 1.6;
  margin: 0;
}

/* Quickstart */
.welcome-quickstart {
  margin-bottom: 5rem;
}

.quickstart-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quickstart-step {
  display: flex;
  gap: 1.25rem;
  background-color: var(--og-bg-surface, #ffffff);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-lg, 12px);
  padding: 1.5rem 1.75rem;
}

.quickstart-step__badge {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: var(--og-color-primary-500, #4f46e5);
  color: var(--og-color-primary-contrast, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}

.quickstart-step__content {
  flex: 1;
}

.quickstart-step__title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--og-text-primary, #0f172a);
  margin: 0 0 0.75rem;
}

.quickstart-step__code {
  background-color: var(--og-bg-subtle, #f8fafc);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-md, 8px);
  padding: 0.85rem 1.2rem;
  font-family: 'Fira Code', Consolas, monospace;
  font-size: 0.85rem;
  color: var(--og-text-primary, #0f172a);
  overflow-x: auto;
  line-height: 1.6;
  margin: 0;
}

/* Catalog Teaser */
.welcome-catalog-teaser {
  margin-bottom: 5rem;
  background: linear-gradient(135deg, var(--og-bg-surface, #ffffff) 0%, var(--og-bg-subtle, #f8fafc) 100%);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-xl, 20px);
  padding: 3rem 2.5rem;
  text-align: center;
}

.welcome-catalog-teaser__title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--og-text-primary, #0f172a);
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
}

.welcome-catalog-teaser__desc {
  font-size: 1rem;
  color: var(--og-text-secondary, #64748b);
  max-width: 600px;
  margin: 0 auto 2.25rem;
}

.welcome-catalog-teaser__categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
  margin-bottom: 2.5rem;
}

.category-teaser-card {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 1rem 1.25rem;
  background-color: var(--og-bg-surface, #ffffff);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-lg, 12px);
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.category-teaser-card:hover {
  border-color: var(--og-color-primary-500, #4f46e5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.category-teaser-card__icon {
  font-size: 1.5rem;
}

.category-teaser-card__info {
  display: flex;
  flex-direction: column;
}

.category-teaser-card__name {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--og-text-primary, #0f172a);
}

.category-teaser-card__count {
  font-size: 0.75rem;
  color: var(--og-text-muted, #94a3b8);
}

.welcome-catalog-teaser__cta {
  display: flex;
  justify-content: center;
}

/* Footer */
.welcome-footer {
  border-top: 1px solid var(--og-border-color, #e2e8f0);
  padding: 2.5rem 0;
  margin-top: 2rem;
}

.welcome-footer__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.welcome-footer__left {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.welcome-footer__brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.welcome-footer__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--og-text-primary, #0f172a);
}

.welcome-footer__license {
  font-size: 0.85rem;
  color: var(--og-text-muted, #94a3b8);
}

.welcome-footer__links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.welcome-footer__link {
  font-size: 0.9rem;
  color: var(--og-text-secondary, #475569);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.15s ease;
}

.welcome-footer__link:hover {
  color: var(--og-color-primary-500, #4f46e5);
}

.welcome-footer__link-btn {
  background: none;
  border: none;
  font-size: 0.9rem;
  color: var(--og-color-primary-500, #4f46e5);
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.15s ease;
}

.welcome-footer__link-btn:hover {
  opacity: 0.8;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .welcome-hero__title {
    font-size: 2.6rem;
  }
  .welcome-hero__brand {
    flex-direction: column;
    gap: 0.75rem;
  }
  .welcome-footer__content {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
}
</style>
