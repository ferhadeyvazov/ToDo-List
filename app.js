let addtodoButton = document.getElementById('addtodo');
let cleartodoButton = document.getElementById('cleartodo');
let inputText = document.getElementById('inputText');
let todoContainer = document.getElementById('todoContainer');


addtodoButton.addEventListener('click', ()=>{
    console.log(inputText.value);
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling')
    todoContainer.appendChild(paragraph);
    paragraph.innerHTML=inputText.value;
    inputText.value = '';

    paragraph.addEventListener('click', ()=>{
        paragraph.style.textDecoration = 'line-through';
        paragraph.style.color = '#fff';
        
    })
    
    paragraph.addEventListener('dblclick', ()=>{
        todoContainer.removeChild(paragraph);
    })

    cleartodoButton.addEventListener('click', ()=>{
    todoContainer.removeChild(paragraph);
})

});

