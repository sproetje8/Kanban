var tasks = JSON.parse(localStorage.getItem('tasks'));
var selectedBoard = JSON.parse(localStorage.getItem('selectedBoard'));
var title = document.getElementsByTagName('title')[0];
var boardHeader = document.getElementsByTagName('h1')[0];
var selectedBoardName = selectedBoard.name;
var filteredTasks = [];
var uniqueTaskOwners = [];

title.innerText = selectedBoard.name;
boardHeader.innerText = selectedBoardName;

init(selectedBoardName, tasks);

function init(selectedBoardName, tasks) {
    tasks.filter(function (task) {
        if (task.board === selectedBoardName) {
            filteredTasks.push(task);
        }
    });
    
    return filteredTasks;
}

getTaskOwnerInfo();
showTaskOwners();

function getTaskOwnerInfo() {
    var taskOwnerInfo = filteredTasks.map(function(filteredTask) {
        return filteredTask.taskOwnerName;
    });
    
    uniqueTaskOwners = Array.from(new Set(taskOwnerInfo));
}

function showTaskOwners () {
    var ownerRowCounter = 2;
    uniqueTaskOwners.forEach(function (uniqueTaskOwner) {
        var li = document.createElement('li');
        li.className = 'js-taskOwner';
        li.id = 'js-' + uniqueTaskOwner;
    
        li.innerHTML =
            '<span class="board__taskOwner">' + uniqueTaskOwner + '</span>' +
            '<div class="board__taskCount">' +
            '    <span class="board__tasksOwnerCount">Number of tasks: </span>' +
            '    <span class="board__tasks-number">0</span>' +
            '</div>';
        li.style.gridColumnStart = 1;
        li.style.gridColumnEnd = 2;
        li.style.gridRowStart = ownerRowCounter;
        li.style.gridRowEnd = ownerRowCounter + 1;
        ownerRowCounter++;
        document.getElementById('board-container').appendChild(li); 
    });
}    

document.getElementById('close-task-settings').addEventListener('click', function () {
    document.getElementById('bg-modal-taskEdit').style.display = 'none';
});








