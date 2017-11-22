document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector("#check");
    
    button.addEventListener("click", function(event) {
        event.preventDefault();
        
        /*** 'GET' variables ***/
        var passwdLength = document.querySelector("#passLen");
        var speed = document.querySelector("#speed");
        var lowerCase = document.getElementById("lowerCase");
        var upperCase = document.getElementById("upperCase");
        var digits = document.getElementById("digits");
        var special = document.getElementById("special");
        var combinations = 0;
        var seconds = 0;
        
        /*** 'SET' variables ***/
        var passwdComb = document.getElementById("passwdCombinations");
        var yearsElement = document.getElementById("years");
        var daysElement = document.getElementById("days");
        var hoursElement = document.getElementById("hours");
        var minutesElement = document.getElementById("minutes");
        var secondsElement = document.getElementById("seconds");
        
        /*** Password combinations ***/
        if(lowerCase.checked == true) combinations += 26;
        if(upperCase.checked == true) combinations += 26;
        if(digits.checked == true) combinations += 10;
        if(special.checked == true) combinations += 33;
        combinations = Math.pow(combinations, passwdLength.value);
        
        passwdComb.innerText = combinations;
        passwdComb.style.fontWeight = 'bold';
        
        /*** Times ***/
        seconds = combinations / speed.value;
        
        if(seconds % 60) console.log(seconds % 60);
        
        
        console.log(seconds);
    });

    //console.log("DONE");
});