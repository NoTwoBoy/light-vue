export const extend = Object.assign;

export const isObject = (value: any) => {
  return value !== null && typeof value === "object";
};

export const hasChanged = (value, newValue) => !Object.is(value, newValue);

export const hasOwn = (val, key) => Object.hasOwnProperty.call(val, key);

export const camelize = (str: string) => {
  return str.replace(/-(\w)/g, (_, c: string) => {
    return c ? c.toUpperCase() : "";
  });
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const toHandlerKey = (str: string) => {
  return str ? "on" + capitalize(str) : "";
};
