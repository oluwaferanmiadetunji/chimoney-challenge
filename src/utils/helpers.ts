export const shortenProductName = (name: string, length = 22) => {
  if (name.length > length) {
    return `${name.slice(0, length)}...`;
  }

  return name;
};
