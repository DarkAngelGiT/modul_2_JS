/* -------------------------------------------------------------------------- */
/*                             function expression                            */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                 рекомендований синтаксис створення функцій                 */
/* -------------------------------------------------------------------------- */
// const greet = function (name) {
//  return `Hello, ${name}`;
// };

/* -------------------------------------------------------------------------- */
/*                          Як швидко очистити масив                          */
/* -------------------------------------------------------------------------- */
// const fruits = ['banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple'];
// fruits.length = 0;
// console.log(fruits); // поверне []

/* -------------------------------------------------------------------------- */
/*                      Як об’єднати більше двох масивів                      */
/* -------------------------------------------------------------------------- */
// const fruits = ['apple', 'banana', 'orange'];
// const meat = ['poultry', 'beef', 'fish'];
// const vegetables = ['potato', 'tomato', 'cucumber'];
// const food = [...fruits, ...meat, ...vegetables];
// console.log(food); // поверне ["apple", "banana", "orange", "poultry", "beef", "fish", "potato", "tomato", "cucumber"]

/* -------------------------------------------------------------------------- */
/*                    Як отримати рандомне значення масиву                    */
/* -------------------------------------------------------------------------- */
// const fruits = [ 'banana', 'apple', 'orange', 'watermelon', 'apple', 'orange', 'grape', 'apple', ];
// const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
// console.log(randomFruit); // поверне рандомний фрукт із масиву

/* -------------------------------------------------------------------------- */
/*                              РАННЄ ПОВЕРНЕННЯ                              */
/* -------------------------------------------------------------------------- */
// function checkAge(age) {
//   if (age >= 18) { // Change this line
//     return "You are an adult";
//   }

//   return "You are a minor";
// }

/* -------------------------------------------------------------------------- */
/*                              перевірка пароля                              */
/* -------------------------------------------------------------------------- */
// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//     return "Access denied, wrong password!";
// }

/* -------------------------------------------------------------------------- */
/*                              Склад товарів 3.0                             */
/* -------------------------------------------------------------------------- */
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
// }

/* -------------------------------------------------------------------------- */
/*                      ПЕРЕВИЗНАЧЕННЯ ЗНАЧЕННЯ ЕЛЕМЕНТА МАСИВУ               */
/* -------------------------------------------------------------------------- */
// const fruits = ["apple", "plum", "pear", "orange"];
// fruits[1] = "peach";
// fruits[3] = "banana";

/* -------------------------------------------------------------------------- */
/*                           Останній елемент масиву                          */
/* -------------------------------------------------------------------------- */
// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

/* -------------------------------------------------------------------------- */
/*                      Перетворення рядка/слова в масив                      */
/* -------------------------------------------------------------------------- */
// function splitMessage(message, delimeter) {
//   let words;917 9317 5033
//   words = message.split(delimeter);
//   return words;
// }

/* -------------------------------------------------------------------------- */
/*                 гравірування прикрас, оплата за кожне слово                */
/* -------------------------------------------------------------------------- */
// function calculateEngravingPrice(message, pricePerWord) {
//   let array;
//   array = message.split(" ");
//   return array.length * pricePerWord;
// }

/* -------------------------------------------------------------------------- */
/*                      об"єднання ел-тів масиву в рядок                      */
/* -------------------------------------------------------------------------- */
// function makeStringFromArray(array, delimeter) {
//   let string;
// string = array.join(delimeter);
//   return string;
// }

/* -------------------------------------------------------------------------- */
/*                               ГЕНЕРАТОР SLUG                               */
/* -------------------------------------------------------------------------- */
// читабельні урл адреси

// function slugify(title) {
// let slug;
//  slug = ((title.toLowerCase()).split(" ")).join("-");
//   return slug;
// }

/* -------------------------------------------------------------------------- */
/*                                 Метод слайс                                */
/* -------------------------------------------------------------------------- */
// копія частини масиву

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length-1);
// const lastThreeEls = fruits.slice(-3);

/* -------------------------------------------------------------------------- */
/*                             Об"єднання масивів                             */
/* -------------------------------------------------------------------------- */
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

/* -------------------------------------------------------------------------- */
/*                             КОМПОЗИЦІЯ МАСИВІВ                             */
/* -------------------------------------------------------------------------- */
// function makeArray(firstArray, secondArray, maxLength) {
// const array = firstArray.concat(secondArray);
// if (array.length > maxLength) {
//   return array.slice(0, maxLength)
// }
// return array;
//   }

/* -------------------------------------------------------------------------- */
/*                             Цикл фор сума чисел                            */
/* -------------------------------------------------------------------------- */
// function calculateTotal(number) {
// let sum = 0;
// for (let i = 0; i <= number; i += 1) {
//    sum += i;
// }
// return sum;
// }

/* -------------------------------------------------------------------------- */
/*                             Ітерація по масиву                             */
/* -------------------------------------------------------------------------- */
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

/* -------------------------------------------------------------------------- */
/*                           обчислення суми покупки                          */
/* -------------------------------------------------------------------------- */
// function calculateTotalPrice(order) {
//   let total = 0;
// for (let i = 0; i < order.length; i += 1) {
//    total += order[i];
// }
//   return total;
// }

/* -------------------------------------------------------------------------- */
/*                           Пошук найдовшого слова                           */
/* -------------------------------------------------------------------------- */
// function findLongestWord(string) {
// let array = string.split(" ");
// let longestWord = "";
//   for (let i = 0; i < array.length; i+=1) {
//     if (array[i].length > longestWord.length) {
//       longestWord = array[i];
//     }
//   }
// return longestWord;
// }

/* -------------------------------------------------------------------------- */
/*                   Метод ПУШ, додавання елементів в масив                   */
/* -------------------------------------------------------------------------- */
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
// for (let i = min; i <= max; i+=1) {
//   numbers.push(i);
// }
//   return numbers;
// }

/* -------------------------------------------------------------------------- */
/*                              Фільтрація масиву                             */
/* -------------------------------------------------------------------------- */
// function filterArray(numbers, value) {
// const maxNumbers=[];
//   for (let i = 0; i < numbers.length; i+=1) {
//     if (numbers[i] > value) {
//       maxNumbers.push(numbers[i]);
//     }
//   }
// return maxNumbers;
// }
// ===========================================
// function filterArray(numbers, value) {
// const filteredNumbers = [];

//   for (let i of numbers) {
//     const number = i;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }


/* -------------------------------------------------------------------------- */
/*                        Пошук в масиві на присутність                       */
/* -------------------------------------------------------------------------- */
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit); // Change this line
// }

/* -------------------------------------------------------------------------- */
/*                     Пошук спільних елементів в масивах                     */
/* -------------------------------------------------------------------------- */
// function getCommonElements(array1, array2) {
// const array = [];
//   let len = array1.length;
//   for (let i = 0; i < len; i+=1) {
//   if (array2.includes(array1[i])) {
//     array.push(array1[i]);
//   }
// }
// return array;
// }

/* -------------------------------------------------------------------------- */
/*                      Цикл For .. of перебирання масиву                     */
/* -------------------------------------------------------------------------- */
// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const i of order) {
//     total += i;
//   }

//   return total;
// }

/* -------------------------------------------------------------------------- */
/*                             пошук парних чисел                             */
/* -------------------------------------------------------------------------- */
// function getEvenNumbers(start, end) {
// let array = [];
// for (let i = start; i <= end; i+=1) {
//   if (i % 2 === 0) {
//     array.push(i);
//   }
// }
//   return array;
//   }

/* -------------------------------------------------------------------------- */
/*                         переривання виконання циклу                        */
/* -------------------------------------------------------------------------- */
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

/* -------------------------------------------------------------------------- */
/*               переривання виконання і циклу і функції Return               */
/* -------------------------------------------------------------------------- */
// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
      
//     }
//   }
// }

/* -------------------------------------------------------------------------- */
/*                             ФУНКЦІЯ INCLUDES()                             */
/* -------------------------------------------------------------------------- */
// те саме що і метод.includes()

// function includes(array, value) {
// for (let i = 0; i < array.length; i+=1) {
//   if (array[i] === value) {
//     return true;
//   }
// }
//   return false;
// }

/* -------------------------------------------------------------------------- */
/*                     пошук максимального числа з масиву                     */
/* -------------------------------------------------------------------------- */
// let num = [1,2,3,4,5,6]

//  function find_max(nums) {
//  let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
//  for (let num of nums) {
//  if (num > max_num) {
//    max_num = num;
//  }
//  }
//  return max_num;
//  }

// console.log(find_max(num))


/* -------------------------------------------------------------------------- */
/*                   знайти пару чисел, сума яких дорівнює К                  */
/* -------------------------------------------------------------------------- */
let arr = [-3, 0, 1, 2, 3, 4]
const k = 5;
let a = [];
let b = {}

function twoSum(array, y) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] + array[j] === y) {
        // return `${array[i]}  ${array[j]}` // повертає першу пару чисел
        console.log(array[i], array[j]) // повертає всі можливы пари чисел
        // a.push(array[i], array[j]) // записуємо числа в новий масив
        b.number1 = array[i];
        b.number2 = array[j];
      }   
    }    
  }  
}

const z = twoSum(arr,k)
// console.log(a) // новий масив
console.log(b) // новий об"єкт