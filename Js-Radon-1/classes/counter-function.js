function counter() {
  let count = 0;

  function getCount() {
    return count;
  }
  return {
    inc: () => ++count,
    dec: () => --count,
    count,
    getCount,
  };
}
let { inc, dec, count, getCount } = counter();
//    fun   fun  0 .   fun
console.log(inc, dec, count);
inc();
inc();
inc();
inc();
console.log(count, getCount());
dec();
dec();
dec();
console.log(count, getCount());
