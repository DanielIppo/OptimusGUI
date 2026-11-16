# 🚀 OptimusGUI

**OptimusGUI** è una libreria di componenti **Vue 3**, **TypeScript** e **Vite** ad alte prestazioni, con design **minimal e moderno**, sviluppata con principi di *Component Driven Development* e *Headless Composables*.

Ispirata all'architettura di PrimeVue, **OptimusGUI** ricrea l'intero set di componenti e funzionalità fornendo un'infrastruttura di styling snella, flessibile e completamente personalizzabile basata su **CSS Custom Properties (Variabili CSS)** e file di tema dedicati.

---

## 🌟 Caratteristiche Principali

- **Stile Minimal & Moderno**: Design pulito e neutrale (bianco/slate) con elevata attenzione a micro-interazioni ed accessibilità (A11y).
- **Parità Completa con PrimeVue**: Tutti i componenti, props, slot ed eventi principali di PrimeVue ricreati da zero.
- **Headless Composables First**: Logica complessa separata in composables riutilizzabili (`useSelect`, `useDialog`, `useToast`, `useDataTable`).
- **Sistema di Tematizzazione via File CSS Separati**: Personalizzazione totale importando file CSS tematici direttamente nel `main.ts`.
- **TypeScript Strict**: Tipizzazione rigorosa per Props, Emits, Slots e Contexts.
- **Tree-Shaking & Plugin Ready**: Esportazione sia come Plugin globale Vue (`app.use(OptimusGUI)`) sia come moduli singoli on-demand.

---

## 📦 Installazione e Collegamento

### Metodo 1: Collegamento Locale (Sviluppo)
Nel `package.json` del tuo progetto Vue 3, aggiungi il riferimento locale a OptimusGUI:

```json
{
  "dependencies": {
    "vue": "^3.4.0",
    "optimus-gui": "file:/percorso/assoluto/a/OptimusGUI"
  }
}
```
Poi esegui nel tuo terminale:
```bash
npm install
```

---

## ⚙️ Inizializzazione nel Progetto Padre (`main.ts`)

Configura la libreria ed importa gli stili all'interno del file `src/main.ts`:

```typescript
import { createApp } from 'vue';
import App from './App.vue';

// 1. Importa il plugin di OptimusGUI
import OptimusGUI from 'optimus-gui';

// 2. Importa il file di stile base di OptimusGUI
import 'optimus-gui/style.css';

const app = createApp(App);

// 3. Registra il plugin globale
app.use(OptimusGUI);

app.mount('#app');
```

---

## 🎨 Personalizzazione del Tema tramite File CSS Separati

OptimusGUI non richiede configurazioni di stile complesse o classi di specificità elevata. Per cambiare il tema o personalizzare i componenti, ti basta **importare un file CSS dedicato nel tuo `main.ts` subito dopo `style.css`**.

### Opzione A: Creare un Tuo File di Tema Personalizzato

Crea un file di tema nel tuo progetto (es. `src/theme/my-custom-theme.css`):

```css
/**
 * src/theme/my-custom-theme.css
 */
:root {
  /* Cambia il colore d'accento primario (es. Viola Indigo) */
  --og-color-primary-500: #6366f1;
  --og-color-primary-600: #4f46e5;
  --og-color-primary-contrast: #ffffff;

  /* Cambia l'arrotondamento dei bordi di tutti i componenti */
  --og-radius-md: 0.75rem;
  --og-radius-lg: 1rem;

  /* Tipografia personalizzata */
  --og-font-family: 'Inter', sans-serif;
}

/* Personalizzazione mirata per specifiche classi di componenti */
.og-button {
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

Importalo nel `main.ts`:
```typescript
import 'optimus-gui/style.css';            // Stile base di OptimusGUI
import './theme/my-custom-theme.css';     // Il tuo tema personalizzato (sovrascrive in automatico)
```

---

### Opzione B: Utilizzare i Temi Preset Inclusi

OptimusGUI include temi preset già pronti per l'uso:

#### Tema Dark Preset
```typescript
import 'optimus-gui/style.css';
import 'optimus-gui/themes/dark.css';
```

#### Tema Indigo Preset
```typescript
import 'optimus-gui/style.css';
import 'optimus-gui/themes/indigo.css';
```

#### Tema Obsidian & Violet Preset ("Obsidian & Royal Violet")
```typescript
import 'optimus-gui/style.css';
import 'optimus-gui/themes/obsidian-violet.css';
```

---

## 💻 Esempi di Utilizzo nei Componenti

### 1. Registrazione Globale (Uso Diretto)

```vue
<template>
  <div class="container">
    <OgCard title="Pannello Gestione">
      <template #content>
        <OgInputText v-model="username" placeholder="Username" fluid />
        <OgSelect v-model="selectedRole" :options="roles" placeholder="Seleziona Ruolo" />
        <OgButton label="Salva Modifiche" severity="success" icon="pi pi-check" @click="save" />
      </template>
    </OgCard>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const username = ref('');
const selectedRole = ref(null);
const roles = [
  { label: 'Amministratore', value: 'admin' },
  { label: 'Utente', value: 'user' },
];

const save = () => {
  alert('Salvato con successo!');
};
</script>
```

---

### 2. Importazione On-Demand e Composables (Tree-shaking)

```vue
<script setup lang="ts">
import { ref } from 'vue';
import { OgButton, OgDialog, OgToast, useToast, useDialog } from 'optimus-gui';

const toast = useToast();
const { isVisible, open, close } = useDialog();

const onConfirm = () => {
  toast.add({ severity: 'success', summary: 'Confermato', detail: 'Operazione eseguita con successo' });
  close();
};
</script>

<template>
  <OgButton label="Apri Modale" severity="primary" @click="open" />

  <OgToast position="top-right" />

  <OgDialog v-model:visible="isVisible" header="Conferma Operazione" modal>
    <p>Sei sicuro di voler procedere?</p>
    <template #footer>
      <OgButton label="Annulla" variant="outlined" severity="secondary" @click="close" />
      <OgButton label="Conferma" severity="success" @click="onConfirm" />
    </template>
  </OgDialog>
</template>
```

---

## 📂 Cartella Esempi (`examples/`)

Nella cartella [`examples/`](file:///home/dada/Desktop/Progetti/personali/OptimusGUI/examples/) troverai esempi pratici divisi per categoria:

- [`ButtonExample.vue`](file:///home/dada/Desktop/Progetti/personali/OptimusGUI/examples/ButtonExample.vue): Varianti, severities, badge e loading spinner di `OgButton`.
- [`FormInputsExample.vue`](file:///home/dada/Desktop/Progetti/personali/OptimusGUI/examples/FormInputsExample.vue): Esempi di tutti i componenti di input (`OgInputText`, `OgSelect`, `OgMultiSelect`, `OgDatePicker`, `OgSlider`, `OgRating`, `OgInputOtp`, ecc.).
- [`DataTableExample.vue`](file:///home/dada/Desktop/Progetti/personali/OptimusGUI/examples/DataTableExample.vue): Paginazione, ordinamento e celle personalizzate con `OgDataTable` e `OgColumn`.
- [`OverlaysAndPanelsExample.vue`](file:///home/dada/Desktop/Progetti/personali/OptimusGUI/examples/OverlaysAndPanelsExample.vue): Finestre modali (`OgDialog`), pannelli laterali (`OgDrawer`), notifiche toast (`OgToast`) e schede (`OgCard`, `OgTabs`, `OgAccordion`).
- [`CustomTheme.css`](file:///home/dada/Desktop/Progetti/personali/OptimusGUI/examples/CustomTheme.css): File CSS di esempio da importare nel `main.ts` per tematizzare la libreria.

---

## 🛠️ Comandi di Build e Sviluppo

```bash
# Esegui il type-check TypeScript
npm run type-check

# Compila la libreria in formato ESM, UMD, tipi d.ts e temi CSS
npm run build
```

---

## 📄 Licenza

MIT License © OptimusGUI
