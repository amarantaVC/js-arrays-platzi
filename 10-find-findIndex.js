const numbers = [1,30,49,29,10,13];

const rta = numbers.find(item => item === 30)

console.log('find', rta);

const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];

  const rta2 = products.find(item => item.id === '🍔')

  console.log(rta2) 

  //con findIndex lo que hacemos es burcar la posiciion de ese elemento
  const rta3 = products.findIndex(item => item.id === '🍔')

  console.log('findIndex',rta3) 