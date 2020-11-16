function loadProductInfo(){
    let flag = false;
    var result = document.getElementById("searchquery").value;
    console.log(result);
    fetch(`https://shouldieatit.herokuapp.com/products/${result}`)
    .then(response => response.json())
    .then(product => {
       // for(product of products){
           console.log(product.barcode)
            if(product.barcode == result){
                flag = true;
                console.log(product);
              //  window.location.replace("product-info.html");
                localStorage.setItem("result", result);
            }
      //  }
        if(flag == false){
            alert("This product does not exist");
        }
    });
};

function goBack(){
    window.history.back();
}