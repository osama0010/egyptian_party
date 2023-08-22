//loading//
$(document).ready(function () {
    $('.sk-cube-grid').fadeOut(900, function () {
        $('#loading').fadeOut(900, function name(params) {
            $('#loading').remove();
        })
    })
})
//loading//
$('.openNav').click(function(){

    if($('.navMenu').css('width') =='250px'){

        $('.navMenu').animate({width:'0px'},500);
        $('.content').animate({marginLeft :'0px'},500);
        $('.openNav').animate({marginLeft :'0px'},1000);
      }
      else{
        $('.navMenu').animate({width:'250px'},500);
        $('.content').animate({marginLeft :'250px'},500);
        $('.openNav').animate({marginLeft :'250px'},1000);
      }
   } )
/////////
   $('.close').click(function(){

    $('.navMenu').animate({ width:'0px'},500);
    $('.content').animate({marginLeft :'0px'},500);
    $('.openNav').animate({marginLeft :'0px'},1000);
   })
/////////
   $('.toggle').click(function(){
    $('.innerText').not($(this).next()).slideUp(500); 
    $(this).next().slideToggle(500);
})
/////////
// $('.toggle').click(function(){
//     $('.innerText').not($(this).next()).slideUp(500); 
//     $(this).next().slideToggle(500);
// })
/////////
let countDate= new Date("Oct 25 2023 10:00:00").getTime();
let counter = setInterval(()=>{
let dateNow=new Date().getTime();
let dateDiff= countDate-dateNow;

let day = Math.floor(dateDiff / (1000*60*60*24));
let hour =Math.floor(dateDiff % (1000*60*60*24)/(1000*60*60)); 
let minute =Math.floor(dateDiff % (1000*60*60)/(1000*60)); 
let second =Math.floor(dateDiff % (1000*60)/(1000)); 

document.getElementById("days").innerHTML=`${day} D`;
document.getElementById("hours").innerHTML=`${hour} H`;
document.getElementById("minutes").innerHTML=`${minute} M`;
document.getElementById("seconds").innerHTML=`${second} S`;

},1000)
///////////
var maxLength = 100;
$('textarea').keyup(function () {
    var length = $(this).val().length;
    var character = maxLength - length;
    if (character <= 0) {
        $("#char").text("your available character finished");

    } else {

        $("#char").text(character);
    }
});
////////
$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
   
    let section = $('#Home').offset().top;
    if (windowScroll > section){
       $('#go-up').show(1000);
    }
    else{
       $('#go-up').hide(1000);
    }
   
   })
   $('#go-up').click(function(){
       $('body,html').animate({ scrollTop:0},100)
})