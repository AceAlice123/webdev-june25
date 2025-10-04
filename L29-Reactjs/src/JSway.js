// To load todos using JS and HTML this would be needed
let taskList = document.querySelector('#taskList');

const todos = [
  { id: 1, name: "Buy groceries", description: "Purchase milk, eggs, bread, and fruits from the supermarket." },
  { id: 2, name: "Workout", description: "Complete a 30-minute cardio session and strength training." },
  { id: 3, name: "Read book", description: "Read at least 50 pages of 'Atomic Habits' by James Clear." },
  { id: 4, name: "Call mom", description: "Catch up with mom and check in on how she’s doing." },
  { id: 5, name: "Finish project report", description: "Complete and submit the monthly project status report." }
];

function updateTodos(){
    todos.forEach((t)=>{
        let li = document.createElement(li);
        li.innerHTML = `
        <div>
            ${t.name} - ${t.description}
        </div>
        `

        taskList.appendChild(li);
    })
}