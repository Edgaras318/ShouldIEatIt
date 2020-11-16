


var retrievedData = localStorage.getItem("localArray");
//retrievedData.reverse();
var historyArray = JSON.parse(retrievedData);
//localStorage.setItem("historyArray", JSON.stringify(historyArray));
//making sure it still is an array

//console.log(historyArray);


if(historyArray != null){
    historyArray.reverse();

const viewElement = document.getElementById("container");
let viewContent = "";
var splice = 0;
for (obj of historyArray) {

  //splice++;
    viewContent += `<div class="history_list--item">`;
    viewContent += `<div class="history_delete">`;
    viewContent += `    <a href="#">`;
    viewContent += `        <button type="button"  class="history_deletebtn"></button>`;
    viewContent += `        <i data-itemid="${splice}" class="far fa-trash-alt delete"></i>`;
    viewContent += `</a>`;
    viewContent += `    </button>`;
    viewContent += `</div>`;
    viewContent += `<div class="history_image">`;
    viewContent += `    <img id="his_image" src="https://images.weserv.nl/?url=${obj.image}">`;
    viewContent += `</div>`;
    viewContent += `<div class="history_text">`;
    viewContent += `    <h2 id="history_title">${obj.title}</h2>`;
    viewContent += `    <p id="history_barcode">${obj.brand}</p>`;
    viewContent += `</div>`;
    viewContent += `<div class="history_link">`;
    viewContent += `   <button type="button" class="go_to_productbtn">`;
    viewContent += `       <a href="historyProduct-info.html"> <i data-hisotry="${splice}" class="fas fa-angle-right getitem"></i>`;
    viewContent += `    </a>`;
    viewContent += `    </button>`;
    viewContent += `</div>`;
    viewContent += `</div>`;
    viewContent += `</div>`;
    splice++;

    //  <a href="historyProduct-info.html">
    //console.log(splice);
}
  viewElement.innerHTML = viewContent;
}
document.querySelectorAll(".delete").forEach(deleteBtn => {
  deleteBtn.addEventListener('click', function(event) {
   deleteProduct(event.target.getAttribute("data-itemid"));
    console.log(event.target.getAttribute("data-itemid"));
  });
});

function deleteProduct(itemid){
    console.log(event);
    console.log(historyArray);
    historyArray.splice(itemid,1);
    console.log(historyArray);
    localStorage.setItem("localArray", JSON.stringify(historyArray));
    location.reload();
    //  console.log(historyArray.length)
    //  historyArray.pop();
    //  localStorage.setItem("localArray", JSON.stringify(historyArray));
 }
 document.querySelectorAll(".getitem").forEach(item => {
  item.addEventListener('click', function(event) {
    //deleteProduct(event.target.getAttribute("data-itemid"));
    var id = event.target.getAttribute("data-hisotry");
    console.log(id);
    localStorage.setItem("localId", id);
    //window.location.href = 'http://127.0.0.1:5500/historyProduct-info.html';
    console.log(event.target.getAttribute("data-hisotry"));
  });
});

// function deleteProduct(itemid){
//     console.log(event);
//     console.log(historyArray);
//     historyArray.splice(itemid,1);
//     console.log(historyArray);
//     localStorage.setItem("localArray", JSON.stringify(historyArray));
//     location.reload();
//     //  console.log(historyArray.length)
//     //  historyArray.pop();
//     //  localStorage.setItem("localArray", JSON.stringify(historyArray));
//  }
var retrievedData = [];
//let test = ["hi"];
var allcereals = localStorage.getItem("allcereals");
//console.log("hi: "+allcereals)
const cerealArray = ["Barley", "Gluten", "Oats", "Rye", "Spelt", "Wheat", "Cereals"];

var nuts = localStorage.getItem("nuts");

var garlic = localStorage.getItem("garlic");

var lowsugar = localStorage.getItem("lowsugar");

var vegan = localStorage.getItem("vegan");
const veganArray = ["crustaceans", "molluscs", "fish", "sausage", "bacon", "chicken", "pork", "meat", "lamb", "goat", "venison", "steak", "veal", "poultry", "game", "pheasant", "duck", "goose", "ham", "beef", "prawns", "shrimps", "crayfish", "winkles", "limpets", "squid", "octopus", "langoustines", "salmon", "fish", "mackerel", "sardines", "tuna", "pilchards", "clams", "lumpfish", "salami", "anchovy", "mussels", "crab", "lobster", "herrings", "milk", "lactose", "lactates", "lactic acid", "caseinates", "butter", "dairy", "cheese", "yogurt", "cream", "ghee", "egg", "albumen", "isinglass", "honey", "beeswax", "cochineal", "carmine", "carminic acid", "shellac", "vitamin D3", "animal glycerol", "animal glycerine", "rennet pork gelatine", "beef gelatine"];
//const veganArray = ["Water", "dfsdfsf"];
var result = localStorage.getItem("result");
 console.log("Loading people data..."+result);

//retrievedData.push(myObj);
//console.log("step22");

 //localStorage.setItem("localArray", JSON.stringify(retrievedData));
// console.log(retrievedData);
// retrievedData.push(myObj);
// console.log(retrievedData);
// retrievedData = JSON.parse(localStorage.getItem("localArray"));
//onsole.log(retrievedData);
// if(retrievedData == null){
//   console.log("do someh");
//   localStorage.setItem("localArray", JSON.stringify(retrievedData));
//   retrievedData = JSON.parse(localStorage.getItem("localArray"));
//   console.log(retrievedData);
// }
//console.log(localStorage.getItem("localArray"));
