let clicks = 0;
function fillTimeTable(selectedDate) {
    clicks = 0;
    let currentDate = new Date(selectedDate)
    $('#timetable-dates').empty()
    $('#timetable-times').empty()
    for (let i = 0; i < 7; i++) {
        let day = currentDate.getDate()
        let month = currentDate.getMonth()+1
        let year = currentDate.getFullYear()
        let formatedDate = day + "/" + month + "/" + year;

        let dateComponent ='<div class="day">'+formatedDate+'</div>'
        $('#timetable-dates').append(dateComponent)
        let morningComponent = '<div id="morning'+i+'" class="morning">Mañana</div>'
        $('#timetable-times').append(morningComponent)
        setClickListener( "#morning"+i,"morning")
        
        currentDate.setDate(currentDate.getDate() + 1);
    }


    for (let i = 0; i < 7; i++) {
        let afternoonComponent = '<div id="afternoon'+i+'" class="afternoon">Tarde</div>'
        $('#timetable-times').append(afternoonComponent)
        setClickListener( "#afternoon"+i,"afternoon")
    }

    for (let i = 0; i < 7; i++) {
        let nightComponent = '<div id="night'+i+'" class="night">Noche</div>'
        $('#timetable-times').append(nightComponent)
        setClickListener( "#night"+i,"night")
    }


}

function setClickListener(id,msg){
    $(id).click(function() {
        if($(id).css("background-color")=='rgb(200, 230, 201)'){
            $(id).css("background-color","rgba(0, 0, 0, 0")
            clicks--
        }else{
            if(clicks<3){
                clicks++
                $(id).css("background-color","rgb(200, 230, 201)")
            }
                
        }
       
    });
}

$( "#datepicker" ).datepicker();
$("#btn-apply").click(function() {
    let selectedDate = $( "#datepicker" ).datepicker("getDate");
    console.log(selectedDate)
    fillTimeTable(selectedDate);
});

