$(document).ready(function(){
    console.log("...")

        console.log("oh fuck");
        var starCountRef = firebase.database().ref('Events');
        starCountRef.once('value', function(snapshot) {
          snapshot.forEach(function (data){
            console.log(data.val().Name);
            var dataArray = data.val();
            console.log(dataArray.Time);
            writeRows(dataArray.Name, dataArray.Date, dataArray.Time, dataArray.Location);
          })
        });

        
    
    $('#addEvents').click(function (){
        console.log("sup");
        $('#eventForm').show();
        $('#addEvents').hide();

        $('#eventName').val("");
        $('#eventDate').val("");
        $('#eventTime').val("");
        $('#eventLocation').val("");

        writeUserData("Tarun", "tarunt");
    })

    $('#submitEvents').click(function() {
        console.log("Hi");
        var eventName = $('#eventName').val();
        var eventDate = $('#eventDate').val();
        var eventTime = $('#eventTime').val();
        var eventLocation = $('#eventLocation').val();
        
        $('#eventForm').hide();
        $('#addEvents').show();
        console.log(eventName + eventDate + eventTime + eventLocation);
        writeNewPost(eventName, eventDate, eventTime, eventLocation);
        location.reload();
    })

    function writeRows(eventName, eventDate, eventTime, eventLocation){
        var tr = "<tr>\
            <td>" + eventName + "</td>\
            <td>" + eventDate + "</td>\
            <td>" + eventTime + "</td>\
            <td>" + eventLocation + "</td>\
            </tr>"

        $("#table").append(tr);
    }

    function writeUserData(userId, name, email) {
        firebase.database().ref('Users/' + userId).set({
          username: name,
        });
    }

    function writeNewPost(title, date, time, location) {
        // A post entry.
        var postData = {
          Name: title,
          Date: date,
          Time: time,
          Location: location,

        };
      
        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('Events').push().key;
      
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['Events/' + title] = postData;
      
        return firebase.database().ref().update(updates);
    }
})