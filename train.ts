

/*Project Standards
 - LOgin Standards
 -Naming Standards
     function,method,variable => CAMEL
     class => PASCAL
     folder => KEBAB 
     css => SNAKE CASE 

Error Handling

*/ 

/*
API:
Traditional API
Rest API 
GraphQL API

*/

/*
Traditional Frontend Development => BSSR  => EJS (framework)
Modern Frontend Development      => SPA   => frontend miz backend dan qabul qiladi (HTMl di ozi xosil qiladi) REACT (library)


*/

// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

function getMajorEle(numbers: number []){
  let maxcount = 0;
  let majorEle = 0;
  for (let i = 0; i < numbers.length; i++) {
    let  count = 0;
    for (let j = 0; j < numbers.length; j++) 
    if (numbers[i] == numbers[j]) {
      count++;
      
    }
if (count  > maxcount) {
  maxcount = count
  majorEle = numbers[i];
}

}
return majorEle;
}

const result = getMajorEle([3,6,7,5,3,4,3,4,4]);

console.log(result);






// H2-TASK: 

// Shunday function tuzing, unga string argument pass bolsin. Function ushbu agrumentdagi digitlarni yangi stringda return qilsin
// MASALAN: getDigits("m14i1t") return qiladi "141"



// function getDigits(digit:string):string{
//     let result: string = '';
//     for(let char of digit){
//       if(!isNaN(Number(char))){
// result += char;
//       }
//     }
//     return  result;

// }

// console.log(getDigits("ewknf242qwqwdqq344"));

















// H-TASK: 

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// function getPositive(numbers: number[]): string {
//     return numbers.filter(num => num > 0).join('');
// }

// const result = getPositive([1, -4, 2,5,7,-8]);
// console.log(result); 














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