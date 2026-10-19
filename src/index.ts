import type { App, Plugin } from 'vue';
import './theme/index.css';

// Components
import OgButton from './components/button/OgButton.vue';
import OgInputText from './components/inputtext/OgInputText.vue';
import OgTextarea from './components/textarea/OgTextarea.vue';
import OgCheckbox from './components/checkbox/OgCheckbox.vue';
import OgRadioButton from './components/radiobutton/OgRadioButton.vue';
import OgToggleSwitch from './components/toggleswitch/OgToggleSwitch.vue';
import OgInputNumber from './components/inputnumber/OgInputNumber.vue';
import OgSelect from './components/select/OgSelect.vue';
import OgCard from './components/card/OgCard.vue';
import OgDialog from './components/dialog/OgDialog.vue';
import OgToast from './components/toast/OgToast.vue';
import OgDataTable from './components/datatable/OgDataTable.vue';
import OgColumn from './components/datatable/OgColumn.vue';
import OgAvatar from './components/avatar/OgAvatar.vue';
import OgBadge from './components/badge/OgBadge.vue';
import OgProgressBar from './components/progressbar/OgProgressBar.vue';
import OgSkeleton from './components/skeleton/OgSkeleton.vue';
import OgDivider from './components/divider/OgDivider.vue';
import OgAccordion from './components/accordion/OgAccordion.vue';
import OgAccordionTab from './components/accordion/OgAccordionTab.vue';
import OgTabs from './components/tabs/OgTabs.vue';
import OgTabPanel from './components/tabs/OgTabPanel.vue';
import OgTag from './components/tag/OgTag.vue';
import OgChip from './components/chip/OgChip.vue';
import OgMessage from './components/message/OgMessage.vue';
import OgDrawer from './components/drawer/OgDrawer.vue';
import OgSlider from './components/slider/OgSlider.vue';
import OgRating from './components/rating/OgRating.vue';
import OgInputOtp from './components/inputotp/OgInputOtp.vue';
import OgMenu from './components/menu/OgMenu.vue';
import OgBreadcrumb from './components/breadcrumb/OgBreadcrumb.vue';
import OgAutoComplete from './components/autocomplete/OgAutoComplete.vue';
import OgPassword from './components/password/OgPassword.vue';
import OgMultiSelect from './components/multiselect/OgMultiSelect.vue';
import OgDatePicker from './components/datepicker/OgDatePicker.vue';
import OgColorPicker from './components/colorpicker/OgColorPicker.vue';
import OgListbox from './components/listbox/OgListbox.vue';
import OgSelectButton from './components/selectbutton/OgSelectButton.vue';
import OgToggleButton from './components/togglebutton/OgToggleButton.vue';
import OgFloatLabel from './components/floatlabel/OgFloatLabel.vue';
import OgInputGroup from './components/inputgroup/OgInputGroup.vue';
import OgInputGroupAddon from './components/inputgroup/OgInputGroupAddon.vue';
import OgPanel from './components/panel/OgPanel.vue';
import OgToolbar from './components/toolbar/OgToolbar.vue';
import OgSplitter from './components/splitter/OgSplitter.vue';
import OgSplitterPanel from './components/splitter/OgSplitterPanel.vue';
import OgTree from './components/tree/OgTree.vue';
import OgStepper from './components/stepper/OgStepper.vue';

// Directives
import { vOgTooltip } from './directives/vTooltip';
import { vOgRipple } from './directives/vRipple';

// Types Export
export * from './types';

// Component Exports
export * from './components/button';
export * from './components/inputtext';
export * from './components/textarea';
export * from './components/checkbox';
export * from './components/radiobutton';
export * from './components/toggleswitch';
export * from './components/inputnumber';
export * from './components/select';
export * from './components/card';
export * from './components/dialog';
export * from './components/toast';
export * from './components/datatable';
export * from './components/avatar';
export * from './components/badge';
export * from './components/progressbar';
export * from './components/skeleton';
export * from './components/divider';
export * from './components/accordion';
export * from './components/tabs';
export * from './components/tag';
export * from './components/chip';
export * from './components/message';
export * from './components/drawer';
export * from './components/slider';
export * from './components/rating';
export * from './components/inputotp';
export * from './components/menu';
export * from './components/breadcrumb';
export * from './components/autocomplete';
export * from './components/password';
export * from './components/multiselect';
export * from './components/datepicker';
export * from './components/colorpicker';
export * from './components/listbox';
export * from './components/selectbutton';
export * from './components/togglebutton';
export * from './components/floatlabel';
export * from './components/inputgroup';
export * from './components/panel';
export * from './components/toolbar';
export * from './components/splitter';
export * from './components/tree';
export * from './components/stepper';

// Composables Exports
export * from './composables/useSelect';
export * from './composables/useDialog';
export * from './composables/useToast';
export * from './composables/useDataTable';

// Directives Exports
export * from './directives';

// Global Plugin Component Registry
const components: Record<string, any> = {
  OgButton,
  OgInputText,
  OgTextarea,
  OgCheckbox,
  OgRadioButton,
  OgToggleSwitch,
  OgInputNumber,
  OgSelect,
  OgCard,
  OgDialog,
  OgToast,
  OgDataTable,
  OgColumn,
  OgAvatar,
  OgBadge,
  OgProgressBar,
  OgSkeleton,
  OgDivider,
  OgAccordion,
  OgAccordionTab,
  OgTabs,
  OgTabPanel,
  OgTag,
  OgChip,
  OgMessage,
  OgDrawer,
  OgSlider,
  OgRating,
  OgInputOtp,
  OgMenu,
  OgBreadcrumb,
  OgAutoComplete,
  OgPassword,
  OgMultiSelect,
  OgDatePicker,
  OgColorPicker,
  OgListbox,
  OgSelectButton,
  OgToggleButton,
  OgFloatLabel,
  OgInputGroup,
  OgInputGroupAddon,
  OgPanel,
  OgToolbar,
  OgSplitter,
  OgSplitterPanel,
  OgTree,
  OgStepper,
};

/**
 * OptimusGUI Plugin for Vue 3
 * Allows installing the entire component library via `app.use(OptimusGUI)`
 */
export const OptimusGUI: Plugin = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });

    app.directive('og-tooltip', vOgTooltip);
    app.directive('og-ripple', vOgRipple);
  },
};

export default OptimusGUI;
