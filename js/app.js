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
        
        secondsElement.innerText = 0;
        minutesElement.innerText = 0;
        hoursElement.innerText = 0;
        daysElement.innerText = 0;
        yearsElement.innerText = 0;
        
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
        
        var minutes = seconds / 60;
        var hours = minutes / 60; 
        var days = hours / 24; 
        var years = days / 365; 
        
        secondsElement.innerText = Math.round(seconds % 60);
        
        if(seconds > 60) {
            minutesElement.innerText = Math.round(minutes % 60);
        } 
        if(minutes > 60) {
            hoursElement.innerText = Math.round(hours % 24);
        }
        if(hours > 24) {
            daysElement.innerText = Math.round(days % 365);
        }
        if(days > 365) {
            yearsElement.innerText = Math.round(years);
        }
    });

});