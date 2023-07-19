'use strict';

// This function returns a number between min and max inclusive.
const hours = [
  '6:00am',
  '7:00am',
  '8:00am',
  '9:00am',
  '10:00am',
  '11:00am',
  '12:00pm',
  '1:00pm',
  '2:00pm',
  '3:00pm',
  '4:00pm',
  '5:00pm',
  '6:00pm',
  '7:00pm',
];

function randomNumber() {
  return Math.floor(
    Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) +
      this.minCustomersPerHour
  );
}

function salesPerHour() {
  const salesArray = [];
  for (let i = 0; i < 14; i++) {
    salesArray.push(
      Math.floor(this.randomCustomers() * this.avgCookiePerCustomer)
    );
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

let hourlyTotalArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let grandTotal = 0;

const SALES_TABLE_HEAD = document.getElementById('table-head');
const SALES_TABLE_BODY = document.getElementById('table-body');
const SALES_TABLE_FOOTER = document.getElementById('table-footer');

function displayHead() {
  let rowElement = document.createElement('tr');
  let cellElement = document.createElement('td');
  cellElement.textContent = '';
  rowElement.appendChild(cellElement);
  SALES_TABLE_HEAD.appendChild(rowElement);
  for (let i = 0; i < 14; i++) {
    let cellElement = document.createElement('td');
    cellElement.textContent = hours[i];
    rowElement.appendChild(cellElement);
  }
  cellElement = document.createElement('td');
  cellElement.textContent = 'Daily Location Total';
  rowElement.appendChild(cellElement);
}

function displayBody() {
  let rowElement = document.createElement('tr');
  let cellElement = document.createElement('td');
  cellElement.textContent = this.name;
  rowElement.appendChild(cellElement);
  SALES_TABLE_BODY.appendChild(rowElement);
  for (let i = 0; i < 14; i++) {
    let cellElement = document.createElement('td');
    cellElement.textContent = this.salesData()[i];
    hourlyTotalArray[i] += parseInt(cellElement.textContent);
    rowElement.appendChild(cellElement);
  }
  cellElement = document.createElement('td');
  cellElement.textContent = this.dailyData();
  grandTotal += parseInt(cellElement.textContent);
  rowElement.appendChild(cellElement);
}

function displayFooter() {
  let rowElement = document.createElement('tr');
  let cellElement = document.createElement('td');
  cellElement.textContent = 'Totals';
  rowElement.appendChild(cellElement);
  SALES_TABLE_FOOTER.appendChild(rowElement);
  for (let i = 0; i < 14; i++) {
    let cellElement = document.createElement('td');
    cellElement.textContent = hourlyTotalArray[i];
    rowElement.appendChild(cellElement);
  }
  cellElement = document.createElement('td');
  cellElement.textContent = grandTotal;
  rowElement.appendChild(cellElement);
}

function Store(
  name,
  minCustomersPerHour,
  maxCustomersPerHour,
  avgCookiePerCustomer
) {
  this.name = name;
  this.minCustomersPerHour = minCustomersPerHour;
  this.maxCustomersPerHour = maxCustomersPerHour;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.randomCustomers = randomNumber;
  this.salesData = salesPerHour;
  this.dailyData = dailyTotal;
}

Store.prototype.hours = hours;
// Store.prototype.randomCustomers = randomNumber;
// Store.prototype.salesData = salesPerHour;
// Store.prototype.dailyData = dailyTotal;
Store.prototype.displayData = displayBody;

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

displayHead();
seattle.displayData();
tokyo.displayData();
dubai.displayData();
paris.displayData();
lima.displayData();
displayFooter();
console.log(hourlyTotalArray);