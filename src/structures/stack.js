const createStack = () => {
  const stack = [];

  return {
    pop() {
      return stack.pop();
    },
    push(item) {
      stack.push(item);
    },
    peek() {
      return stack[stack.length -1];
    },
    get length() {
      return stack.length;
    },
    isEmpty() {
      return !stack.length;
    }
  }
};

export default createStack;
