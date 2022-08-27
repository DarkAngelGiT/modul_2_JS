/* -------------------------------------------------------------------------- */
/*                             Оголошення змінних                             */
/* -------------------------------------------------------------------------- */
// змінна яка не буде змінюватись

// const productName = 'Droid';
// console.log(productName);

// const pricePerItem = 2000;
// console.log(pricePerItem);

// змінна змінювана let

// let productName = "Droid";
// let pricePerItem = 2000;

// productName = 'Repair droid';
// pricePerItem = 3500;

/* -------------------------------------------------------------------------- */
/*                            математичні оператори                           */
/* -------------------------------------------------------------------------- */

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem * orderedQuantity;

/* -------------------------------------------------------------------------- */
/*                               шаблонні рядки                               */
/* -------------------------------------------------------------------------- */
// шаблонні рядки оголошуються в зворотних кавичках!!! ``

// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

/* -------------------------------------------------------------------------- */
/*                             замовлення продукту                            */
/* -------------------------------------------------------------------------- */
// const pricePerDroid = 800;
// let orderedQuantity = 6;
// const deliveryFee = 50;
// let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

/* -------------------------------------------------------------------------- */
/*                        оголошення та виклик функції                        */
/* -------------------------------------------------------------------------- */
// function sayHi(){
//     console.log("Hello, this is my first function!");
// }

// sayHi(); виклик

// function add(a, b, c) {// параметри
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10); // аргументи
// add(10, 20, 30); // аргументи
// add(5, 10, 15); // аргументи

/* -------------------------------------------------------------------------- */
/*                             шаблонні рядки 2.0                             */
/* -------------------------------------------------------------------------- */
// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// };

/* -------------------------------------------------------------------------- */
/*                          математичні оператори 2.0                         */
/* -------------------------------------------------------------------------- */
// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = orderedQuantity * pricePerItem;
//   return totalPrice;
// };

/* -------------------------------------------------------------------------- */
/*                           замовлення продукту 2.0                          */
/* -------------------------------------------------------------------------- */
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   return message;
// }

/* -------------------------------------------------------------------------- */
/*                            функція склад товарів                           */
/* -------------------------------------------------------------------------- */
// function checkStorage(available, ordered) {
//   let message;
//     if (ordered > available) {
//       message = "Not enough goods in stock!";
//     } else {
//       message = "Order is processed, our manager will contact you.";
//     }
//   return message;
// }

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered === 0) {
//     message = "There are no products in the order!";
//   } else if (ordered > available) {
//     message = "Your order is too large, there are not enough items in stock!";
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }
//   return message;
// }

/* -------------------------------------------------------------------------- */
/*                              перевірка балансу                             */
/* -------------------------------------------------------------------------- */
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//     let totalPrice;
//     totalPrice = pricePerDroid * orderedQuantity;
//     if (totalPrice > customerCredits) {
//       message = "Insufficient funds!";
//     } else {
//       message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`;
//     }
//   return message;
// }

/* -------------------------------------------------------------------------- */
/*                          функція перевірка пароля                          */
/* -------------------------------------------------------------------------- */
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   if (password === null) {
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
//   return message;
// }

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
//   return message;
// }


/* -------------------------------------------------------------------------- */
/*                          функція обчислення знижки                         */
/* -------------------------------------------------------------------------- */
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent <20000) {
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//   }
//   return discount;
// }

/* -------------------------------------------------------------------------- */
/*                             тернарний оператор      
      змінна = умова ? істина : фолс                 */
/* -------------------------------------------------------------------------- */
// function checkStorage(available, ordered) {
//   let message;
//   message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
//   return message;
// }

/* -------------------------------------------------------------------------- */
/*                         доставка товару через світч                        */
/* -------------------------------------------------------------------------- */
// function getShippingCost(country) {
//   let message;
//   switch (country) {
//     case "China" :
//       message = "Shipping to China will cost 100 credits";
//       break;
//     case "Chile" :
//       message = "Shipping to Chile will cost 250 credits";
//       break;
//     case "Australia" :
//       message = "Shipping to Australia will cost 170 credits";
//       break;
//     case "Jamaica" :
//       message = "Shipping to Jamaica will cost 120 credits";
//       break;
//     default:
//       message = "Sorry, there is no delivery to your country";
//   }
//   return message;
// }

/* -------------------------------------------------------------------------- */
/*                                довжина рядка                               */
/* -------------------------------------------------------------------------- */
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

/* -------------------------------------------------------------------------- */
/*                         індексація елементів рядка                         */
/* -------------------------------------------------------------------------- */
// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

/* -------------------------------------------------------------------------- */
/*                                МЕТОД SLICE()        
використовується для створення копії частини або всього рядка.                */
/* -------------------------------------------------------------------------- */
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line
  
//   return substring;
// }

/* -------------------------------------------------------------------------- */
/*                          форматування повідомлення                         */
/* -------------------------------------------------------------------------- */
// function formatMessage(message, maxLength) {
//   let result;
//   if(message.length>maxLength){
//     result=message.slice(0,maxLength)+"...";
//   }else{
//     result=message;
//   }
//   return result;
// }

/* -------------------------------------------------------------------------- */
/*                      Метод рядків includes(substring)   
перевіряє, чи входить підрядок substring у рядок                              */
/* -------------------------------------------------------------------------- */
// function checkForName(fullName, name) {
//  const result = fullName.includes(name); // Change this line
//   return result;
// }

/* -------------------------------------------------------------------------- */
/*                               перевірка спаму                              */
/* -------------------------------------------------------------------------- */
// function checkForSpam(message) {
//   let result;
//   message = message.toLowerCase();
//   if (message.includes("spam") || message.includes("sale"))  
//   {
//     result = true;
//   } else {
//     result = false;
//   } 
//   return result;
// }