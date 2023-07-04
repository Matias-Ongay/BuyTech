
  
/*carrusel de productos 1*/ 

let count = 0;
let inc = 0;
let margin = 0;
let slider = document.querySelector(".slider-width"); 
let itemDisplay = 0;

let itemSlide = 0; 

if (screen.width > 990) {
  itemDisplay = document.querySelector(".carrousel").getAttribute("item-display-d"); 
  margin = itemDisplay * 5;
} else if (screen.width > 700 && screen.width < 990) {
  itemDisplay = document.querySelector(".carrousel").getAttribute("item-display-t"); 
  margin = itemDisplay * 6.8;
} else if (screen.width > 280 && screen.width < 700) {
  itemDisplay = document.querySelector(".carrousel").getAttribute("item-display-m"); 
  margin = itemDisplay * 20;
}

let items = slider.querySelectorAll(".container-product");
let itemLeft = items.length % itemDisplay;
itemSlide = Math.floor(items.length / itemDisplay) - 1;

for (let i = 0; i < items.length; i++) {
  items[i].style.width = `${(screen.width / itemDisplay) - margin}px`;
}

function next() {
  if (inc !== itemSlide + itemLeft) {
    if (inc === itemSlide) {
      inc = inc + itemLeft;
      count = count - (screen.width / itemDisplay) * itemLeft;
    } else {
      inc++;
      count = count - screen.width;
    }
  }
  slider.style.left = `${count}px`;
}

function prev() {
  if (inc !== 0) {
    if (inc === itemLeft) {
      inc = inc - itemLeft;
      count = count + (screen.width / itemDisplay) * itemLeft;
    } else {
      inc--;
      count = count + screen.width;
    }
  }
  console.log(inc);
  slider.style.left = `${count}px`;
}

/*carrusel de productos 2*/

// Carrusel 2
let count2 = 0;
let inc2 = 0;
let margin2 = 0;
let slider2 = document.querySelector(".slider-width2");
let itemDisplay2 = 0;
let itemSlide2 = 0;

if (screen.width > 990) {
  itemDisplay2 = document.querySelector(".carrousel2").getAttribute("item-display-d");
  margin2 = itemDisplay2 * 5;
} else if (screen.width > 700 && screen.width < 990) {
  itemDisplay2 = document.querySelector(".carrousel2").getAttribute("item-display-t");
  margin2 = itemDisplay2 * 6.8;
} else if (screen.width > 280 && screen.width < 700) {
  itemDisplay2 = document.querySelector(".carrousel2").getAttribute("item-display-m");
  margin2 = itemDisplay2 * 20;
}

let items2 = slider2.querySelectorAll(".container-product2");
let itemLeft2 = items2.length % itemDisplay2;
itemSlide2 = Math.floor(items2.length / itemDisplay2) - 1;

for (let i = 0; i < items2.length; i++) {
  items2[i].style.width = `${(screen.width / itemDisplay2) - margin2}px`;
}

function next2() {
  if (inc2 !== itemSlide2 + itemLeft2) {
    if (inc2 === itemSlide2) {
      inc2 = inc2 + itemLeft2;
      count2 = count2 - (screen.width / itemDisplay2) * itemLeft2;
    } else {
      inc2++;
      count2 = count2 - screen.width;
    }
  }
  slider2.style.left = `${count2}px`;
}

function prev2() {
  if (inc2 !== 0) {
    if (inc2 === itemLeft2) {
      inc2 = inc2 - itemLeft2;
      count2 = count2 + (screen.width / itemDisplay2) * itemLeft2;
    } else {
      inc2--;
      count2 = count2 + screen.width;
    }
  }
  console.log(inc2);
  slider2.style.left = `${count2}px`;
}