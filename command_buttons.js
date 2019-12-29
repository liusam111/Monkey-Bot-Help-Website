
let commands = document.getElementsByClassName("command");

for(let i = 0; i < commands.length; i++){
    commands[i].addEventListener("click", toggleActive);
}

let searchbar = document.getElementsByClassName("search-bar");
searchbar[0].addEventListener("keyup", search);


function toggleActive(){
    var content = this.nextElementSibling;
    this.classList.toggle("active");
    content.classList.toggle("show");

    
    if(content.style.maxHeight){
        //Command is open, need to close
        content.style.maxHeight = null;
    } else {
        //Command is closed, need to open
        content.style.maxHeight = (content.scrollHeight + 50) + "px";
    }
}

function search(){
    let commands = document.getElementsByClassName("command");
    let searchbar = document.getElementsByClassName("search-bar");
    
    let input = searchbar[0].value.toLowerCase();

    for(let i = 0; i < commands.length; i++){
        let currCommand = commands[i];
        let currText = currCommand.textContent.toLowerCase();

        if(currText.indexOf(input) > -1){
            currCommand.style.display = "";
            currCommand.nextElementSibling.style.display = "";
        } else {
            currCommand.style.display = "none";
            currCommand.nextElementSibling.style.display = "none";
        }

    }
}