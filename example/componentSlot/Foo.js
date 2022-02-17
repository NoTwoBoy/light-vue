import { h, renderSlots } from "../../lib/light-vue.esm.js";

export const Foo = {
  setup() {},
  render() {
    const foo = h("p", {}, "children");
    const scopeProp = "slot scope ";

    return h("div", {}, [
      renderSlots(this.$slots, "header", { scopeProp }),
      foo,
      renderSlots(this.$slots, "footer"),
    ]);
  },
};
