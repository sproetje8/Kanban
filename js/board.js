var tasks = JSON.parse(localStorage.getItem('tasks'));
var selectedBoard = JSON.parse(localStorage.getItem('selectedBoard'));
var title = document.getElementsByTagName('title')[0];
var boardHeader = document.getElementsByTagName('h1')[0];
var selectedBoardName = selectedBoard.name;
var filteredTasks = [];
var uniqueTaskOwners = [];
var firstClass;
var toDo = 'toDo';
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
createHtmlForTasks();

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
        li.id = 'js-' + removeWhitespace(uniqueTaskOwner);
    
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

        var liDone = document.createElement('li');
        var liDoneClass = firstClass + ' ' + done;
        liDone.classList = liDoneClass;
        liDoneId = liDoneClass + i;
        liDone.id = liDoneId;
        document.getElementById('board-container').appendChild(liDone);

        var ulToDo = document.createElement('ul');
        ulToDo.classList.add(toDo);
        ulToDo.classList.add(removeWhitespace(uniqueTaskOwner));
        document.getElementById(liToDoId).appendChild(ulToDo);

        var ulInProgress = document.createElement('ul');
        ulInProgress.classList.add(toDo);
        ulInProgress.classList.add(removeWhitespace(uniqueTaskOwner));
        document.getElementById(liInProgressId).appendChild(ulInProgress);

        var ulDone = document.createElement('ul');
        ulDone.classList.add(toDo);
        ulDone.classList.add(removeWhitespace(uniqueTaskOwner));
        document.getElementById(liDoneId).appendChild(ulDone);
    });
}

function removeWhitespace(str) {
    return str.replace(' ', '');
}

function createHtmlForTasks() {
    uniqueTaskOwners.forEach(function (uniqueTaskOwner) {
        filteredTasks.forEach(function (filteredTask) {        
            if (filteredTask.taskOwnerName === uniqueTaskOwner) {
                var li = document.createElement('li');
                var taskTileTaskId = filteredTask.taskId;
                var taskTileTaskName = filteredTask.taskName;
                var taskClassName = removeWhitespace(uniqueTaskOwner);
                var parentElementClassName = '.';
                
                switch (filteredTask.column) {
                    case toDo:
                        taskClassName += ' js-taskTile ' + toDo;
                        parentElementClassName += toDo;
                        li.className = taskClassName;
                        break;
                        
                    case inProgress:
                        taskClassName += ' js-taskTile ' + inProgress;
                        parentElementClassName += inProgress;
                        li.className = taskClassName;
                        break;
                            
                    case done:
                        taskClassName += ' js-taskTile ' + done;
                        parentElementClassName += done;
                        li.className = taskClassName;
                        break;

                    default:
                        taskClassName += ' js-taskTile ' + toDo;
                        parentElementClassName += toDo;
                        li.className = taskClassName;
                        break;
                }

                parentElementClassName += '.' + removeWhitespace(uniqueTaskOwner);
                li.id = 'js-task-' + taskTileTaskId;
                
                li.innerHTML = 
                    '<div style="display: flex;">' +
                    '   <div class="task-priority"></div>' +
                    '   <a class="task-identifier">' +
                    '       <img src="" alt="" class="task-identifier-icon">' +
                    '       <span class="task-identifier-name">' + taskTileTaskId + '</span>' + 
                    '   </a>' +
                    '   <div><i class="fas fa-arrow-left"></i></div>' +
                    '   <span class="task-name">' + taskTileTaskName + '</span>' +
                    '   <img src="" alt="" class="taskOwner-avatar"' +
                    '</div>';

                document.querySelector(parentElementClassName).appendChild(li);
            }
        });
    });
}

document.getElementById('close-task-settings').addEventListener('click', function () {
    document.getElementById('bg-modal-taskEdit').style.display = 'none';
});








