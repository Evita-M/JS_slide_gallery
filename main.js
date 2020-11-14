let images = [
    'kocka.jpg',
    'opice.jpg',
    'ovce.jpg',
    'pes.jpg',
    'sova.jpg',
    'zajic.jpg'
];

let i = 0;


// MALÉ OBRÁZKY DOLE
for (var l = 0, j = images.length; l < j; l++) {
    let seznam = document.getElementById('seznam');
    let img = document.createElement('img');
    img.src = "obrazky/" + images[l];
    seznam.appendChild(img);
}


//zobrazí obrázek při načtení a vypíše název a pořadí do počítadla
function showImgAndCount() {
    document.getElementById("foto").src = "obrazky/" + images[i];
    let imgLength = images.length;
    let imgPlace = parseInt([i]) + 1;
    document.getElementById("pocitadlo").innerHTML = images[i] + " - " + imgPlace + " / " + imgLength;
}
showImgAndCount();


//DALŠÍ OBRÁZEK
 function nextImg() {
    i++;
    // když dojdeme nakonec, začnou obrázky zase od začátku 
    if (i > images.length - 1) {
        i = 0;
    }
    arrowsToImg();
    showImgAndCount();
    makeRedFrame();
}

//PŘEDCHOZÍ OBRÁZEK
function prevImg() {
    i--;
    // když půjdeme zpětně, začnou obrázky zase od konce
    if (i < images.length - images.length) {
        i = images.length - 1;
       
    }
    arrowsToImg();
    showImgAndCount();
    makeRedFrame();
}


// ČERVENÝ RÁMEČEK
function makeRedFrame() {
    let foto = document.getElementById("foto");
    let mainImgSrc = foto.src;
    let seznam = document.getElementById("seznam");
    let seznamTotalElements = seznam.children.length;
    for (let i = 0; i < seznamTotalElements; i++) {
        let smallImgSrc = seznam.children[i].src;
        if (mainImgSrc == smallImgSrc) {
            seznam.children[i].classList.add("red-frame");
        } else {
            seznam.children[i].classList.remove("red-frame");
        }
   }
}
makeRedFrame();


// ŠIPKY NA IMG
// přidáním id k šipkám 

function arrowsToImg() {
    let nextImage = images[i+1];
    let currentImage = images[i];
    let rightArrow = document.getElementById("right"); 
    let previousImage = images[i-1];
    let leftArrow = document.getElementById("left");

    if ( currentImage == images[images.length - 1]) {
        rightArrow.src = "obrazky/" + images[0];
    } else {
        rightArrow.src = "obrazky/" + nextImage;
    }

    if (currentImage == images[0]) {
        leftArrow.src = "obrazky/" + images[images.length - 1];
    } else {
        leftArrow.src = "obrazky/" +  previousImage;
    }
}
arrowsToImg();

