"Make upper case"

// function makeUpperCase(str) {
//     return str.toUpperCase()
// }
// console.log(makeUpperCase("dilshod"))

"Vowel remover"

// function shortcut (string) {
//     let split = string.split('')

//     for(let i = 0; i <= string.length; i++){
//         if(split[i] === 'a' ||
//            split[i] === 'o' ||
//            split[i] === 'u' ||
//            split[i] === 'i' ||
//            split[i] === 'e') {
//                 split.splice(i, 1)
//           }
//     }
    
//     return split.join('')
// }
// console.log(shortcut("How are you today"))

"String count"
// function strCount(str, letter){  
//     let count = 0
//     for(let i = 0; i < str; i++){
//         if(str.includes(letter)){
//             count += letter.length
//         }
//     }
//     return count
// }
// console.log(strCount("Dilshod", "i"))

"Abbreviate a Two Word Name"

// function abbrevName(name){
//     return name.split(" ").map((e) => e[0].toUpperCase()).join(".")
// }
// console.log(abbrevName("Dilshod isakov"))

"Remove spaces from the string"

// function noSpace(x){
//     return x.split(" ").join("")
// }
// console.log(noSpace("Dilshod Isakov"))

"Returning string"

// function greet(name){
//     return `Hello, ${name} how are you doing today?`
// }
// console.log(greet("Dilshod"))

"Is the string upperase"

// function upperase(text){
//     return text == text.toUpperCase() ? true : false
// }
// console.log(upperase("DDILSHOD"))

"The wide-mouthed frog"

// function mouthSize(animal) {
//     return animal == "alligator" || "ALLIGATOR" ? "small" : "wide"
// }
// console.log(mouthSize("alligator"))

"Name on abillboard"

// function billboard(name, price = 30){
//     return Array.from(name).reduce((e) => e + price, 0)
// } 
// console.log(billboard("Dilshod"))

"remove first and last"

// function removeChar(str){
//     return str.slice(1, -1)
// }
// console.log(removeChar("Dilshod"))
   
"Grasshopper - Personalized Message"

// function greet (name, owner) {
//     return owner == owner & owner == name ? `Hello boss` : `Hello guest`
// }
// console.log(greet("Azim", "Azim"))

"Reversed string"

// function solution(str){
//     return str.split('').reverse().join('');
//   }
//   console.log(solution("My name is dilshod"))

"Safen User Input Part I - htmlspecialchars"

// function htmlspecialchars(formData) {
//     return formData.includes("<") ? formData.replace("<", "&lt") : formData.includes(">") ? formData.replace(">", "&gt") : formData.includes(`"`) ? formData.replace(`"`, "&quot") : formData.includes("&") ? formData.replace("&", "&amp") : ""
// }
// console.log(htmlspecialchars("Hello, how would you & I fare?"))

"Remove exlamation mark"

// function remove (string) {
//     let text = string.replace("!", "")
//     return text
//  }
//   console.log(remove("Hi!"))

"Short Long Short"

// function solution(a, b){
//    return a.length < b.length ? a + b + a : b + a + b
// }
// console.log(solution("22", "1"))

"Double char"

// function doubleChar(str) {
   
//    return str.split("").map((e) => e.repeat(2)).join("")
// }
// console.log(doubleChar("Dilshod"))

"Number to String"

// function numberToString(num) {
//    return num.toString()
// }
// console.log(numberToString(4))

"boolean to string"

// function booleanToString(b){
//     return b.toString()
// }
// console.log(booleanToString(true))

"Capitalization"

// function capitalizeWord(word) {
//    return word[0].toUpperCase().split(" ").join('') + word.substring(1)
// }
// console.log(capitalizeWord("dilshod is best"))

"string to number"

// const stringToNumber = function(str){
//     return Number(str)
//   }
//   console.log(stringToNumber("2"))

"Correct the mistakes of the character recognition software"

function correct(string){
	return string.includes("5") ? string.replaceAll("5", "s") : string.includes("0") ? string.replaceAll("0", "o") :  string.includes("1") ? string.replaceAll("1", "i") : ""  
}
console.log(correct("D1l5h0d"))