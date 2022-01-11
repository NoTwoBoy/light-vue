import { trackEffects, triggerEffects, isTracking } from "./effect";
import { hasChanged, isObject } from "../shared";
import { reactive } from "./reactive";

class RefImpl {
  public dep;
  private _value: any;
  private _raw: any;
  constructor(value) {
    this._raw = value;
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
