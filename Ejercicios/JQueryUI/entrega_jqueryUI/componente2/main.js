let previousSelected = undefined;
let currentSelected = undefined;
let pareja = false;

$(function () {
    $("button").button().click(async function (event) {
        event.preventDefault();
   
        if(previousSelected==undefined){

            previousSelected = event.currentTarget.id
            let img = $('<img>').attr("src", "img/" +extractPngId(previousSelected)+'.png');
            $(this).append(img)
           
        }else{

            currentSelected = event.currentTarget.id
            let img = $('<img>').attr("src", "img/" +extractPngId(currentSelected)+'.png');
            $(this).append(img)

            if(extractPngId(previousSelected) == extractPngId(currentSelected)){
                pareja = true
           
                $('#'+previousSelected).unbind()
                $('#'+previousSelected).click(function(){
                    window.open(routes[$(this).attr('id').split('-')[0].split('card')[1]-1])
                })

            
                $('#'+currentSelected).unbind()
                $('#'+currentSelected).click(function(){
                    window.open(routes[$(this).attr('id').split('-')[0].split('card')[1]-1])
                })

               
                previousSelected = undefined
                currentSelected = undefined
            }else{
                pareja = false
            }
        }

        if(!pareja && currentSelected!=undefined){
            $("#game-container :input").attr("disabled", true);
            await setTimeout(()=>{
                $('#'+previousSelected).empty()
                $('#'+currentSelected).empty()
                previousSelected = undefined
                currentSelected = undefined
                $("#game-container :input").attr("disabled", false);
            },400)
            
        }

    });
});





function extractPngId(cardId){
    if(cardId.includes('p1'))
        return cardId.split("-p1")[0]
    return cardId.split("-p2")[0]
}

function getCards(){
    let cards = []
    for(let i=1;i<7;i++){
        cards.push("card"+i+'-p1.png')
    }
    for(let i=1;i<7;i++){
        cards.push("card"+i+'-p2.png')
    }
    return cards
}


function generateCards() {
    let cards = getCards()
    let cardNumber = Math.floor(Math.random() * (cards.length - 0))
    for (let i = 1; i <= 12; i++) {
        let card = cards.splice(cardNumber, 1)
        let cardId = card[0].split('.png')[0]
        let cardBtn = $("<button>")
        cardBtn.attr("id",cardId)
        cardBtn.attr("class","card-container")
        let cardImg = $("<img>")
        cardImg.attr("src","img/" + card[0].split('-')[0]+".png")
        $('#game-container').append(cardBtn);
        cardNumber = Math.floor(Math.random() * (cards.length - 0))
    }

}
generateCards()


routes = [
    'https://mtg.gamepedia.com/Black_Lotus',
    'https://gatherer.wizards.com/pages/card/Details.aspx?name=Deathrite+Shaman',
    'https://coppermind.net/wiki/Kelsier',
    'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=497502',
    'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=435220',
    'https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=435206'

]