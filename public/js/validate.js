window.onload = function () {


}

$(document).ready(function(){
    $("#signup").click(function(){
        var username = document.getElementById("name");
        var pwd = document.getElementById("password");
        var email = document.getElementById("email");
        var signup =document.getElementById("signup");
        
        //console.log(signup)


        var alphanumeric = /^[0-9a-zA-Z]+$/;
        //console.log(username.value.match(alphanumeric))
        //console.log(pwd.value)
        //console.log(email.value
         if( pwd.value.length<6 || !username.value.match(alphanumeric) || !email.value.match("@") )
        {
            alert("Error in giving credentials");
            return false;
        }else {
            $(".form-signin").submit();
        } 
        
    });
});