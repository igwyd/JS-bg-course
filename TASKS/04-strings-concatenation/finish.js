/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

// OPTION 1
const myName = 'igor'
const myFamalyName = 'demin'
const myProfession = 'QA'

const allMyInfo1 = 'My name is ' + myName + ' ' + myFamalyName + ' and i am ' + myProfession

console.log(allMyInfo1)

// OPTION 2
const allMyInfo2 = `My name is ${myName} ${myFamalyName} and i am ${myProfession}`

console.log(allMyInfo2)