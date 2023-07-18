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
    cellElement.textContent = this.hours[i];
    rowElement.appendChild(cellElement);
    SALES_TABLE_HEAD.appendChild(rowElement);
  }
}

function displayBody() {
  let rowElement = document.createElement('tr');
  let cellElement = document.createElement('td');
  cellElement.textContent = '';
  rowElement.appendChild(cellElement);
  SALES_TABLE_HEAD.appendChild(rowElement);
  for (let i = 0; i < 14; i++) {
    let cellElement = document.createElement('td');
    cellElement.textContent = this.hours[i];
    rowElement.appendChild(cellElement);
    SALES_TABLE_HEAD.appendChild(rowElement);
  }
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
Store.prototype.displayData = displayBody;

let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);


console.log(seattle.dailyData());
console.log(tokyo.dailyData());
console.log(dubai.dailyData());
seattle.displayData();
