var r=$("#red");
var y=$("#yellow");
var b=$("#blue");
var g=$("#green");

function wrong(){
    $("h1").text("Game Over , press A to start new game");
    $("body").addClass("gameover");
    setTimeout(function(){$("body").removeClass("gameover")},100);
    var audio =new Audio("sounds/wrong.mp3");
    audio.play();

}

$(".buttons").click(function(){
    var cb=this.id;
    $("#"+cb).addClass("pressed");
    setTimeout(function(){$("#"+cb).removeClass("pressed")},100);
    switch(cb){
        case "green":
            var aud= new Audio("sounds/green.mp3");
            aud.play();
        case "blue":
            var aud= new Audio("sounds/blue.mp3");
            aud.play();
        case "yellow":
            var aud= new Audio("sounds/yellow.mp3");
            aud.play();
        case "red":
            var aud= new Audio("sounds/red.mp3");
            aud.play();
            
    }
    
    
    
});

    

function start(a){
    var R=Math.random();
    var rn=Math.floor(R*4)+1;
    var col;
    switch(rn){
        case 1:
            col="red";
        case 2:
            col="blue";
        case 3:
            col="yellow";
        case 4:
            col="green";
    


    }
    return col;
}

    
    

    




document.addEventListener("keydown",function(event){
    
   if(event.key==="a"){
       start();
   }
   else{
       
       wrong();
   }
} );