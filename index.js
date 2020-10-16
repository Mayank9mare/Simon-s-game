
var level;
var colors=["red","blue","green","yellow"];
var seq=[];
var enter=[];
var cur_level =0;

function wrong(){
    $("h1").text("Game Over , press A to start new game");
    $("body").addClass("gameover");
    setTimeout(function(){$("body").removeClass("gameover")},100);
    var audio =new Audio("sounds/wrong.mp3");
    audio.play();
    seq=[];
    cur_level=0;
    level=0;

}

$(".buttons").click(function(){
    var cb=this.id;
    
    animate(cb);
    sound(cb);
    if(seq.length===0){
        wrong();
    }
    else{
    if(seq[cur_level]===cb){
        if(seq.length===(cur_level+1)){
            setTimeout(nextSequence(),1000);
        }
        else{
            cur_level++;
        }
    }
    else{
        wrong();
    }
}
    
    
    
});

function sound(a){
    var aud=new Audio("sounds/"+a+".mp3");
    aud.play();
}
function animate(a){
    $("#"+a).addClass("pressed");
    setTimeout(function(){$("#"+a).removeClass("pressed")},100);

}
function start(){
    var lol=4*Math.random() ;
    var t=Math.floor(lol);
    seq.push(colors[t]);
    $("#"+colors[t]).fadeIn(100).fadeOut(100).fadeIn(100);
    $("h1").text("Level "+level.toString());
    



}
function nextSequence(){
    level++;
    cur_level=0;
    $("h1").text("Level"+level.toString());
    var lol=4*Math.random();
    var t=Math.floor(lol);
    console.log(colors[t]);
    seq.push(colors[t]);
    setTimeout(function(){$("#"+colors[t]).fadeIn(100).fadeOut(100).fadeIn(100)},700);
    $("h1").text("Level "+level.toString());

}



    



    
    

    




document.addEventListener("keydown",function(event){
    
   if(event.key==="a"){
       level=1;
       start();
       
   }
   else{
       
       wrong();
   }
} );