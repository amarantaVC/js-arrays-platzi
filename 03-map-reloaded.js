const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

  //estamos aqui transformando el array orginal a un array unico de numeros
const nuevo = orders.map(item => item.total)

console.log('original', orders);
console.log('luego del map', nuevo);

/* const nuevo2 = orders.map(item => {
    item.tax = .19;
    return item;
});
console.log('luego del map en el que agregamos un nuevo atributo sin modificar el arrayn original ', nuevo2);

console.log('original', orders); */
/// esta respuesta es para no modificar el objeto en memoria, es decir para no modificar el original al momento de agregar un nuevo atributo 

const nuevo3 = orders.map(item => {

    return {
        ...item,
        tax: .19
    };
});

console.log(' sin modificar el arrayn original ', nuevo3);

console.log('original', orders);