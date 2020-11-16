
 let isChecked = document.getElementById("cereal");
 let isChecked2 = document.getElementById("nuts");
 let isChecked3 = document.getElementById("garlic");
 let isChecked4 = document.getElementById("vegan");
 let isChecked5 = document.getElementById("lowsugar");
 

//  localStorage.setItem("allcereals", "cereal");
//         localStorage.setItem("nuts", "nuts");
//         localStorage.setItem("garlic", "garlic");
//         localStorage.setItem("vegan", "vegan");
//         localStorage.setItem("lowsugar", "lowsugar");
// All Cereals/Coeliacs 
 //console.log(isChecked.checked);
function check() {
    if(isChecked.checked){
        localStorage.setItem("allcereals", "cereal");
        console.log('its checked');
        console.log(isChecked.checked);
    }
    else if(!isChecked.checked){
        localStorage.setItem("allcereals", "");
        console.log('its unchecked');
        console.log(isChecked.checked);
    }
//     var allcereals = localStorage.getItem("allcereals");
// console.log(allcereals)
}

// nuts

console.log(isChecked2.checked);
function check2() {
   if(isChecked2.checked){
       localStorage.setItem("nuts", "nuts");
   }
   else if(!isChecked2.checked){
       localStorage.setItem("nuts", "");
   }
//     var allcereals = localStorage.getItem("allcereals");
// console.log(allcereals)
}

// garlic

console.log(isChecked3.checked);
function check3() {
   if(isChecked3.checked){
       localStorage.setItem("garlic", "garlic");
   }
   else if(!isChecked3.checked){
       localStorage.setItem("garlic", "");
   }
//     var allcereals = localStorage.getItem("allcereals");
// console.log(allcereals)
}


// vegan

console.log(isChecked4.checked);
function check4() {
   if(isChecked4.checked){
       localStorage.setItem("vegan", "vegan");
   }
   else if(!isChecked4.checked){
       localStorage.setItem("vegan", "");
   }
//     var allcereals = localStorage.getItem("allcereals");
// console.log(allcereals)
}

// low sugar
console.log(isChecked5.checked);
function check5() {
   if(isChecked5.checked){
       localStorage.setItem("lowsugar", "lowsugar");
   }
   else if(!isChecked5.checked){
       localStorage.setItem("lowsugar", "");
   }
//     var allcereals = localStorage.getItem("allcereals");
// console.log(allcereals)
}

window.onload = function() {
    let allcereals = localStorage.getItem("allcereals");
    if(allcereals == undefined || allcereals == "" ){
        isChecked.checked = false;
       // document.getElementById("cereal").checked = true;
    }
    else{
        isChecked.checked = true;
    }
    let nuts = localStorage.getItem("nuts");
    if(nuts == undefined || nuts == "" ){
        isChecked2.checked = false;
       // document.getElementById("cereal").checked = true;
    }
    else{
        isChecked2.checked = true;
    }

    let garlic = localStorage.getItem("garlic");
    if(garlic == undefined || garlic == ""){
        isChecked3.checked = false;
       // document.getElementById("cereal").checked = true;
    }
    else{
        isChecked3.checked = true;
    }
    let lowsugar = localStorage.getItem("lowsugar");
    if(lowsugar == undefined || lowsugar == ""){
        isChecked5.checked = false;
       // document.getElementById("cereal").checked = true;
    }
    else{
        isChecked5.checked = true;
    }
    let vegan = localStorage.getItem("vegan");
    if(vegan == undefined || vegan == ""){
        isChecked4.checked = false;
       // document.getElementById("cereal").checked = true;
    }
    else{
        isChecked4.checked = true;
    }
  };
  