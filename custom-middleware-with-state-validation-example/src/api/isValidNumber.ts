export const isValidNumber = (value: number): Promise<boolean> => {
  setTimeout(() => {}, 500);
  return Promise.resolve(value % 2 === 0);
};
