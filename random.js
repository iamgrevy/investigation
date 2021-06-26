function showTombstones() {
  for (let index = 0; index < 10; index++) {
    var x = Math.floor(Math.random() * 6 + 1);
    console.log(x);
    document.getElementById("divImage").innerHTML += `
       <img src="images/g${x}.png" style="width:150px;" >
   `;
  }
}

var symbols = [
  {
    imgPath: "1.png",
   
  },
  {
    imgPath: "2.png",
    
  },
  {
    imgPath: "3.png",
   
  },
  {
    imgPath: "4.png",
    
  },
  {
    imgPath: "10.png",
    
  },
  {
    imgPath: "11.png",
    
  },
  {
    imgPath: "12.png",
    
  },
  {
    imgPath: "13.png",
    
  },
  {
    imgPath: "14.png",
    
  },
  {
    imgPath: "15.png",
    
  },
  {
    imgPath: "16.png",
    
  },
  {
    imgPath: "17.png",
    
  },
  {
    imgPath: "18.png",
    
  },
  {
    imgPath: "19.png",
    
  },
  {
    imgPath: "20.png",
    
  },
  {
    imgPath: "21.png",
    
  },
  {
    imgPath: "22.png",
    
  },
  {
    imgPath: "23.png",
    
  },
  {
    imgPath: "24.png",
    
  },
  {
    imgPath: "25.png",
    
  },
  {
    imgPath: "26.png",
    
  },
  {
    imgPath: "27.png",
    
  },
  {
    imgPath: "28.png",
    
  },
  {
    imgPath: "29.png",
    
  },
  {
    imgPath: "30.png",
    
  },
  {
    imgPath: "31.png",

  },
  {
    imgPath: "32.png",

  },
  {
    imgPath: "34.png",

  },
  {
    imgPath: "5.png",
  
  },
  {
    imgPath: "6.png",
    
  },
  {
    imgPath: "7.png",
    
  },
  {
    imgPath: "8.png",
    
  },
  {
    imgPath: "9.png",
    
  },
  {
    imgPath: "35.svg",
  },
  {
    imgPath: "15.svg",
  },
  {
    imgPath: "14.svg",
  },
  {
    imgPath: "23.svg",
  },
  {
    imgPath: "24.svg",
  },
  {
    imgPath: "31.svg",
  }

];

var symbolsBox = document.querySelector(".symbols");
symbols.forEach(function (symbol, index) {
  const symbolEl = document.createElement("div");
  symbolEl.classList.add("symbol", "symbols-" + (index + 1));

  var img = document.createElement("img");
  img.src = symbol.imgPath;

  // var symbolText = document.createElement("div");
  // symbolText.innerHTML = symbol.text;
  // symbolText.classList.add("symbol-text");

  symbolEl.appendChild(img);
  // symbolEl.appendChild(symbolText);
  symbolsBox.appendChild(symbolEl);
});

function updateActiveItem(activeItem, items) {
  items.forEach(function (item) {
    item.style.transform = activeItem === item ? "scale(0.8,0.8)" : "none";
  });
}

var randomButton = document.querySelector(".button");
randomButton.addEventListener("click", showTombstones);

// var causeOfDeathRow = document.querySelector(".cause-of-death-row");
// var targetGrave = document.querySelector(".big-grave");
// var targetPlace = document.querySelector(".big-place");

// var causesOfDeath = [
//   { imgPath: "grave1.png", text: "Несчастный случай" },
//   { imgPath: "grave2.png", text: "Суицид" },
//   { imgPath: "grave3.png", text: "Убийство" },
//   { imgPath: "grave4.png", text: "Старость" },
//   { imgPath: "grave5.png", text: "Болезнь" },
// ];

causesOfDeath.forEach(function (causeOfDeath) {
  var column = document.createElement("div");
  column.classList.add("column");

  var img = document.createElement("img");
  img.classList.add("grave-img");
  img.src = causeOfDeath.imgPath;
  img.addEventListener("click", function () {
    console.log("click");
    updateActiveItem(img, document.querySelectorAll(".grave-img"));
    targetGrave.src = causeOfDeath.imgPath;
  });

  var columnText = document.createElement("div");
  columnText.innerHTML = causeOfDeath.text;
  columnText.classList.add("column-text");

  column.appendChild(img);
  column.appendChild(columnText);
  causeOfDeathRow.appendChild(column);
});

var placeOfDeathRow = document.querySelector(".place-of-death-row");
var targetGrave = document.querySelector(".big-grave");
var targetPlace = document.querySelector(".big-place");

var placesOfDeath = [
  { imgPath: "place.png", text: "Южная Америка" },
  { imgPath: "place2.png", text: "Северная Америка" },
  { imgPath: "place3.png", text: "Африка" },
  { imgPath: "place4.png", text: "Австралия" },
  { imgPath: "place5.png", text: "Антарктида" },
  { imgPath: "place6.png", text: "Евразия" },
];

placesOfDeath.forEach(function (placeOfDeath) {
  var column = document.createElement("div");
  column.classList.add("column");

  var img = document.createElement("img");
  img.classList.add("place-img");
  img.src = placeOfDeath.imgPath;
  img.addEventListener("click", function () {
    console.log("click");
    updateActiveItem(img, document.querySelectorAll(".place-img"));
    targetPlace.src = placeOfDeath.imgPath;
  });

  var columnText = document.createElement("div");
  columnText.innerHTML = placeOfDeath.text;
  columnText.classList.add("column-text");

  column.appendChild(img);
  column.appendChild(columnText);
  placeOfDeathRow.appendChild(column);
});
