//Первая задача
function convertSpeed(speed, convert) {
    if (speed < 0) {
        return "Error!"
    }
    else {
        let newSpeed
        if (convert == "toM/S") {
            newSpeed = speed * 10 / 36
            console.log(`${speed} км/ч -> ${newSpeed} м/с`)
            return newSpeed
        }
        else if (convert == "toKMH") {
            newSpeed = speed * 36 / 10
            console.log(`${speed} м/с -> ${newSpeed} км/ч`)
            return newSpeed
        }
        else {
            
            return "Error!"
        }
    }
}

//Вторая задача
function absValue(number) {

    let newNum;
    if (number < 0) {
        newNum = -number;
        console.log(`(${number}) -> ${newNum}`);
        return newNum;
    }
    else if (number >= 0) {
        console.log(`(${number}) -> ${number}`);
        return number;
    }
    else {
        
        return "Error!"
    }
}

//Третья задача
function JSObject() {
    let student = {
        group: prompt("Введите номер группы студента"),
        last_name: prompt("Введите фамилию студента"),
        first_name: prompt("Введите имя студента")
    }
    console.log(`Список свойств: ${Object.keys(student)[0]}, ${Object.keys(student)[1]}, ${Object.keys(student)[2]}`)
    console.log(`Студент ${student.first_name} ${student.last_name} учится в ${student.group} группе`)
}

//Четвертая задача

function randomNumber(num1, num2) {
    if (num2 <= num1) {
        console.log("Error!")
        return "Error!"
    }
    else {
        let random = Math.floor(Math.random() * num2) + num1;
        console.log(`(${num1}, ${num2}) -> ${random}`)
        return random;
    }
}
//Пятая задача
const arr=[1,2,3,4,5,6]
function sampleArray(arr, a) {
 let b= randomNumber(0,10);
 const massarray = [];
 for (let i =0; i<b; i++) {
    let rand = (Math.floor(Math.random() * massarray.length))
    massarray.push(arr[rand])
 
 }
 console.log(`([${arr}], ${b}) -> [${massarray}]`)
 
}
