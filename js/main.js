function clicked() {
    var user = document.getElementById('username');
    var pass = document.getElementById('password');

    var correctUser = "test";
    var correctPassword = "123";

    if(user.value == correctUser && pass.value == correctPassword)  {

            alert("You are logged in as " + user.value);
            open("https://www.nl-it-consulting.de/");
        } else {
            alert ("Incorrect username or password");
        }
    }