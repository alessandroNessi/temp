var invitati = ["marco", "gianni", "giorgio", "giovanni", "luca", "samuele"];
var userName = prompt("benvenuto alla festa de grande Gatsby, inserisci il tuo nome per validare l'ingresso: ");
for( var i=0; i< invitati.length && userName!=true;i++){
    if(userName==invitati[i]){
        alert("Benvenuto alla festa");
        userName=true;
    }
}
// invitati.forEach(function(element) {
//     if(userName==element){
//         alert("Benvenuto alla festa");
//         userName=true;
//     }
//   })
if(userName!=true){
    alert("Mi dispiace ma non sei invitato");
}