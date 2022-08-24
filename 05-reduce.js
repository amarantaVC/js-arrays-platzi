const totals = [1,2,3,4];

//diferencia bettwen for y reduce
// con for

let sum = 0;
for (let index = 0; index < totals.length; index++){
    const element = totals[index];
    sum = sum + element;
}
console.log(sum);

//ahora con reduce el primer parametro es una arrow function y el segun parametro es un valor inicial

const rta = totals.reduce((sum, element) => sum + element, 0)

console.log('rta',rta);