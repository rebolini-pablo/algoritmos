/**
 * Selection Sort
 * https://stackoverflow.com/questions/11032015/how-to-find-time-complexity-of-an-algorithm
 * O(n*n)
 */
let items = [5, 1, 3, 9, 12, 8];

for (let i = 0; i < items.length; i++) {

  let temp = items[i];
  for (let j = i+1; j < items.length; j++) {
    
    if (items[j] < items[i]) {
      items[i] = items[j];
      items[j] = temp
    }

  }

}

console.log (items)