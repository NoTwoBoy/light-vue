export const extend = Object.assign;

export const isObject = (value: any) => {
  return value !== null && typeof value === "object";
};

export const hasChanged = (value, newValue) => !Object.is(value, newValue);
