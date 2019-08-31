var tasks = [];
tasks = JSON.parse(localStorage.getItem('tasks'));
var boards = JSON.parse(localStorage.getItem('boards'));

init();

function init () {
    addBoardsToDropDown(boards);
    // addFieldForNotes();
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
    });
}

// function addFieldForNotes () {
//     var addNoteElement = document.querySelector('.add-note-input');
//     addNoteElement.addEventListener('keyup', function(e) {
//         if (e.code === "Enter") {
//             e.preventDefault();
//             addNoteElement.blur();
//         }
//     });

//     addNoteElement.addEventListener('blur', function () {
//         var counter = 1;
//         var addNoteInputId = 'js-' + 'add-note-input' + counter;
//         addNoteElement.id = addNoteInputId;
//         counter++;
//         var notediv = document.createElement('div');
//         notediv.className = "add-note";
//         notediv.innerHTML = 'div class="add">+</div>
//         <input type="text" class="add-note-input" id="" placeholder="Add a note ..." autocomplete="off">
//         <div class="delete-note">+</div>'

//     });<div class="add-note">
//                     <div class="add">+</div>
//                     <input type="text" class="add-note-input" id="" placeholder="Add a note ..." autocomplete="off">
//                     <div class="delete-note">+</div>
//                 </div>
// }

document.getElementById('create-new-task').addEventListener('click', validateInput);

function validateInput () {
    // var notes = {};

    var taskNameElement = document.getElementById('taskName');
    var descriptionElement = document.getElementById('description');
    var priorityElement = document.getElementById('priority');
    var taskOwnerNameElement = document.getElementById('task-owner-name');
    var taskOwnerLastNameElement = document.getElementById('task-owner-lastName');
    var typeElement = document.getElementById('task-type');
    var boardElement = document.getElementById('board');
    
    var taskName = taskNameElement.value;
    var description = descriptionElement.value;
    var priority = priorityElement.value;
    var taskOwnerName = taskOwnerNameElement.value;
    var taskOwnerLastName = taskOwnerLastNameElement.value;
    var type = typeElement.value;
    var board = boardElement.value;

        if (taskName === '' || taskName === ' ') {
            taskNameElement.className = 'invalid';
            alert('Task name is required');
        } else {
            taskNameElement.className = 'valid';
        }

        if (description === '' || description === ' ') {
            descriptionElement.className = 'invalid';
            alert('Task description is required');
        } else {
            descriptionElement.className = 'valid';
        }

        if (priority === '' || priority === ' ') {
            priorityElement.className = 'invalid';
            alert('Priority is required');
        } else {
            priorityElement.className = 'valid';
        }

        // if (notes === '' || notes === ' ') {
        //     notesElement.className = 'invalid';
        //     alert('Notes are required');
        // } else {
        //     notesElement.className = 'valid';
        // }

        if (type === '' || type === ' ') {
            typeElement.className = 'invalid';
            alert('The type is required');
        } else {
            typeElement.className = 'valid';
        }

        if (board === '' || board === ' ') {
            boardElement.className = 'invalid';
            alert('The board is required');
        } else {
            boardElement.className = 'valid';
        }

        if (taskNameElement.className === 'valid' &&
            descriptionElement.className === 'valid' &&
            priorityElement.className === 'valid' &&
            // notesElement.className === 'valid' &&
            typeElement.className === 'valid' &&
            boardElement.className === 'valid') {
            taskObjectConstructor(taskName, description, priority, taskOwnerName, taskOwnerLastName, type, board);
        } else {
            document.getElementById('create-new-task').addEventListener('click', validateInput);
        }

}

function taskObjectConstructor(taskName, description, priority, taskOwnerName, taskOwnerLastName, type, board) {
    var taskObject = {
        taskName : taskName,
        description : description,
        priority : priority,
        // notes : notes,
        taskOwnerName : taskOwnerName,
        taskOwnerLastName : taskOwnerLastName,
        type : type,
        board : board,
        column : 'toDo'
    };

    tasks.push(taskObject);
    addTaskToLocalStorage(tasks);
}

function addTaskToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    document.getElementById('frm-new-task').reset();
    window.location.href = 'index.html';
}


