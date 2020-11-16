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

var id = localStorage.getItem("localId");
  if(localStorage.getItem("localArray")){
    retrievedData = JSON.parse(localStorage.getItem("localArray"));
  }
  retrievedData.reverse();
  
  var product = retrievedData[id];
  
  
       // let's get the people into the page
       const viewElement = document.getElementById("title");
       let viewContent = "";
       const viewElement2 = document.getElementById("brand");
       let viewContent2 = "";
       const viewElement3 = document.getElementById("image");
       let viewContent4 = "";
       const viewElement4 = document.getElementById("product_description");
       let viewContent5 = "";
       const viewElement5 = document.getElementById("ingredients");
       let viewContent6 = "";
       const viewElement6 = document.getElementById("contains");
       let viewContent7 = "";
       const viewElement7 = document.getElementById("energy");
       let viewContent8 = "";
       const viewElement8 = document.getElementById("carbs");
       let viewContent9 = "";
       const viewElement9 = document.getElementById("sugar");
       let viewContent10 = "";
       const viewElement10 = document.getElementById("fat");
       let viewContent11 = "";
       const viewElement11 = document.getElementById("satfat");
       let viewContent12 = "";
       const viewElement12 = document.getElementById("salt");
       let viewContent13 = "";
       const viewElement13 = document.getElementById("sodium");
  
       let viewContent14 = "";
       const viewElement14 = document.getElementById("badges_div");
       
       //for (product of products) {
        //if(product.barcode == result){
          viewElement3.src = `https://images.weserv.nl/?url=${product.image}`;
          
          viewContent += `${product.title}`;
          viewContent2 += `${product.brand}`;
          viewContent4 += `${product.description}`;
          viewContent5 += `${product.ingredients}`;
          viewContent6 += `${product.properties.contains}`;
          viewContent7 += `${product.properties.energy.amount} / ${product.properties.energy.per}`;
          viewContent8 += `${product.properties.carbs.amount} / ${product.properties.carbs.per}`;
          viewContent9 += `${product.properties.sugar.amount} / ${product.properties.sugar.per}`;
          viewContent10 += `${product.properties.fat.amount} / ${product.properties.fat.per}`;
          viewContent11 += `${product.properties.satfat.amount} / ${product.properties.satfat.per}`;
          viewContent12 += `${product.properties.salt.amount} / ${product.properties.salt.per}`;
          viewContent13 += `${product.properties.sodium.amount} / ${product.properties.sodium.per}`;
          
          let badges = true;

        if(allcereals == "cereal"){
          console.log('1');
            for(let i = 0; i < cerealArray.length; i++ ){
              if(product.ingredients.includes(cerealArray[i]) ||
               product.properties.contains.includes("gluten")){
               viewContent14 +=`<div id="badges_description">`;
                   viewContent14 += `<img class="badges_image" src="images/allergy-cereals.png">`;
                   viewContent14 += '<p><b>Gluten</b></p>';
                   viewContent14 += '</div>';
                   badges = false;
                   break;
             }
            }
        }

        if(nuts == "nuts"){
          console.log('2');
          for(let i = 0; i < cerealArray.length; i++ ){
            if(product.ingredients.includes("nuts") ||
            product.properties.contains.includes("nuts")){
              // product.ingredients.includes("Bay")
             viewContent14 +=`<div id="badges_description">`;
                 viewContent14 += `<img class="badges_image" src="images/allergy-peanuts.png">`;
                 viewContent14 += '<p><b>Nuts</b></p>';
                 viewContent14 += '</div>';
                 badges = false;
                 break;
                 
           }
          }
        }
          if(garlic == "garlic"){
            console.log('3');
            for(let i = 0; i < cerealArray.length; i++ ){
              if(product.ingredients.includes("garlic") ||
              product.properties.contains.includes("garlic")){
                // product.ingredients.includes("Bay")
               viewContent14 +=`<div id="badges_description";>`;
                   viewContent14 += `<img class="badges_image" src="images/allergy-garlic.png">`;
                   viewContent14 += '<p><b>Garlic</b></p>';
                   viewContent14 += '</div>';
                   badges = false;
                   break;
             }
            }
      }
        if(lowsugar == "lowsugar"){
            for(let a = 0; a < veganArray.length; a++ ){
              //console.log(veganArray[a].replace(/^\w/, c => c.toUpperCase()));
              if( product.properties.sugar.amount < 5)
              {
                viewContent14 +=`<div id="badges_description_green";>`;
                viewContent14 += `<img class="badges_image" src="images/healthy.png">`;
                viewContent14 += '<p><b>Low Sugar</b></p>';
                viewContent14 += '</div>';
                badges = false;
                break;
              }
            }
            }
           if(vegan == "vegan"){
              for(let a = 0; a < veganArray.length; a++ ){
                //console.log(veganArray[a].replace(/^\w/, c => c.toUpperCase()));
                if(product.ingredients.includes(veganArray[a].replace(/^\w/, c => c.toUpperCase())))
                {
                  viewContent14 +=`<div id="badges_description_green";>`;
                  viewContent14 += `<img class="badges_image" src="images/healthy.png">`;
                  viewContent14 += '<p><b>Vegan</b></p>';
                  viewContent14 += '</div>';
                  badges = false;
                  break;
                }
              }
              }
              if (!allcereals && !nuts && !garlic && !lowsugar && !vegan){
                viewContent14 += `<div id="badges_description_no";>`;
                viewContent14 += '<p id="badgesinfo">Badges show if the products contain any allergens or is healthy for you.</p>';
                viewContent14 += `</div>`;
                viewContent14 += `</div>`;
                viewContent14 +=`<div class="menu">`;
                viewContent14 += '<button class="product-badge-btn"> <a href="/mylist.html" ><span> Would you like to set up your badges? </span></a></button>';
                viewContent14 += `</div>`;
                viewContent14 += `</div>`;
              }
              else if (badges) {
                viewContent14 += `<div id="badges_description_no";>`;
                viewContent14 += '<p id="badgesinfo">This product does not contain any of the selected badges.</p>';
                viewContent14 += `</div>`;
                viewContent14 += `</div>`;
                viewContent14 +=`<div class="menu">`;
                viewContent14 += '<button class="product-badge-btn"> <a href="/mylist.html" ><span> Choose your badges </span></a></button>';
                viewContent14 += `</div>`;
                viewContent14 += `</div>`;
              }
              // else{
              //   viewContent14 +=`<div id="badges_description_green" style="margin-left:10%;">`;
              //   viewContent14 += `<img class="badges_image" src="images/healthy.png">`;
              //   viewContent14 += '<p>You Want to eat</p>';
              //   viewContent14 += '</div>';
              // }
        //}
       //}
       viewElement.innerHTML = viewContent;
       viewElement2.innerHTML = viewContent2;
       viewElement4.innerHTML = viewContent4;
       viewElement5.innerHTML = viewContent5;
       viewElement6.innerHTML = viewContent6;
       viewElement7.innerHTML = viewContent7;
       viewElement8.innerHTML = viewContent8;
       viewElement9.innerHTML = viewContent9;
       viewElement10.innerHTML = viewContent10;
       viewElement11.innerHTML = viewContent11;
       viewElement12.innerHTML = viewContent12;
       viewElement13.innerHTML = viewContent13;
  
       viewElement14.innerHTML = viewContent14;
  
  
