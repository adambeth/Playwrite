const myNewPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Timeout");
  }, 1500);
  reject(() => {});
});
