// Displaying city from API after typing a zip code
/* global $ */
/* global fetch */

var usernameAvailable = false;

function isFormValid()
{
    let isValid = true;
    $("#passwordAgainError").hide(); // hide the password errors unless required below
    if (!usernameAvailable)
    {
        isValid = false;
    }
    if ($("#username").val().length == 0)
    {
        isValid = false;
        $("#usernameError").html("Username is required");
        $("#usernameError").css("color", "orange");
    }
    if ($("#password").val().length < 6)
    {
        isValid = false;
        $("#passwordAgainError").html("Password must be a minimum of 6 characters!").show();
        $("#passwordAgainError").css("color", "orange");
    }
    if ($("#password").val() != $("#passwordAgain").val())
    {
        isValid = false;
        $("#passwordAgainError").html("Password mismatch!").show();
        $("#passwordAgainError").css("color", "orange");
    }
    return isValid;
}

$("#zip").on("change", async function()
{
    // alert($("#zip").val());
    let zipCode = $("#zip").val();
    let url = `https://itcdland.csumb.edu/~milara/ajax/cityInfoByZip?zip=${zipCode}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    $("#city").html(data.city);
    
    $("#latitude").html(data.latitude);
    $("#longitude").html(data.longitude);
}); // zip

$("#state").on("change", async function()
{
    // alert($("#state").val());
    let state = $("#state").val();
    let url = `https://itcdland.csumb.edu/~milara/ajax/countyList.php?state=${state}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    $("#county").html("<option> Select one </option>");
    data.forEach(function(i)
    {
        $("#county").append(`<option> ${i.county} </option>`);
    });
}); // state

$("#username").on("change", async function()
{
    // alert($("#username").val());
    let username = $("#username").val();
    let url = `https://cst336.herokuapp.com/projects/api/usernamesAPI.php?username=${username}`;
    let response = await fetch(url);
    let data = await response.json();
    
    if (data.available)
    {
        $("#usernameError").html("Username available!");
        $("#usernameError").css("color", "green");
        usernameAvailable = true;
    }
    else
    {
        $("#usernameError").html("Username is NOT available!");
        $("#usernameError").css("color", "red");
        usernameAvailable = false;
    }
}); // username

$("#signupForm").on("submit", function (event)
{
    if (!isFormValid())
    {
        event.preventDefault();
    }
});