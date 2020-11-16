<!DOCTYPE html>
<html>

    <head>
        <title> Sign Up Page </title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link href="css/styles.css" rel="stylesheet" type="text/css"/>

        <meta charset="utf-8">
    </head>
    
    <body>
        
        <h1> Sign Up </h1>
        
        <form id = "signupForm" action = "welcome.html">
            First Name  <input type = "text" name = "lName" class = "form-inline"><br>
            Last Name   <input type = "text" name = "lName" class = "form-inline"><br>
            Gender:     <input type = "radio" name = "gender" value = "m"> Male
                        <input type = "radio" name = "gender" value = "f"> Female<br><br>
    
            Zip Code    <input type = "text" id = "zip" name = "zip" class = "form-inline">
                        <span id = "zipError" class = "error"></span><br>
            City:       <span id = "city" class = "city"></span><br>
            Latitude:   <span id = "latitude" class = "latitude"></span><br>
            Longitude:  <span id = "longitude" class = "longitude"></span><br><br>
            
            State
            <select id = "state" name = "state" class = "form-inline">
                <option> Select One </option>
                <option value = "ca"> <b>California</b> </option>
                <option value = "ny"> New York   </option>
                <option value = "tx"> Texas      </option>
            </select><br>
            
            Select a County: <select id = "county" class = "form-inline"></select><br>
            
            Desired Username: <input type = "text" id = "username" name = "username" class = "form-inline">
                              <span id = "usernameError" class = "error"></span><br>

            Password:<input type = "password" id = "password" name = "password" class = "form-inline">
            Password Again:   <input type = "password" id = "passwordAgain" name = "passwordAgain" class = "form-inline">
                              <span id = "passwordAgainError" class = "error"></span><br>
            
            <input type = "submit" value = "Sign up!">
        
        </form>
    </body>
    <script src="js/script.js"></script>
</html>