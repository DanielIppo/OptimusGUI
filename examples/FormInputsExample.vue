<template>
  <section class="example-section">
    <h2>Form & Input Components</h2>

    <div class="example-grid">
      <!-- InputText -->
      <div class="field">
        <label>InputText:</label>
        <OgInputText v-model="textValue" placeholder="Enter name..." />
      </div>

      <!-- Textarea -->
      <div class="field">
        <label>Textarea (AutoResize):</label>
        <OgTextarea v-model="textareaValue" autoResize placeholder="Enter message..." />
      </div>

      <!-- InputNumber -->
      <div class="field">
        <label>InputNumber:</label>
        <OgInputNumber v-model="numberValue" showButtons :min="0" :max="100" />
      </div>

      <!-- Checkbox -->
      <div class="field">
        <label>Checkbox:</label>
        <OgCheckbox v-model="checkboxValue" binary /> Accept terms
      </div>

      <!-- RadioButton -->
      <div class="field">
        <label>RadioButton:</label>
        <OgRadioButton v-model="radioValue" value="option1" /> Option 1
        <OgRadioButton v-model="radioValue" value="option2" /> Option 2
      </div>

      <!-- ToggleSwitch -->
      <div class="field">
        <label>ToggleSwitch:</label>
        <OgToggleSwitch v-model="switchValue" />
      </div>

      <!-- Select / Dropdown -->
      <div class="field">
        <label>Select / Dropdown:</label>
        <OgSelect v-model="selectedCity" :options="cities" placeholder="Select City" showClear />
      </div>

      <!-- MultiSelect -->
      <div class="field">
        <label>MultiSelect:</label>
        <OgMultiSelect v-model="selectedCountries" :options="countries" placeholder="Select Countries" />
      </div>

      <!-- AutoComplete -->
      <div class="field">
        <label>AutoComplete:</label>
        <OgAutoComplete v-model="autoCompleteValue" :suggestions="filteredTech" @complete="searchTech" placeholder="Search tech..." />
      </div>

      <!-- Password -->
      <div class="field">
        <label>Password:</label>
        <OgPassword v-model="passwordValue" toggleMask placeholder="Enter password" />
      </div>

      <!-- DatePicker -->
      <div class="field">
        <label>DatePicker:</label>
        <OgDatePicker v-model="dateValue" />
      </div>

      <!-- ColorPicker -->
      <div class="field">
        <label>ColorPicker:</label>
        <OgColorPicker v-model="colorValue" />
      </div>

      <!-- Slider -->
      <div class="field">
        <label>Slider ({{ sliderValue }}):</label>
        <OgSlider v-model="sliderValue" :min="0" :max="100" />
      </div>

      <!-- Rating -->
      <div class="field">
        <label>Rating:</label>
        <OgRating v-model="ratingValue" />
      </div>

      <!-- InputOtp -->
      <div class="field">
        <label>InputOtp:</label>
        <OgInputOtp v-model="otpValue" :length="4" integerOnly />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {
  OgInputText,
  OgTextarea,
  OgInputNumber,
  OgCheckbox,
  OgRadioButton,
  OgToggleSwitch,
  OgSelect,
  OgMultiSelect,
  OgAutoComplete,
  OgPassword,
  OgDatePicker,
  OgColorPicker,
  OgSlider,
  OgRating,
  OgInputOtp,
} from '../src';

const textValue = ref('');
const textareaValue = ref('');
const numberValue = ref(10);
const checkboxValue = ref(true);
const radioValue = ref('option1');
const switchValue = ref(true);
const selectedCity = ref(null);
const selectedCountries = ref([]);
const autoCompleteValue = ref('');
const passwordValue = ref('');
const dateValue = ref(null);
const colorValue = ref('#0f172a');
const sliderValue = ref(50);
const ratingValue = ref(4);
const otpValue = ref('');

const cities = [
  { label: 'Rome', value: 'RM' },
  { label: 'Milan', value: 'MI' },
  { label: 'Naples', value: 'NA' },
];

const countries = [
  { label: 'Italy', value: 'IT' },
  { label: 'France', value: 'FR' },
  { label: 'Spain', value: 'ES' },
  { label: 'Germany', value: 'DE' },
];

const techStack = ['Vue.js', 'Vite', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind'];
const filteredTech = ref<string[]>([]);

const searchTech = (e: { query: string }) => {
  filteredTech.value = techStack.filter((t) => t.toLowerCase().includes(e.query.toLowerCase()));
};
</script>

<style scoped>
.example-section {
  margin-bottom: 2rem;
}
.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-family: sans-serif;
  font-size: 0.875rem;
}
</style>
