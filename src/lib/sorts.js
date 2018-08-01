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

// Insertion sort

let insertionSort = (items) => { //eslint-disable-line
  for (var i = 0; i < items.length; i++) { //eslint-disable-line
    const temp = items[i];
    // store the current item value so it can be placed right
    for (var j = i - 1; j > -1 && items[j] > value; j--) { //eslint-disable-line
      // loop through the items in the sorted array (the items from the current to the beginning)
      // copy each item to the next one
      items[j + 1] = items[j];
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = temp; //eslint-disable-line
  }

  return items;
};
