let classeCoding19=[];

let ajouter =(prenom, phrase) =>{
    classeCoding19.push(prenom);
    console.log(phrase);
}

let retirer =(prenom, phrase) =>{
    classeCoding19.splice(classeCoding19.indexOf(prenom),1);
    console.log(phrase);
}

ajouter("Fanny", "Il est 8h43, Fanny rentre en classe.");

ajouter("Chriss", "Il est 8h44, Chirs allume son PC et met à jour ses notes.");

ajouter("Nasila", "8h45 rejoint la classe");

ajouter("Mouna", "8h45 rejoint la classe");

ajouter("Jean", "8h45 rejoint la classe");

ajouter("Stan", "8h45 rejoint la classe");

retirer("Stan", "Stan et Jean suivent Django le chat",2);

console.log(classeCoding19);
ajouter("Ali", "Ali rentre en classe en faisant un max de bruit !");

ajouter("Agim", "Agim rentre en classe en faisant un max de bruit !");

ajouter("Antoine", "rentre en clssse");
