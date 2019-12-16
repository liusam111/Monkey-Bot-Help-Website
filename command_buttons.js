
var acc = document.getElementsByClassName("command");
var i;
for(i = 0; i < acc.length; i++){
    acc[i].onclick = function (){
        var content = this.nextElementSibling;
        this.classList.toggle("active");
        content.classList.toggle("show");

        
        if(content.style.maxHeight){
            //Command is open, need to close
            content.style.maxHeight = null;
        } else {
            //Command is closed, need to open
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }

}
