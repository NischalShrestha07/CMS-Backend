const numbers = [1, 2, 3, 4]
console.log("Single:", numbers);// console.log(numbers);
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// forEach
console.log("The modifefied numbers:");
numbers.forEach((number) => {

    console.log(number * 2);
})


// MAP is better than for loops
const doubleNumbers = numbers.map((number) => {
    return number * 2
})
console.log("Double:", doubleNumbers);
// forEach doesnt return values its give NaH(Not a Number)

const words = ['nischal', 'hello', 'nepal', 'worldCup']
const capitalWords = words.map((word) => {

    return word.toUpperCase()

})
console.log(capitalWords)