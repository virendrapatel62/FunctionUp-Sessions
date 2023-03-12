exports.waitFor = (sec) => {
  const time = Date.now();
  while (Date.now() < time + sec * 1000) {}
};
