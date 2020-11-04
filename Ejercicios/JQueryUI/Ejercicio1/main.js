
$(function () {
    $("#selectable").selectable({
        selecting: function (event, ui) {
            console.log(event.target)
            if ($(".ui-selected, .ui-selecting").length > 3) {
                $(ui.selecting).removeClass("ui-selecting");
            }

        },
        stop: function (d, e) {
            console.log(d, e)
            if ($(".ui-selected, .ui-selecting").length < 2) {
                alert("Debes incluir al menos dos franjas horarias");
            }
        }
    });
});


function addDay() {
    var today = new Date();
    for (var i = 0; i < 7; i++) {
        var day = today.getDate().toString().length ==1? '0'+today.getDate(): today.getDate();
        var month = (today.getMonth() + 1).toString().length ==1? '0'+(today.getMonth() + 1): (today.getMonth() + 1);
        var date = day + "/" + month + "/" + today.getFullYear();
        var day_html =
            '<div class="ui-state-default grid-item day">' + date + '</div>';
        $('#days_name').append(day_html);
        today.setDate(today.getDate() + 1);
    }
    for (var i = 0; i < 7; i++) {
        var day_html =
            '    <div id="'+i+'" class="ui-state-default grid-item c'+i+'">Mañana</div>';

        $('#selectable').append(day_html);
    }
    for (var i = 0; i < 7; i++) {
        var day_html =
            '    <div id="'+i+'" class="ui-state-default grid-item c'+i+'">Tarde</div>';

        $('#selectable').append(day_html);
    }
    for (var i = 0; i < 7; i++) {
        var day_html =
            '    <div id="'+i+'" class="ui-state-default grid-item c'+i+'">Noche</div>';

        $('#selectable').append(day_html);
    }
}

addDay();