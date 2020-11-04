$(function () {

});
let first = undefined;
let second = undefined;
let firsti = undefined;
let secondi = undefined;
let cards = getCards()

let found = false;
let number_of_pairs = 0;


let previousSelected = undefined;
let currentSelected = undefined;
let pareja = false;

$(function () {
    $("button").button().click(function (event) {
        event.preventDefault();
   
        console.log({previous:previousSelected,current:currentSelected,pareja:pareja})
        if(!pareja && currentSelected!=undefined){
            console.log("entra")
            $('#'+previousSelected).empty()
            $('#'+currentSelected).empty()
            previousSelected = undefined
            currentSelected = undefined
        }

        if(previousSelected==undefined){
     
            previousSelected = event.currentTarget.id
            let img = document.createElement("img");
            img.setAttribute("src", "img/" +previousSelected+'.png');
            event.currentTarget.append(img)
           
        }else{

            currentSelected = event.currentTarget.id
            let img = document.createElement("img");
            img.setAttribute("src", "img/" +currentSelected+'.png');
            event.currentTarget.append(img)

            if(previousSelected == currentSelected){
                pareja = true
            }else{
                pareja = false
            }
        }

     

      
        

        /*
        if (number_of_pairs < 6) {

            if (first != undefined) {
                second = event.currentTarget
                let img = document.createElement("img");
                img.setAttribute("src", "img/" + cards[parseInt(second.id.substr(first.id.length - 1))]);
                event.currentTarget.append(img)
                if (first.id.substr(first.id.length - 1) == second.id.substr(first.id.length - 1)) {
                    found = true;
                    number_of_pairs++;
                } else {
                    found = false;
                }
                firsti = first.id;
                secondi = second.id;
                first = undefined;
                second = undefined;

            } else {
                if (!found && firsti && secondi) {
                    $('#' + firsti).empty();
                    $('#' + secondi).empty();
                    found = false;
                }
                first = event.currentTarget;
                let img = document.createElement("img");
                img.setAttribute("src", "img/" + cards[parseInt(first.id.substr(first.id.length - 1))]);
                event.currentTarget.append(img)
            }
        }
        */
    });
});


function getCards(){
    let cards = []
    let first = true;
    for(let i=1;i<7;i++){
        cards.push("card"+i+'.png')
        if(first && i==6){
            first=false;
            i=0
        }
    }
    return cards
}


function generateCards() {
    let cards = getCards()
    let cardNumber = Math.floor(Math.random() * (cards.length - 0))
    for (let i = 0; i < 12; i++) {
        let card = cards.splice(cardNumber, 1)
        let cardId = card[0].split('.png')[0]
        let cardBtn = $("<button>")
        cardBtn.attr("id",cardId)
        cardBtn.attr("class","grid-item")
        let cardImg = $("<img>")
        cardImg.attr("src","img/" + card)
        $('#buttons').append(cardBtn);
        cardNumber = Math.floor(Math.random() * (cards.length - 0))
    }

}
generateCards()
