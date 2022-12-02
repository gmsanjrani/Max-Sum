const arr = [2, -1, -3, 4, -1 ,3 , -2 , 8, 2, -1, -5];

const maxSumFunc = (arr) => {
  let maxSum = 0;
  let n = arr.length;
  let s = 0;
  let e = 0;

  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += arr[j];
      if (sum > maxSum) {
        maxSum = sum;
        s = i;
        e = j;
      }
    }
  }
  
  console.log(`Max Sum subArray = ${arr.slice(s, e + 1)} `);
  return maxSum
};

console.log("max sum = "+ maxSumFunc(arr))

