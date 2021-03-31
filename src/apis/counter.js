export const call = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {
        data: Math.floor(Math.random() * 100),
      };
      resolve(response);
    }, 500);
  });

export const fetchAccount = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = {
        data: {
          address: "account address" + Math.random() * 1000,
          publicKey: "account public key" + Math.random() * 1000,
          createdAt: "123213",
          updatedAt: "123123",
        },
      };

      resolve(response);
    }, 1000);
  });
