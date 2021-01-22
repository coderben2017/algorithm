function canMakeArithmeticProgression(arr: number[]): boolean {
  if (arr.length === 2) return true;

  arr = arr.sort((a, b) => a - b);
  
  for (let i = 2; i < arr.length; ++i) {
    if (arr[i - 1] - arr[i - 2] !== arr[i] - arr[i - 1]) {
      return false;
    }
  }
  
  return true;
};
