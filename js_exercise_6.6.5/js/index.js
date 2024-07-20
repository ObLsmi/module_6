const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
}

const arrValues = [];

for (let i in obj) {
    if (Array.isArray(obj[i])) {
        for (let k of obj[i]) {
            arrValues.push(k);
        }       
    } else {
        arrValues.push(obj[i]);
    }
}
console.log(arrValues);
