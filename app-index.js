'use strict';

// Seattle Store
// Store fake info from ChatGPT
const seattleStore = {
  city: "Seattle",
  storeName: "Salmon Cookie Co.",
  address: "4567 Pine Street, Seattle, WA 98102, United States",
  phone: "+1 (555) 123-4567",
  email: "info@salmoncookieco.com",
  hours: "6AM to 7PM everyday"
};

// Tokyo Store
// Store fake info from ChatGPT
const tokyoStore = {
  city: 'Tokyo',
  storeName: 'Sakura Salmon Cookies',
  address: '789 Sakura Avenue, Shibuya, Tokyo 150-5678, Japan',
  phone: '+81 (0) 90-9876-5432',
  email: 'contact@sakurasalmoncookies.jp',
  hours: '6AM to 7PM everyday',
};

// Dubai Store
// Store fake info from ChatGPT
const dubaiStore = {
  city: 'Dubai',
  storeName: 'Desert Salmon Treats',
  address: '2345 Oasis Road, Jumeirah, Dubai 54321, United Arab Emirates',
  phone: '+971 (0) 50-6789-0123',
  email: 'hello@desertsalmon.com',
  hours: '6AM to 7PM everyday',
};

// Paris Store
// Store fake info from ChatGPT
const parisStore = {
  city: 'Paris',
  storeName: 'Le Cookie Saumon',
  address: '987 Rue de la Mode, Paris 75002, France',
  phone: '+33 (0) 1-2345-6789',
  email: 'contact@lecookiesaumon.fr',
  hours: '6AM to 7PM everyday',
};

// Lima Store
// Store fake info from ChatGPT
const limaStore = {
  city: 'Lima',
  storeName: 'Andean Salmon Delights',
  address: '3456 Avenida de los Andes, Miraflores, Lima 27, Peru',
  phone: '+51 987 654 321',
  email: 'info@andeansalmondreams.pe',
  hours: '6AM to 7PM everyday',
};

// Array the consists of all stores
const stores = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore]

// This GET_CARD variable looks that the html and located where store-card id is located
const GET_CARD = document.getElementById('store-card');

// Function that loops through the stores array to append the code inside the GET_CARD variable
function createCard(stores) {
  for (let i = 0; i < 5; i++) {
    GET_CARD.innerHTML += `<div class="store">
          <h2>${stores[i].city} </h2> 
          <h3>Store: ${stores[i].storeName}</h3>
          <p>Address: ${stores[i].address}</p>
          <p>Phone: ${stores[i].phone}</p>
          <p>Email: ${stores[i].email}</p>
          <p>Hours: ${stores[i].hours}</p>
        </div>`;
  };
}

// Invokes createCard function using stores array as an argument
createCard(stores);
console.log(stores)