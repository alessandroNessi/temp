var invitati = ["marco", "gianni", "giorgio", "giovanni", "luca", "samuele"];
var userName = prompt("benvenuto alla festa de grande Gatsby, inserisci il tuo nome per validare l'ingresso: ");
for( var i=0; i< invitati.length;i++){
    if(userName==invitati[i]){
        alert("Benvenuto alla festa");
        userName=true;
    }
}
if(userName!=true){
    alert("Mi dispiace ma non sei invitato");
}