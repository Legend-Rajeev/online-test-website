// function myFunction() {
//     var element = document.getElementById("toggle");
//     element.classList.toggle("toggle-active");
//  
$(document).ready(function(){

    $('#toggle').click(function(){
        $('.nav-links').css('left','0');
        $('#close').css('display', 'block');
    })
    
    $('#close').click(function(){
        $('.nav-links').css('left','100%');
        $('#close').css('display', 'none');
    })

})