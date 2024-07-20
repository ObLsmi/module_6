const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ]; 

const arrSet = new Set(arr);
const arrUniq = Array.from(arrSet);
console.log(arrUniq);