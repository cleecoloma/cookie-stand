'use strict';

const store1 = {
  name: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiePerCustomer: 6.3,
};

const store2 = {
  name: 'Tokyo',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiePerCustomer: 1.2,
};

const store3 = {
  name: 'Dubai',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiePerCustomer: 3.7,
};

const store4 = {
  name: 'Paris',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiePerCustomer: 2.3,
};

const store5 = {
  name: 'Lima',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiePerCustomer: 4.6,
};

//This function returns a number between min and max inclusive.
function randomNumber(min, max) {
  let customerPerHour = Math.floor(Math.random() * (max - min + 1) + min);
  return customerPerHour;
}

function calculateSales(storeName) {
  const storeSales = []; //this array will store the sales per hour
  //this for loop will calculate the sales per hours
  for (let i = 0; i < 14; i++) {
    let perHourSales = randomNumber(
      storeName.minCustomersPerHour,
      storeName.maxCustomersPerHour
    );
    storeSales.push(perHourSales);
    // console.log(perHourSales);
  }
  // console.log(storeSales);
  storeName.sales = storeSales;
  console.log(storeName);
  return storeSales;
}

calculateSales(store1);
// console.log(storeSales);
