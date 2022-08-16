const letters = ['a', 'b', 'c'];

// realizar la transformacion con .map()

const newArray = letters.map(item => item + '++');

console.log('original =', letters);
console.log('new =', newArray);