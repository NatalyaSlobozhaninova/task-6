const  testTextField = document.querySelector('#link');
testTextField.addEventListener ('click', function (event) {
    const userText = prompt ('Введите текст');
    testTextField.textContent = userText;
    console.log('Текст изменен');
    event.preventDefault();
});


    
