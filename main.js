// Création d'une fonction qui permet de récupérer les valeurs saisies dans les input
function checkingPass(){
    let password = document.getElementById("pass").value;
    let confirmation = document.getElementById("confirm").value;
    // Condition : Vérification des valeurs saisies
    if(password && confirmation && password==confirmation) {
        document.getElementById("pass").style.border="solid seagreen 2px";
        document.getElementById("confirm").style.border="solid seagreen 2px";
    } else {
        document.getElementById("pass").style.border="solid darkred 2px";
        document.getElementById("confirm").style.border="solid darkred 2px";
    }
}



// Syntaxe avec onclick qui représente le gestionnaire d’évènement pour l’évènement click de l’élément courant
// --> fonction nommée classique : 

// element.event = function (){ } --> idInput.event = function functionName() {instructions;}

// let element = document.getElementById("name");

// function displayAlert(){
    //alert(`Merci !`);
// }

// element.event = functionName;



// Méthode addEventListener() qui permet d’enregistrer une fonction qui sera appelée lors du déclenchement 
// de l'évènement => fonction fléchée :

// 1- Stockage des différents éléments HTML

// 2- On attache ensuite un gestionnaire d’évènement click au bouton avec addEventListener()
// On passe deux arguments à cette méthode : le nom de l'évènement qu’on souhaite prendre en charge 
// et le code à exécuter (qui prendra souvent la forme d’une fonction) en cas de déclenchement de cet évènement

/*
bouton.addEventListener("click", () => {
    instructions;
});
*/