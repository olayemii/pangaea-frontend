export const createIndexedArray = (length: number) =>
  Array(length)
    .fill(undefined)
    .map((_, i) => i);
