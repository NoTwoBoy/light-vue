import { h } from "../../lib/light-vue.esm.js";

export const Foo = {
  setup(props, { emit }) {
    console.log(props);
    const emitClick = () => {
      emit("emit-click", "children click");
    };

    return { emitClick };
  },
  render() {
    const btn = h(
      "button",
      {
        onClick: this.emitClick,
      },
      "emitClick"
    );
    const foo = h("p", {}, "children: " + this.msg);
    return h("div", {}, [foo, btn]);
  },
};
