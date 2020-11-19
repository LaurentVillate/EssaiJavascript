/// nombre saisi par l'utilisateur; "null" car n doit être différent de 0 ///
var n = null;
/// Variable Somme ///
var s = 0;
/// Compteur pour additionner le nombre de saisies et calculer la moyenne ///
var cpteur = 0;
/// Variable moyenne ///
var m = 0;
/// La boucle va tourner tant que le nombre saisi est différent de 0 ///
while (n!=0)
{
    /// L'utilisateur saisit un nombre. Ajour de Parsint pour convertir la chaine de caractères saisi en nombre ///
    n = parseInt(window.prompt("saisissez un nombre"));
    console.log("n vaut : " + n);
/// Caculcul de la somme ///
    s = n + s;

    console.log("s vaut : " + s);
    
    /// + 1 saisie dans le compteur ///
    cpteur++;

    
/// Calcul de moyenne; on soustrait 1 au compteur, pour ne pas compter la saisie du 0, qui arrête la boucle /// 
    m = s/(cpteur - 1);  

    
}
/// 
if( n != null){

console.log("s vaut : " + s);
console.log("m vaut : " + m);
}
/// Si l'utilisateur saisit 0, message... ///
else {
    console.log("impossible d'établir une moyenne !");

}