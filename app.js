'use strict';

// This function returns a number between min and max inclusive.
function randomNumber() {
  return Math.floor(
    Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) +
      this.minCustomersPerHour
  );
}

function salesPerHour() {
  const salesArray = [];
  for (let i = 0; i < 14; i++) {
    salesArray.push(Math.floor(this.randomCustomers() * this.avgCookiePerCustomer));
  }
  return salesArray;
}

function dailyTotal() {
  let daily = 0;
  for (let i = 0; i < 14; i++) {
    daily += this.salesData()[i];
  }
  return daily;
}

function Store(name, minCustomersPerHour, maxCustomersPerHour, avgCookiePerCustomer) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
}

Store.prototype.hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];
Store.prototype.randomCustomers = randomNumber;
Store.prototype.salesData = salesPerHour;
Store.prototype.dailyData = dailyTotal;

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

// console.log(seattle.randomCustomers());
// console.log(salesArray)
// console.log(seattle.salesData());
console.log(seattle.dailyData());
console.log(tokyo.dailyData());
console.log(dubai.dailyData());

// function createSalesPerHour(store) {
//   let total = 0; //this variable tracks the total amount of sales
//   let unorderedList = document.getElementById('store');
//   let mainName = document.createElement('h2');
//   mainName.textContent = store.name;
//   unorderedList.appendChild(mainName);
//   let liName = document.getElementById('store');
//   for (let i = 0; i < store.sales.length; i++) {
//     if (i < 6) {
//       total += store.sales[i];
//       let listItem = document.createElement('li');
//       listItem.textContent = i + 6 + 'am: ' + Math.floor(store.sales[i] * store.avgCookiePerCustomer) + ' cookies';
//       liName.appendChild(listItem);
//     } else if (i === 6) {
//       total += store.sales[i];
//       let listItem = document.createElement('li');
//       listItem.textContent =
//         i +
//         6 +
//         'pm: ' +
//         Math.floor(store.sales[i] * store.avgCookiePerCustomer) +
//         ' cookies';
//       liName.appendChild(listItem);
//     } else {
//       total += store.sales[i];
//       let listItem = document.createElement('li');
//       listItem.textContent =
//         i -
//         6 +
//         'pm: ' +
//         Math.floor(store.sales[i] * store.avgCookiePerCustomer) +
//         ' cookies';
//       liName.appendChild(listItem);
//     }
//   }
//   let listItem = document.createElement('li');
//   listItem.textContent = 'Total: ' + total + ' cookies';
//   liName.appendChild(listItem);
// }

// createSalesPerHour(store1);
// createSalesPerHour(store2);
// createSalesPerHour(store3);
// createSalesPerHour(store4);
