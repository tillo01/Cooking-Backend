// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

function getPositive(numbers: number[]): string {
    return numbers.filter(num => num > 0).join('');
}

const result = getPositive([1, -4, 2,5,7,-8]);
console.log(result); 










// G-TASK: 

// Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
// MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
 
// const numbers = [12, 31, 44, 22, 55];
// let highestDigit = -1;

// function getHighestDigit() {
//     for (let count of numbers) {
//         while (count > 0) {
//             let digit = count % 10;  
//             if (digit > highestDigit) {
//                 highestDigit = digit;
//             }
//             count = Math.floor(count / 10);  
//         }
//     }
// }

// getHighestDigit();
// console.log(highestDigit);  