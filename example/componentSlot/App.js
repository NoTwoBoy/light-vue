import { h, createTextVNode } from "../../lib/light-vue.esm.js";
import { Foo } from "./Foo.js";

export const App = {
  name: "App",
  render() {
    const app = h("div", {}, "App");
    const foo = h(
      Foo,
      {},
      {
        header: ({ scopeProp }) => [
          h("p", {}, scopeProp + "header slot"),
          createTextVNode("文本节点"),
        ],
        footer: () => h("p", {}, "footer slot"),
      }
    );

    return h("div", {}, [app, foo]);
  },
  setup() {
    return {};
  },
};
