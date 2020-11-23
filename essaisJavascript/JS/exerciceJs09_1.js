/// L'utilisateur entre un nombre x puis un multiplicateur x ///

var x = window.prompt("Entrez un nombre");
var y = window.prompt("Entrez un multiplicateur");

/// L'image du papillon st stocké dans une variable ///

var image = "src\\images\\papillon.jpg";

/// Une fonction afficheImg fait apparaître l'image par un document.write ///

function afficheImg(image)
{
    document.write("<img src="+ image+">")
}

/// Appel de la fonction pour afficher le papillon sur la page ///

afficheImg(image);
console.log(image);

/// Une fonction produit calcule le produit de x et y ///

function produit(x, y)
{
    
    return x*y;
}

/// Dans un document.write le produit s'affiche sur la page avec le texte ///

document.write("<br>Le cube de 5 est égal à 125 <br> Le produit de " + x + " x " + y + " est égal à " + produit(x, y));



