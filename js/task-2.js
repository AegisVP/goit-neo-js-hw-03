function makeArray(firstArray, secondArray, maxLength) {
  return firstArray.concat(secondArray).slice(0, maxLength);
}

const testTask2 = () => {
  document.getElementById('result').innerHTML = '';
  logOutput(makeArray, ['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3); // ["Mango", "Poly", "Ajax"]
  logOutput(makeArray, ['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4); // ["Mango", "Poly", "Houston", "Ajax"]
  logOutput(makeArray, ['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3); // ["Mango", "Ajax", "Chelsea"]
  logOutput(makeArray, ['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2); // ["Earth", "Jupiter"]
  logOutput(makeArray, ['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4); // ["Earth", "Jupiter", "Neptune", "Uranus"]
  logOutput(makeArray, ['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0); // []
};
