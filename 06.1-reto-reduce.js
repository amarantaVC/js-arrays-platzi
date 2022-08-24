const lista = [1,2,3,4,5,6,7,8,9,4,5,6,1,2,3,9,7,5,6,2,1];

const entre = (x,min,max) => x >= min && x <= max;

const valorRango = lista.reduce((obj,item) => {
    if( entre(item,1,5)) obj["1-5"] += 1;
    else if (entre(item,6,8)) obj["6-8"] += 1;
    else if (entre(item,9,10)) obj["9-10"] += 1;
    return obj;
},
{"1-5":0, "6-8":0, "9-10":0 }
);
console.log(valorRango);