import { App } from "vue";
// Si se llegan a agregar opciones especiales agregarlas aqui.
// interface MyPluginOptions {
//   // Propiedades de options
// }
import { default as LiteTable } from "./components/LiteTable.vue";
import { default as SButtonCheck } from "./components/ScsiaComponents/SButtonCheck.vue";
import { default as SDatePicker } from "./components/ScsiaComponents/SDatePicker.vue";
import { default as Overlay } from "./components/ScsiaComponents/Overlay.vue";
import { default as SRadioButtons } from "./components/ScsiaComponents/SRadioButtons.vue";
import { default as STabs } from "./components/ScsiaComponents/STabs.vue";
import { default as SUnderTabs } from "./components/ScsiaComponents/SUnderTabs.vue";
import { default as SSearcher } from "./components/ScsiaComponents/SSearcher.vue";
import { default as SSelector } from "./components/ScsiaComponents/SSelector.vue";

import "./styles/styles.css";
export * from './types';

export {
  LiteTable,
  SButtonCheck,
  SDatePicker,
  Overlay,
  SRadioButtons,
  STabs,
  SUnderTabs,
  SSearcher,
  SSelector,
};

export default function vue_mega_blocks(app: App): void {
  app.component("LiteTable", LiteTable);
  app.component("SButtonCheck", SButtonCheck);
  app.component("SDatePicker", SDatePicker);
  app.component("Overlay", Overlay);
  app.component("SRadioButtons", SRadioButtons);
  app.component("STabs", STabs);
  app.component("SUnderTabs", SUnderTabs);
  app.component("SSearcher", SSearcher);
  app.component("SSelector", SSelector);
}
