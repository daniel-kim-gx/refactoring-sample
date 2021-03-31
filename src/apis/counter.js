export const call = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {
        data: Math.floor(Math.random() * 100),
      };
      resolve(response);
    }, 500);
  });
