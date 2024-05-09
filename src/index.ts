import { App } from "vue";
import LiteTable from "./components/LiteTable.vue";
// Si se llegan a agregar opciones especiales agregarlas aqui.
// interface MyPluginOptions {
//   // Propiedades de options
// }

export default function swaggerValidationsNext(app: App): void {
  app.component('LiteTable', LiteTable);
}