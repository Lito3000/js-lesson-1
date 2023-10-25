var i=0; // 0
var image=document.getElementById("image");
// Добавьте свои картинки в массив через запятую
var imgs=new Array( './img/avataaars1.png','./img/avataaars.png',
    './img/avataaars2.png', './img/avataaars3.png');
console.log(imgs);
console.log(2 % 4);
function imgsrc() {
     i++; // i == 1, i == 2
     i = i % imgs.length; // 1 % 4 == 1, 2 % 4 == 2
    image.src = imgs[i]; // imgs[1],

}




