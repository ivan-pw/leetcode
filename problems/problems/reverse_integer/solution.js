/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  const neg = x < 0;
  let rev = 0;
  let n = Math.abs(x);
  // console.log(n);

  while (n) {
    rev = rev * 10 + (n % 10);
    n = Math.floor(n / 10);
    // console.log(n);
  }
  // console.log(n);

  // console.log(`${neg ? -x : x}`.split(""));
  // let rev = `${neg ? -x : x}`.split("").reverse().join('');

  if (Math.abs(+rev) > 2 ** 31 - 1) return 0;

  return neg ? -+rev : +rev;
};