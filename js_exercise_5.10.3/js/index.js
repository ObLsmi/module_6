let userName = prompt("Введите ваше имя");
let userBirthYear = +prompt("Введите год вашего рождения");

let currentTime = Date.now();
let currentYear = new Date(currentTime).getFullYear();

if (userName != "" && userBirthYear != "") {
    if (userBirthYear >= currentYear) {
        alert(`Вы уверены что родились в ${userBirthYear}г.? Сейчас ${currentYear}г.`);
    } else {
    alert(`${userName}: ${currentYear - userBirthYear}`);
    }
} else {
    alert("Значение не может быть пустым");
}
