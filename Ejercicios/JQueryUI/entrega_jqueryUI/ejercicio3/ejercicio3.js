$(function () {

});
let first = undefined;
let second = undefined;
let firsti = undefined;
let secondi = undefined;
var cats = ["gato1.jpg", "gato2.jpg", "gato3.png", "gato4.jpg", "gato5.jpg", "gato6.jpg", "gato1.jpg", "gato2.jpg", "gato3.png", "gato4.jpg", "gato5.jpg", "gato6.jpg"];
var found = false;
var number_of_pairs = 0;
$(function () {
    $("button").button().click(function (event) {
        event.preventDefault();

        if (number_of_pairs < 6) {

            if (first != undefined) {
                second = event.currentTarget
                var img = document.createElement("img");
                img.setAttribute("src", "img/" + cats[parseInt(second.id.substr(first.id.length - 1))]);
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
                var img = document.createElement("img");
                img.setAttribute("src", "img/" + cats[parseInt(first.id.substr(first.id.length - 1))]);
                event.currentTarget.append(img)
            }
        }
    });
});
function addCards() {
    var numbers = ["a1", "a2", "a3", "a4", "a5", "a6", "b1", "b2", "b3", "b4", "b5", "b6"];
    var cats = ["gato1.jpg", "gato2.jpg", "gato3.png", "gato4.jpg", "gato5.jpg", "gato6.jpg", "gato1.jpg", "gato2.jpg", "gato3.png", "gato4.jpg", "gato5.jpg", "gato6.jpg"];
    var rand = Math.floor(Math.random() * (numbers.length - 0));

    for (var i = 0; i < 12; i++) {
        var num = numbers.splice(rand, 1);
        var cat = cats.splice(rand, 1);
        var node = document.createElement("button")
        node.setAttribute("id", num);
        node.setAttribute("class", "grid-item");
        var img = document.createElement("img");
        img.setAttribute("src", "img/" + cat);
        $('#buttons').append(node);
        rand = Math.floor(Math.random() * (numbers.length - 0));
    }

}
addCards();
