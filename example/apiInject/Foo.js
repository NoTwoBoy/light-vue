import {
  h,
  provide,
  inject,
  createTextVNode,
} from "../../lib/light-vue.esm.js";

export const Foo = {
  setup(props) {
    provide("msg", "children light-vue!");
    const msg = inject("msg");
    return {
      msg,
    };
  },
  render() {
    const foo = h("p", {}, [createTextVNode("children: " + this.msg), h(Foo2)]);
    return foo;
  },
};

export const Foo2 = {
  setup(props) {
    const msg = inject("msg");
    const defaultInject = inject("default", " defaultInject");
    return {
      msg,
      defaultInject,
    };
  },
  render() {
    const foo = h("p", {}, "grandchildren: " + this.msg + this.defaultInject);
    return foo;
  },
};
