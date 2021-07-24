/** @format */

function prod(){
window.location.href ="product.html"

}
function item(){
window.location.href ="item.html"

}

const data = [
	{
		name: 'Opulent Elaborate Pendant',
		price: 28812,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PPVAAA00_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Delicate Paisley Pendant',
		price: 26207,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PPYAAA00_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Delicate Paisley Pendant',
		price: 30761,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PPZAAA00_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Opulent Elaborate pendant',
		price: 30216,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220PQGAAA00_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Opulent Elaborate Pendant',
		price: 33451,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503120PDOAAA09_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Opulent Elaborate Pendant',
		price: 26866,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503120PDSAAA09_1.jpg?impolicy=pqmed&imwidth=640',
	},
];

const showItem = document.getElementById('showItem');

function showData() {
	data.forEach((el, i) => {
		// console.log(el)
		let productitem = document.createElement('div');
		productitem.setAttribute('class', 'item');
		productitem.innerHTML = `<div id=id${i}  class="productitem">
                   <img class="imgfile" 
                        src=${el.image}
                        alt="">
                    <h3 >${el.name}</h3>
                    <h4>₹ ${el.price}</h4>
                    <button class="trybtn">${el.try}</button>
                    <button  class="quickview">${el.quick}</button>
                </div>`;

		showItem.appendChild(productitem);
	});
}
showData();
let productitem0 = document.getElementById('id0');

productitem0.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[0];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem1 = document.getElementById('id1');

productitem1.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[1];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem2 = document.getElementById('id2');

productitem2.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[2];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem3 = document.getElementById('id3');

productitem3.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[3];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem4 = document.getElementById('id4');

productitem4.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[4];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem5 = document.getElementById('id5');

productitem5.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data[5];
	localStorage.setItem('items', JSON.stringify(arr));
});
const data1 = [
	{
		name: 'Opulent Elaborate Pendant',
		price: 41246,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513920DGJABA00_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Delicate Paisley Pendant',
		price: 25948,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503920DEEABA29_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Ornate Nature Inspired Pendant',
		price: 31261,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/503220DRBABAP5_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Ornate Traditional Pendant',
		price: 28358,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/504025HMQAAA00_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Sophisticated Diamond Ring',
		price: 33395,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/511920SOCABA00_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Opulent Elaborate Pendant',
		price: 29249,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220DBNABA00_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Minimalistic Floral Diamond Pendant',
		price: 29249,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/512220PJQAAA00_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Abstract Diamond Ring',
		price: 29249,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220DICABAP1_1.jpg?impolicy=pqmed&imwidth=640',
	},
	{
		name: 'Stunning Gold Drop Earrings',
		price: 44911,
		try: 'TRY ON AVAILABLE',
		quick: 'QUICK VIEW',
		image:
			'https://staticimg.titan.co.in/Tanishq/Catalog/513220DFZAAA00_1.jpg?impolicy=pqmed&imwidth=640',
	},
];

const showItem1 = document.getElementById('showItem1');
function showData1() {
	data1.forEach((el, i) => {
		// console.log(el)
		let productitem = document.createElement('div');
		productitem.setAttribute('class', 'productitem');
		productitem.innerHTML = `<div id=id${i + 6} class="productitem">
                    <img class="imgfile"
                        src=${el.image}
                        alt="">
                    <h3>${el.name}</h3>
                    <h4>₹${el.price}</h4>
                    <button class="trybtn">${el.try}</button>
                    <button class="quickview">${el.quick}</button>
                </div>`;

		showItem1.appendChild(productitem);
	});
}
showData1();
let productitem6 = document.getElementById('id6');

productitem6.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[0];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem7 = document.getElementById('id7');

productitem7.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[1];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem8 = document.getElementById('id8');

productitem8.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[2];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem9 = document.getElementById('id9');

productitem9.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[3];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem10 = document.getElementById('id10');

productitem10.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[4];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem11 = document.getElementById('id11');

productitem11.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[5];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem12 = document.getElementById('id12');

productitem12.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[6];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem13 = document.getElementById('id13');

productitem13.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[7];
	localStorage.setItem('items', JSON.stringify(arr));
});
let productitem14 = document.getElementById('id14');

productitem14.addEventListener('click', function () {
	let arr;
	arr = localStorage.getItem('items');
	arr = data1[8];
	localStorage.setItem('items', JSON.stringify(arr));
});
var price = true;
function showPrice() {
	var btn = document.querySelector('.btnPrice');
	var price_div = document.querySelector('#price_div');
	price = !price;
	price ? (btn.innerHTML = '+') : (btn.innerHTML = '-');

	if (price) {
		price_div.style.display = 'none';
	} else {
		price_div.style.display = 'block';
	}
}

var jwType = true;
function showjewelleryType() {
	var btn = document.querySelector('.btnType');
	var type_div = document.querySelector('#type_div');
	jwType = !jwType;
	jwType ? (btn.innerHTML = '+') : (btn.innerHTML = '-');

	if (jwType) {
		type_div.style.display = 'none';
	} else {
		type_div.style.display = 'block';
	}
}

var proType = true;
function showproductType() {
	var btn = document.querySelector('.productType');
	var type_div = document.querySelector('#product_div');
	proType = !proType;
	proType ? (btn.innerHTML = '+') : (btn.innerHTML = '-');

	if (proType) {
		product_div.style.display = 'none';
	} else {
		product_div.style.display = 'block';
	}
}
