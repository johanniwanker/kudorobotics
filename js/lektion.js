function diffImage(img)
{
if (img.src.match(/fuld/)) {
  img.src = "img/favorittertom.png";
}

else {
  img.src = "img/favoritterfuld.png";
}
}
