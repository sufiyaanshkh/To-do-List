let taskList = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;

    const task = { id: Date.now(), text: taskText, completed: false };
    taskList.push(task);
    taskInput.value = '';
    renderTasks();
}

function toggleTaskCompletion(taskId) {
    taskList = taskList.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    renderTasks();
}

function editTask(taskId) {
    const newTaskText = prompt("Edit the task");
    if (newTaskText) {
        taskList = taskList.map(task => 
            task.id === taskId ? { ...task, text: newTaskText } : task
        );
        renderTasks();
    }
}

function deleteTask(taskId) {
    taskList = taskList.filter(task => task.id !== taskId);
    renderTasks();
}

function renderTasks() {
    const taskListUl = document.getElementById('taskList');
    taskListUl.innerHTML = '';

    taskList.forEach(task => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}" onclick="toggleTaskCompletion(${task.id})">${task.text}</span>
            <div>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskListUl.appendChild(li);
    });
}
