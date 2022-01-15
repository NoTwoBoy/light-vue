import { effect } from "../effect";
import { isReactive, reactive } from "../reactive";
import { ref, isRef, unRef, proxyRefs } from "../ref";

describe("ref", () => {
  it("happy path", () => {
    const a = ref(1);
    expect(a.value).toBe(1);
  });

  it("should be reactive", () => {
    const a = ref(1);
    let dummy;
    let calls = 0;
    effect(() => {
      calls++;
      dummy = a.value;
    });
    expect(calls).toBe(1);
    expect(dummy).toBe(1);
    a.value = 2;
    expect(calls).toBe(2);
    expect(dummy).toBe(2);
    // same value should not trigger
    a.value = 2;
    expect(calls).toBe(2);
    expect(dummy).toBe(2);
  });

  it("should make nested properties reactive", () => {
    const a = ref({
      count: 1,
    });
    let dummy;
    effect(() => {
      dummy = a.value.count;
    });
    expect(dummy).toBe(1);
    a.value.count = 2;
    expect(dummy).toBe(2);
  });

  it("isRef", () => {
    const a = ref(1);
    const user = reactive({
      age: 1,
    });
    expect(isRef(a)).toBe(true);
    expect(isRef(a.value)).toBe(false);
    expect(isRef(user)).toBe(false);
  });

  it("usRef", () => {
    const a = ref(1);
    const user = ref({
      age: 1,
    });
    expect(unRef(a)).toBe(1);
    expect(unRef(a.value)).toBe(1);
    // 在pr阶段
    // expect(isReactive(unRef(user))).toBe(false);
  });

  it("proxyRefs", () => {
    const user = {
      age: ref(10),
      name: "pineapple",
    };

    const proxyRefUser = proxyRefs(user);
    expect(user.age.value).toBe(10);
    expect(proxyRefUser.age).toBe(10);
    expect(proxyRefUser.name).toBe("pineapple");

    proxyRefUser.age = 20;
    expect(proxyRefUser.age).toBe(20);
    expect(user.age.value).toBe(20);

    proxyRefUser.age = ref(10);
    expect(proxyRefUser.age).toBe(10);
    expect(user.age.value).toBe(10);
  });
});
