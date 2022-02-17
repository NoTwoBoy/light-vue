import { h } from "../../lib/light-vue.esm.js";

export const Foo = {
  setup(props) {
    console.log(props);
  },
  render() {
    const foo = h("p", {}, "children: " + this.msg);
    return h("div", {}, [foo]);
  },
};
