/**
 * 使用数组实现，数组第0项作为栈顶，其他的都是基本的数组操作
 */
class MinStack {
    constructor(private stack: number[] = []) {
    }

    push(x: number): void {
      this.stack.unshift(x)
    }

    pop(): void {
      this.stack.splice(0, 1)
    }

    top(): number {
      return this.stack[0]
    }

    getMin(): number {
      return this.stack.reduce((num, min) => Math.min(num, min), this.stack[0])
    }
}
