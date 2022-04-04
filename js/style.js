var btnAdd = document.querySelector('#add');
var btnMinus = document.querySelector('#minus');
var inputNumb = document.querySelector('#numb');

btnAdd.addEventListener('click', ()=>{
    inputNumb.value = parseInt(inputNumb.value) + 1;
});

btnMinus.addEventListener('click', ()=>{
    inputNumb.value = parseInt(inputNumb.value) - 1;
});