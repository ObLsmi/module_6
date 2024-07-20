let userNumber = +prompt("Введите число");

if (isNaN(userNumber)) {
    alert("Введите число!!!!!!!!!!!!")
} else {
    const array = [];
    for (let i = 0; i <= userNumber; i += 1) {
        array.push(i);
    }
    console.log(array);
    alert(array);
}
