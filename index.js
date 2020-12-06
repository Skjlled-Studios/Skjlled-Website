function mise(){
    var current = document.getElementById("chatDestroyer").innerHTML;
    if (current == "+"){
        current = "-";
        //maximising
        document.getElementById("chat").style.display = "inline-block";
        document.getElementById("chatDestroyer").style.width = "30.1%";
    }else{
        current = "+";
        //minimising
        document.getElementById("chat").style.display = "none";
        document.getElementById("chatDestroyer").style.width = "3%";
    }
    document.getElementById("chatDestroyer").innerHTML=current;
}