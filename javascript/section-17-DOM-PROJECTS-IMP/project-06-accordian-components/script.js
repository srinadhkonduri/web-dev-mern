let accordions = document.querySelectorAll(".accordion");

accordions.forEach(function(button){

    button.addEventListener("click", function(){

        // toggle active class
        this.classList.toggle("active");

        // get next panel
        let panel = this.nextElementSibling;

        // toggle display
        if(panel.style.display === "block"){
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });

});