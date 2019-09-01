var tasks = JSON.parse(localStorage.getItem('tasks'));
var selectedBoard = JSON.parse(localStorage.getItem('selectedBoard'));
var title = document.getElementsByTagName('title')[0];
var boardHeader = document.getElementsByTagName('h1')[0];
var selectedBoardName = selectedBoard.name;
var filteredTasks = [];
var uniqueTaskOwners = [];
var firstClass;
var toDO = 'toDo';
var inProgress = 'inProgress';
var done = 'done';

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
    uniqueTaskOwners.forEach(function (uniqueTaskOwner, i) {
        var li = document.createElement('li');
        firstClass = 'js-row-' + (i + 2);
        var secondClass = 'taskOwner';
        li.classList = firstClass + ' ' + secondClass;
        li.id = 'js-' + uniqueTaskOwner;
    
        li.innerHTML =
            '<span class="board__taskOwner">' + uniqueTaskOwner + '</span>' +
            '<div class="board__taskCount">' +
            '    <span class="board__tasksOwnerCount">Number of tasks: </span>' +
            '    <span class="board__tasks-number">0</span>' +
            '</div>';

        li.style.gridRowStart = ownerRowCounter;
        li.style.gridRowEnd = ownerRowCounter + 1;
        ownerRowCounter++;
        document.getElementById('board-container').appendChild(li);

        var liToDo = document.createElement('li');
        var liToDoClass = firstClass + ' toDo';
        liToDo.classList = liToDoClass;
        liToDoId = liToDoClass + i;
        liToDo.id = liToDoId;
        document.getElementById('board-container').appendChild(liToDo);

        var liInProgress = document.createElement('li');
        var liInProgressClass = firstClass + ' inProgress';
        liInProgressId = liInProgressClass + i;
        liInProgress.id = liInProgressId;
        document.getElementById('board-container').appendChild(liInProgress);

        var liDone = document.createElement('ul');
        var liDoneClass = firstClass + ' done';
        liDone.classList = liDoneClass;
        liDoneId = liDoneClass + i;
        liDone.id = liDoneId;
        document.getElementById('board-container').appendChild(liDone);

        var ulToDo = document.createElement('ul');
        document.getElementById(liToDoId).appendChild(ulToDo);
        
        var ulInProgress = document.createElement('ul');
        document.getElementById(liInProgressId).appendChild(ulInProgress);
        
        var ulDone = document.createElement('ul');
        document.getElementById(liDoneId).appendChild(ulDone);
    });
}    

// function addListsToTaskOwnerRows() {
//     uniqueTaskOwners.forEach(function () {
        
// }

function createHtmlForTasks() {
    var li = document.createElement('li');
    var taskTileTaskId = task.taskId;
    var taskTileTaskName = task.taskName;
    li.className = 'js-taskTile';
    li.id = 'js-task-' + taskTileTaskId;
    
    li.innerHTML = 
        '<div>' +
        '   <div class="task-priority"></div>' +
        '   <a class="task-identifier">' +
        '       <img src="" alt="" class="task-identifier-icon">' +
        '       <span class="task-identifier-name">' + taskTileTaskId + '</span>' + 
        '   </a>' +
        '   <div><i class="fas fa-arrow-left"></i></div>' +
        '   <span class="task-name">' + taskTileTaskName + '</span>' +
        '   <img src="" alt="" class="taskOwner-avatar"' +
        '</div>';
    document.getElementById('board-container').appendChild(li);

}

// function placeTasksOnTheBoard () {
//     tasks.forEach(function(task) {
//         var taskColumn = task.column;
//         switch (taskColumn) {
//             case toDo: 
            
//         } 

//     }
// }

document.getElementById('close-task-settings').addEventListener('click', function () {
    document.getElementById('bg-modal-taskEdit').style.display = 'none';
});








