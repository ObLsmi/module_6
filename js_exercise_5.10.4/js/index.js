let userName = prompt("Введите ваше имя");
let userBirthYear = prompt("Введите год вашего рождения");

let currentTime = Date.now();
let currentYear = new Date(currentTime).getFullYear();

if (userName === "" && userBirthYear === "") {
    alert("Значение не может быть пустым");
} else {
    if (isNaN(userBirthYear)) {
        alert("Год должен быть числом");
    } else {
        if (userBirthYear >= currentYear) {
            alert(`Вы уверены что родились в ${userBirthYear}г.? Сейчас ${currentYear}г.`);
        } else {
            let userAge = currentYear - +userBirthYear;
            let ageRemainder = userAge % 10;
            let ending = "";
            switch (ageRemainder) {
                case 1:
                    ending = "год";
                    break;
                case 2:
                case 3:
                case 4:
                    ending = "года";
                    break;
                default:
                    ending = "лет";
            }
            alert(`${userName}: ${userAge} ${ending}`)
        }
    }
}
