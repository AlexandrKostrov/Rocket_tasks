function Table () {

    this.elem = document.createElement('div');
    let buttonAdd = document.createElement('button');
    buttonAdd.innerHTML = 'Add';
    let buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = 'Remove';
    let table = document.createElement('table');
    table.classList.add('table');
    buttonAdd.addEventListener('click',adding);
    buttonRemove.addEventListener('click',deleteRow);
    let input = document.createElement('input');
    input.id = "firstInput";
    this.elem.append(table);
    this.elem.append(input);
    this.elem.append(buttonAdd);
    this.elem.append(buttonRemove);
    
    

    function adding(){
        let row = document.createElement('tr');
      
        for(let i = 0;i < 2;i++){
            let td = document.createElement('td');
            i === 0 ? td.textContent = firstInput.value : td.innerHTML = `<input type="checkbox"/>` 
           row.appendChild(td);
        }
        table.appendChild(row);
    }
    function deleteRow()  {
        var table = document.querySelector('.table');
        console.log(Array.from(table.rows))
        const rows = Array.from(table.rows);
        table.innerHTML='';
       
       let newTable = rows.reduce((table,row)=>{
           var chkbox = row.cells[1].firstElementChild;
           chkbox.checked === false ? table.appendChild(row) : null;
         return table; 
        },table);  
         
}

}