function Table () {

    this.elem = document.createElement('div');
    let random = Math.round(Math.random() * (10 - 1) + 1);
    let buttonAdd = document.createElement('button');
    buttonAdd.innerHTML = 'Add';
    let buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = 'Remove';
    let table = document.createElement('table');
    table.classList.add('table');
    buttonAdd.addEventListener('click',adding);
    buttonRemove.addEventListener('click',removing);
    this.elem.append(buttonAdd);
    this.elem.append(buttonRemove);
    this.elem.append(table);
    

    function adding(){
        let row = document.createElement('tr');
        for(let i = 0;i < random;i++){
            let td = document.createElement('td');
            for(let i = 0;i < 16;i++){
                let num = Math.round(Math.random() * (3 - 1) + 1);
                switch(num){
                    case 1 :
                     td.textContent += String.fromCharCode(Math.round(Math.random() * (57 - 48) + 48));
                    break;

                    case 2 : 
                     td.textContent += String.fromCharCode(Math.round(Math.random() * (90 - 65) + 65));
                    break;

                    case 3 :
                     td.textContent += String.fromCharCode(Math.round(Math.random() * (122 - 97) + 97));
                    break;
                }
               
            }
           row.append(td);
        }
        table.append
        (row);
    }
    function removing(){
        table.removeChild(table.lastElementChild);
    }

}