/*------------DOM HANDLE-------------- */
const form = document.querySelector('.modal');
const addTask = document.getElementById('add-task');
let priorityField;

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
    
// -------------------Event listeners/functions-----------------------

form.addEventListener("submit", (e) => {
    e.preventDefault();
    taskField = document.getElementById('task');
    dateField = document.getElementById('date');
    noteField = document.getElementById('note');
    priorityField = document.querySelector('.priority:checked');

    let newTask={
        'task':taskField.value,
        'priority':priorityField.value,
        'deadline':dateField.value,
        'note': noteField.value
    }

    tasks.push(newTask);
    closeModal();
    });


function closeModal(){
    form.style.display='none';
    if(priorityField){
        taskField.value='';
        priorityField.checked=false;
        dateField.value='';
        noteField.value='';
    }
}