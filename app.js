'use strict';

// This function returns a number between min and max inclusive.
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const store1 = {
  name: 'Seattle',
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiePerCustomer: 6.3,
  randomCustomers: function () {
    return randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
    // return Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) + this.minCustomersPerHour);
  },
};

const store2 = {
  name: 'Tokyo',
  minCustomersPerHour: 3,
  maxCustomersPerHour: 24,
  avgCookiePerCustomer: 1.2,
  randomCustomers: function () {
    return randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
  },
};

const store3 = {
  name: 'Dubai',
  minCustomersPerHour: 11,
  maxCustomersPerHour: 38,
  avgCookiePerCustomer: 3.7,
  randomCustomers: function () {
    return randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
  },
};

const store4 = {
  name: 'Paris',
  minCustomersPerHour: 20,
  maxCustomersPerHour: 38,
  avgCookiePerCustomer: 2.3,
  randomCustomers: function () {
    return randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
  },
};

const store5 = {
  name: 'Lima',
  minCustomersPerHour: 2,
  maxCustomersPerHour: 16,
  avgCookiePerCustomer: 4.6,
  randomCustomers: function () {
    return randomNumber(this.minCustomersPerHour, this.maxCustomersPerHour);
  },
};

function calculateSales(storeName) {
  const storeSales = []; //this array will store the sales per hour
  //this for loop will calculate the sales per hours
  for (let i = 0; i < 14; i++) {
    let perHourSales = storeName.randomCustomers();
    storeSales.push(perHourSales);
  }
  storeName.sales = storeSales; //add a property to the store with key of sales and value of the storeSales array.
  console.log(storeName);
  return storeSales;
}

calculateSales(store1);
calculateSales(store2);
calculateSales(store3);
calculateSales(store4);

function createSalesPerHour(store) {
  let total = 0; //this variable tracks the total amount of sales
  let unorderedList = document.getElementById('store');
  let mainName = document.createElement('p');
  mainName.textContent = store.name;
  unorderedList.appendChild(mainName);
  let liName = document.getElementById('store');
  for (let i = 0; i < store.sales.length; i++) {
    if (i < 6) {
      total += store.sales[i];
      let listItem = document.createElement('li');
      listItem.textContent = i + 6 + 'am: ' + store.sales[i] + ' cookies';
      liName.appendChild(listItem);
    } else if (i === 6) {
      total += store.sales[i];
      let listItem = document.createElement('li');
      listItem.textContent = i + 6 + 'pm: ' + store.sales[i] + ' cookies';
      liName.appendChild(listItem);
    } else {
      total += store.sales[i];
      let listItem = document.createElement('li');
      listItem.textContent = i - 6 + 'pm: ' + store.sales[i] + ' cookies';
      liName.appendChild(listItem);
    }
  }
  let listItem = document.createElement('li');
  listItem.textContent = 'Total: ' + total + ' cookies';
  liName.appendChild(listItem);
}

createSalesPerHour(store1);
createSalesPerHour(store2);
createSalesPerHour(store3);
createSalesPerHour(store4);
