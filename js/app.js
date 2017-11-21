document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector("#button");
    
    button.addEventListener("click", function(event) {
        event.preventDefault();
        
        console.log("Hura! Działa!");
    });

    console.log("DONE");
});