function addToCart(productName = "Elma", quantity) {
  console.log(
    "Sepete eklendi : Ürün => " + productName + " / adet => " + quantity
  );
}

// addToCart("Elma");
addToCart("Yumurta", 10);
// addToCart("Karpuz");

let sayHello = () => {
  console.log("Hello World !");
};

sayHello();

let sayHello2 = function () {
  console.log("Hello World 2");
};

sayHello2();

console.log("");

let product1 = {
  productName: "Elma",
  unitPrice: 10,
  quantity: 5,
};

function addToCart2(product) {
  console.log("Ürün : " + product.productName);
  console.log("Adet : " + product.quantity);
  console.log("Fiyat : " + product.unitPrice);
}

addToCart2(product1);

let product2 = {
  productName: "Elma",
  unitPrice: 10,
  quantity: 5,
};

let product3 = {
  productName: "Elma",
  unitPrice: 10,
  quantity: 5,
};

product2 = product3;
product2.productName = "KARPUZ";
console.log(product3.productName);

/* 
Sayılar => değer tip
Obje ve arrayler => referans tip
*/
console.log("");

function addToCart3(products) {
  console.log(products);
}

let products = [
  {
    productName: "Elma",
    unitPrice: 10,
    quantity: 5,
  },
  {
    productName: "Armut",
    unitPrice: 10,
    quantity: 5,
  },
  {
    productName: "Karpuz",
    unitPrice: 10,
    quantity: 5,
  },
];

addToCart3(products);

console.log("");

function add(...numbers) {
  // rest operator
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  console.log(total);
}

add(20, 30);
add(20, 30, 40);
add(20, 30, 40, 50);

console.log("");

let numbers = [30, 10, 500, 600, 120];
console.log(Math.max(...numbers)); // Math.max => Belirtilen sayılardan en yüksek olanını gösterir.
// ... => spread operator

console.log("");

let [icAnadolu, Marmara, Karadeniz, [icAnadoluSehirleri]] = [
  // destructuring kullanımı
  {
    name: "İç Anadolu",
    population: "20M",
  },
  {
    name: "Marmara",
    population: "30M",
  },
  {
    name: "Karadeniz",
    population: "10M",
  },
  [
    ["Ankara", "Konya"],
    ["İstanbul", "Kocaeli"],
    ["Sinop", "Trabzon"],
  ],
];

console.log(icAnadolu.name);
console.log(icAnadolu.population);
console.log(icAnadoluSehirleri);

console.log("");

let newProductName, newunitPrice, newQuantity;

({
  productName: newProductName,
  unitPrice: newunitPrice,
  quantity: newQuantity,
} = {
  productName: "Elma",
  unitPrice: 10,
  quantity: 5,
});

console.log(newProductName);
console.log(newunitPrice);
console.log(newQuantity);