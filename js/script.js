var i=0;
var image=document.getElementById("image");
// Добавьте свои картинки в массив через запятую
var imgs=new Array('./img/avataaars1.png',
    './img/avataaars.png', './img/avataaars2.png','./img/avataaars3.png');
function imgsrc() {
    i++;
    i = i % imgs.length;
    image.src = imgs[i];
}




