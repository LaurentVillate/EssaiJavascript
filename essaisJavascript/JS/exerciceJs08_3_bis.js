var n = null;
var s = 0;
var cpteur = 0;
var m = 0;

while (n!=0){

    n = parseInt(window.prompt("saisissez un nombre"));
    console.log("n vaut : " + n);
    s = n + s;
    cpteur++;
}
 
//si l'utilisateur saisit 0 au premier passage -> pas de somme ni de moyenne
 if (cpteur==1){

    console.log("Vous êtes sorti du programme : pas de somme et impossible d'établir une moyenne !");

    }

else{

    console.log("s vaut : " + s); 
    m = s/(cpteur - 1);
    console.log("m vaut : " + m);

}