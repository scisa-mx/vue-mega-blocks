import { App } from "vue";
// Si se llegan a agregar opciones especiales agregarlas aqui.
// interface MyPluginOptions {
//   // Propiedades de options
// }
import LiteTable from "./components/LiteTable.vue";
import SButtonCheck from "./components/ScsiaComponents/SButtonCheck.vue";
import SDatePicker from "./components/ScsiaComponents/SDatePicker.vue";
import Overlay from "./components/ScsiaComponents/Overlay.vue";
import SRadioButtons from "./components/ScsiaComponents/SRadioButtons.vue";
import STabs from "./components/ScsiaComponents/STabs.vue";
import SUnderTabs from "./components/ScsiaComponents/SUnderTabs.vue";
import SSearcher from "./components/ScsiaComponents/SSearcher.vue";
import SSelector from "./components/ScsiaComponents/SSelector.vue";

export {
  LiteTable,
  SButtonCheck,
  SDatePicker,
  Overlay,
  SRadioButtons,
  STabs,
  SUnderTabs,
  SSearcher,
  SSelector
};

export default function vue_mega_blocks(app: App): void {
  app.component('LiteTable', LiteTable);
  app.component('SButtonCheck', SButtonCheck);
  app.component('SDatePicker', SDatePicker);
  app.component('Overlay', Overlay);
  app.component('SRadioButtons', SRadioButtons);
  app.component('STabs', STabs);
  app.component('SUnderTabs', SUnderTabs);
  app.component('SSearcher', SSearcher);
  app.component('SSelector', SSelector);
}