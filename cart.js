let cartn = document.getElementById("cartNo");
let my = JSON.parse(localStorage.getItem("cartNo"));
if(my != null){
    cartn.innerHTML = my.length;
}

let j=0;

function cartPage(){
    let res=true;
    if(j==0){
        let myarr;
        if(localStorage.getItem("cart") == null){
            myarr = [];
            myarr.push(value);
            alert2.style.display="block";
            alert2.textContent ="";
            alert2.append(child1,child2,child3);
            setTimeout(function(){
                alert2.style.display = "none";
            },5000);
        }
        else {
            myarr = JSON.parse(localStorage.getItem("cart"));
        }
    
        for(let k=0 ; k<myarr.length ; k++){
            if((myarr[k].name == value.name) && (myarr[k].image1 == value.image1)){
                res = false;
                break;
            }
        }

        if(res == true){
            console.log(res)
            myarr.push(value);
            alert2.style.display="block";
            alert2.textContent ="";
            alert2.append(child1,child2,child3);
            setTimeout(function(){
                alert2.style.display = "none";
            },5000);
        }
        localStorage.setItem("cart",JSON.stringify(myarr));
        cartn.innerHTML = myarr.length;
    }
    j++;
    if(res == false){
        alert1.innerHTML="";
        alert1.innerHTML= "Sorry! You can only add the displayed number of items to the cart. Please enter quantity up to 1.";
    }
}


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
