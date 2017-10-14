$(document).ready(function(){


    $('#submitUser').click(function() {
        console.log("Hi");
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();

        var tr = "<tr>\
                    <td>" + name + "</td>\
                    <td>" + email + "</td>\
                    <td>" + password + "</td>\
                  </tr>"
        
        $("#table").append(tr);
        
        $('#eventForm').hide();
        $('#addEvents').show();
        console.log(name + email + password);
		firebase.auth().createUserWithEmailAndPassword(email, password).catch
    })

    function writeUserData(userId, name, email) {
        firebase.database().ref('Users/' + userId).set({
          username: name,
        });
    }

    function writeNewPost(title, date, time) {
        // A post entry.
        var postData = {
          Name: title,
          Date: date,
          Time: time
		  
        };
      
        // Get a key for a new Post.
        var newPostKey = firebase.database().ref().child('Users').push().key;
      
        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['Users/' + title] = postData;
      
        return firebase.database().ref().update(updates);
    }
})