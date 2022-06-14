"use strict";

const itemsData = [
  {
    image: "./assets/item1.png",
    name: "Casque Bluetooth DeFunc",
    price: 39.99,
  },
  {
    image: "./assets/item2.png",
    name: "Inkax HP-07",
    price: 50.99,
  },
  {
    image: "./assets/item3.png",
    name: "L'avvento (HP07N)",
    price: 60.99,
  },
  {
    image: "./assets/item4.png",
    name: "Bluetooth inkax HP-05",
    price: 41.99,
  },
];

const displayProductsElement = document.querySelector(".displayProducts");

const displayProducts = (data) => {
  data.forEach((item) => {
    const productsHTML = `
    <li>
        <div class="card">
            <div class="cardImg"><img src="${item.image}" alt="${item.name}"></div>
                <div class="cardInfo">
                <p>${item.name}</p>
                <h3>${item.price} KM</h3>
                </div>
        </div>
    </li>`;

    console.log("ola");
    console.log(productsHTML);
    displayProductsElement.insertAdjacentHTML("afterbegin", productsHTML);
  });
};

console.log('====================================');
console.log(itemsData);
console.log('====================================');

displayProducts(itemsData);
