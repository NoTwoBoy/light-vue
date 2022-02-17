import { h } from "../../lib/light-vue.esm.js";
import { Foo } from "./Foo.js";

export const App = {
  render() {
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
          onEmitClick(msg) {
            console.log(msg);
          },
        }),
      ]
    );
  },
  setup() {
    return {
      msg: "light-vue!",
    };
  },
};
