var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;

        document.getElementById("arrow1").className = "fas fa-sort-up";

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            document.getElementById("arrow1").className = "fas fa-sort-down";

        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}