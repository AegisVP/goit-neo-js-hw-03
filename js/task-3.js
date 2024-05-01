function filterArray(numbers, value) {
  return numbers.filter(number => number > value);
}

const testTask3 = () => {
  document.getElementById('result').innerHTML = '';
  logOutput(filterArray, [1, 2, 3, 4, 5], 3); // [4, 5]
  logOutput(filterArray, [1, 2, 3, 4, 5], 4); // [5]
  logOutput(filterArray, [1, 2, 3, 4, 5], 5); // []
  logOutput(filterArray, [12, 24, 8, 41, 76], 38); // [41, 76]
  logOutput(filterArray, [12, 24, 8, 41, 76], 20); // [24, 41, 76]
};
