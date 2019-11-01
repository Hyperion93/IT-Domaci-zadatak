let price=800;
let rad=25.5;
let povrs=rad*rad* Math.PI;

let cppk=povrs/price;
console.log(`Ako je pizza precnika ${rad*2}cm ${price}dinara, cena po kvadratnom cm je ${Math.fround(cppk)}`);