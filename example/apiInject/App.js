import { h, createTextVNode, provide } from "../../lib/light-vue.esm.js";
import { Foo } from "./Foo.js";

window.self = null;
export const App = {
  render() {
    window.self = this;
    return h(
      "div",
      {
        id: "root",
        class: "red",
      },
      [createTextVNode("father"), h(Foo)]
    );
  },
  setup() {
    provide("msg", "light-vue!");
    return {};
  },
};
