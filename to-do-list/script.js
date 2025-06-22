const form = document.querySelector('form');
//console.log(form);
const table = document.querySelector('.list-task');
//console.log(table);
const addbtn = document.querySelector('button');
//console.log(addbtn);

addbtn.addEventListener('click', (e) => {
    e.preventDefault();

    const input = document.querySelector('.task-title').value;
    const date = document.querySelector('.date').value;
    const priority = document.querySelector('.priority').value;
    // console.log(input);
    // console.log(date);
    // console.log(priority);
    if(input == '' || date == ''){
        alert('fill the data');
        return;
    }
    
    const tbody = document.querySelector('tbody');
    const tr = document.createElement('tr');

    const tasktd = document.createElement('td');
    tasktd.innerText = input;
    tr.appendChild(tasktd);

    const deadline = document.createElement('td');
    deadline.innerText = date;
    tr.appendChild(deadline);

    const taskLevel = document.createElement('td');
    taskLevel.innerText = priority;
    tr.appendChild(taskLevel);

    const action = document.createElement('td');
    const delbtn = document.createElement('button');
    delbtn.className = 'delbtn';
    delbtn.textContent = 'Delete'
    delbtn.addEventListener('click', (e) => {
        e.stopPropagation();
        tr.remove();
    });
    action.appendChild(delbtn);
    tr.appendChild(action);
    
    // const editbtn = document.createElement('button');
    // delbtn.className = 'editbtn';
    // delbtn.textContent = 'Edit'

   tbody.appendChild(tr);
    
})