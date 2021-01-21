function commonChars(A: string[]): string[] {
  if (A.length === 1) return A[0].split('');

  const result: string[] = [];

  // 按字符串长度升序排序，第0项为最短的
  A = A.sort((a, b) => a.length - b.length);

  // 以第0项为基准，挨个字符遍历，寻找其余项中与它相同的字符
  for (let i = 0; i < A[0].length; ++i) {
    for (let j = 1; j < A.length; ++j) {
      const index: number = A[j].indexOf(A[0][i]);
      if (index !== -1) {
        // 找到则移除此字符，防止重复输出
        A[j] = A[j].slice(0, index) + A[j].slice(index + 1);
      } else {
        // 没找到则跳出当前循环，检查第0项的下一个字符
        break;
      }

      // 找到最后一项都没有break，说明所有项中都有此字符，放入结果数组
      if (j === A.length - 1) result.push(A[0][i]);
    }
  }
  return result;
};
