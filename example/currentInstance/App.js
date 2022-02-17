import { h, getCurrentInstance } from "../../lib/light-vue.esm.js";
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
      [
        h("p", { class: "red" }, "hello"),
        h(
          "p",
          {
            class: "blue",
            onClick: () => {
              console.log("click");
            },
          },
          this.msg
        ),
        h(Foo, {
          msg: this.msg,
        }),
      ]
    );
  },
  setup() {
    const instance = getCurrentInstance();
    console.log("App: ", instance);

    return {
      msg: "light-vue!",
    };
  },
};
