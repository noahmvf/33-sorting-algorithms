// Bubblesort

const bubbleSort = (items) => { //eslint-disable-line
  let length = items.length; //eslint-disable-line
  for (let i = 0; i < length; i++) { // Number of passes
    for (let j = 0; j < (length - i - 1); j++) { // Notice that j < (length - i)
      // Compare the adjacent positions
      if (items[j] > items[j + 1]) {
        // Swap the numbers
        const tmp = items[j]; // Temporary variable to hold the current number
        items[j] = items[j + 1]; // Replace current number with adjacent number
        items[j + 1] = tmp; // Replace adjacent number with current number
      }
    }
  }
};

// Mergesort

// compare the arrays item by item and return the concatenated result
const merge = (left, right) => {
  const result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft += 1;
    } else {
      result.push(right[indexRight]);
      indexRight += 1;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};

const mergeSort = (arr) => {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(
    mergeSort(left),
    mergeSort(right),
  );
};
