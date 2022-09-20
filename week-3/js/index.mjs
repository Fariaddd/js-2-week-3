import '../style.css'
import { calculateTax } from './tax.mjs';
import { formatCurrency } from './utils.mjs';
import { displayAmount } from './display.mjs';
const itemPrice = 100;
const tax = 15;

const itemPriceWithTax = calculateTax(itemPrice, tax)

console.log("itemPriceWithTax", itemPriceWithTax);

const formattedItemPriceWithTax = formatCurrency(itemPriceWithTax,"ZAR")
console.log("formattedItemPriceWithTax", formattedItemPriceWithTax);
// task
// tax is 15% 
// price is 100

//   amount +amount * (tax precentage / 100)


// toFixed() 
// let num = 5.56742

// let fixedNum = num.fixedNum();
// console.log(fixedNum);


// let num = 5.56742

// let fixedNum = num.fixedNum(2); // it gets 00 after . depends how many decimallTall you want.
// console.log(fixedNum);

// simple example



