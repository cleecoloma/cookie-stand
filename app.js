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

//generates random number between min and max customer values
function randomNumber() {
  return Math.floor(
    Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1) +
      this.minCustomersPerHour
  );
}

//generates the sales per hour using avg cookie oer customer and random function
function salesPerHour() {
  const salesArray = [];
  for (let i = 0; i < 14; i++) {
    salesArray.push(
      Math.floor(this.randomCustomers() * this.avgCookiePerCustomer)
    );
  }
  return salesArray;
}

// global variables
let hourlyTotalArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let grandTotal = 0;

const SALES_TABLE_HEAD = document.getElementById('table-head');
const SALES_TABLE_BODY = document.getElementById('table-body');
const SALES_TABLE_FOOTER = document.getElementById('table-footer');

//displays the table head
function displayHead() {
  let rowElement = document.createElement('tr');
  let cellElement = document.createElement('td');
  cellElement.textContent = '';
  rowElement.appendChild(cellElement);
  for (let i = 0; i < 14; i++) {
    cellElement = document.createElement('td');
    cellElement.textContent = hours[i];
    rowElement.appendChild(cellElement);
  }
  cellElement = document.createElement('td');
  cellElement.textContent = 'Daily Location Total';
  rowElement.appendChild(cellElement);
  SALES_TABLE_HEAD.appendChild(rowElement);
}

//displays the table body
function displayBody() {
  let rowElement = document.createElement('tr');
  let cellElement = document.createElement('td');
  cellElement.textContent = this.name;
  rowElement.appendChild(cellElement);
  let locationTotal = 0;
  for (let i = 0; i < 14; i++) {
    cellElement = document.createElement('td');
    cellElement.textContent = this.salesData()[i];
    locationTotal += parseInt(cellElement.textContent);
    hourlyTotalArray[i] += parseInt(cellElement.textContent);
    rowElement.appendChild(cellElement);
  }
  cellElement = document.createElement('td');
  cellElement.textContent = locationTotal;
  grandTotal += locationTotal;
  rowElement.appendChild(cellElement);
  SALES_TABLE_BODY.appendChild(rowElement);
}

//displays the table footer
function displayFooter() {
  let rowElement = document.createElement('tr');
  let cellElement = document.createElement('td');
  cellElement.textContent = 'Totals';
  rowElement.appendChild(cellElement);
  for (let i = 0; i < 14; i++) {
    cellElement = document.createElement('td');
    cellElement.textContent = hourlyTotalArray[i];
    rowElement.appendChild(cellElement);
  }
  cellElement = document.createElement('td');
  cellElement.textContent = grandTotal;
  rowElement.appendChild(cellElement);
  SALES_TABLE_FOOTER.appendChild(rowElement);
}

//constructor for the stores
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
}

Store.prototype.hours = hours;
Store.prototype.displayData = displayBody;

//creates the stores from the constructor
let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

//runs the display functions to display the table
displayHead();
seattle.displayData();
tokyo.displayData();
dubai.displayData();
paris.displayData();
lima.displayData();
displayFooter();