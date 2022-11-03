
let input = document.querySelector('input');
input.addEventListener('keyup', function(e) {
let duplicateField = document.querySelector('#duplicateField');
duplicateField.textContent = input.value;
})   

let button = document.querySelector('button');
button.addEventListener ('click',function (e) {
    console.log (input.value);
    input.value ="";
    duplicateField.textContent = "";

})