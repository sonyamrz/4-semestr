//Задача 1 Конвертация скоростей

let kmh = 36, ms = 20;

console.log(`${kmh} км/ч соотвествует ${kmh / 3.6} м/c`)
console.log(`${ms} м/с соотвествует ${ms * 3.6} км/ч`)

//Задача 2 Треугольник 
console.log("");
let a = 3, b = 4, c = 5;
let p = (a + b + c) / 2;
let s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
if ((a + b > c) && (a + c > b) && (b + c > a)) {
    { console.log("Треугольник существует") }
    { console.log(`Периметр = ${p * 2}`) }
    { console.log(`Площадь = ${s}`) }
    { console.log(`Соотношение = ${(p * 2) / s}`) }
}
else { console.log("Треугольника не существует") }

//Задача 3 Fizz-Buzz
console.log("");
let num = prompt('Введите натуральное число:');
if (num == false) {
    console.log("Вы не ввели число!");
}
else {
    for (let i = 0; i <= num; i++) {
        if ((i % 5 == 0) && (i != 0)) { console.log(`${i} fizz buzz`) }
        else if (i % 2 == 0) { console.log(`${i}  buzz`) }
        else if (i % 2 !== 0) { console.log(`${i} fizz`) }
    }
}

//Задача 4 Елка
console.log("");
let star = "*";
let hash = "##";
let tree = ">";
tree += '\n' + star + '\n' + hash + '\n';

for (i = 0; i <= 25; i++) {
    if (i % 2 == 0) {
        star += '**';
        tree += star + '\n'
    }
    else {
        hash += '##';
        tree += hash + '\n';
    }
}
tree += '| |';
console.log(tree);

//Задача 5 Угадай число
console.log("");

let chislo = 10, l = 1;
while (l) {
    number = prompt("Угадайте число")
    if (number == undefined || number == 0 || number == ' ' || number == Infinity || number == NaN) {
        console.log("Введите число!");
    }
    else {
        if (number > chislo) {
            console.log("Загаданное число меньше");
        }
        else if (number < chislo) {
            console.log("Загаданное число больше")
        }
        else {
            console.log("Вы угадали число!")
            l = 0;
        }
    }
}

//Задача 6 Деление
let chislo1,x,y;
chislo1 = prompt("Введите число, которое хотите проверить на делимость");
 
x=prompt('x');
y=prompt('y');

if (chislo1 % x == 0 && chislo1 % y == 0) {
    console.log(`n =  ${chislo1}, x = ${x} , y = ${y} = > true`);
}
else {
    console.log(`n =  ${chislo1}, x = ${x} , y = ${y} = > false`);
};

//Задача 7 Кварталы

let month;
month=prompt("Введите номер месяца");
if (month > 0 && month < 4) {
    console.log("месяц " + month + " => 1 квартал");
}
else {
    if (month > 3 && month < 7) {
        console.log("месяц " + month + " => 2 квартал");
    }
    else {
        if (month > 6 && month < 10) {
            console.log("месяц " + month + " => 3 квартал");
        }
        else {
            if (month > 9 && month < 13) {
                console.log("месяц " + month + " => 4 квартал");
            }
            else {
                console.log("error");
            };
        };
    };
};