
exports.min = function min (array) {
  if (array == undefined || array.length == 0) return 0;
  let minimal = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[minimal]) minimal = i;
  }
  return array[minimal];
}

exports.max = function max (array) {
  if (array == undefined || array.length == 0) return 0;
  let maximal = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[maximal]) maximal = i;
  }
  return array[maximal];
}

exports.avg = function avg (array) {
  if (array == undefined || array.length == 0) return 0;
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    average = average + array[i];
  }
  return average/array.length;
}
