// {
//   const a = 90;
//   console.log(a);
// }

// console.log(a);

// let => localscope nearest {}
// const => localscope nearest {}
// var=> fucntion - nearest fuction (node + browsers)

// browsers=>  var is not in fucntion => window.var =>global

function abc() {
  for (var i = 0; i < 1; i++) {
    //   const c = 90;
    //   console.log(i, c);
  }
  console.log(i);
}
abc();

console.log(global);
