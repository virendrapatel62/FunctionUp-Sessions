const counter = (int) => {
  let count = int;

  const inc = () => {
    count++;
  };
  const dec = () => {
    count--;
  };

  const getCount = () => count;

  return {
    inc,
    dec,
    getCount,
  };
};
const { inc, dec, getCount } = counter(20);

console.log(getCount());
inc();
inc();
console.log(getCount());
dec();
dec();
console.log(getCount());
