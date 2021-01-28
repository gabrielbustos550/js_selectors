console.log('successfully linked!')

// For each prompt, perform the specified selection. Save the result to a variable, then console.log that variable. Confirm that it contains what it should in the console!

// 1) All img tags
const img1= document.querySelectorAll("img")
console.log(img1);

// 2) All section tags
const sec1= document.querySelectorAll("section")
console.log(sec1);


// 3) The element with an id of section-1

const sec_1= document.querySelector("#section-1")
console.log(sec_1);


// 4) The element with an id of destinations-button
const dest= document.querySelector("#destinations-button")
console.log(dest);

// 5) The first element with a class of images-rack
const img2= document.querySelector(".images-rack")
console.log(img2);


// 6) The first h1 tag
const tag1= document.querySelector("h1")
console.log(tag1);

// 7) All elements with a class of image-card

const img3= document.querySelector(".image-card")
console.log(img3);



// 8) All elements with a class of over-image-text

const img4= document.querySelector(".over-image-text")
console.log(img4);