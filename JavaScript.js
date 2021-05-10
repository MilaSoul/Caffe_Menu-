// initailising varibels by getting them from html code
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var uppercase = document.getElementById("uppercase");
var number = document.getElementById("number");
var lenght = document.getElementById("lenght");

//showing the error box  
myInput.onfocus = function(){
    document.getElementById("error").style.display = "block"
}

//remove the eeror box from the screen
muImput.onblur = function(){
    document.getElementById("error").style.display = "none"
}

// typing into password feald
myInput.onkeyup = function(){
    var LowerCaseLett = /[a-z]/g;
    
    if(muInput.value.match(LowerCaseLett)){
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid"); 
    }
// Uppercase Letter
    var UpperCaseLett = /[A-Z]/g;

    if(myInput.value.match(UpperCaseLett)){
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    } else {
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
    }

// Number 
     var Num = /[0-9]/g;

     if(myInput.value.match(Num)){
         number.classList.remove("invalid");
         number.classList.add("valid");
     } else {
        number.classList.remove("valid");
         number.classList.add("invalid"); 
     }

// Pssword lenght
     if(muInput.value.lenght >= 8) {
        lenght.classList.remove("invalid");
        lenght.classList.add("valid");
    } else {
       lenght.classList.remove("valid");
        lenght.classList.add("invalid"); 
    }

}

