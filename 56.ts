function merge(intervals: number[][]): number[][] {
  if (intervals.length < 2) return intervals;

  // 按区间开始的从小到大进行排序
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  let i:number = 1;
  while(i < intervals.length) {
    // 检查区间是否交叉
    if (intervals[i - 1][1] >= intervals[i][0]) {
      // 前一项的区间开始必然小于等于后一项的
      const start = intervals[i - 1][0];
      // 前一项的区间结束可能小于后一项的，所以要取较大的
      const end = Math.max(intervals[i][1], intervals[i - 1][1]);
      intervals.splice(i - 1, 2, [start, end]);
    } else {
      ++i;
    }
  }

  return intervals;
};
