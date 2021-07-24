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


