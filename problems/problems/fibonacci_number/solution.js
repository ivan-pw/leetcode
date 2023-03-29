/**
 * @param {number} n
 * @return {number}
 */


let fib = function (n) {
  let cur = 0;
  let prev = 1;
  for (let i = 0; i < n; i++) {
    let tCur = cur + prev;
    prev = cur;
    cur = tCur;
  }

  return cur;
};

// slow
// let fib = function (n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 1;

//   let cur = 2;

//   const count = (i = 3, p = 0, p1 = 1) => {
//     if (i === n) {
//       return cur;
//     }

//     let tCur = cur + p1;
//     p = p1;
//     p1 = cur;
//     cur = tCur;
//     i++;
//     count(i, p, p1);
//   };

//   count();

//   return cur;
// };
