var tasks = [];
var boards = JSON.parse(localStorage.getItem('boards'));

init();

function init () {
    addBoardsToDropDown(boards);
}

function addBoardsToDropDown (boards) {
    var selectBoard = document.getElementById('board');

    boards.forEach(function (board) {
        var optionElement = document.createElement('option');
        optionElement.id = 'js-' + board.name;
        optionElement.innerText = board.name;
        optionElement.value = board.name;

        selectBoard.appendChild(optionElement);

        return selectBoard;
    })
}

localStorage.setItem('tasks', JSON.stringify(tasks));

document.getElementById('create-new-task').addEventListener('click', validateInput);

function validateInput () {
    var taskNameElement = document.getElementById('taskName');
    var descriptionElement = document.getElementById('description');
    var priorityElement = document.getElementById('priority');
    var notesElement = document.getElementById('notes');
    var typeElement = document.getElementById('task-type');
    var boardElement = document.getElementById('board');

    var taskName = taskNameElement.value;
    var description = descriptionElement.value;
    var priority = priorityElement.value;
    var notes = notesElement.value;
    var type = typeElement.value;
    var board = boardElement.value;

        if (taskName === '' || taskName === ' ') {
            taskNameElement.className = 'invalid';
            alert('Task name is required');
        }

        if (description === '' || description === ' ') {
            descriptionElement.className = 'invalid';
            alert('Task description is required');
        }

        if (priority === '' || priority === ' ') {
            priorityElement.className = 'invalid';
        }

        if (notes === '' || notes === ' ') {
            notesElement.className = 'invalid';
        }

        if (type === '' || type === ' ') {
            typeElement.className = 'invalid';
        }

        if (board === '' || board === ' ') {
            boardElement.className = 'invalid';
        }
}



// taskObjectConstructor();
//
// function taskObjectConstructor {
//     taskObject =
//
// }