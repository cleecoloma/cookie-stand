'use strict';

// Seattle Store
const seattleStore = {
  storeName: "Salmon Cookie Co.",
  address: "4567 Pine Street, Seattle, WA 98102, United States",
  phone: "+1 (555) 123-4567",
  email: "info@salmoncookieco.com",
  website: "www.salmoncookieco.com"
};

// Tokyo Store
const tokyoStore = {
  storeName: "Sakura Salmon Cookies",
  address: "789 Sakura Avenue, Shibuya, Tokyo 150-5678, Japan",
  phone: "+81 (0) 90-9876-5432",
  email: "contact@sakurasalmoncookies.jp",
  website: "www.sakurasalmoncookies.jp"
};

// Dubai Store
const dubaiStore = {
  storeName: "Desert Salmon Treats",
  address: "2345 Oasis Road, Jumeirah, Dubai 54321, United Arab Emirates",
  phone: "+971 (0) 50-6789-0123",
  email: "hello@desertsalmon.com",
  website: "www.desertsalmon.com"
};

// Paris Store
const parisStore = {
  storeName: "Le Cookie Saumon",
  address: "987 Rue de la Mode, Paris 75002, France",
  phone: "+33 (0) 1-2345-6789",
  email: "contact@lecookiesaumon.fr",
  website: "www.lecookiesaumon.fr"
};

// Lima Store
const limaStore = {
  storeName: "Andean Salmon Delights",
  address: "3456 Avenida de los Andes, Miraflores, Lima 27, Peru",
  phone: "+51 987 654 321",
  email: "info@andeansalmondreams.pe",
  website: "www.andeansalmondreams.pe"
};

const GET_CARD = document.getElementById('store-card');

function createCard() {
  let createStore = document.createElement('h2');
  let createAddress = document.createElement('p');
}
