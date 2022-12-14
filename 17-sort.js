const months = ["March", "Jan", "Feb", "Dec"];

const rta  = months.sort();
console.log(rta)
const numbers = [1, 30, 4, 21, 100000];
console.log(numbers.sort((a,b) => a - b));
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];

words.sort();
console.log(words);
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];

orders.sort((a,b) => b.total - a.total);
console.log(orders)