const words = ["spray", "elite", "limit", "exuberant"];

const nuevo = words.filter(item => item.length >= 6)
console.log('original', words);
console.log('luego del filter', nuevo);

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
    {
      customerName: "Nicolas",
      total: 2322,
      delivered: false,
      },
  ];

const nuevo3 = orders.filter(item => item.delivered && item.total >= 100)

console.log('nuevo3', nuevo3);

const search = (query) => {
    return orders.filter(item => {
        //si el string esta incluido dentro del customerName
        return item.customerName.includes(query);
    })
}

console.log(search('Nico'));