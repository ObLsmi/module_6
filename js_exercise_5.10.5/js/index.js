let userAge = prompt("Укажите ваш возраст");

alertFirst = "Значение не может быть пустым";
alertSecond = "Введите число";


if (userAge === "") {
    alert("Значение не может быть пустым");
} else {
    if (isNaN(userAge)) {
        alert("Введите число");
    } else {
        let userAgeNum = +userAge;
        if (userAgeNum < 18 || userAgeNum > 65) {
            alert("Мы выдаем кредиты только людям старше 18 лет, и не старше 65 лет");
        } else {
            let userSum = prompt("Укажите сумму кредита кратную 1000");
            if (isNaN(userSum)) {
                alert("Введите число");
            } else {
                if (+userSum <= 0) {
                    alert("Видимо кредит вам ненужен. Всего доброго!");
                } else {
                    let userSumNum = +userSum;
                    let maxCredit = 0;
                    if (userAgeNum >=18 && userAgeNum <= 21) {
                        maxCredit = 50000;
                    }
                    if (userAgeNum >= 22 && userAgeNum <= 35) {
                        maxCredit = 400000;
                    }
                    if (userAgeNum >= 36 && userAgeNum <= 65) {
                        maxCredit = 1000000;
                    }
                    if (userSumNum >= maxCredit) {
                        alert(`Указанная сумма больше той которую мы можем вам выдать с учетом вашего возраста. Мы можем выдать ${maxCredit} рублей`);
                    } else {
                        let remaind = userSumNum / 1000;
                        if (remaind === 0) {
                            alert(`Мы можем выдать кредит на сумму ${userSumNum} рублей`);
                        } else {
                            let userSumMult = Math.floor(remaind) * 1000;
                            alert(`Указанная сумма не кртана 1000. Мы можем выдать ${userSumMult} рублей.`);
                        }
                    }
                }
            }
        } 
    }
}
