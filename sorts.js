const array = [44,3,41,1,3,1,6,7,43,1,2];
const sortedArray = [1,1,1,2,3,3,6,7,41,43,44];
const assert = require('assert');


const bubbleSort = array => {
  const len = array.length;
  for(let j = 0; j < len; j++) {
    for(let i = 0; i < len && i < len - j; i++) {
      if (array[i] > array[i+1]) {
        let tmp = array[i+1];
        array[i+1] = array[i];
        array[i] = tmp
      }
    }
  }
  return array
}

const merge = (array1, array2) => {
  const finalArray = []
  const finalIndex = array1.length + array2.length
  for (let i=0, j=0, k=0; i < finalIndex; i++) {
    if(typeof array2[k] === 'undefined') {
      return [...finalArray, ...array1.slice(j, array1.length)]
    }
    if(typeof array1[j] === 'undefined') {
      return [...finalArray, ...array2.slice(k, array2.length)]
    }
    if (array1[j] > array2[k]) {
      finalArray[i] = array2[k]
      k++
    } else {
      finalArray[i] = array1[j]
      j++
    }
  }
  return finalArray
}

const mergeSort = array => {
  if(array.length <= 1) {
    return array
  }
  const middle = Math.floor(array.length / 2);
  const L = array.slice(0, middle)
  const R = array.slice(middle, array.length)
  return merge(mergeSort(L), mergeSort(R))
}

console.log(mergeSort(array))

describe('Sorting', () => {
  it('should bubble sort', () => {
    assert.deepEqual(bubbleSort(array), sortedArray);
  });
  it('should bubble sort', () => {
    assert.deepEqual(mergeSort(array), sortedArray);
  });
});

