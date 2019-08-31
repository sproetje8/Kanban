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


function getTaskOwnerInfo() {
    var taskOwnerInfo = filteredTasks.map(function(filteredTask) {
        return filteredTask.taskOwnerName;
    });
    
    uniqueTaskOwners = Array.from(new Set(taskOwnerInfo));
}

console.log(uniqueTaskOwners);

    // var div = document.createElement('div');
    // div.className = 'js-' + taskOwnerName;

    // div.innerHTML =
    //     '<div class="board__name">' +
    //     '    <span>' + taskOwnerName + '</span>' +
    //     '</div>' +
    //     '<div class="board__taskCount">' +
    //     '    <span class="board__tasks">Number of tasks: </span>' +
    //     '    <span class="board__tasks-number">' + taskNumber + '</span>' +
    //     '</div>';

    // return div;

document.getElementById('close-task-settings').addEventListener('click', function () {
    document.getElementById('bg-modal-taskEdit').style.display = 'none';
});








