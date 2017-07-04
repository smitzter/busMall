'use strict';

var productNames = ['babySweep', 'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissor', 'shark', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'];
console.log(productNames);
console.log(productNames[19]);
// var productNameOne = '';
var productNameTwo = '';
var productNameThree = '';
var productImageOne = '';
var productImageTwo = '';
var productImageThree = '';
// var productNameParent = document.getElementById('productName');
var productImagesParent = document.getElementById(img);
// var responseParent = document.getElementById('response');

//automate var from Array
function generateRandomProduct() {
  var index = Math.floor(Math.random() * productNames.length);
  return index;
}

function generateImg(img1, img2) {
  do {
    var proImg = generateRandomProduct();
  } while (proImg == img1 && proImg == img2);
  productImageOne = generateRandomProduct('', '');
  productImageTwo = generateImg(productImageOne, generateRandomProduct());
  productImageThree = generateImg(productImageOne, productImageTwo);
  renderProductName(productNameTwo);
  renderProductImages(productImageTwo);
  renderProductName(productNameThree);
  renderProductImages(productImageThree);
  return proImg;
};

console.log(productImageOne);
console.log(productImageTwo);
console.log(productImageThree);
console.log(generateImg);

// function renderProductImages(productImages) {
//   var imgEl = document.createElement(img);
//   imgEl.setAttribute('src', 'img/' + productImages + '.jpg');
//   imgDiv.appendChild(imgEl);
//   imgDiv.setAttribute('id', productImages);
//   productImagesParent.append(img);
// }
console.log(img);
document.write(img);
// console.log(renderProductImages);

function renderProductName(productNames) {
  var productplaceImg = document.createElement(img);
  productplaceImg.setAttribute('src', productNames.path);
  productplaceImg.setAttribute('width', '200px');
  prodtplaceImg.setAttribute('height', '200px');
  document.body.appendChild(productplaceImg);
}

console.log(renderProductName);

// variables
// var babySweep = 0;
// var bag = 0;
// var banana = 0;
// var bathroom = 0;
// var boots = 0;
// var breakfast = 0;
// var bubblegum = 0;
// var chair = 0;
// var cthulhu = 0;
// var dogDuck = 0;
// var dragon = 0;
// var pen = 0;
// var petSweep = 0;
// var scissor = 0;
// var shark = 0;
// var tauntaun = 0;
// var unicorn = 0;
// var usb = 0;
// var waterCan = 0;
// var wineGlass = 0;

// productImagesParent.addEventListener('render', function(render) {
//   var display = event.target.getAttribute('id');
//   //same logic as below? Find a way to loop this to make code dry
// });

// productImagesParent.addEventListener('click', function(event) {
//   var answer = event.target.getAttribute('id');
//   console.log('id');
//   if (answer != []) {
//     alert('please click on image');
//   }
//   if (answer === [0]) {
//     console.log(babySweep += 1);
//   } else if (answer === [1]) {
//     console.log(bag += 1);
//   } else if (answer === [2]) {
//     console.log(banana += 1);
//   } else if (answer === [3]) {
//     console.log(bathroom += 1);
//   } else if (answer === [4]) {
//     console.log(boots += 1);
//   } else if (answer === [5]) {
//     console.log(breakfast += 1);
//   } else if (answer === [6]) {
//     console.log(bubblegum += 1);
//   } else if (answer === [7]) {
//     console.log(chair += 1);
//   } else if (answer === [8]) {
//     console.log(cthulhu += 1);
//   } else if (answer === [9]) {
//     console.log(dogDuck += 1);
//   } else if (answer === [10]) {
//     console.log(dragon += 1);
//   } else if (answer === [11]) {
//     console.log(pen += 1);
//   } else if (answer === [12]) {
//     console.log(petSweep += 1);
//   } else if (answer === [13]) {
//     console.log(scissor += 1);
//   } else if (answer === [14]) {
//     console.log(shark += 1);
//   } else if (answer === [15]) {
//     console.log(tauntaun += 1);
//   } else if (answer === [16]) {
//     console.log(unicorn += 1);
//   } else if (answer === [17]) {
//     console.log(usb += 1);
//   } else if (answer === [18]) {
//     console.log(waterCan += 1);
//   } else if (answer === [19]) {
//     console.log(wineGlass += 1);
//   } else {
//     alert('please click on image');
//   }
// });



// function renderResponse(response) {
//   var p = document.createElement('p');
//   p.textContent = response;
//   responseParent.append(p);
// }
