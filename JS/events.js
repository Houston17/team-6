$(document).ready(function(){

    $('#addEvents').click(function (){
        console.log("sup");
        $('#eventForm').show();
        $('#addEvents').hide();

        $('#eventName').val("");
        $('#eventDate').val("");
        $('#eventTime').val("");
        $('#eventLocation').val("");
    })

    $('#submitEvents').click(function() {
        console.log("Hi");
        var eventName = $('#eventName').val();
        var eventDate = $('#eventDate').val();
        var eventTime = $('#eventTime').val();
        var eventLocation = $('#eventLocation').val();

        var tr = "<tr>\
                    <td>" + eventName + "</td>\
                    <td>" + eventDate + "</td>\
                    <td>" + eventTime + "</td>\
                    <td>" + eventLocation + "</td>\
                  </tr>"
        
        $("#table").append(tr);
        
        $('#eventForm').hide();
        $('#addEvents').show();
        console.log(eventName + eventDate + eventTime + eventLocation);
    })
})