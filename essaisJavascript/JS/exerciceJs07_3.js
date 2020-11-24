/// Saisie de 2 nombres et d'un opérateur par l'utilisateur ///
var n1 = parseInt(window.prompt("Entrez un nombre entier"));
var n2 = parseInt(window.prompt("Entrez un second nombre entier"));
var op = window.prompt("Choisissez un opérateur: +, -, *, /");

/// Un des deux nombres saisi ne peut être 0 en cas de division ///

if ((n1 || n2 == 0) && (n1 / n2))
{
    alert("erreur")
}

/// Instruction switch reçoit en argument op  pour tester les différents opérateurs avec n1 et n2 ///

switch (op)
{
    case "+" :
       alert(n1 + n2);
       break;
    
    case "-" :
        alert(n1 - n2);
        break;

    case "*" :
        alert(n1 * n2);
        break;

    case "/" :   
        alert(n1 / n2);
        break; 
    default:
        alert("erreur");
}

/// Le programme a un défaut: il affiche systématiquement le message défaut "erreur" avant le résultat ///