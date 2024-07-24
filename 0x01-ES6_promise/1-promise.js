getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({status:200, body:'Success'});
    } esle {
      reject(new Error("The fake API is not working currently"));
    }
  });
}
