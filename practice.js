// HackerRank Practice

// DAY 1 \\

// 1
// arr = [-4, 3, -9, 0, 4, 1]

// function plusMinus(arr) {
//   const negative = []
//   const positive = []
//   const zero = []
  
//   for(let i = 0;i < arr.length; i++) {
//     if(1 / arr[i] < 0) {
//       negative.push(arr[i])
//     } else if (arr[i] / 1 == 0 ) {
//       zero.push(arr[i])
//       // return (arr.length / zero.length).toFixed(6)
//     } else {
//       positive.push(arr[i])
//       // return (arr.length / positive.length).toFixed(6)
//     }
//   }
//   console.log((positive.length / arr.length).toFixed(6))
//   console.log((negative.length / arr.length).toFixed(6))
//   console.log((zero.length / arr.length).toFixed(6))
  
// }

// plusMinus(arr)

// 2
// const arr = [1,3,5,7,9]

// function miniMaxSum(arr) {
//   const reducer = (a,b) => a + b

//   arr.sort()

//   let max = arr.slice(0, arr.length - 1).reduce(reducer)
//   let min = arr.slice(1).reduce(reducer)

//   console.log(max, min)
// }

// miniMaxSum(arr)