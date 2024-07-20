let array = [];
for (let i = 0; i <= 8; i += 1) {
    if (i % 2 === 0) {
        array.push("X");
    } else {
        array.push("O");
    }
}

let arrayLine = [];
let index = 0;

for (let j = 0; j < 3; j += 1) {
    arrayLine[j] = [];
    for (let k = 0; k < 3; k += 1) {
        arrayLine[j][k] = array[index];
        index += 1;
    }
}

let str = "";

for (let j = 0; j < arrayLine.length; j += 1) {
    for (let k =0; k < arrayLine[j].length; k += 1) {
        str += `${arrayLine[j][k]}`;
    }
    str += "\n";
}
console.log(str);