/**
 * 递归
 * 1. Y小于等于X，则只能进行递减，步数为X-Y
 * 2. Y大于X，此时：
 *    (1) Y是偶数，则最后一步必然是双倍，即X * 2，逆向就是Y / 2，递归参数是(X, Y / 2)
 *    (2) Y是奇数，则最后一步必然是递减，即X - 1，逆向就是Y + 1，递归参数是(X, Y + 1)
 * 
 * 注：递归调用后的+1操作是步骤+1.
 */
function brokenCalc(X: number, Y: number): number {
  if (Y <= X) return X - Y;

  if (Y % 2 === 0) return brokenCalc(X, Y / 2) + 1; 
  else return brokenCalc(X, Y + 1) + 1; 
};
