do {
    var first = +prompt("Введите число: ");
} while (isNaN(first) || first == 0);
{
    first = first;
    var second = +prompt("Введите степень: ");

    if (isNaN(second) || second === 0) {
        second = 2;
    } else {
        second = second;
    }

    var res = 1;

    for (let i = 0; i < second; i++) {
        res = res * first;
    }
    alert(`${first} в степени ${second} равняется ${res}`);
}

do {
    var quantity = +prompt("Введите число: ");
    quantity = isNaN(quantity) ? 5 : quantity;

    do {
        var tab = prompt("Введите символ отступов: ");
    } while (tab == "");

    do {
        var symbol = prompt("Введите конечный символ: ");
    } while (symbol == "");
} while (quantity == 0);

var res = "";
for (let i = 0; i < quantity; i++) {
    res = res + tab;
    console.log(res + symbol);
}
