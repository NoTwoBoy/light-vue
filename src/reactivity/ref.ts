import { trackEffects, triggerEffects, isTracking } from "./effect";
import { hasChanged, isObject } from "../shared";
import { reactive } from "./reactive";

class RefImpl {
  public dep;
  private _value: any;
  private _raw: any;
  private __v_isRef: boolean;
  constructor(value) {
    this._raw = value;
    this.__v_isRef = true;
    this._value = convert(value);
    this.dep = new Set();
  }

  get value() {
    trackRefValue(this);
    return this._value;
  }

  set value(newValue) {
    if (hasChanged(this._raw, newValue)) {
      this._value = convert(newValue);
      this._raw = newValue;
      triggerEffects(this.dep);
    }
  }
}

function convert(value) {
  return isObject(value) ? reactive(value) : value;
}

function trackRefValue(ref) {
  if (isTracking()) trackEffects(ref.dep);
}

export function ref(value) {
  return new RefImpl(value);
}

export function isRef(ref) {
  return !!ref.__v_isRef;
}

export function unRef(ref) {
  return isRef(ref) ? ref.value : ref;
}

export function proxyRefs(objectWithRefs) {
  return new Proxy(objectWithRefs, {
    get(target, key) {
      return unRef(Reflect.get(target, key));
    },
    set(target, key, value) {
      if (isRef(target[key]) && !isRef(value)) {
        return (target[key].value = value);
      } else {
        return Reflect.set(target, key, value);
      }
    },
  });
}
