function largeGroupPositions(s: string): number[][] {
  // 边界情况单独处理
  if (s.length < 3) return [];
  
  // 1. 创建辅助数组，为s的每一位创建区间
  const indexs: number[][] = [];
  for (let i = 0; i < s.length; ++i) {
    indexs.push([i, i]);
  }

  // 2. 计算辅助数组中各区间的终点
  for (let i = 0; i < s.length; ++i) {
    for (let j = i + 1; j < s.length; ++j) {
      if (s[j] === s[i]) {
        indexs[i][1] = j;
      } else {
        break;
      }
    }
  }

  // 3. 提取宽度大于等于3的区间，并去重（比如"abccccd"存在[2, 4]、[2, 5]、[3, 5]，后2个区间重复）
  const result: number[][] = [];
  for (let i = 0; i < indexs.length; ++i) {
    if (indexs[i][1] - indexs[i][0] >= 2) {
      if (!result.find(arr => arr[1] === indexs[i][1])) result.push(indexs[i]);
    }
  }
  
  return result;
};
