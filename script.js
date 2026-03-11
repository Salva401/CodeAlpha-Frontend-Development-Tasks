let images = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");

let index = 0;

function openLightbox(i){
index = i;
lightbox.style.display = "flex";
lightboxImg.src = images[index].src;
}

function closeLightbox(){
lightbox.style.display = "none";
}

function changeImage(step){
index += step;

if(index < 0){
index = images.length - 1;
}

if(index >= images.length){
index = 0;
}

lightboxImg.src = images[index].src;
}
