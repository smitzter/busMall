'use strict';

//Inspired often by Sugey & Jon & the first 24
///var///////////
var product;
var img;
var newImg;
var pushImg;
var img1;
var img2;
var img3;
var attempts = 0;
var maxAttempts = 25;
//get placing from website///
var productImageParent = document.getElementById('ImageAll');
var productImg1 = document.getElementById('img1');
var productImg2 = document.getElementById('img2');
var productImg3 = document.getElementById('img3');


///calls////
renderProductImage();
render();
updateAttempts();
countViews();
countClicks();
localData();
localStorage();
retrieveData();
///Constuctor functions///
//array to feed constructor function: (imageNmae, location, views, clicks) MakeImage calls at end
function MakeImage (name, filepath, timesShown, clicks) {
  this.name = name,
  this.filepath = filepath,
  this.timesShown = 0,
  this.clicks = 0,
  pushImg.push(this);
}
  //////////////////
new MakeImage('babySweep', 'img/babySweep.jpg', 0, 0);
new MakeImage('bag', 'img/bag.jpg', 0, 0);
new MakeImage('bathroom', 'img/bathroom.jpg', 0, 0);
new MakeImage('breakfast', 'img/breakfast.jpg', 0, 0),
new MakeImage('bubblegum', 'img/bubblegum.jpg', 0, 0),
new MakeImage('chair', 'img/chair.jpg', 0, 0),
new MakeImage('cthulhu', 'img/cthulhu.jpg', 0, 0),
new MakeImage('dogDuck', 'img/dogDuck.jpg', 0, 0),
new MakeImage('dragon', 'img/dragon.jpg', 0, 0),
new MakeImage('pen', 'img/pen.jpg', 0, 0),
new MakeImage('petSweep', 'img/petSweep.jpg', 0, 0),
new MakeImage('scissors', 'img/scissors.jpg', 0, 0),
new MakeImage('shark', 'img/shark.jpg', 0, 0),
new MakeImage('tauntaun', 'img/tauntaun.jpg', 0, 0),
new MakeImage('unicorn', 'img/unicorn.jpg', 0, 0),
new MakeImage('usb', 'img/usb.jpg', 0, 0),
new MakeImage('waterCan', 'img/waterCan.jpg', 0, 0),
new MakeImage('wineGlass', 'img/wineGlass.jpg', 0, 0);


///functions//////////////////////

//Limit Attempts///
if (attempts === maxAttempts) {
  chart();
}
//pull three from array///


function imgPath() {
  var ip = MakeImage.setAttribute('src');
  ip.value = product.path;
  img.setAttributeNode(ip);
}
//render with math random///
//check for dups///
function render() {
  var randomImg = function() {
    img1 = Math.floor(Math.random() * imgPath.length);
    img2 = Math.floor(Math.random() * imgPath.length);
    img3 = Math.floor(Math.random() * imgPath.length);
    newImg = [];
    pushImg.push(img1, img2, img3);
  };
  while ( event.target.id === img1.name || event.target.id === img2.name || event.target.id === img3.name) {
    randomImg();
  }
}

//put three img into placing///
function renderProductImage (products, imgAll) {
  var x = document.getElementById('id'); document.createAttribute('src');
  x.value = 'filepath';
  x.setAttributeNode(x);
  console.log(node.getAttribute('src'));
}


///listener for views///
function countViews(event) {
  var viewImg;
  switch (event.target.id) {
  case'':
    viewImg = pushImg[newImg[0]];
    break;
  }
}
//listener for clicks///
function countClicks(event) {
  var clickedImg;
  switch (event.target.id) {
  case'img1':
    clickedImg = pushImg[newImg[0]];
    break;
  }
}
function countClicks(event) {
  var clickedImg;
  switch (event.target.id) {
  case'img2':
    clickedImg = pushImg[newImg[0]];
    break;
  }
}
function countClicks(event) {
  var clickedImg;
  switch (event.target.id) {
  case'img3':
    clickedImg = pushImg[newImg[0]];
    break;
  }
}
// somevar.ImageAll.addEventListener('clicks', someobj.somemethod);
// somvar.displayImages();
//countdown attempts
function updateAttempts () {
  attemptsElement.textcontent = maxAttempts - attempts;
}

//data localStorage///
function localData() {
  var dataMemo = JSON.stringify(pushImg);
  localStorage.setItem('data', dataMemo);
}
function retrieveData() {
  var dataMemo = localStorage.getItem('data');
  if(dataString){
    var data = JSON.parse(dataMemo);
    pushImg = data;
  }
}
//display data in chart///
//TODO make labels for data
//TODO one column for clicks, one column for views
function chart () {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
}
if (attempts === maxAttempts) {
  chart();
}

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['babySweep', 'bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair','cthulhu', 'dogDuck', 'dragon', 'pen', 'petSweep', 'scissors', 'shark', 'tauntaun', 'unicorn', 'usb', 'waterCan', 'wineGlass'],
    datasets: [{
      label: ['# of clicks', '# of views'],
      backgroundColor: 'rgb(2, 98, 252)',
      borderColor: '#000f28',
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
},
function draw() {
  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');

  ctx.fillStyle = '#52018c';
  ctx.fillRec(10, 10, 20, 100);

  ctx.fillStyle = '#8c0087';
  ctx.fillRec(80, 10, 20, 100);

  ctx.fillText('Words', 10, 100);
});
