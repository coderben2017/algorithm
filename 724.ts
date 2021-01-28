/**
 * 前缀和
 * 索引左右两侧和相等时：
 * total = leftTotal + nums[i] + rightTotal = leftTotal + nums[i] + leftTotal = leftTotal * 2 + nums[i]
 * 则通过循环、累加获取nums[i]、leftTotal，检测等式是否成立来寻找这个索引
 */
function pivotIndex(nums: number[]): number {
  if (nums.length === 0) return -1;
  if (nums.length === 1) return 0;
  if (nums.length === 2) {
    return !nums[1] 
      ? 0 
      : !nums[0] 
        ? 1 
        : -1;
  }

  const total: number = nums.reduce((total, num) => total + num, 0);

  let leftTotal: number = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (total === leftTotal * 2 + nums[i]) return i;
    leftTotal += nums[i];
  }

  return -1;
};
