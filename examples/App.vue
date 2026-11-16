<template>
  <div class="explorer-layout" :data-theme="selectedTheme">
    <!-- Top Navbar -->
    <header class="top-navbar">
      <div class="top-navbar__left">
        <div class="top-navbar__logo" @click="setView('welcome')">
          <OgLogo :size="32" />
          <span class="top-navbar__title">Optimus<strong>GUI</strong></span>
        </div>
        <OgTag value="v1.0.1" severity="primary" rounded class="top-navbar__version" />
        <nav class="top-navbar__nav-links">
          <button
            :class="['top-navbar__nav-btn', { 'top-navbar__nav-btn--active': currentView === 'welcome' }]"
            @click="setView('welcome')"
          >
            Panoramica
          </button>
          <button
            :class="['top-navbar__nav-btn', { 'top-navbar__nav-btn--active': currentView === 'showcase' }]"
            @click="setView('showcase')"
          >
            Componenti
          </button>
        </nav>
      </div>

      <div class="top-navbar__right">
        <!-- Theme Switcher -->
        <div class="top-navbar__theme-wrap">
          <span class="top-navbar__theme-label">Tema:</span>
          <OgSelect
            v-model="selectedTheme"
            :options="themeOptions"
            optionLabel="label"
            optionValue="value"
            style="width: 14rem;"
          >
            <template #value="{ value }">
              <div class="theme-select-option">
                <span class="theme-dot" :style="{ backgroundColor: getThemeColor(value) }"></span>
                <span class="theme-text">{{ getThemeLabel(value) }}</span>
              </div>
            </template>
            <template #option="{ option }">
              <div class="theme-select-option">
                <span class="theme-dot" :style="{ backgroundColor: option.color }"></span>
                <span class="theme-text">{{ option.label }}</span>
              </div>
            </template>
          </OgSelect>
        </div>

        <div class="top-navbar__actions">
          <OgButton
            label="NPM"
            variant="outlined"
            size="small"
            severity="secondary"
            @click="openExternal('https://www.npmjs.com/package/@danielippo/optimus-gui')"
          />
          <OgButton
            label="GitHub"
            size="small"
            severity="secondary"
            @click="openExternal('https://github.com/DanielIppo/OptimusGUI')"
          />
        </div>
      </div>
    </header>

    <!-- Welcome Page View -->
    <WelcomeView
      v-if="currentView === 'welcome'"
      @explore="setView('showcase')"
      @exploreCategory="onExploreCategory"
    />

    <!-- Component Showcase Explorer View -->
    <div v-show="currentView === 'showcase'" class="explorer-body">
      <!-- Sidebar -->
      <aside class="sidebar">
        <!-- Search Input -->
        <div class="sidebar__search-wrap">
          <OgInputText
            v-model="searchQuery"
            placeholder="Cerca componenti..."
            fluid
          />
        </div>

        <!-- Categories Navigation -->
        <nav class="sidebar__nav">
          <div v-for="cat in filteredCategories" :key="cat" class="sidebar__category">
            <div class="sidebar__category-title">
              <span>{{ cat }}</span>
              <OgTag :value="String(getComponentsByCategory(cat).length)" severity="secondary" rounded />
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
        <!-- Component Header -->
        <header class="content-header">
          <div class="content-header__meta">
            <div class="content-header__top-row">
              <OgTag :value="activeComponent.category" severity="info" />
            </div>
            <h1 class="content-header__title">{{ activeComponent.name }}</h1>
            <p class="content-header__desc">{{ activeComponent.description }}</p>

            <!-- Quick Import Bar -->
            <div class="quick-import-card">
              <span class="quick-import-label">Import:</span>
              <code class="quick-import-code">import { {{ activeComponent.name }} } from '@danielippo/optimus-gui'</code>
              <OgButton
                :label="copiedImport ? '✓ Copiato' : 'Copia'"
                :severity="copiedImport ? 'success' : 'secondary'"
                variant="outlined"
                size="small"
                @click="copyImport"
              />
            </div>
          </div>
        </header>

        <!-- Sub Navigation Tabs (Using OgSelectButton) -->
        <div class="content-tabs-wrap">
          <OgSelectButton
            v-model="activeTab"
            :options="tabOptions"
            optionLabel="label"
            optionValue="value"
          />
        </div>

        <!-- Tab 1: Live Preview -->
        <section v-show="activeTab === 'preview'" class="tab-panel">
          <div class="preview-card">
            <div class="preview-card__header">
              <span class="preview-card__tag">Live Interactive Playground</span>
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
                <div class="demo-controls-panel">
                  <div class="demo-control-item">
                    <span class="demo-control-label">Variante:</span>
                    <OgSelect
                      v-model="btnVariant"
                      :options="btnVariantOptions"
                      optionLabel="label"
                      optionValue="value"
                      style="width: 10.5rem;"
                    />
                  </div>
                  <div class="demo-control-item">
                    <span class="demo-control-label">Dimensione:</span>
                    <OgSelect
                      v-model="btnSize"
                      :options="sizeOptions"
                      optionLabel="label"
                      optionValue="value"
                      style="width: 9rem;"
                    />
                  </div>
                  <div class="demo-control-item">
                    <label class="demo-choice">
                      <OgCheckbox v-model="btnLoading" binary />
                      <span>Loading</span>
                    </label>
                  </div>
                  <div class="demo-control-item">
                    <label class="demo-choice">
                      <OgCheckbox v-model="btnDisabled" binary />
                      <span>Disabled</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- OgInputText Demo -->
              <div v-else-if="activeComponent.id === 'inputtext'" class="demo-box">
                <div class="demo-field" style="width: 22rem; max-width: 100%;">
                  <span class="demo-field-title">Campo input reattivo:</span>
                  <OgInputText v-model="inputTextVal" placeholder="Scrivi qualcosa..." :size="inputSize" :disabled="inputDisabled" :invalid="inputInvalid" fluid />
                  <span class="demo-val-badge">Valore v-model: <strong>{{ inputTextVal || '(vuoto)' }}</strong></span>
                </div>
                <div class="demo-controls-panel">
                  <div class="demo-control-item">
                    <span class="demo-control-label">Dimensione:</span>
                    <OgSelect
                      v-model="inputSize"
                      :options="sizeOptions"
                      optionLabel="label"
                      optionValue="value"
                      style="width: 9rem;"
                    />
                  </div>
                  <div class="demo-control-item">
                    <label class="demo-choice">
                      <OgCheckbox v-model="inputInvalid" binary />
                      <span>Invalid</span>
                    </label>
                  </div>
                  <div class="demo-control-item">
                    <label class="demo-choice">
                      <OgCheckbox v-model="inputDisabled" binary />
                      <span>Disabled</span>
                    </label>
                  </div>
                </div>
              </div>

              <!-- OgTextarea Demo -->
              <div v-else-if="activeComponent.id === 'textarea'" class="demo-box">
                <div class="demo-field" style="width: 24rem; max-width: 100%;">
                  <span class="demo-field-title">Area di testo con AutoResize attivo:</span>
                  <OgTextarea v-model="textareaVal" autoResize rows="3" placeholder="Scrivi una descrizione..." fluid />
                  <span class="demo-val-badge">Caratteri: <strong>{{ textareaVal.length }}</strong></span>
                </div>
              </div>

              <!-- OgInputNumber Demo -->
              <div v-else-if="activeComponent.id === 'inputnumber'" class="demo-box">
                <div class="demo-field">
                  <span class="demo-field-title">Numero (con supporto per virgola e punto, clamp 0-100):</span>
                  <OgInputNumber v-model="inputNumVal" :min="0" :max="100" showButtons prefix="€ " />
                  <span class="demo-val-badge">Valore numerico v-model: <strong>{{ inputNumVal ?? 'null' }}</strong></span>
                </div>
              </div>

              <!-- OgPassword Demo -->
              <div v-else-if="activeComponent.id === 'password'" class="demo-box">
                <div class="demo-field">
                  <span class="demo-field-title">Password con icona Toggle Mask:</span>
                  <OgPassword v-model="passwordVal" toggleMask placeholder="Inserisci password..." />
                  <span class="demo-val-badge">Valore reale: <strong>{{ passwordVal || '(vuoto)' }}</strong></span>
                </div>
              </div>

              <!-- OgDatePicker Demo -->
              <div v-else-if="activeComponent.id === 'datepicker'" class="demo-box">
                <div class="demo-field">
                  <span class="demo-field-title">Calendario Popover personalizzato:</span>
                  <OgDatePicker v-model="dateVal" placeholder="Scegli una data..." showClear />
                  <span class="demo-val-badge">Data selezionata: <strong>{{ dateVal ? dateVal.toLocaleDateString() : 'Nessuna data' }}</strong></span>
                </div>
              </div>

              <!-- OgSelect Demo -->
              <div v-else-if="activeComponent.id === 'select'" class="demo-box">
                <div class="demo-field">
                  <span class="demo-field-title">Select con ricerca (filter) e reset rapido (showClear):</span>
                  <OgSelect v-model="selectCity" :options="citiesList" optionLabel="name" optionValue="code" placeholder="Seleziona città..." filter showClear />
                  <span class="demo-val-badge">Codice città: <strong>{{ selectCity || 'Nessuna' }}</strong></span>
                </div>
              </div>

              <!-- OgMultiSelect Demo -->
              <div v-else-if="activeComponent.id === 'multiselect'" class="demo-box">
                <div class="demo-field">
                  <span class="demo-field-title">MultiSelect con filtri e checkbox integrati:</span>
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
                  <span class="demo-field-title">Pulsanti radio rigorosamente circolari:</span>
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
                    <span>Modalità Risparmio Energetico</span>
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
                  <span class="demo-field-title">Trascina il cursore:</span>
                  <OgSlider v-model="sliderVal" :min="0" :max="100" />
                  <span class="demo-val-badge">Livello: <strong>{{ sliderVal }}%</strong></span>
                </div>
              </div>

              <!-- OgRating Demo -->
              <div v-else-if="activeComponent.id === 'rating'" class="demo-box">
                <div class="demo-field">
                  <span class="demo-field-title">Valutazione utente:</span>
                  <OgRating v-model="ratingVal" :stars="5" />
                  <span class="demo-val-badge">Punteggio: <strong>{{ ratingVal ?? 0 }} / 5 stelle</strong></span>
                </div>
              </div>

              <!-- OgColorPicker Demo -->
              <div v-else-if="activeComponent.id === 'colorpicker'" class="demo-box">
                <div class="demo-field">
                  <span class="demo-field-title">Seleziona un colore d'accento:</span>
                  <div style="display: flex; align-items: center; gap: 1rem;">
                    <OgColorPicker v-model="colorPickerVal" />
                    <span class="demo-color-preview" :style="{ backgroundColor: colorPickerVal }">
                      {{ colorPickerVal }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- OgAutoComplete Demo -->
              <div v-else-if="activeComponent.id === 'autocomplete'" class="demo-box">
                <div class="demo-field">
                  <span class="demo-field-title">Cerca framework / linguaggi:</span>
                  <OgAutoComplete v-model="autoCompleteVal" :suggestions="filteredTech" @complete="searchTech" placeholder="Digita per cercare..." />
                  <span class="demo-val-badge">Selezione: <strong>{{ autoCompleteVal || 'Nessuna' }}</strong></span>
                </div>
              </div>

              <!-- OgListbox Demo -->
              <div v-else-if="activeComponent.id === 'listbox'" class="demo-box">
                <div class="demo-field">
                  <span class="demo-field-title">Seleziona un elemento dalla lista:</span>
                  <OgListbox v-model="listboxVal" :options="citiesList" optionLabel="name" optionValue="code" style="width: 16rem;" />
                  <span class="demo-val-badge">Selezionato: <strong>{{ listboxVal }}</strong></span>
                </div>
              </div>

              <!-- OgSelectButton Demo -->
              <div v-else-if="activeComponent.id === 'selectbutton'" class="demo-box">
                <div class="demo-field">
                  <span class="demo-field-title">Pulsantiera a segmenti:</span>
                  <OgSelectButton v-model="selectButtonVal" :options="['Giorno', 'Settimana', 'Mese', 'Anno']" />
                  <span class="demo-val-badge">Periodo attivo: <strong>{{ selectButtonVal }}</strong></span>
                </div>
              </div>

              <!-- OgInputOtp Demo -->
              <div v-else-if="activeComponent.id === 'inputotp'" class="demo-box">
                <div class="demo-field">
                  <span class="demo-field-title">Codice OTP a 6 cifre:</span>
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
                <div class="demo-field" style="width: 22rem; max-width: 100%;">
                  <OgInputGroup>
                    <OgInputGroupAddon>https://</OgInputGroupAddon>
                    <OgInputText v-model="inputGroupVal" placeholder="dominio.com" fluid />
                    <OgInputGroupAddon>.com</OgInputGroupAddon>
                  </OgInputGroup>
                </div>
              </div>

              <!-- OgDataTable Demo -->
              <div v-else-if="activeComponent.id === 'datatable'" class="demo-box" style="width: 100%; max-width: 44rem;">
                <OgDataTable :value="tableData" paginator :rows="3">
                  <OgColumn field="id" header="ID" sortable />
                  <OgColumn field="name" header="Prodotto" sortable />
                  <OgColumn field="category" header="Categoria" sortable />
                  <OgColumn field="price" header="Prezzo" sortable>
                    <template #body="{ data }">
                      € {{ data.price.toFixed(2) }}
                    </template>
                  </OgColumn>
                  <OgColumn field="status" header="Stato">
                    <template #body="{ data }">
                      <OgTag :value="data.status" :severity="data.status === 'In Stock' ? 'success' : 'danger'" />
                    </template>
                  </OgColumn>
                </OgDataTable>
              </div>

              <!-- OgTree Demo -->
              <div v-else-if="activeComponent.id === 'tree'" class="demo-box" style="width: 18rem;">
                <OgTree :value="treeData" />
              </div>

              <!-- OgCard Demo -->
              <div v-else-if="activeComponent.id === 'card'" class="demo-box" style="width: 20rem;">
                <OgCard title="Pannello Utente" subtitle="Configurazione Profilo">
                  <template #content>
                    <div style="display: flex; align-items: center; gap: 1rem;">
                      <OgAvatar label="MR" shape="circle" size="large" />
                      <div>
                        <strong style="display: block;">Mario Rossi</strong>
                        <p style="margin: 0; font-size: 0.85rem; color: var(--og-text-secondary);">mario.rossi@example.com</p>
                      </div>
                    </div>
                  </template>
                  <template #footer>
                    <OgButton label="Gestisci Profilo" severity="primary" size="small" fluid />
                  </template>
                </OgCard>
              </div>

              <!-- OgAvatar Demo -->
              <div v-else-if="activeComponent.id === 'avatar'" class="demo-box">
                <div class="demo-row">
                  <OgAvatar label="A" size="small" />
                  <OgAvatar label="MR" size="medium" />
                  <OgAvatar label="OP" size="large" shape="circle" />
                  <OgAvatar label="XL" size="xlarge" shape="circle" />
                </div>
              </div>

              <!-- OgBadge Demo -->
              <div v-else-if="activeComponent.id === 'badge'" class="demo-box">
                <div class="demo-row">
                  <OgBadge value="2" severity="primary" />
                  <OgBadge value="4" severity="success" />
                  <OgBadge value="99+" severity="danger" />
                  <OgBadge value="Info" severity="info" />
                  <OgBadge value="Avviso" severity="warning" />
                </div>
              </div>

              <!-- OgTag Demo -->
              <div v-else-if="activeComponent.id === 'tag'" class="demo-box">
                <div class="demo-row">
                  <OgTag value="Primary" severity="primary" />
                  <OgTag value="Success" severity="success" />
                  <OgTag value="Info" severity="info" />
                  <OgTag value="Warning" severity="warning" />
                  <OgTag value="Danger" severity="danger" />
                  <OgTag value="Arrotondato" severity="primary" rounded />
                </div>
              </div>

              <!-- OgChip Demo -->
              <div v-else-if="activeComponent.id === 'chip'" class="demo-box">
                <div class="demo-row">
                  <OgChip label="Vue.js" />
                  <OgChip label="TypeScript" removable />
                  <OgChip label="Tailwind" removable />
                  <OgChip label="OptimusGUI" icon="🚀" />
                </div>
              </div>

              <!-- OgProgressBar Demo -->
              <div v-else-if="activeComponent.id === 'progressbar'" class="demo-box" style="width: 20rem;">
                <OgProgressBar :value="progressBarVal" showValue />
              </div>

              <!-- OgSkeleton Demo -->
              <div v-else-if="activeComponent.id === 'skeleton'" class="demo-box" style="width: 20rem; gap: 0.75rem;">
                <OgSkeleton width="100%" height="2rem" />
                <OgSkeleton width="70%" height="1.25rem" />
                <OgSkeleton width="40%" height="1.25rem" />
              </div>

              <!-- OgDialog Demo -->
              <div v-else-if="activeComponent.id === 'dialog'" class="demo-box">
                <OgButton label="Apri Dialog Modale" severity="primary" @click="isDialogOpen = true" />
                <OgDialog v-model:visible="isDialogOpen" header="Finestra di Conferma" modal style="width: 25rem;">
                  <p>Questa finestra modale utilizza il composable e l'overlay integrato con supporto a chiusura su click esterno.</p>
                  <template #footer>
                    <div style="display: flex; justify-content: flex-end; gap: 0.5rem;">
                      <OgButton label="Annulla" variant="outlined" severity="secondary" @click="isDialogOpen = false" />
                      <OgButton label="Conferma" severity="primary" @click="isDialogOpen = false" />
                    </div>
                  </template>
                </OgDialog>
              </div>

              <!-- OgDrawer Demo -->
              <div v-else-if="activeComponent.id === 'drawer'" class="demo-box">
                <OgButton label="Apri Drawer Laterale" severity="secondary" @click="isDrawerOpen = true" />
                <OgDrawer v-model:visible="isDrawerOpen" header="Pannello Notifiche" position="right">
                  <p>Pannello a scomparsa laterale animato per notifiche, filtri e menu.</p>
                </OgDrawer>
              </div>

              <!-- OgToast Demo -->
              <div v-else-if="activeComponent.id === 'toast'" class="demo-box">
                <div class="demo-row">
                  <OgButton label="Toast Success" severity="success" @click="sendToast('success', 'Riuscito', 'Operazione completata!')" />
                  <OgButton label="Toast Info" severity="info" @click="sendToast('info', 'Informazione', 'Nuovo aggiornamento disponibile')" />
                  <OgButton label="Toast Error" severity="danger" @click="sendToast('error', 'Errore', 'Connessione al server fallita')" />
                </div>
                <OgToast position="top-right" />
              </div>

              <!-- OgMessage Demo -->
              <div v-else-if="activeComponent.id === 'message'" class="demo-box" style="width: 22rem;">
                <OgMessage severity="info" closable>Suggerimento: Puoi cambiare tema in alto a destra!</OgMessage>
                <OgMessage severity="success" closable>Build completata con successo.</OgMessage>
                <OgMessage severity="warning">Attenzione: versione di prova attiva.</OgMessage>
              </div>

              <!-- OgPanel Demo -->
              <div v-else-if="activeComponent.id === 'panel'" class="demo-box" style="width: 22rem;">
                <OgPanel header="Pannello Collassabile" toggleable>
                  <p style="margin: 0;">Contenuto espandibile e comprimibile con animazione fluida.</p>
                </OgPanel>
              </div>

              <!-- OgTabs Demo -->
              <div v-else-if="activeComponent.id === 'tabs'" class="demo-box" style="width: 22rem;">
                <OgTabs value="0">
                  <OgTabPanel header="Profilo" value="0">
                    <p style="margin: 0; padding-top: 0.5rem;">Informazioni personali utente.</p>
                  </OgTabPanel>
                  <OgTabPanel header="Sicurezza" value="1">
                    <p style="margin: 0; padding-top: 0.5rem;">Password e autenticazione 2FA.</p>
                  </OgTabPanel>
                </OgTabs>
              </div>

              <!-- OgAccordion Demo -->
              <div v-else-if="activeComponent.id === 'accordion'" class="demo-box" style="width: 22rem;">
                <OgAccordion>
                  <OgAccordionTab header="Che cos'è OptimusGUI?">
                    <p style="margin: 0;">Una libreria Vue 3 minimal, headless-first e compatibile con Tailwind.</p>
                  </OgAccordionTab>
                  <OgAccordionTab header="Come cambio il tema?">
                    <p style="margin: 0;">Puoi usare i preset inclusi o importare un tuo file CSS con le variabili.</p>
                  </OgAccordionTab>
                </OgAccordion>
              </div>

              <!-- OgStepper Demo -->
              <div v-else-if="activeComponent.id === 'stepper'" class="demo-box" style="width: 24rem;">
                <OgStepper :steps="['Account', 'Dati', 'Fine']" v-model:value="stepperStep">
                  <div style="padding: 1.5rem 0; text-align: center;">
                    <p v-if="stepperStep === 1">Passo 1: Crea account</p>
                    <p v-else-if="stepperStep === 2">Passo 2: Inserisci dati</p>
                    <p v-else>Passo 3: Conferma e completa</p>
                    <div style="display: flex; justify-content: center; gap: 0.75rem; margin-top: 1rem;">
                      <OgButton label="Indietro" variant="outlined" size="small" :disabled="stepperStep === 1" @click="stepperStep--" />
                      <OgButton label="Avanti" size="small" :disabled="stepperStep === 3" @click="stepperStep++" />
                    </div>
                  </div>
                </OgStepper>
              </div>

              <!-- OgMenu Demo -->
              <div v-else-if="activeComponent.id === 'menu'" class="demo-box">
                <OgMenu :model="menuItems" style="width: 14rem;" />
              </div>

              <!-- OgBreadcrumb Demo -->
              <div v-else-if="activeComponent.id === 'breadcrumb'" class="demo-box">
                <OgBreadcrumb :model="breadcrumbs" />
              </div>

              <!-- OgSplitter Demo -->
              <div v-else-if="activeComponent.id === 'splitter'" class="demo-box" style="width: 24rem; height: 10rem;">
                <OgSplitter>
                  <OgSplitterPanel :size="40">
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%;">Pannello A</div>
                  </OgSplitterPanel>
                  <OgSplitterPanel :size="60">
                    <div style="display: flex; align-items: center; justify-content: center; height: 100%;">Pannello B</div>
                  </OgSplitterPanel>
                </OgSplitter>
              </div>

              <!-- OgToolbar Demo -->
              <div v-else-if="activeComponent.id === 'toolbar'" class="demo-box" style="width: 100%; max-width: 32rem;">
                <OgToolbar>
                  <template #start>
                    <OgButton label="Nuovo" size="small" severity="success" />
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
              <OgButton
                :label="copiedCode ? '✓ Copiato!' : 'Copia Codice'"
                :severity="copiedCode ? 'success' : 'secondary'"
                variant="outlined"
                size="small"
                @click="copyCodeSnippet"
              />
            </div>
            <pre class="code-block"><code>{{ activeComponent.defaultCode }}</code></pre>
          </div>
        </section>

        <!-- Tab 3: Props & API (Using OgDataTable) -->
        <section v-show="activeTab === 'props'" class="tab-panel">
          <div class="table-card">
            <OgDataTable :value="activeComponent.props" stripedRows>
              <OgColumn field="name" header="Prop">
                <template #body="{ data }">
                  <OgTag :value="data.name" severity="primary" />
                </template>
              </OgColumn>
              <OgColumn field="type" header="Tipo">
                <template #body="{ data }">
                  <code class="type-code">{{ data.type }}</code>
                </template>
              </OgColumn>
              <OgColumn field="default" header="Default">
                <template #body="{ data }">
                  <code class="default-code">{{ data.default }}</code>
                </template>
              </OgColumn>
              <OgColumn field="description" header="Descrizione" />
            </OgDataTable>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { componentsData, type ComponentDoc } from './componentsData';
import OgLogo from './OgLogo.vue';
import WelcomeView from './WelcomeView.vue';
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

// Theme Presets Raw CSS
import darkThemeCss from '../src/theme/presets/dark.css?raw';
import indigoThemeCss from '../src/theme/presets/indigo.css?raw';
import obsidianVioletThemeCss from '../src/theme/presets/obsidian-violet.css?raw';

// Themes configuration
const themeOptions = [
  { label: 'Default (Light)', value: 'default', color: '#6366f1', css: '' },
  { label: 'Dark Slate', value: 'dark', color: '#38bdf8', css: darkThemeCss },
  { label: 'Indigo Modern', value: 'indigo', color: '#4f46e5', css: indigoThemeCss },
  { label: 'Obsidian & Violet', value: 'obsidian-violet', color: '#7F23FF', css: obsidianVioletThemeCss },
];

const selectedTheme = ref('default');

const getThemeColor = (val: any) => {
  if (val && typeof val === 'object') return val.color || '#6366f1';
  return themeOptions.find((t) => t.value === val)?.color || '#6366f1';
};

const getThemeLabel = (val: any) => {
  if (val && typeof val === 'object') return val.label || '';
  return themeOptions.find((t) => t.value === val)?.label || String(val || '');
};

const applyTheme = (themeKey: string) => {
  let styleEl = document.getElementById('optimus-theme-preset-style') as HTMLStyleElement | null;
  if (!styleEl) {
    styleEl = document.createElement('style');
    styleEl.id = 'optimus-theme-preset-style';
    document.head.appendChild(styleEl);
  }
  const themeObj = themeOptions.find((t) => t.value === themeKey);
  styleEl.textContent = themeObj ? themeObj.css : '';

  document.documentElement.setAttribute('data-theme', themeKey);
};

watch(selectedTheme, (newVal) => {
  applyTheme(newVal);
});

// Navigation View State
const currentView = ref<'welcome' | 'showcase'>('welcome');

const setView = (view: 'welcome' | 'showcase') => {
  currentView.value = view;
  if (view === 'welcome') {
    window.location.hash = '#/';
  } else {
    window.location.hash = `#/components/${activeComponent.value.id}`;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const onExploreCategory = (categoryName: string) => {
  const match = componentsData.find((c) => c.category === categoryName);
  if (match) {
    activeComponent.value = match;
  }
  setView('showcase');
};

const handleHashChange = () => {
  const hash = window.location.hash;
  if (hash.startsWith('#/components')) {
    currentView.value = 'showcase';
    const parts = hash.split('/');
    if (parts.length >= 3 && parts[2]) {
      const compId = parts[2];
      const match = componentsData.find((c) => c.id === compId);
      if (match) activeComponent.value = match;
    }
  } else {
    currentView.value = 'welcome';
  }
};

onMounted(() => {
  applyTheme(selectedTheme.value);
  handleHashChange();
  window.addEventListener('hashchange', handleHashChange);
});

onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange);
});

const openExternal = (url: string) => {
  window.open(url, '_blank');
};

// Tabs configuration
const tabOptions = computed(() => [
  { label: '🎯 Live Playground', value: 'preview' },
  { label: '💻 Codice Esempio', value: 'code' },
  { label: `📋 Props & API (${activeComponent.value.props.length})`, value: 'props' },
]);

const activeTab = ref<'preview' | 'code' | 'props'>('preview');
const searchQuery = ref('');
const activeComponent = ref<ComponentDoc>(componentsData[0]);

watch(activeComponent, (newComp) => {
  if (currentView.value === 'showcase' && newComp) {
    window.location.hash = `#/components/${newComp.id}`;
  }
});

const copiedCode = ref(false);
const copiedImport = ref(false);

const toast = useToast();

const sendToast = (severity: 'success' | 'info' | 'error', summary: string, detail: string) => {
  toast.add({ severity, summary, detail, life: 3000 });
};

const copyImport = () => {
  navigator.clipboard.writeText(`import { ${activeComponent.value.name} } from '@danielippo/optimus-gui';`);
  copiedImport.value = true;
  setTimeout(() => {
    copiedImport.value = false;
  }, 2000);
};

const copyCodeSnippet = () => {
  navigator.clipboard.writeText(activeComponent.value.defaultCode);
  copiedCode.value = true;
  setTimeout(() => {
    copiedCode.value = false;
  }, 2000);
};

// Controls Options
const btnVariantOptions = [
  { label: 'Filled (Default)', value: undefined },
  { label: 'Outlined', value: 'outlined' },
  { label: 'Text', value: 'text' },
  { label: 'Link', value: 'link' },
];

const sizeOptions = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' },
];

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
</script>

<style scoped>
.explorer-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: var(--og-font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  color: var(--og-text-primary, #0f172a);
  background-color: var(--og-bg-body, #f8fafc);
  transition: background-color 0.25s ease, color 0.25s ease;
}

/* Top Navbar */
.top-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  padding: 0 1.75rem;
  background-color: var(--og-bg-surface, #ffffff);
  border-bottom: 1px solid var(--og-border-color, #e2e8f0);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
}

.top-navbar__left {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.top-navbar__logo {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.15s ease;
}

.top-navbar__logo:hover {
  opacity: 0.85;
}

.top-navbar__title {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--og-text-primary, #0f172a);
}

.top-navbar__nav-links {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  margin-left: 0.75rem;
}

.top-navbar__nav-btn {
  background: none;
  border: none;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--og-text-secondary, #475569);
  padding: 0.4rem 0.85rem;
  border-radius: var(--og-radius-md, 6px);
  cursor: pointer;
  transition: all 0.15s ease;
}

.top-navbar__nav-btn:hover {
  background-color: var(--og-bg-muted, #f1f5f9);
  color: var(--og-text-primary, #0f172a);
}

.top-navbar__nav-btn--active {
  background-color: var(--og-bg-muted, #e2e8f0);
  color: var(--og-color-primary-500, #4f46e5);
  font-weight: 600;
}

.top-navbar__tagline {
  font-size: 0.85rem;
  color: var(--og-text-muted, #64748b);
  border-left: 1px solid var(--og-border-color, #e2e8f0);
  padding-left: 0.85rem;
  margin-left: 0.25rem;
  display: none;
}

@media (min-width: 900px) {
  .top-navbar__tagline {
    display: inline-block;
  }
}

.top-navbar__right {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.top-navbar__theme-wrap {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.top-navbar__actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.top-navbar__theme-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--og-text-secondary, #475569);
  white-space: nowrap;
}

.theme-select-option {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
  overflow: hidden;
}

.theme-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15);
}

.theme-text {
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Explorer Body */
.explorer-body {
  display: flex;
  flex: 1;
}

/* Sidebar Styles */
.sidebar {
  width: 19rem;
  background-color: var(--og-bg-surface, #ffffff);
  border-right: 1px solid var(--og-border-color, #e2e8f0);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  position: sticky;
  top: 4rem;
  height: calc(100vh - 4rem);
}

.sidebar__search-wrap {
  padding: 1rem 1.25rem 0.5rem;
}

.sidebar__nav {
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem 1rem 2rem;
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
  color: var(--og-text-muted, #64748b);
  margin-bottom: 0.4rem;
  padding: 0 0.5rem;
}

.sidebar__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.sidebar__item {
  padding: 0.5rem 0.75rem;
  margin: 0.125rem 0;
  border-radius: var(--og-radius-md, 8px);
  font-size: 0.875rem;
  color: var(--og-text-secondary, #334155);
  cursor: pointer;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
}

.sidebar__item:hover {
  background-color: var(--og-bg-subtle, #f1f5f9);
  color: var(--og-text-primary, #0f172a);
}

.sidebar__item--active {
  background-color: var(--og-color-primary-50, #eef2ff) !important;
  color: var(--og-color-primary-600, #4338ca) !important;
  font-weight: 600;
  border-left: 3px solid var(--og-color-primary-500, #4f46e5);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

[data-theme='dark'] .sidebar__item--active,
[data-theme='obsidian-violet'] .sidebar__item--active {
  background-color: var(--og-color-primary-500) !important;
  color: var(--og-color-primary-contrast, #ffffff) !important;
  border-left: none;
  border-radius: var(--og-radius-md, 8px);
}

.sidebar__empty {
  font-size: 0.875rem;
  color: var(--og-text-muted, #94a3b8);
  padding: 1rem 0.5rem;
  text-align: center;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  padding: 2.5rem 3.5rem;
  max-width: 1160px;
  box-sizing: border-box;
}

.content-header {
  margin-bottom: 1.75rem;
}

.content-header__top-row {
  margin-bottom: 0.6rem;
}

.content-header__title {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--og-text-primary, #0f172a);
  margin: 0 0 0.5rem;
  letter-spacing: -0.03em;
}

.content-header__desc {
  font-size: 1.05rem;
  color: var(--og-text-secondary, #475569);
  margin: 0 0 1rem;
  line-height: 1.6;
}

.quick-import-card {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  background-color: var(--og-bg-subtle, #f1f5f9);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-md, 8px);
  padding: 0.4rem 0.85rem;
}

.quick-import-label {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--og-text-muted, #64748b);
  letter-spacing: 0.05em;
}

.quick-import-code {
  font-family: 'Fira Code', Consolas, monospace;
  font-size: 0.85rem;
  color: var(--og-color-primary-500, #4f46e5);
}

.content-tabs-wrap {
  margin-bottom: 1.75rem;
}

/* Preview Card */
.preview-card {
  background-color: var(--og-bg-surface, #ffffff);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-lg, 12px);
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.preview-card__header {
  padding: 0.75rem 1.25rem;
  background-color: var(--og-bg-subtle, #f8fafc);
  border-bottom: 1px solid var(--og-border-color, #e2e8f0);
  display: flex;
  align-items: center;
}

.preview-card__tag {
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--og-text-muted, #64748b);
  letter-spacing: 0.05em;
}

.preview-card__canvas {
  padding: 2.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15rem;
  background-image: radial-gradient(var(--og-border-color, #e2e8f0) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Demo Box Internals */
.demo-box {
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
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

.demo-controls-panel {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  padding: 0.85rem 1.25rem;
  background-color: var(--og-bg-subtle, #f8fafc);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-md, 8px);
}

.demo-control-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.demo-control-label {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--og-text-secondary, #475569);
}

.demo-field {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

.demo-field-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--og-text-secondary, #475569);
}

.demo-val-badge {
  font-size: 0.825rem;
  color: var(--og-text-secondary, #475569);
  background-color: var(--og-bg-muted, #f1f5f9);
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  border: 1px solid var(--og-border-color, #e2e8f0);
}

.demo-choice {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  color: var(--og-text-secondary, #334155);
}

.demo-radio-group {
  display: flex;
  gap: 1.5rem;
}

.demo-color-preview {
  color: #fff;
  padding: 0.25rem 0.75rem;
  border-radius: 6px;
  font-size: 0.85rem;
  font-family: monospace;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

/* Code Card */
.code-card {
  background-color: var(--og-bg-surface, #ffffff);
  border-radius: var(--og-radius-lg, 12px);
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--og-border-color, #e2e8f0);
}

.code-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.25rem;
  background-color: var(--og-bg-muted, #f1f5f9);
  color: var(--og-text-secondary, #475569);
  font-size: 0.8rem;
  font-family: monospace;
  border-bottom: 1px solid var(--og-border-color, #e2e8f0);
}

.code-block {
  margin: 0;
  padding: 1.5rem;
  overflow-x: auto;
  font-family: 'Fira Code', 'Cascadia Code', Consolas, monospace;
  font-size: 0.875rem;
  color: var(--og-text-primary, #0f172a);
  background-color: var(--og-bg-subtle, #f8fafc);
  line-height: 1.6;
}

/* Table Card */
.table-card {
  background-color: var(--og-bg-surface, #ffffff);
  border: 1px solid var(--og-border-color, #e2e8f0);
  border-radius: var(--og-radius-lg, 12px);
  overflow: hidden;
}

.type-code {
  color: var(--og-color-primary-500, #0284c7);
  font-family: monospace;
  font-size: 0.85rem;
}

.default-code {
  color: var(--og-text-muted, #64748b);
  font-family: monospace;
  font-size: 0.85rem;
}
</style>
