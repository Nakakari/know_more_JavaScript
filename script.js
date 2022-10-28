// console.log('hello')
// console.error('There is error')
// console.warn('This is a warning message')
// console.info('Info')

let number; //undefined (tidak punya value) , blm assign a value [dapat berupa angka atau string, angka yg ada komanya, boolean]
const number3 = 'this is const' //constant, valuenya statis tidak bisa diubah
/**
 * null = terdapat value
 * undefined = tidak terdapat valuenya
 * `` => ex: `hello-${var}`
 */

// Operator aritmatik
const PI = 3.14
const radius = 10
const area = PI * (radius ** 2)
// console.log(area)

/**
 * ^2 => xor
 * division => /
 * multiplication => *
 * addition => +
 * substraction => -
 */

//Logical
/**
 * AND => &&
 * OR => ||
 */

const result = 2 + 5 * 100 / 4 //jika ada yg imbang, left to right

//Selection 
/**
 * if else
 */
// if (true) {
//     console.log('true')
// }
const num = 19
// if (num % 2 == 0) {
//     console.log('Even')
// } else {
//     console.log('odd')
// }
const num2 = 60
if (num2 >= 81 && num2 <= 100) {
    console.log('A')
} else if (num2 >= 51 && num2 < 81) {
    console.log('B')
} else if (num2 >= 0 && num2 < 51) {
    console.log('C')
} else {
    console.log('invalid score')
}

// Turnary
const num4 = 25
// const isOddorEven = kondisi ? kalautrue : kalaufalse
const isOddorEven = num4 % 2 ? 'Even' : 'Odd'

const grade = num2 >= 81 && num2 <= 100
    ? 'A'
    : num2 >= 51 && num2 < 81
        ? 'B'
        : num2 >= 0 && num2 < 51
            ? 'C'
            : 'Invalid number'

const gender = 'Male'
// Swith Case => untuk nilai yg pasti, konstanta, ====, toLowerCase
switch (gender) {
    case 'Male':
        console.log("I'am a Male")
    case 'Female':
        console.log("I'am a Female")
    default:
        break //Mengantisipasi hal2 tidak berguna
}

// LOOP
//For loop
for (let i = 0; i < 10; i++) {
    console.log(i)
}
for (let i = 0; i < 10; i += 2) {
    console.log(i)
}
for (let i = 10; i > 0; i--) {
    console.log(i)
}
//while loop
let i = 0
while (i <= 10) {
    console.log(i)
    i++
}
i = 0
while (true) {
    if (i < 100) {
        break
    }
    console.log(i)
    i++
}
while (true) {
    if (i < 100) {
        continue
    }
    //di sini tidak diprint jika i < 100
    console.log(i)
    i++
}
//do-while loop
i = 0
do {
    console.log(i + 1)
    i++
} while (i <= 100)