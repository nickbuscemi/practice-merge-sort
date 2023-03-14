// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  //base case
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);

  //recursive calls
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  
  //merge the two sides
  return merge(left, right);
}



function merge(arrA, arrB) {
  let sortedArr = [];

  while(arrA.length && arrB.length) {
    //insert the smallest item into sortedArr
    if (arrA[0] < arrB[0]) {
      sortedArr.push(arrA.shift())
    } else {
      sortedArr.push(arrB.shift())
    }
  }
  return [...sortedArr, ...arrA, ...arrB]
  
}


console.log(mergeSort([2,4,6,8,1,3,5,7,9]))
module.exports = [merge, mergeSort];

