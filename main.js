// wemżmij to co ma klasę "interface" i 
// nasłuchiwaj kliknięcie - "click"
$('.interface').on("click", function(){

    //Jeżeli kliknęłem na to co ma klasę "green"
    if ($(this).hasClass("green")){
        console.log("Has class 'green");
        // to weżmij element "body" i jego właściwość
        //  "background-color" i zmień je
        $('body').css({
            "background-color" : "green" 
        })
    } else if($(this).hasClass("orange")){
        console.log("Has class 'orange")
        $('body').css({
            "background-color" : "orange" 
        })
    } else if($(this).hasClass("increase")) {
        console.log("Has class 'increase");
        $('.text').animate({
            //po każdym kliknięciu będzie 
            //zmieniana na + 8px
            "font-size" : "+=8px"
        },500)
    } else if($(this).hasClass("move")) {
        console.log("Has class 'move");
        $('.text').animate({
            "left" : "+=10px",
            "letter-spacing" : "+=2px"
        })
    }
})