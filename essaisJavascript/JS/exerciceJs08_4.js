/// Saisies successives de 2 entiers ///

var N = window.prompt("Entrez un nombre entier");
var x = window.prompt("Entrez second nombre entier");
var i = 0;

/// Une boucle calcule les multiples de X tant que i<N ///

do
{
i++;
result = i * x;
alert(+ i + "x" + x + "= " + result)
}
while (i<N)