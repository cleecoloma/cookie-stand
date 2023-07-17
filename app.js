'use strict';

const seattle = {
  minCustomersPerHour: 23,
  maxCustomersPerHour: 65,
  avgCookiePerCustomer: 6.3
}

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

function randomNumber(min, max) {
  let customerPerHour = Math.floor(Math.random() * (max - min + 1) + min);
  return customerPerHour;
}