function timeDepict(){
    this.elem = document.createElement('div');
    let input = document.createElement('input');
    let div = document.createElement('div');
    this.elem.append(input);
    this.elem.append(div);
    input.addEventListener('input',render);
    var months = ['January', 'February', 'March', 'April', 'May',
     'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    function render(){
    const arr = input.value.split(' ').reduce(function(acc,elem,index){
        index === 0 ? acc.push(elem.split('.')) : acc.push(elem.split(':'));
        return acc;
    },[]);
    div.innerHTML=`${arr[1].join('-')} ${arr[0][1]} ${months[+arr[0][0] - 1]} ${arr[0][2]}`;
}
}