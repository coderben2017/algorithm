function mySqrt(x: number): number {
  if (x === 0 || x === 1) return x;

  // x平方根肯定小于等于它的一半，故只需检查1~x/2的整数
  for (let i = 1; i <= Math.floor(x / 2); ++i) {
    const i2 = Math.pow(i, 2);
    const j2 = Math.pow(i + 1, 2);
    if (i2 === x || (i2 < x && j2 > x)) {
      return i;
    }
  }
};
