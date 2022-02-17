import { h } from "../../lib/light-vue.esm.js";

export const Foo = {
  setup(props) {},
  render() {
    const foo = h("p", {}, "children: " + this.msg + " count: " + this.count);
    return h("div", {}, [foo]);
  },
};
