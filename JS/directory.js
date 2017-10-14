$(document).ready(function(){
    console.log("...")
    index = 0;

    var starCountRef = firebase.database().ref('Users');
    starCountRef.once('value', function(snapshot) {
        snapshot.forEach(function (data){
        var dataArray = data.val();
        writeRows(dataArray.Name, dataArray.Email, dataArray.Phone, dataArray.Zip);
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

    })
    
    function writeRows(eventName, eventEmail, eventPhone, eventZip){
        var tr = '<tr>\
            <td>' + eventName + '</td>\
            <td>' + eventEmail + '</td>\
            <td>' + eventPhone + '</td>\
            <td>' + eventZip + '</td>\
            </tr>'

        $("#table").append(tr);
        
        $("#joinBtn"+index).click(function () {
            console.log("wheeeeeeee");
            var user = firebase.auth().currentUser;

            if (user){
                console.log("user exists");
            } else {
                window.location.href("../PAGES/signIn.html");
            }
    })
        index +=1;
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