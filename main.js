/*------------DOM HANDLE-------------- */
let form= document.getElementById('form');

/*------------------------------------ */
let tasks=[];

tasks=[
    {
        'task':'arreglar el carro',
        'priority':'low',
        'deadline':'20/20/2024',
        'note':''
    }
]
    
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTask={
        'task':document.getElementById('task').value,
        'priority':document.getElementsByClassName('radio').value,
        'deadline':document.getElementById('date').value,
        'note': document.getElementById('note').value
    }
    console.log(newTask);
    });
