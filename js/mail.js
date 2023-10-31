const email =["uno@gmail.com","dos@gmail.com", "tres@gmail.com", "quatro@gmail.com", "cinco@gmail.com", "sei@gmail.com", "sete@gmail.com", "otto@gmail.com"];
const emailUtente = prompt("Inserisci la tua email")
let emailValida= false;

for (let i = 0; i < email.length; i++){
    if (emailUtente == email[i]){
        emailValida=true; 
    }
}

if (emailValida) {
    alert("email valida")
    
}

else{
    alert("riprova")
}



