const array = ["Довод", "Сантимент"];

for (let leftToWord of array) {
    let rightToWord = "";
    for (let i = leftToWord.length - 1; i >= 0; i -= 1) {
        rightToWord += leftToWord[i];
    }
    if (leftToWord.toLowerCase() === rightToWord.toLowerCase()) {
        console.log(`Слово ${leftToWord} является палиндромом`);
    } else {
        console.log(`Слово ${leftToWord} не является палиндромом`);
    }
}

