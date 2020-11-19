var x = window.prompt("Entrez un nombre");
var y = window.prompt("Entrez un multiplicateur");
var image = "src\\images\\papillon.jpg";

function afficheImg(image)
{
    document.write("<img src="+ image+">")
    

}
afficheImg(image);
console.log(image);


function produit(x, y)
{
    
    return x*y;
}

document.write("<br>Le cube de 5 est égal à 125 <br> Le produit de " + x + " x " + y + " est égal à " + produit(x, y));



