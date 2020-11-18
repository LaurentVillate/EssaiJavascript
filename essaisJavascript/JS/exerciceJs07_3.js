var n1 = parseInt(window.prompt("Entrez un nombre entier"));
var n2 = parseInt(window.prompt("Entrez un second nombre entier"));
var op = window.prompt("Choisissez un opérateur: +, -, *, /");

if ((n1 || n2 == 0) && (n1 / n2))
{
    alert("erreur")
}

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
        alert("erreur")
           
}

