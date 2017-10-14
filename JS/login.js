$(document).ready(function(){

    $('#addEvents').click(function (){
        console.log("sup");
        $('#eventForm').show();
        $('#addEvents').hide();

        $('#name').val("");
        $('#email').val("");
        $('#password').val("");
        $('#eventLocation').val("");

        writeUserData("Tarun", "tarunt");
    })

    $('#submitUser').click(function() {
        console.log("Hi");
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var eventLocation = $('#eventLocation').val();

        var tr = "<tr>\
                    <td>" + name + "</td>\
                    <td>" + email + "</td>\
                    <td>" + password + "</td>\
                    <td>" + eventLocation + "</td>\
                  </tr>"
        
        $("#table").append(tr);
        
        $('#eventForm').hide();
        $('#addEvents').show();
        console.log(name + email + password + eventLocation);
        writeNewPost(name, email, password, eventLocation);
    })

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