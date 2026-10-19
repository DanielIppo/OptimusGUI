export interface PropDefinition {
  name: string;
  type: string;
  default: string;
  description: string;
}

export interface ComponentDoc {
  id: string;
  name: string;
  category: 'General' | 'Form & Inputs' | 'Data Display' | 'Overlays & Feedback' | 'Navigation & Layout';
  description: string;
  props: PropDefinition[];
  defaultCode: string;
}

export const componentsData: ComponentDoc[] = [
  {
    id: 'button',
    name: 'OgButton',
    category: 'General',
    description: 'Pulsante polifunzionale ad alte prestazioni con supporto per varianti, severities, icone, badge e stato di caricamento.',
    props: [
      { name: 'label', type: 'string', default: "''", description: 'Testo etichetta del pulsante.' },
      { name: 'severity', type: "'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'", default: "'primary'", description: 'Colore semantico del pulsante.' },
      { name: 'variant', type: "'outlined' | 'text' | 'link'", default: 'undefined', description: 'Variante grafica (contorno, testo o link).' },
      { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: 'Dimensione del pulsante.' },
      { name: 'raised', type: 'boolean', default: 'false', description: 'Aggiunge un effetto ombreggiatura elevata.' },
      { name: 'rounded', type: 'boolean', default: 'false', description: 'Arrotonda completamente i bordi a pillola.' },
      { name: 'loading', type: 'boolean', default: 'false', description: 'Mostra lo spinner animato di caricamento.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabilita le interazioni utente.' },
      { name: 'badge', type: 'string | number', default: 'undefined', description: 'Valore del badge integrato nel pulsante.' },
      { name: 'badgeSeverity', type: 'OgSeverity', default: "'primary'", description: 'Colore semantico del badge.' },
      { name: 'fluid', type: 'boolean', default: 'false', description: 'Occupa il 100% della larghezza del contenitore.' },
    ],
    defaultCode: `<OgButton label="Conferma" severity="primary" @click="handleClick" />
<OgButton label="Salva" severity="success" variant="outlined" />
<OgButton label="In attesa" loading severity="info" />`,
  },
  {
    id: 'inputtext',
    name: 'OgInputText',
    category: 'Form & Inputs',
    description: 'Campo di testo minimale con gestione automatica di focus ring, validità e dimensioni.',
    props: [
      { name: 'modelValue', type: 'string', default: "''", description: 'Valore collegato tramite v-model.' },
      { name: 'placeholder', type: 'string', default: "''", description: 'Testo segnaposto.' },
      { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: 'Dimensione del campo input.' },
      { name: 'invalid', type: 'boolean', default: 'false', description: 'Applica lo stile di validazione fallita.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabilita il campo.' },
      { name: 'fluid', type: 'boolean', default: 'false', description: 'Larghezza al 100%.' },
    ],
    defaultCode: `<OgInputText v-model="username" placeholder="Inserisci username..." />`,
  },
  {
    id: 'inputnumber',
    name: 'OgInputNumber',
    category: 'Form & Inputs',
    description: 'Input numerico avanzato con clamp automatico di min e max in digitazione, tasti stepper e prefisso/suffisso.',
    props: [
      { name: 'modelValue', type: 'number | null', default: 'null', description: 'Valore numerico v-model.' },
      { name: 'min', type: 'number', default: 'undefined', description: 'Valore minimo consentito (clampato istantaneamente).' },
      { name: 'max', type: 'number', default: 'undefined', description: 'Valore massimo consentito (clampato istantaneamente).' },
      { name: 'step', type: 'number', default: '1', description: 'Passo di incremento/decremento.' },
      { name: 'showButtons', type: 'boolean', default: 'false', description: 'Mostra i tasti di incremento e decremento.' },
      { name: 'buttonLayout', type: "'stacked' | 'horizontal'", default: "'stacked'", description: 'Disposizione dei pulsanti.' },
      { name: 'prefix', type: 'string', default: "''", description: 'Prefisso anteposto al numero (es. € o $).' },
      { name: 'suffix', type: 'string', default: "''", description: 'Suffisso posposto al numero (es. % o kg).' },
    ],
    defaultCode: `<OgInputNumber v-model="quantity" :min="0" :max="100" showButtons />`,
  },
  {
    id: 'datepicker',
    name: 'OgDatePicker',
    category: 'Form & Inputs',
    description: 'Selettore data moderno e minimale con calendario popover personalizzato, navigazione mese/anno e azioni rapide.',
    props: [
      { name: 'modelValue', type: 'Date | string | null', default: 'null', description: 'Data selezionata collegata via v-model.' },
      { name: 'placeholder', type: 'string', default: "'Select a date'", description: 'Testo segnaposto del trigger.' },
      { name: 'showClear', type: 'boolean', default: 'true', description: 'Pulsante per cancellare rapidamente la data.' },
      { name: 'minDate', type: 'Date', default: 'undefined', description: 'Data minima selezionabile.' },
      { name: 'maxDate', type: 'Date', default: 'undefined', description: 'Data massima selezionabile.' },
      { name: 'fluid', type: 'boolean', default: 'false', description: 'Adatta la larghezza al contenitore genitore.' },
    ],
    defaultCode: `<OgDatePicker v-model="selectedDate" placeholder="Scegli una data..." showClear />`,
  },
  {
    id: 'select',
    name: 'OgSelect',
    category: 'Form & Inputs',
    description: 'Menu a tendina a selezione singola con filtro di ricerca integrato, gestione vuoti e composable reattivo.',
    props: [
      { name: 'modelValue', type: 'any', default: 'undefined', description: 'Valore selezionato.' },
      { name: 'options', type: 'any[]', default: '[]', description: 'Array di opzioni (oggetti o primitive).' },
      { name: 'optionLabel', type: 'string', default: "'label'", description: 'Nome della proprietà per il testo visibile.' },
      { name: 'optionValue', type: 'string', default: "'value'", description: 'Nome della proprietà per il valore associato.' },
      { name: 'filter', type: 'boolean', default: 'false', description: 'Abilita il campo di ricerca interno.' },
      { name: 'showClear', type: 'boolean', default: 'false', description: 'Mostra icona per resettare la selezione.' },
      { name: 'placeholder', type: 'string', default: "'Select an option'", description: 'Testo quando nessun valore è selezionato.' },
    ],
    defaultCode: `<OgSelect
  v-model="selectedCity"
  :options="cities"
  optionLabel="name"
  optionValue="code"
  placeholder="Seleziona Città"
  filter
  showClear
/>`,
  },
  {
    id: 'multiselect',
    name: 'OgMultiSelect',
    category: 'Form & Inputs',
    description: 'Menu a tendina a selezione multipla con checkbox OptimusGUI integrati e chiusura click-outside.',
    props: [
      { name: 'modelValue', type: 'any[]', default: '[]', description: 'Array di valori selezionati.' },
      { name: 'options', type: 'any[]', default: '[]', description: 'Lista delle opzioni disponibili.' },
      { name: 'optionLabel', type: 'string', default: "'label'", description: 'Proprietà per l’etichetta testuale.' },
      { name: 'optionValue', type: 'string', default: "'value'", description: 'Proprietà per il valore.' },
      { name: 'placeholder', type: 'string', default: "'Select items'", description: 'Segnaposto prima della selezione.' },
    ],
    defaultCode: `<OgMultiSelect
  v-model="selectedSkills"
  :options="skills"
  placeholder="Seleziona competenze..."
/>`,
  },
  {
    id: 'checkbox',
    name: 'OgCheckbox',
    category: 'Form & Inputs',
    description: 'Casella di spunta minimalista e perfettamente quadrata (anti-deformazione flex) con supporto binario o multiplo.',
    props: [
      { name: 'modelValue', type: 'any', default: 'false', description: 'Stato v-model (boolean o array di valori).' },
      { name: 'value', type: 'any', default: 'undefined', description: 'Valore associato in caso di array multiplo.' },
      { name: 'binary', type: 'boolean', default: 'true', description: 'Modalità booleana pura (true/false).' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabilita il checkbox.' },
      { name: 'invalid', type: 'boolean', default: 'false', description: 'Bordo di errore/validazione fallita.' },
    ],
    defaultCode: `<OgCheckbox v-model="acceptTerms" binary /> Accetto i termini e condizioni`,
  },
  {
    id: 'radiobutton',
    name: 'OgRadioButton',
    category: 'Form & Inputs',
    description: 'Pulsante radio perfettamente circolare (aspect-ratio 1:1 rigoroso) per scelte mutualmente esclusive.',
    props: [
      { name: 'modelValue', type: 'any', default: 'undefined', description: 'Valore correntemente selezionato.' },
      { name: 'value', type: 'any', default: 'undefined', description: 'Valore assegnato a questo specifico radio.' },
      { name: 'name', type: 'string', default: 'undefined', description: 'Nome del gruppo radio.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabilita il componente.' },
    ],
    defaultCode: `<OgRadioButton v-model="plan" value="free" name="planGroup" /> Piano Gratuito
<OgRadioButton v-model="plan" value="pro" name="planGroup" /> Piano Professional`,
  },
  {
    id: 'toggleswitch',
    name: 'OgToggleSwitch',
    category: 'Form & Inputs',
    description: 'Interruttore a cursore moderno (iOS/shadcn style) per stati on/off immediati.',
    props: [
      { name: 'modelValue', type: 'boolean', default: 'false', description: 'Stato attivo/disattivo v-model.' },
      { name: 'disabled', type: 'boolean', default: 'false', description: 'Disabilita il toggle.' },
    ],
    defaultCode: `<OgToggleSwitch v-model="notificationsEnabled" />`,
  },
  {
    id: 'slider',
    name: 'OgSlider',
    category: 'Form & Inputs',
    description: 'Barra cursore per selezione intervalli numerici con supporto a click, trascinamento mouse e touch drag fluido.',
    props: [
      { name: 'modelValue', type: 'number', default: '0', description: 'Valore attuale v-model.' },
      { name: 'min', type: 'number', default: '0', description: 'Valore minimo del cursore.' },
      { name: 'max', type: 'number', default: '100', description: 'Valore massimo del cursore.' },
      { name: 'step', type: 'number', default: '1', description: 'Incremento a scatti.' },
      { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: 'Orientamento della barra.' },
    ],
    defaultCode: `<OgSlider v-model="volume" :min="0" :max="100" />`,
  },
  {
    id: 'rating',
    name: 'OgRating',
    category: 'Form & Inputs',
    description: 'Componente di valutazione a stelle con opzione di reset/cancellazione e micro-animazioni hover.',
    props: [
      { name: 'modelValue', type: 'number | null', default: '0', description: 'Numero di stelle selezionate.' },
      { name: 'stars', type: 'number', default: '5', description: 'Numero massimo di stelle visualizzate.' },
      { name: 'cancel', type: 'boolean', default: 'true', description: 'Mostra il pulsante di annullamento voto.' },
      { name: 'readonly', type: 'boolean', default: 'false', description: 'Modalità di sola lettura non interattiva.' },
    ],
    defaultCode: `<OgRating v-model="feedbackScore" :stars="5" />`,
  },
  {
    id: 'inputotp',
    name: 'OgInputOtp',
    category: 'Form & Inputs',
    description: 'Input a caselle per codici monouso (OTP) con auto-focus successivo e supporto completo all’incolla (paste).',
    props: [
      { name: 'modelValue', type: 'string', default: "''", description: 'Stringa del codice OTP.' },
      { name: 'length', type: 'number', default: '4', description: 'Numero di cifre richieste.' },
      { name: 'integerOnly', type: 'boolean', default: 'false', description: 'Accetta esclusivamente numeri filtrando lettere.' },
    ],
    defaultCode: `<OgInputOtp v-model="otpCode" :length="6" integerOnly />`,
  },
  {
    id: 'datatable',
    name: 'OgDataTable',
    category: 'Data Display',
    description: 'Tabella dati completa di paginazione, ordinamento colonne, righe alternate (striped) e template personalizzabili.',
    props: [
      { name: 'value', type: 'any[]', default: '[]', description: 'Array dei record da visualizzare.' },
      { name: 'paginator', type: 'boolean', default: 'false', description: 'Abilita la paginazione interna.' },
      { name: 'rows', type: 'number', default: '10', description: 'Numero di righe per pagina.' },
      { name: 'stripedRows', type: 'boolean', default: 'false', description: 'Colorazione alternata delle righe.' },
      { name: 'showGridlines', type: 'boolean', default: 'false', description: 'Mostra i bordi a griglia sulle celle.' },
    ],
    defaultCode: `<OgDataTable :value="users" paginator :rows="5" stripedRows>
  <OgColumn field="id" header="ID" sortable />
  <OgColumn field="name" header="Nome" sortable />
  <OgColumn field="role" header="Ruolo" />
</OgDataTable>`,
  },
  {
    id: 'tree',
    name: 'OgTree',
    category: 'Data Display',
    description: 'Albero gerarchico a profondità arbitraria (N-levels) con icone ed espansione ricorsiva fluida.',
    props: [
      { name: 'value', type: 'TreeNode[]', default: '[]', description: 'Array ad albero con nodi e proprietà children.' },
    ],
    defaultCode: `<OgTree :value="fileTree" />`,
  },
  {
    id: 'card',
    name: 'OgCard',
    category: 'Data Display',
    description: 'Contenitore a scheda con slot per header, titolo, sottotitolo, contenuto e footer.',
    props: [
      { name: 'title', type: 'string', default: "''", description: 'Titolo primario della scheda.' },
      { name: 'subtitle', type: 'string', default: "''", description: 'Sottotitolo secondario.' },
    ],
    defaultCode: `<OgCard title="Pannello Utente" subtitle="Dettagli Account">
  <template #content>
    <p>Benvenuto nella dashboard di controllo.</p>
  </template>
</OgCard>`,
  },
  {
    id: 'dialog',
    name: 'OgDialog',
    category: 'Overlays & Feedback',
    description: 'Finestra modale d’avviso o conferma con backdrop sfocato, chiusura su Escape e click-outside.',
    props: [
      { name: 'visible', type: 'boolean', default: 'false', description: 'Visibilità controllata tramite v-model:visible.' },
      { name: 'header', type: 'string', default: "''", description: 'Titolo dell’intestazione modale.' },
      { name: 'modal', type: 'boolean', default: 'true', description: 'Mostra il backdrop oscurante di blocco pagina.' },
      { name: 'dismissableMask', type: 'boolean', default: 'false', description: 'Chiude la modale cliccando sullo sfondo.' },
      { name: 'closable', type: 'boolean', default: 'true', description: 'Mostra l’icona a croce per chiudere.' },
    ],
    defaultCode: `<OgDialog v-model:visible="isModalOpen" header="Titolo Modale" modal dismissableMask>
  <p>Contenuto della finestra modale.</p>
  <template #footer>
    <OgButton label="Chiudi" variant="text" @click="isModalOpen = false" />
  </template>
</OgDialog>`,
  },
  {
    id: 'drawer',
    name: 'OgDrawer',
    category: 'Overlays & Feedback',
    description: 'Pannello laterale a scorrimento (sinistra, destra, alto, basso o schermo intero).',
    props: [
      { name: 'visible', type: 'boolean', default: 'false', description: 'Stato di apertura v-model:visible.' },
      { name: 'position', type: "'left' | 'right' | 'top' | 'bottom'", default: "'left'", description: 'Lato di ancoraggio dello slider.' },
      { name: 'header', type: 'string', default: "''", description: 'Titolo dell’intestazione del drawer.' },
      { name: 'modal', type: 'boolean', default: 'true', description: 'Mostra backdrop oscurato.' },
    ],
    defaultCode: `<OgDrawer v-model:visible="isDrawerOpen" position="left" header="Menu Navigazione">
  <p>Voci del menu o opzioni di configurazione.</p>
</OgDrawer>`,
  },
  {
    id: 'toast',
    name: 'OgToast',
    category: 'Overlays & Feedback',
    description: 'Sistema di notifiche toast ad apparizione fluttuante gestito programmaticamente con il composable useToast().',
    props: [
      { name: 'position', type: "'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center'", default: "'top-right'", description: 'Posizione di ancoraggio delle notifiche.' },
    ],
    defaultCode: `// Nel template:
<OgToast position="top-right" />

// Nello script:
const toast = useToast();
toast.add({ severity: 'success', summary: 'Ottimo!', detail: 'Operazione completata con successo.', life: 3000 });`,
  },
  {
    id: 'tabs',
    name: 'OgTabs',
    category: 'Navigation & Layout',
    description: 'Navigazione a schede orizzontale con registrazione dinamica e disiscrizione pulita all’unmount.',
    props: [
      { name: 'value', type: 'number', default: '0', description: 'Indice della scheda attualmente attiva.' },
    ],
    defaultCode: `<OgTabs :value="0">
  <OgTabPanel header="Profilo">Contenuto Profilo</OgTabPanel>
  <OgTabPanel header="Impostazioni">Pannello Impostazioni</OgTabPanel>
</OgTabs>`,
  },
  {
    id: 'accordion',
    name: 'OgAccordion',
    category: 'Navigation & Layout',
    description: 'Sezioni comprimibili ed espandibili a fisarmonica con supporto per espansione singola o multipla.',
    props: [
      { name: 'value', type: 'number | number[] | null', default: 'null', description: 'Indice/i dei pannelli aperti.' },
      { name: 'multiple', type: 'boolean', default: 'false', description: 'Consente l’apertura contemporanea di più tab.' },
    ],
    defaultCode: `<OgAccordion :value="0">
  <OgAccordionTab header="Domanda Frequente 1">Risposta 1</OgAccordionTab>
  <OgAccordionTab header="Domanda Frequente 2">Risposta 2</OgAccordionTab>
</OgAccordion>`,
  },
];
