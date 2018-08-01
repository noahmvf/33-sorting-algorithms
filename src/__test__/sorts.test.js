import { bubbleSort, merge, mergeSort } from '../lib/sorts'; //eslint-disable-line

describe('testing bubble sort', () => {
  test('bubble sort of an array', () => {
    const arr = [1, 2, 3, 4, 5];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });

  test('bubble sort of an array2', () => {
    const arr = [14, 21, 352, 4, 51];
    bubbleSort(arr);
    expect(arr).toEqual([4, 14, 21, 51, 352]);
  });

  test('bubble sort of an array3', () => {
    const arr = [14, 14, 22, 4, 53];
    bubbleSort(arr);
    expect(arr).toEqual([4, 14, 14, 22, 53]);
  });
});
