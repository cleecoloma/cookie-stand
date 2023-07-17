'use strict';

const seattle = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiePerCustomer: 6.3,
};

const tokyo = {
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiePerCustomer: 1.2,
};

const dubai = {
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiePerCustomer: 3.7,
};

const paris = {
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiePerCustomer: 2.3,
};

const lima = {
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiePerCustomer: 4.6,
};

//This function returns a number between min and max inclusive.
function randomNumber(min, max) {
  let customerPerHour = Math.floor(Math.random() * (max - min + 1) + min);
  return customerPerHour;
}

//This object will store a key of store with a value of array of sales.
const storeData = {};

function calculateSales(storeName) {
  const storeSales = [];
  for (let i = 0; i < 14; i++) {
    let perHourSales = randomNumber(
      storeName.minCustomersPerHour,
      storeName.maxCustomersPerHour
    );
    storeSales.push(perHourSales);
    console.log(perHourSales);
  }
  console.log(storeSales);
  return storeSales;
}

calculateSales(seattle);
// console.log(storeSales);
