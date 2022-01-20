// La función debe devolver los dos valores del Array que sumen el resultado esperado. 


const sumPairs = (numbers, result) => {
  let comp = [];
  numbers.map((a, indexA) => {
    numbers.map((b, indexB) => {
      if (a + b === result && comp.length === 0 && indexA !== indexB) {
        comp.push(a,b)
      }
      indexB += indexB;
    })
    indexA += indexA;
  });
  if (comp.length === 2) {
    return comp 
  } else {
    return null
  }
}

// Test
console.log(sumPairs([3, 5, 7, 2], 10)); // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)); // null
console.log(sumPairs([2, 2, 3, 1], 4)); // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)); // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)); // [1, 5]
