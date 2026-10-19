<template>
  <div class="explorer-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="sidebar__brand">
        <div class="sidebar__logo-wrap">
          <span class="sidebar__logo-icon">🚀</span>
          <span class="sidebar__logo-text">Optimus<strong>GUI</strong></span>
        </div>
        <span class="sidebar__badge">{{ componentsData.length }} comp</span>
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

            <!-- OgInputText Demo -->
            <div v-else-if="activeComponent.id === 'inputtext'" class="demo-box">
              <div class="demo-field" style="width: 20rem; max-width: 100%;">
                <label>Digita un testo nel campo reattivo:</label>
                <OgInputText v-model="inputTextVal" placeholder="Scrivi qualcosa..." :size="inputSize" :disabled="inputDisabled" :invalid="inputInvalid" fluid />
                <div class="demo-controls">
                  <label>Dimensione:</label>
                  <select v-model="inputSize" class="demo-select">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                  <label class="demo-checkbox-label">
                    <input v-model="inputInvalid" type="checkbox" /> Invalid
                  </label>
                  <label class="demo-checkbox-label">
                    <input v-model="inputDisabled" type="checkbox" /> Disabled
                  </label>
                </div>
                <span class="demo-val-badge">Valore v-model: <strong>{{ inputTextVal || '(vuoto)' }}</strong></span>
              </div>
            </div>

            <!-- OgTextarea Demo -->
            <div v-else-if="activeComponent.id === 'textarea'" class="demo-box">
              <div class="demo-field" style="width: 22rem; max-width: 100%;">
                <label>Area di testo con AutoResize attivo:</label>
                <OgTextarea v-model="textareaVal" autoResize rows="3" placeholder="Scrivi una descrizione..." fluid />
                <span class="demo-val-badge">Caratteri: <strong>{{ textareaVal.length }}</strong></span>
              </div>
            </div>

            <!-- OgInputNumber Demo -->
            <div v-else-if="activeComponent.id === 'inputnumber'" class="demo-box">
              <div class="demo-field">
                <label>Inserisci un numero con min: 0 e max: 100 (clamp immediato):</label>
                <OgInputNumber v-model="inputNumVal" :min="0" :max="100" showButtons prefix="€ " />
                <span class="demo-val-badge">Valore numerico v-model: <strong>{{ inputNumVal ?? 'null' }}</strong></span>
              </div>
            </div>

            <!-- OgPassword Demo -->
            <div v-else-if="activeComponent.id === 'password'" class="demo-box">
              <div class="demo-field">
                <label>Password con icona per rivelare il testo (Toggle Mask):</label>
                <OgPassword v-model="passwordVal" toggleMask placeholder="Inserisci password..." />
                <span class="demo-val-badge">Valore reale: <strong>{{ passwordVal || '(vuoto)' }}</strong></span>
              </div>
            </div>

            <!-- OgDatePicker Demo -->
            <div v-else-if="activeComponent.id === 'datepicker'" class="demo-box">
              <div class="demo-field">
                <label>Seleziona una data con il calendario popover custom OptimusGUI:</label>
                <OgDatePicker v-model="dateVal" placeholder="Scegli una data..." showClear />
                <span class="demo-val-badge">Data selezionata: <strong>{{ dateVal ? dateVal.toLocaleDateString() : 'Nessuna data' }}</strong></span>
              </div>
            </div>

            <!-- OgSelect Demo -->
            <div v-else-if="activeComponent.id === 'select'" class="demo-box">
              <div class="demo-field">
                <label>Select a tendina con ricerca (filter) e reset (showClear):</label>
                <OgSelect v-model="selectCity" :options="citiesList" optionLabel="name" optionValue="code" placeholder="Seleziona città..." filter showClear />
                <span class="demo-val-badge">Codice città: <strong>{{ selectCity || 'Nessuna' }}</strong></span>
              </div>
            </div>

            <!-- OgMultiSelect Demo -->
            <div v-else-if="activeComponent.id === 'multiselect'" class="demo-box">
              <div class="demo-field">
                <label>MultiSelect con ricerca (filter), reset rapido (showClear) e checkbox OptimusGUI integrati:</label>
                <div style="display: flex; gap: 1.25rem; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap;">
                  <label class="demo-choice">
                    <OgCheckbox v-model="multiFilter" binary />
                    <span>Filtro ricerca (filter)</span>
                  </label>
                  <label class="demo-choice">
                    <OgCheckbox v-model="multiShowClear" binary />
                    <span>Pulsante reset (showClear)</span>
                  </label>
                </div>
                <OgMultiSelect
                  v-model="multiVal"
                  :options="countriesList"
                  optionLabel="name"
                  optionValue="code"
                  placeholder="Seleziona nazioni..."
                  :filter="multiFilter"
                  :showClear="multiShowClear"
                />
                <span class="demo-val-badge">Selezionati: <strong>{{ multiVal.join(', ') || 'Nessuno' }}</strong></span>
              </div>
            </div>

            <!-- OgCheckbox Demo -->
            <div v-else-if="activeComponent.id === 'checkbox'" class="demo-box">
              <div class="demo-field">
                <label class="demo-choice">
                  <OgCheckbox v-model="chkVal" binary />
                  <span>Abilita notifiche push via browser</span>
                </label>
                <span class="demo-val-badge">Stato: <strong>{{ chkVal ? 'Attivo (true)' : 'Disattivo (false)' }}</strong></span>
              </div>
            </div>

            <!-- OgRadioButton Demo -->
            <div v-else-if="activeComponent.id === 'radiobutton'" class="demo-box">
              <div class="demo-field">
                <label>Pulsanti radio rigorosamente circolari (anti-ovalizzazione):</label>
                <div class="demo-radio-group">
                  <label class="demo-choice">
                    <OgRadioButton v-model="radioChoice" value="starter" name="pricing" />
                    <span>Starter</span>
                  </label>
                  <label class="demo-choice">
                    <OgRadioButton v-model="radioChoice" value="pro" name="pricing" />
                    <span>Professional</span>
                  </label>
                  <label class="demo-choice">
                    <OgRadioButton v-model="radioChoice" value="enterprise" name="pricing" />
                    <span>Enterprise</span>
                  </label>
                </div>
                <span class="demo-val-badge">Piano attivo: <strong>{{ radioChoice }}</strong></span>
              </div>
            </div>

            <!-- OgToggleSwitch Demo -->
            <div v-else-if="activeComponent.id === 'toggleswitch'" class="demo-box">
              <div class="demo-field">
                <label class="demo-choice">
                  <OgToggleSwitch v-model="toggleSwitchVal" />
                  <span>Modalità Risparmio Dati</span>
                </label>
                <span class="demo-val-badge">Switch: <strong>{{ toggleSwitchVal ? 'ON' : 'OFF' }}</strong></span>
              </div>
            </div>

            <!-- OgToggleButton Demo -->
            <div v-else-if="activeComponent.id === 'togglebutton'" class="demo-box">
              <div class="demo-field">
                <OgToggleButton v-model="toggleBtnVal" onLabel="Bloccato" offLabel="Sbloccato" />
                <span class="demo-val-badge">Stato: <strong>{{ toggleBtnVal ? 'Bloccato' : 'Sbloccato' }}</strong></span>
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
                <label>Valutazione utente (con icona di reset):</label>
                <OgRating v-model="ratingVal" :stars="5" />
                <span class="demo-val-badge">Punteggio: <strong>{{ ratingVal ?? 0 }} / 5 stelle</strong></span>
              </div>
            </div>

            <!-- OgColorPicker Demo -->
            <div v-else-if="activeComponent.id === 'colorpicker'" class="demo-box">
              <div class="demo-field">
                <label>Seleziona un colore d'accento:</label>
                <div style="display: flex; align-items: center; gap: 1rem;">
                  <OgColorPicker v-model="colorPickerVal" />
                  <span :style="{ backgroundColor: colorPickerVal, color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem' }">
                    {{ colorPickerVal }}
                  </span>
                </div>
              </div>
            </div>

            <!-- OgAutoComplete Demo -->
            <div v-else-if="activeComponent.id === 'autocomplete'" class="demo-box">
              <div class="demo-field">
                <label>Cerca framework / linguaggi (es. Vue, TypeScript, React):</label>
                <OgAutoComplete v-model="autoCompleteVal" :suggestions="filteredTech" @complete="searchTech" placeholder="Digita per cercare..." />
                <span class="demo-val-badge">Selezione: <strong>{{ autoCompleteVal || 'Nessuna' }}</strong></span>
              </div>
            </div>

            <!-- OgListbox Demo -->
            <div v-else-if="activeComponent.id === 'listbox'" class="demo-box">
              <div class="demo-field">
                <label>Seleziona un elemento dalla lista:</label>
                <OgListbox v-model="listboxVal" :options="citiesList" optionLabel="name" optionValue="code" style="width: 16rem;" />
                <span class="demo-val-badge">Selezionato: <strong>{{ listboxVal }}</strong></span>
              </div>
            </div>

            <!-- OgSelectButton Demo -->
            <div v-else-if="activeComponent.id === 'selectbutton'" class="demo-box">
              <div class="demo-field">
                <label>Pulsantiera a segmenti:</label>
                <OgSelectButton v-model="selectButtonVal" :options="['Giorno', 'Settimana', 'Mese', 'Anno']" />
                <span class="demo-val-badge">Periodo attivo: <strong>{{ selectButtonVal }}</strong></span>
              </div>
            </div>

            <!-- OgInputOtp Demo -->
            <div v-else-if="activeComponent.id === 'inputotp'" class="demo-box">
              <div class="demo-field">
                <label>Codice OTP (prova anche a incollare un codice a 6 cifre):</label>
                <OgInputOtp v-model="otpVal" :length="6" integerOnly />
                <span class="demo-val-badge">Codice digitato: <strong>{{ otpVal || '...' }}</strong></span>
              </div>
            </div>

            <!-- OgFloatLabel Demo -->
            <div v-else-if="activeComponent.id === 'floatlabel'" class="demo-box">
              <div class="demo-field" style="padding-top: 1rem;">
                <OgFloatLabel>
                  <OgInputText id="fl-email" v-model="floatLabelVal" />
                  <label for="fl-email">Indirizzo Email</label>
                </OgFloatLabel>
              </div>
            </div>

            <!-- OgInputGroup Demo -->
            <div v-else-if="activeComponent.id === 'inputgroup'" class="demo-box">
              <div class="demo-field" style="width: 22rem;">
                <OgInputGroup>
                  <OgInputGroupAddon>https://</OgInputGroupAddon>
                  <OgInputText v-model="inputGroupVal" placeholder="dominio.com" fluid />
                  <OgButton label="Check" severity="primary" />
                </OgInputGroup>
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
                <div style="padding: 1rem; border: 1px solid var(--og-border-color); border-radius: 8px; width: 18rem; background-color: #fff;">
                  <OgTree :value="treeData" />
                </div>
              </div>
            </div>

            <!-- OgCard Demo -->
            <div v-else-if="activeComponent.id === 'card'" class="demo-box">
              <OgCard title="Profilo Sviluppatore" subtitle="Frontend Engineer" style="width: 22rem;">
                <template #content>
                  <div style="display: flex; align-items: center; gap: 1rem;">
                    <OgAvatar label="MR" size="large" shape="circle" />
                    <div>
                      <strong>Mario Rossi</strong>
                      <p style="margin: 0; color: #64748b; font-size: 0.85rem;">mario.rossi@example.com</p>
                    </div>
                  </div>
                </template>
                <template #footer>
                  <OgTag value="Pro Member" severity="success" rounded />
                </template>
              </OgCard>
            </div>

            <!-- OgAvatar Demo -->
            <div v-else-if="activeComponent.id === 'avatar'" class="demo-box">
              <div class="demo-row">
                <OgAvatar label="SM" size="small" shape="circle" />
                <OgAvatar label="MD" size="medium" shape="circle" />
                <OgAvatar label="LG" size="large" shape="circle" />
                <OgAvatar label="XL" size="xlarge" shape="square" />
              </div>
            </div>

            <!-- OgBadge Demo -->
            <div v-else-if="activeComponent.id === 'badge'" class="demo-box">
              <div class="demo-row">
                <OgBadge value="5" severity="primary" />
                <OgBadge value="99+" severity="danger" />
                <OgBadge value="New" severity="success" />
                <OgBadge value="Warn" severity="warning" />
              </div>
            </div>

            <!-- OgTag Demo -->
            <div v-else-if="activeComponent.id === 'tag'" class="demo-box">
              <div class="demo-row">
                <OgTag value="Primary" severity="primary" />
                <OgTag value="Successo" severity="success" rounded />
                <OgTag value="Attenzione" severity="warning" />
                <OgTag value="Pericolo" severity="danger" rounded />
              </div>
            </div>

            <!-- OgChip Demo -->
            <div v-else-if="activeComponent.id === 'chip'" class="demo-box">
              <div class="demo-row">
                <OgChip label="Vue.js" />
                <OgChip label="TypeScript" removable />
                <OgChip label="OptimusGUI" removable />
              </div>
            </div>

            <!-- OgProgressBar Demo -->
            <div v-else-if="activeComponent.id === 'progressbar'" class="demo-box" style="width: 22rem;">
              <div class="demo-field" style="width: 100%;">
                <label>Avanzamento del processo:</label>
                <OgProgressBar :value="progressBarVal" />
                <div class="demo-row" style="margin-top: 0.5rem;">
                  <OgButton label="-10%" severity="secondary" size="small" @click="progressBarVal = Math.max(0, progressBarVal - 10)" />
                  <OgButton label="+10%" severity="primary" size="small" @click="progressBarVal = Math.min(100, progressBarVal + 10)" />
                </div>
              </div>
            </div>

            <!-- OgSkeleton Demo -->
            <div v-else-if="activeComponent.id === 'skeleton'" class="demo-box" style="width: 20rem;">
              <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1rem;">
                <OgSkeleton shape="circle" width="3rem" height="3rem" />
                <div style="flex: 1; display: flex; flex-direction: column; gap: 0.5rem;">
                  <OgSkeleton width="60%" height="1.25rem" />
                  <OgSkeleton width="90%" height="0.875rem" />
                </div>
              </div>
              <OgSkeleton width="100%" height="4rem" />
            </div>

            <!-- OgDialog Demo -->
            <div v-else-if="activeComponent.id === 'dialog'" class="demo-box">
              <OgButton label="Apri Finestra Modale" severity="primary" @click="isDialogOpen = true" />
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
                <OgButton label="Toast Success" severity="success" @click="sendToast('success', 'Operazione riuscita', 'I dati sono stati salvati regolarmente.')" />
                <OgButton label="Toast Info" severity="info" @click="sendToast('info', 'Notifica', 'Nuovo aggiornamento disponibile.')" />
                <OgButton label="Toast Error" severity="danger" @click="sendToast('error', 'Attenzione', 'Errore nella sincronizzazione dei dati.')" />
              </div>
            </div>

            <!-- OgMessage Demo -->
            <div v-else-if="activeComponent.id === 'message'" class="demo-box" style="width: 24rem;">
              <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
                <OgMessage severity="info">Informazione: il sistema effettuerà manutenzione stanotte.</OgMessage>
                <OgMessage severity="success" closable>Salvataggio completato con successo.</OgMessage>
                <OgMessage severity="warning">Attenzione: spazio di archiviazione in esaurimento.</OgMessage>
                <OgMessage severity="danger" closable>Errore critico: connessione al database interrotta.</OgMessage>
              </div>
            </div>

            <!-- OgPanel Demo -->
            <div v-else-if="activeComponent.id === 'panel'" class="demo-box" style="width: 22rem;">
              <OgPanel header="Pannello Impostazioni Avanzate" toggleable>
                <p>Configurazione avanzata del server e delle autorizzazioni dell'account.</p>
              </OgPanel>
            </div>

            <!-- OgTabs Demo -->
            <div v-else-if="activeComponent.id === 'tabs'" class="demo-box" style="width: 100%;">
              <OgTabs :value="0">
                <OgTabPanel header="Dashboard">
                  <p>Panoramica delle statistiche di utilizzo del sistema in tempo reale.</p>
                </OgTabPanel>
                <OgTabPanel header="Impostazioni">
                  <p>Configurazione delle preferenze personali e notifiche.</p>
                </OgTabPanel>
                <OgTabPanel header="Sicurezza">
                  <p>Gestione chiavi API e autenticazione a due fattori (2FA).</p>
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

            <!-- OgStepper Demo -->
            <div v-else-if="activeComponent.id === 'stepper'" class="demo-box" style="width: 100%;">
              <OgStepper v-model:value="stepperStep" :steps="['Dati Anagrafici', 'Fatturazione', 'Riepilogo']">
                <div style="padding: 1.5rem; text-align: center; border: 1px dashed #cbd5e1; border-radius: 8px;">
                  <p v-if="stepperStep === 1">Passo 1: Inserisci il tuo nome ed email.</p>
                  <p v-else-if="stepperStep === 2">Passo 2: Inserisci i dati di pagamento o partita IVA.</p>
                  <p v-else>Passo 3: Conferma l'ordine e procedi all'attivazione.</p>
                  <div style="display: flex; justify-content: center; gap: 0.5rem; margin-top: 1rem;">
                    <OgButton label="Precedente" severity="secondary" :disabled="stepperStep === 1" @click="stepperStep--" />
                    <OgButton label="Successivo" severity="primary" :disabled="stepperStep === 3" @click="stepperStep++" />
                  </div>
                </div>
              </OgStepper>
            </div>

            <!-- OgMenu Demo -->
            <div v-else-if="activeComponent.id === 'menu'" class="demo-box">
              <div style="border: 1px solid var(--og-border-color); border-radius: 8px; overflow: hidden; width: 16rem;">
                <OgMenu :model="menuItems" />
              </div>
            </div>

            <!-- OgBreadcrumb Demo -->
            <div v-else-if="activeComponent.id === 'breadcrumb'" class="demo-box">
              <OgBreadcrumb :home="{ label: 'Home', url: '/' }" :model="breadcrumbs" />
            </div>

            <!-- OgSplitter Demo -->
            <div v-else-if="activeComponent.id === 'splitter'" class="demo-box" style="width: 100%; height: 10rem;">
              <OgSplitter layout="horizontal">
                <OgSplitterPanel style="padding: 1rem; background-color: #f1f5f9; display: flex; align-items: center; justify-content: center;">
                  Pannello Sinistro
                </OgSplitterPanel>
                <OgSplitterPanel style="padding: 1rem; background-color: #ffffff; display: flex; align-items: center; justify-content: center;">
                  Pannello Destro
                </OgSplitterPanel>
              </OgSplitter>
            </div>

            <!-- OgToolbar Demo -->
            <div v-else-if="activeComponent.id === 'toolbar'" class="demo-box" style="width: 100%;">
              <OgToolbar>
                <template #start>
                  <OgButton label="Nuovo Record" severity="primary" size="small" />
                  <OgButton label="Carica File" severity="secondary" size="small" style="margin-left: 0.5rem;" />
                </template>
                <template #end>
                  <OgButton label="Esporta CSV" variant="outlined" size="small" />
                </template>
              </OgToolbar>
            </div>

            <!-- OgDivider Demo -->
            <div v-else-if="activeComponent.id === 'divider'" class="demo-box" style="width: 20rem;">
              <p style="margin: 0; text-align: center;">Sezione Superiore</p>
              <OgDivider align="center">oppure</OgDivider>
              <p style="margin: 0; text-align: center;">Sezione Inferiore</p>
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
              <tr v-if="activeComponent.props.length === 0">
                <td colspan="4" style="text-align: center; color: #94a3b8; padding: 1.5rem;">
                  Questo componente è un layout/wrapper e accetta contenuti tramite gli slot predefiniti.
                </td>
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
  OgTextarea,
  OgInputNumber,
  OgPassword,
  OgDatePicker,
  OgSelect,
  OgMultiSelect,
  OgRadioButton,
  OgCheckbox,
  OgToggleSwitch,
  OgToggleButton,
  OgSlider,
  OgRating,
  OgColorPicker,
  OgAutoComplete,
  OgListbox,
  OgSelectButton,
  OgInputOtp,
  OgFloatLabel,
  OgInputGroup,
  OgInputGroupAddon,
  OgDataTable,
  OgColumn,
  OgTree,
  OgCard,
  OgAvatar,
  OgBadge,
  OgTag,
  OgChip,
  OgProgressBar,
  OgSkeleton,
  OgDialog,
  OgDrawer,
  OgToast,
  useToast,
  OgMessage,
  OgPanel,
  OgTabs,
  OgTabPanel,
  OgAccordion,
  OgAccordionTab,
  OgStepper,
  OgMenu,
  OgBreadcrumb,
  OgSplitter,
  OgSplitterPanel,
  OgToolbar,
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

// InputText demo state
const inputTextVal = ref('Mario Rossi');
const inputSize = ref<'small' | 'medium' | 'large'>('medium');
const inputDisabled = ref(false);
const inputInvalid = ref(false);

// Textarea demo state
const textareaVal = ref('OptimusGUI offre un design system elegante, minimalista e completamente personalizzabile via CSS.');

// InputNumber demo state
const inputNumVal = ref<number | null>(25);

// Password demo state
const passwordVal = ref('SuperSecretPass123!');

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
const multiFilter = ref(true);
const multiShowClear = ref(true);
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

// ToggleSwitch demo state
const toggleSwitchVal = ref(true);

// ToggleButton demo state
const toggleBtnVal = ref(true);

// Slider demo state
const sliderVal = ref(60);

// Rating demo state
const ratingVal = ref(4);

// ColorPicker demo state
const colorPickerVal = ref('#0f172a');

// AutoComplete demo state
const autoCompleteVal = ref('');
const allTech = ['Vue.js', 'Vite', 'TypeScript', 'Node.js', 'React', 'Angular', 'Tailwind', 'GraphQL', 'Next.js', 'Nuxt'];
const filteredTech = ref<string[]>([]);
const searchTech = (e: { query: string }) => {
  filteredTech.value = allTech.filter((t) => t.toLowerCase().includes(e.query.toLowerCase()));
};

// Listbox demo state
const listboxVal = ref('MIL');

// SelectButton demo state
const selectButtonVal = ref('Settimana');

// InputOtp demo state
const otpVal = ref('123456');

// FloatLabel demo state
const floatLabelVal = ref('');

// InputGroup demo state
const inputGroupVal = ref('my-website.com');

// ProgressBar demo state
const progressBarVal = ref(70);

// Stepper demo state
const stepperStep = ref(1);

// Dialog & Drawer state
const isDialogOpen = ref(false);
const isDrawerOpen = ref(false);

// Menu demo state
const menuItems = [
  { label: 'Dashboard', icon: 'pi pi-home' },
  { label: 'Utenti', icon: 'pi pi-users' },
  { separator: true },
  { label: 'Impostazioni', icon: 'pi pi-cog' },
];

// Breadcrumb demo state
const breadcrumbs = [
  { label: 'Progetti', url: '/projects' },
  { label: 'OptimusGUI', url: '/projects/optimus-gui' },
  { label: 'Component Explorer' },
];

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
  width: 100%;
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
