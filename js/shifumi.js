
const prise = ["Ciseaux","Pierre","Feuilles"];

function win( player, bot){
    if(player == prise[bot]){
        return 0;
    }
    else if( player == "Ciseaux" && prise[bot] == "Feuilles"|| 
        player == "Pierre" && prise[bot] == "Ciseaux" ||
        player == "Feuilles" && prise[bot] =="Pierre" )
        {
            return 1;
    }
    else{
        return -1;
    }

}


    const bouton = document.querySelectorAll("button");
    for(let i = 0; i < bouton.length; i++){

        bouton[i].addEventListener('click', () => {

            const player = bouton[i].innerHTML
            const bot = Math.floor(Math.random() * 3);
            console.log(player);
            console.log(bot);
            let resultat = win(player, bot)
            let profil = document.getElementById('resultat');
            let res= "L'adversaire à jouer : "+prise[bot];
            let image = document.getElementById('image');
            

            switch(resultat){
                case 0 : 
                    profil.textContent=res+" vous faites égalité";
                    
                    break;
                case 1 :
                    profil.textContent= res+" vous avez gagné";
                    break;
                case -1 :
                    profil.textContent =res+ " vous avez perdu";
                    break;

            }
        }) 
    }


