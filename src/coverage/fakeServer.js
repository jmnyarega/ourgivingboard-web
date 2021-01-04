export const server = (url, data, error) => {
  return new Promise((resolve, reject) => {
    if (error) {
      reject(data);
    } else {
      resolve(data);
    }
  });
};
