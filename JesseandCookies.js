/**
HackerRank - Jesse and Cookies 
https://www.hackerrank.com/challenges/jesse-and-cookies/problem
*/

/**
Modified from: https://programs.programmingoneonone.com/2021/05/hackerrank-jesse-and-cookies-solution.html
*/

class Heap {
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  getMin() {
    return this.data[0];
  }

  insert(value) {
    this.data.push(value);
    this.heapifyUp();
  }

  remove() {
    const min = this.getMin();
    this.data[0] = this.data[this.data.length - 1];
    this.data.pop();
    this.heapifyDown();
    return min;
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getChildIndexes(index) {
    const currentIndex = index * 2 + 1;
    const length = this.size();

    let childIndexes = [];

    if (currentIndex < length) {
      childIndexes.push(currentIndex);
    }

    if (currentIndex + 1 < length) {
      childIndexes.push(currentIndex + 1);
    }

    return childIndexes;
  }

  heapifyUp() {
    let currentIndex = this.data.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (
      parentIndex >= 0 &&
      this.data[parentIndex] > this.data[currentIndex]
    ) {
      const temp = this.data[currentIndex];
      this.data[currentIndex] = this.data[parentIndex];
      this.data[parentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }

    return this.data;
  }

  heapifyDown() {
    let parentIndex = 0;
    let childIndexes = this.getChildIndexes(parentIndex);

    while (
      (childIndexes.length > 0 &&
        this.data[childIndexes[0]] < this.data[parentIndex]) ||
      (childIndexes[1] && this.data[childIndexes[1]] < this.data[parentIndex])
    ) {
      if (
        childIndexes[1] &&
        this.data[childIndexes[1]] < this.data[childIndexes[0]]
      ) {
        const hold = this.data[childIndexes[1]];
        this.data[childIndexes[1]] = this.data[parentIndex];
        this.data[parentIndex] = hold;

        parentIndex = childIndexes[1];
      } else {
        const hold = this.data[childIndexes[0]];
        this.data[childIndexes[0]] = this.data[parentIndex];
        this.data[parentIndex] = hold;

        parentIndex = childIndexes[0];
      }

      childIndexes = this.getChildIndexes(parentIndex);
    }

    return this.data;
  }
}

function cookies(k, A) {
  const heap = new Heap();
  for (let i = 0; i < A.length; i++) {
    heap.insert(A[i]);
  }

  let numberOfIteration = 0;

  while (heap.getMin() < k) {
    if (heap.size() === 1) {
      return -1;
    }

    const min1 = heap.remove();
    const min2 = heap.remove();
    const newValue = min1 + min2 * 2;

    heap.insert(newValue);
    numberOfIteration++;
  }

  return numberOfIteration;
}



