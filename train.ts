/**
 * Project Standards
 *  - LOgin Standards
 *  -Naming Standards
 *      function,method,variable => CAMEL
 *      class => PASCAL
 *      folder => KEBAB
 *      css => SNAKE CASE
 *
 * Error Handling
 *
 * @format
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
// ZH-TASK:

// Shunday function yozing, u berilgan array parametrni ichidagi eng katta raqamgacha tushib qolgan raqamlarni bir arrayda qaytarsin.
// MASALAN: findDisappearedNumbers([1, 3, 4, 7]) return [2, 5, 6]

// ZI-TASK:

// Shunday function yozing, u function ishga tushgandan 3 soniyadan keyin "Hello World" ni qaytarsin.
// MASALAN: delayHelloWorld("Hello World") return "Hello World"

function getHello() {
   console.log("Hello World");
}
setTimeout(getHello, 3000);

// function getNum(arr: number[]): number[] {
//    const maxNum = Math.max(...arr);

//    let missNum: number[] = [];

//    for (let i = 1; i <= maxNum; i++) {
//       if (!arr.includes(i)) {
//          missNum.push(i);
//       }
//    }

//    return missNum;
// }

// console.log(getNum([1, 55, 77]));

// ZG-TASK:

// Shunday function yozing, u berilgan string parametrni snake casega otkazib qaytarsin.
// MASALAN: capitalizeWords('name should be a string') return 'name_should_be_a_string'

// function getSnake(str: string): any {
//    let words = str.split(" ");

//    return words.join("_");
// }
// const res1 = getSnake("hello my name is tillo");
// console.log(res1);

// ZF-TASK:

// Shunday function yozing, uni string parametri bolsin. String ichidagi har bir sozni bosh harflarini katta harf qilib qaytarsin lekin 1 yoki 2 harfdan iborat sozlarni esa oz holicha qoldirsin.
// MASALAN: capitalizeWords('name should be a string') return 'Name Should be a String'

// function getCapital(str: string): any {
//    let words = str.split(" ");

//    words = words.map((word) => {
//       if (word.length > 2) {
//          return word[0].toUpperCase() + word.slice(1);
//       }
//       return word;
//    });

//    return words.join("_");
// }
// const res = getCapital("hello my name is tillo");
// console.log(res);

// ZE-TASK:

// Shunday function yozing, uni  string parametri bolsin. String ichida takrorlangan harflarni olib tashlab qolganini qaytarsin
// MASALAN: removeDuplicate('stringg') return 'string'

// function getSame(sameW: string): string {
//    let newRe;
//    let final;

//    const result = new Set(sameW);
//    final = Array.from(result);
//    newRe = final.join("");
//    return newRe;
// }
// console.log(getSame("hello"));

// function getIndex(str: string): any {
//   let res = {};

//   for (let i = 0; i < str.length; i++) {
//     let chart = str.charAt(i);
//     if (!res[chart]) {
//       res[chart] = 1;
//     } else {
//       res[chart] += 1;
//     }
//   }
//   return res;
// }

// console.log(getIndex("hellomynew"));

// let str = "hello";
// let symbol = "";
// for (let i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     symbol += "*";
//   } else {
//     symbol += str.charAt(i);
//   }
// }
// console.log(symbol);

// // ZD-TASK:

// // Shunday function yozing, uni number, array va number parametrlari bolsin va berilgan 1-parametr numberga teng indexni array ichidan topib 3-parametrdagi raqam bilan almashtirib yangilangan arrayni qaytarsin

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2]

// function changeToArr(num: number, arr: number[], res: number): number[] {
//    let final: number[] = [];
//    const tookIt = arr.indexOf(num);

//    if (tookIt !== -1) {
//       arr.splice(num, 1, res);
//    }

//    final = arr;

//    return final;
// }

// const result = changeToArr(1, [1, 3, 5, 6], 2);
// console.log(result);

// ZC-TASK:

// Shunday function yozing, uni number parametri bolsin va function qabul parametrni selsiy miqdori sifatida qabul qilib uni farenhitga ozgartirib bersin
// MASALAN: celsiusToFahrenheit(0) return 32

// function toGet(celcius: number) {
//   let f: any;
//   f = (celcius * 9) / 5 + 32;
//   return f;
// }
// const res = toGet(0);
// console.log(res);

// Z-TASK:

// Shunday function yozing, uni sonlardan tashkil topgan array qabul qilsin. Function arraydagi juft sonlarni yigindisini qaytarsin
// MASALAN: sumEvens([1,2,3]) return 2

// function getPairNums(str: number[]): number[] {
//   let res: number[] = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] % 2 == 0) {
//       res.push(str[i]);
//     }
//   }
//   return res;
// }

// const result = getPairNums([2, 3, 7, 5, 8]);
// console.log(result);

// Y-TASK:

//  Shunday function yozing, uni 2 ta array parapetri bolsin. Function ikkala arrayda ham ishtirok etgan qiymatlarni bir arrayda qaytarsin
//  MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

// function getSameNums(arr1: any[], arr2: any[]): any {
//   let arrRes2: number[] = [];

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr2.includes(arr1[i])) {
//       arrRes2.push(arr1[i]);
//     }
//   }
//   return arrRes2;
// }
// const result = getSameNums([3, 4, 5], [3, 6, 8, 4]);
// console.log(result);

// function getAccuranceOfStr(obj: any, key: string): any {
//   let count = 0;
//   let k = "";
//   for (k in obj) {
//     if (k === key) {
//       count++;
//     }
//   }

//   if (typeof obj[k] === "object" && obj[k] !== null) {
//     count += getAccuranceOfStr(obj[k], key);
//   }
//   return count;
// }

// const result = getAccuranceOfStr({ model: "BUgatti", steer: { model: "Hankook", size: 30 } }, "model");
// console.log(result);

// function getAccuranceOfStr(obj: Object, key: string): number {
//   let count = 0;

//   function currentObjSearch(currentObj: any): any {
//     let k = "";
//     for (k in currentObj) if (k === key) count++;
//     if (typeof currentObj[k] === "object" && currentObj[k] !== null) {
//       currentObjSearch(currentObj[k]);
//     }
//   }
//   currentObjSearch(obj);

//   return count;
// }

// const result = getAccuranceOfStr({ model: "BUgatti", steer: { model: "Hankook", size: 30 } }, "model");
// console.log(result);

// W-TASK:

// Shunday function yozing, uni array va number parametrlari bolsin. Function arrayni numberda berilgan uzunlikda kesib bolaklarga ajratilgan array holatida qaytarsin
// MASALAN: chunkArray([1,2,3,4,5,6,7,8,9,10], 3) return [[1,2,3], [4,5,6], [7,8,9], [10]]

// function getDividedNum<T>(array: T[], size: number): T[][] {
//   let result: T[][] = [];
//   for (let i = 0; i < array.length; i += size) {
//     result.push(array.slice(i, i + size));
//   }
//   return result;
// }

// console.log(getDividedNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// V-TASK:

// Shunday function yozing, uni string parametri bolsin va stringdagi harf va u harf necha marta takrorlangani sonidan tashkil topgan object qaytarsin.
// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// function getChars(str: string): { [key: string]: number } {
//   const charCount: { [key: string]: number } = {};

//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   return charCount;
// }

// const result = getChars("hello");
// console.log(result);

// S-TASK:

// Shunday function yozing, u numberlardan tashkil topgan array qabul qilsin va osha numberlar orasidagi tushib qolgan sonni topib uni return qilsin
// MASALAN: missingNumber([3, 0, 1]) return 2

// function getMissOne(getNum: number[]): number[] {
//   const count = 10;
//   let missingNum: number[] = [];

//   for (let i = 1; i <= count; i++) {
//     if (getNum.indexOf(i) === -1) {
//       missingNum.push(i);
//     }
//   }

//   return missingNum;
// }

// const missingNum = getMissOne([3, 4, 2]);

// console.log(missingNum);

/* Rectangle */

// R-TASK:

// Shunday function yozing, u string parametrga ega bolsin. String "1+2" holatda pass qilinganda string ichidagi sonlar yigindisini number holatda qaytarsin.
// MASALAN: calculate("1+3") return 4;

// function getOnlyPlusNums(input: string): number | null {
//   let sum = 0;
//   let foundMatch = false;

//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === "+") {
//       let leftNum = "";
//       let rightNum = "";

//       for (let j = i - 1; j >= 0 && !isNaN(parseInt(input[j])); j--) {
//         leftNum = input[j] + leftNum;
//       }

//       for (let k = i + 1; k < input.length && !isNaN(parseInt(input[k])); k++) {
//         rightNum += input[k];
//       }

//       if (leftNum && rightNum) {
//         sum += parseInt(leftNum) + parseInt(rightNum);
//         foundMatch = true;
//       }
//     }
//   }

//   return foundMatch ? sum : null;
// }

// const result = getOnlyPlusNums("jnfwn1+4wnfjwnf3wmfw2");
// console.log(result);

// P-TASK:

// Shunday function yozing, u object qabul qilsin va arrayni object arrayga otkazib arrayni qaytarsin qaytarsin.
// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

// function objToArr(obj: { [key: string]: any }): [string, any][] {
//   return Object.entries(obj);
// }
// const objInput = { name: "Tillo", age: 21 };

// const result = objToArr(objInput);

// console.log(result);

// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function getSameOnly(getSame:any){
// let  reversed = "";
// for (let i = getSame.length -1; i>= 0; i--) {
// reversed+=getSame[i];

// }
// if (getSame === reversed) {
//   return true;
// }else {
//   return false;
// }

// }

// let result = getSameOnly("dad");

// console.log(result);

// N-TASK:

// Shunday function yozing, u string qabul qilsin va string palindrom yani togri oqilganda ham, orqasidan oqilganda ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
// MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;

// function getSameOnly(str:string) {
//   str = str.toLowerCase();
//   const willUsee = str.split('').reverse().join('');
//   return str === willUsee;
// }

// console.log(getSameOnly("hello"));

// M-TASK:

// Shunday function yozing, u raqamlardan tashkil topgan array qabul qilsin va array ichidagi har bir raqam uchun raqamni ozi va hamda osha raqamni kvadratidan tashkil topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
// MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, {number: 2, square: 4}, {number: 3, square: 9}];

// function getSQ(arr: number[]):{number:number, square:number}[] {
//   let result: { number: number, square:number }[] =[];
//   let count = 0;

//   for (let num of arr) {

//       const square = num ** 2;
//       let obj = {number:num, square:square};

//       result.push(obj);
//   }

//   return  result;
// }

// const ex = getSQ([4,2,5]);
// console.log(ex);

// L-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi hamma sozlarni chappasiga yozib va sozlar ketma-ketligini buzmasdan stringni qaytarsin.
// MASALAN: reverseSentence("we like coding!") return "ew ekil gnidoc";

// function reverseSentence(str:string){
//   let asItis = str.split(' ').reverse() .join( ' ');

//     let example = ' ';

//     for (let i = asItis.length -1; i >= 0 ; i--) {
//       example+=asItis[i];

//     }

//     return example;

// }
// const result = reverseSentence("hello how are you");

// console.log(result);

// K-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;

// function getVowels(str:string){
//   let vowelCount = 0;

// for (let b = 0; b < str.length; b++) {
//  if (str[b] === "a" || str[b] === "i" || str[b] === "e" || str[b] === "o" || str[b] === "u" ) {
//   vowelCount++;
//  }

// }
// return vowelCount;

// }

// const result = getVowels("stringagmagmowemnmuenfj");
// console.log(result);

// J-TASK:

// Shunday function yozing, u string qabul qilsin va string ichidagi eng uzun sozni qaytarsin.
// MASALAN: findLongestWord("I come from Uzbekistan") return "Uzbekistan"

// function findLongestWord(str) {
//   const words = str.split(' ');

//   let longestWord = '';
//   for (let word of words) {
//       if (word.length > longestWord.length) {
//           longestWord = word;
//       }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("I come from Uzbekistan"));

// I-TASK:

// Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
// MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4

// function getMajorEle(numbers: number []){
//   let maxcount = 0;
//   let majorEle = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     let  count = 0;
//     for (let j = 0; j < numbers.length; j++)
//     if (numbers[i] == numbers[j]) {
//       count++;

//     }
// if (count  >= maxcount) {
//   maxcount = count
//   majorEle = numbers[i];
// }

// }
// return majorEle;
// }

// const result = getMajorEle([3,4,6,7,3,5,3,4,3,4,4]);

// console.log(result);

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
