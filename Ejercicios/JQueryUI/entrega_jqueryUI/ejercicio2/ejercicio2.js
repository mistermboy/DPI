var id_prev = 0;

$('.dragBox').draggable({
    cursor: "move",
    cursorAt: { top: 50, left: 50 },
    drag: function (event, ui) {
        id_prev = event.target.id.substr(event.target.id.length - 1);
    }
});

$('.dropBox').droppable({
    activeClass: "ui-hover",
    hoverClass: "ui-active",
    accept: function (res) {
        return true;
    },
    drop: function (event, ui) {
        var actual_id = event.target.id.substr(event.target.id.length - 1);
        if (actual_id == id_prev) {
            $("#q"+id_prev).draggable({
                revert : "invalid"
            });
        } else {
            $("#q"+id_prev).draggable({
                revert : "valid"
            });
       
        }

    }
});