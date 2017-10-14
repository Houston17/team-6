$(document).ready(function(){

    $('#submitUser').click(function() {
        console.log("Hi");
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        
        console.log(name + email + password);
		firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            console.log("idk");
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
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