/*------------DOM HANDLE-------------- */
const form = document.querySelector('.modal');
const addTask = document.getElementById('add-task');


/*------------------------------------ */
let tasks=[];

tasks=[
    {
        'task':'arreglar el carro',
        'priority':'low',
        'deadline':'2024-10-10',
        'note':'',
    },
    {
        'task':'comprar dulces',
        'priority':'medium',
        'deadline':'2024-09-30',
        'note':''
    }
]

addTask.addEventListener("click",()=>{
    form.style.display='flex';
})
    
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let newTask={
        'task':document.getElementById('task').value,
        'priority':document.getElementsByClassName('radio').value,
        'deadline':document.getElementById('date').value,
        'note': document.getElementById('note').value
    }
    tasks.push(newTask);
    form.style.display='none';
    });
