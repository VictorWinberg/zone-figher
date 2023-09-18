export function toMap<T>(array: T[], key: keyof T) {
  return new Map(array.map(item => [item[key], item]));
}

export function uniqueArray<T>(arr: T[], fn: (item: T) => any) {
  return arr.filter((item, index) => {
    const value = fn(item);
    const firstIndex = arr.findIndex(obj => {
      return fn(obj) === value;
    });
    return index === firstIndex;
  });
}
