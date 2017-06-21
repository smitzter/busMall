'use strict';

// for (var p = 0; p < productNames.length; p++)
var productNames = ['babySweep', 'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair','cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissor', 'shark', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass' ]
// }
console.log(productNames);

var productName = '';
var productImage1 = '';
var productImage2 = '';
var productImage3 = '';

//TODO automate var from Array
// var arrayOfObjects = [];
// for (var i=0; i < )
var attempts = 0;
var maxAttempts = 25;
var babySweep = 0;
var bag = 0;
var banana = 0;
var bathroom = 0;
var boots = 0;
var breakfast = 0;
var bubblegum = 0;
var chair = 0;
var cthulhu = 0;
var dogDuck = 0;
var dragon = 0;
var pen = 0;
var petSweep = 0;
var scissor = 0;
var shark = 0;
var tauntaun =0;
var unicorn = 0;
var usb = 0;
var waterCan = 0;
var wineGlass = 0;

var productImageParent = document.getElementById('productImage');
var responseParent = document.getElementById('response');

function setup() {
  //think about what does setup do
  //name var = element(object)
  productImage1 = generateRandomProduct();
  productImage2 = generateRandomProduct();
  productImage3 = generateRandomProduct();
//TODO make random not equal last 3 nor other 2
  if (attempts) {
    productImageParent.removechild(productImageParent.lastChild);
    productImageParent.removechild(productImageParent.lastChild);
    productImageParent.removechild(productImageParent.lastChild);
  }
  // for (var p = 0; p < 3; i++) {
  //   productNames ;
  // }
  renderProductImage(productImage1);
  renderProductImage(productImage2);
  renderProductImage(productImage3);
  // updateAnswer();
  // updateAttempts();
}
setup();
renderResponse();

productImageParent.addEventListener('render', function(render) {
  var display = event.target.getAttribute('id');
  //same logic as below? Find a way to loop this to make code dry
});

productImageParent.addEventListener('click', function(event) {
  if (attempts === maxAttempts) {
    return;
  }

  var answer = event.target.getAttribute('id');
  attempts++;
//for i statement - constructor
  if (answer === [0]) {
    babySweep++;
  } else if (answer === [1]) {
    bag++;
  } else if (answer === [2]) {
    banana++;
  } else if (answer === [3]) {
    bathroom++;
  } else if (answer === [4]) {
    boots++;
  } else if (answer === [5]) {
    breakfast++;
  } else if (answer === [6]) {
    bubblegum++;
  } else if (answer === [7]) {
    chair++;
  } else if (answer === [8]) {
    cthulhu++;
  } else if (answer === [9]) {
    dogDuck++;
  } else if (answer === [10]) {
    dragon++;
  } else if (answer === [11]) {
    pen++;
  } else if (answer === [12]) {
    petSweep++;
  } else if (answer === [13]) {
    scissor++;
  } else if (answer === [14]) {
    shark++;
  } else if (answer === [15]) {
    tauntaun++;
  } else if (answer === [16]) {
    unicorn++;
  } else if (answer === [17]) {
    usb++;
  } else if (answer === [18]) {
    waterCan++;
  } else if (answer === [19]) {
    wineGlass++;
  } else {
    alert('please click on image');
  }

  if (attempts === maxAttempts) {
    chart();
  }
});

function generateRandomProduct() {
  var index = Math.floor(Math.random() * productNames.length);
  return productNames[index];
}
// function updateProductName (productName) {
//   productNameElement.textcontent = productName;
// }
// function renderProductName (productName) {
//   var h3 = document.createElement('h3');
//   h3.textContent = productName;
//   productNameParent.append('h3');
// }
function buttonLogic() {
  var productName = [], answer = [];
  for (var i = 0; i < productNames.length; i++){
    productName.push(productName[i].name);
    answer.push(productNames[i]).clicked;
  }
//return logic
  function data() {
    document.getElementById('data');
    for (var i = 0; i < productNames.length; i++){
      productName.push(productName[i].name);
      answer.push(productNames[i]).clicked;
    }
  }

//
// for (var n = 0; n < productNames.length; n++) {
//   arrayofObjects.push(ProductName = productNames[n]);
// }
// console.log(ProductName);

// for (var i = 0; i < 3; i++) {
//   arrayofObjects.push(productImage + i = ProductName);
// }
function updateProductName (productName) {
  productNameElement.textContent = productName;
}

function renderProductImage (productNames) {
  var img = document.createElement('img');
  img.setAttribute('src', 'img/' + productName + '.jpg' );
  img.setAttribute('id', productNames);
  productImageParent.append(img);
}
console.log(productNames);

// productImageOne = productImage;
// productImageTwo = productImage;
// productImage3 = productImage;

//
function renderResponse(response) {
  responseElement.textContent = response;
  // var p = document.createElement('p');
  // p.textContent = response;
  // responseParent.append(p);
}
//answers but needs to reiterate
function updateAnswer () {
  answerElement.textContent = answer;
}
//counts down attempts to 0
function updateAttempts () {
  attmeptsElement.textcontent = maxAttempts - attempts;
}

////////////////////////////////
function chart () {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
}

var chart = new Chart(ctx, {
  type: 'bar',

  data: {
    labels: ['answer', 'attempts'],
    datasets: [{
      label: '# of correct answers',
      backgroundColor: 'rgb(2, 98, 252)',
      borderColor: '000f28',
      data: [score, maxAttempts],
    }]
  },

  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

function draw() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#52018c';
  ctx.fillRec(10, 10, 20, 100);

  ctx.fillStyle = '#8c0087';
  ctx.fillRec(80, 10, 20, 100);

  ctx.fillText('Words', 10, 100);
}
