function mise(){
    var current = document.getElementById("chatDestroyer").innerHTML;
    var elemente = document.getElementById("chatDestroyer");
    var chat = document.getElementById("chat");
    if (current == "+"){
        current = "-";
        //maximising
        chat.style.width = "30%";
        chat.style.height = "200px";
        elemente.style.width = "30%";
        elemente.style.borderTopRightRadius = "0";


        //animation for button
        elemente.classList.remove("buttonanimate2");
        void elemente.offsetWidth;
        elemente.classList.add("buttonanimate");

        //animation for chat
        chat.classList.remove("frameanimate2");
        void chat.offsetWidth;
        chat.classList.add("frameanimate");
    }else{
        current = "+";
        //minimising
        chat.style.width = "0";
        chat.style.height = "0";
        elemente.style.width = "3%";
        elemente.style.borderTopRightRadius = "50%";

        //animation for button
        elemente.classList.remove("buttonanimate");
        void elemente.offsetWidth;
        elemente.classList.add("buttonanimate2"); 

        //animation for chat
        chat.classList.remove("frameanimate");
        void chat.offsetWidth;
        chat.classList.add("frameanimate2"); 

    }
    document.getElementById("chatDestroyer").innerHTML=current;
}