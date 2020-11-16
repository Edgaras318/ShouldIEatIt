function loadProductInfo(){
   // let flag = false;
    var result = document.getElementById("searchquery").value;
    console.log(result);
    fetch(`https://shouldieatit.herokuapp.com/products/${result}`)
    .then(response => response.json())
    .then(product => {
       // for(product of products){
           //console.log(product.barcode)
           console.log(product)
           if(product.barcode == undefined){
            alert("This product does not exist");
        }
          if(product.barcode.includes(result)){
               // flag = true;
                console.log(product);
                window.location.href = 'https://i413957.hera.fhict.nl/product-info.html';
                localStorage.setItem("result", result);
            }
      //  }
       
    });
};

// function goBack(){
//     window.history.back();
// }
