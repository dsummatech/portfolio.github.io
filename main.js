$(function () {
    $("nav .button").click(function () {
        $(".minimenu").slideToggle(500);
        $(".tutorialmenu").hide();
    });
    $(".tutorial").click(function () {
        $(".tutorial-drop").fadeToggle();
        $(".minimenu").hide();
    });
    var n = -1;
    
    function me() {
        /*var myself= ["My"," name"," is"," Gideon"," Ifeoluwa",". ","Full-stack"," developer,"," Tutor,"," and"," a"," Freelancer"," with"," an"," impressive", " background"," of"," being"," the"," CEO"," of"," <u>SummaTech</u>"," company",". <br/>","I"," have"," acquired"," many"," coding"," skills"," such"," as"," HTML5,"," CSS5,"," JAVASCRIPT,"," JQUERY,"," REACT JS,"," REDUX,"," PHP,"," and"," TYPESCRIPT"," with"," years"," of", " work"," experience."," Working"," as"," a"," tutor"," in"," Liberty"," Academy"," and"," also"," as"," a"," senior"," developer"," in"," WiziTech"," company."];*/

        var self = ["M","y ","n","a","m","e ","i","s ","G","i","d","e","o","n ","I","f","e","o","l","u","w","a",". ","F","u","l","l","-","s","t","a","c","k ","d","e","v","e","l","o","p","e","r",", ","T","u","t","o","r",", ","a","n","d ","a ","F","r","e","e","l","a","n","c","e","r ","w","i","t","h ","a","n ","i","m","p","r","e","s","s","i","v","e ","b","a","c","k","g","r","o","u","n","d ","o","f ","b","e","i","n","g ","t","h","e ","C","E","O ","o","f ","S","u","m","m","a","T","e","c","h ","c","o","m","p","a","n","y",". ","<br/>","I ","h","a","v","e ","a","c","q","u","i","r","e","d ","m","a","n","y ","c","o","d","i","n","g ","s","k","i","l","l","s ","s","u","c","h ","a","s ","H","T","M","L","5",", ","C","S","S","5",", ","J","A","V","A","S","C","R","I","P","T",", ","J","Q","U","E","R","Y",", ","R","E","A","C","T ","J","S",", ","R","E","D","U","X",", ","P","H","P",", ","a","n","d ","T","Y","P","E","S","C","R","I","P","T ","w","i","t","h ","y","e","a","r","s ","o","f ","w","o","r","k ","e","x","p","e","r","i","e","n","c","e",". ","W","o","r","k","i","n","g ","a","s ","a ","t","u","t","o","r ","i","n ","L","i","b","e","r","t","y ","A","c","a","d","e","m","y ","a","n","d ","a","l","s","o ","a","s ","a ","s","e","n","i","o","r ","d","e","v","e","l","o","p","e","r ","i","n ","W","i","z","i","T","e","c","h ","c","o","m","p","a","n","y","."];
            
            setTimeout(() => {
                if (n <= 315) {
                n++;
                $(".myself h2").append("<code>"+self[n]+"</code>");
            }
            }, 1500);
            
        
    }
    setInterval(me, 30);

    window.onscroll = function(){scrollFunction()};
function scrollFunction() {
    var nav = $("nav");
    
    if (document.body.scrollTop >= 10 || document.documentElement.scrollTop > 10) {
        $("nav").css({"background-color":"rgb(5, 0, 65)"});
        
    }
    
    else{
        $("nav").css({"background-color":"transparent"});
    }
}

$("body").ready( function () {
    setTimeout(() => {
        $("nav").css({"left":"0%"});
    }, 200);
    
    setTimeout(() => {
        $(".myself").slideToggle(1000);
    }, 200);
    
});
$(".tut").click(function () {
    $(".tutorial-drop").fadeToggle();
});
$(".rela h2").click(function () {
    $(".tutorial-drop").hide(600);
});

$("body").ready(function () {
    $(".about-main .about-in .first").slideToggle(1000);
    setTimeout(() => {
        var work = 0;
    var years = 0;
    var clients = 0;
    var award = 0;
    function w(){
        if (work != 104) {
            work++;
            $(".works").html(work);
        }
    }
    setInterval(w, 20);
    function y(){
        if (years != 15) {
            years++;
            $(".years").html(years);
        }
    }
    setInterval(y, 100);
    function c(){
        if (clients != 58) {
            clients++;
            $(".clients").html(clients);
        }
    }
    setInterval(c, 100);
    function a(){
        if (award != 12) {
            award++;
            $(".award").html(award);
        }
    }
    setInterval(a, 100);
    }, 1200);
    
});

$(".more-b").click(function () {
    var more = $(".more");
   $(this).children().slideToggle(); 
   
   
});
});