function home(){
    window.location.href = "index.html"
}

function prod(){
window.location.href ="product.html"

}

let div = document.getElementById("product-details");


let value = JSON.parse(localStorage.getItem("cart"));


let cost= value.price;
let tem = cost + 2351;
let temp = cost + 3468;

let nam = document.getElementsByClassName("");
let spa = document.getElementById("spa")
nam.innerHTML = value.name;
spa.innerHTML = value.name;

let mainImg = document.getElementById("product-img")

mainImg.src = value.image1;




let price = document.getElementById("price ");
function gridBox(cost){
    price.innerHTML=""
    price.innerHTML = `PRICE &#x20b9 ${cos}.00`;
}
gridBox(cost);


let weight = document.getElementById("weigh");
let fVal = document.getElementById("fVal");

function change(){

    //detail info2
    fVal.innerHTML = "&#x20b9"+" "+ (cost)+".00";
    weight.innerHTML = "4.567g";

    gridBox(cost)
}