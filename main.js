
window.onload = () => {

    let searchbar = document.getElementById('searchbar');
    let commands = document.querySelectorAll('#commands > li');
    let filters = document.querySelectorAll('#filter > li');
    
    function search(){
        for(let command of commands){
            let searchText = searchbar.value.toLowerCase();

            if(command.textContent.toLowerCase().includes(searchText)){
                command.style.display = null;
            } else {
                command.style.display = 'none';
            }
        }
    }


    searchbar.addEventListener('input', () => {
        search();
    });

    searchbar.addEventListener('click', () => {
        searchbar.value = '';
        for(let filter of filters){
            if(filter.id == 'filter-all'){
                filter.classList.add("active");
            } else {
                filter.classList.remove("active");
            }
        }

        for(let command of commands){
            command.style.display = null;
        }
        search();
    });

    
    for(let command of commands){
        let commandName = command.querySelector('.command-name');
        let commandInfo = commandName.nextElementSibling;

        commandName.addEventListener('click', () => {
            commandName.classList.toggle('open');
            commandInfo.classList.toggle('open');
            
            if(commandInfo.style.maxHeight){
                commandInfo.style.maxHeight = null;
            } else {
                commandInfo.style.maxHeight = `${commandInfo.scrollHeight + 50}px`;
            }
        });
    }


    for(let filter of filters){

        filter.addEventListener('click', () => {
            searchbar.value = '';
            for(let f of filters){
                if(filter == f){
                    f.classList.add("active");
                } else {
                    f.classList.remove("active");
                }
            }


            let filterClass = filter.id.replace('filter-', '');
    
            if(filterClass == 'all'){
                let commands = document.querySelectorAll('#commands > li');
                for(let command of commands){
                    command.style.display = null;
                }

            } else {
                let include = document.querySelectorAll(`.${filterClass}`);
                let exclude = document.querySelectorAll(`#commands > li:not(.${filterClass})`);
    
                for(let command of include){
                    command.style.display = null;
                }
    
                for(let command of exclude){
                    command.style.display = 'none';
                }
            }
        });


    }




}



