<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="google-signin-client_id" content="77416518505-jfee3199k7aahoft1htb1dr3ggte9k1e.apps.googleusercontent.com">
  
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <link rel="stylesheet" href="css/signin.css">
  </head>
  <body>
    <div class="container">    
        <form class="form-signin">
            <h2 class="form-signin-heading">Sign Up</h2>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <input type="password" id="inputPassword" class="form-control" placeholder="Confirm Password" required>
            <input type="address" id ="addressLine1" class="form-control" placeholder="Address Line 1">
            <input type="address" id ="addressLine2" class="form-control" placeholder="Address Line 2">
            <input type="address" id ="city" class="form-control" placeholder="City">
            <input type="address" id ="state" class="form-control" placeholder="State">
            <input type="address" id ="zip" class="form-control" placeholder="Zip Code">
            <button class="btn btn-lg btn-primary btn-block" type="submit">Sign Up!</button>
        </form>    
    </div> <!-- /container -->
    
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
    <!-- Optional JavaScript -->
    <script src="https://apis.google.com/js/platform.js" async defer></script>

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
  </body>
</html>
