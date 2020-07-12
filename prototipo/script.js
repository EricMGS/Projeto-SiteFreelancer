function thereIsScrollbar() {
    return ($(document).height() > $(window).height());
}

window.onload = function(){
    header = document.getElementById("header");
    footer = document.getElementById("footer");
    if(thereIsScrollbar()) {
        header.style.paddingRight = "15px";
        footer.style.paddingRight = "15px";
    }
}