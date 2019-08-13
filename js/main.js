var boards;
var input;


window.onload = init();

document.getElementById('create-board').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'flex';
    document.getElementById('inputName').focus();
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
});

// Get the input field
document.getElementById('inputName').addEventListener('keypress', function (event) {
    // 'Enter' is key number 13
    if (event.keyCode === 13) {
        // Cancel the default action
        event.preventDefault();
        // Trigger the button element with a click
        checkInput();
    }
});

// check input when 'create' button clicked
document.getElementById('create-new-board').addEventListener('click', checkInput);

// remove default function of form
document.getElementById('frm1').addEventListener('submit', function (event) {
    event.preventDefault();
});


var boardname = '';

function checkInput() {
    boardname = document.getElementById('inputName').value;
    if (boardname !== '') {
        var regexp1 = new RegExp('^[A-Za-z\s]{3,}$');
        if (!regexp1.test(boardname)) {
            alert('Alphabets only, min 3');
        } else if (boards.some(function (el) {
            return el.name == boardname
        })) {
            alert('This name already exists, enter another one.');
        } else {
            document.querySelector('.bg-modal').style.display = 'none';
            createBoard();
        }
    }
}

function createBoard() {
    // get user input for board name
    boardname = document.getElementById('inputName').value;

    // function to get current Date
    var date = Date.now();

    saveBoard(boardname, date);
    adaptAddTaskLink();
}

function saveBoard(boardname, date) {
    var obj = {
        name: boardname,
        created: date,
        edit: date
    };
    boards.push(obj);
    saveBoardsToStorage();
    // document.getElementById('inputName').value = '';
}

function adaptAddTaskLink() {
    var taskLinkActivation = document.getElementById('task-link');
    if (boards.length > 0) {
        taskLinkActivation.className = 'active';
        taskLinkActivation.href = '#';
    } else {
        taskLinkActivation.className = 'inactive';
        taskLinkActivation.href = '#';
    }
}

function saveBoardsToStorage() {
    localStorage.setItem('boards', JSON.stringify(boards));
}

function addBoardToHomePage(boardname, creationDate, lastEditDate) {
    // create tiles for new boards
    var newboard = document.createElement('li');
    newboard.className = 'board-tile';

    var boarddiv = document.createElement('div');
    boarddiv.className = 'created-board board-tile-new';
    newboard.appendChild(boarddiv);

    // create div for link
    var settingsdiv = document.createElement('div');
    settingsdiv.classname = 'settings-div';
    settingsdiv.id = 'board-settings-div';
    boarddiv.appendChild(settingsdiv);

    // create link to settings
    var settingslink = document.createElement('a');
    settingslink.className = 'settings-link';
    settingslink.id = 'board-settings-link';
    settingslink.setAttribute('href', 'board.html');
    settingsdiv.appendChild(settingslink);

    // create settings icon
    var settingsicon = document.createElement('i');
    settingsicon.setAttribute('class', 'fas fa-cog');
    settingsicon.id = 'board-settings';
    settingslink.appendChild(settingsicon);

    // create div for link to boardpage
    var namediv = document.createElement('div');
    namediv.classname = 'boardlink-wrap';
    namediv.id = 'boardlink-wrap-div';
    boarddiv.appendChild(namediv);

    // add date when board was created;
    var createdOn = document.createElement('span');
    createdOn.className = 'dateCreated';
    createdOn.innerHTML = 'Created : ' + creationDate;
    boarddiv.appendChild(createdOn);

    // add date when board was last edited;
    var editedOn = document.createElement('span');
    editedOn.className = 'dateEdited';
    editedOn.innerHTML = 'Last edit: ' + lastEditDate;
    boarddiv.appendChild(editedOn);

    // create link to board page
    var boardlink = document.createElement('a');
    boardlink.className = 'brdlnk';
    boardlink.id = boardname;
    boardlink.innerHTML = boardname;
    boardlink.setAttribute('href', 'board.html');
    namediv.appendChild(boardlink);

    // create delete button
    var delbtn = document.createElement('button');
    delbtn.className = 'delete';
    delbtn.id = 'del-board';
    delbtn.setAttribute('type', 'button');
    delbtn.setAttribute('name', 'delete');
    boarddiv.appendChild(delbtn);

    //create image for delete button
    var delicon = document.createElement('i');
    delicon.setAttribute('class', 'far fa-trash-alt');
    delicon.id = 'trash';
    delbtn.appendChild(delicon);

    document.getElementById('boardList').appendChild(newboard);

    document.querySelector('.bg-modal').style.display = 'none';

    // function to delete a board from localStorage
}

document.getElementById('del-board').addEventListener('click', function deleteBoard() {
    boards = boards.filter(function (board) {
        if (board.name !== boardname) {
            return true;
        }
    newboard.parentNode.removeChild(newboard);
    saveBoardsToStorage();
    adaptAddTaskLink();
    });
});

function init() {
    input = document.getElementById('inputName');
    boards = JSON.parse(localStorage.getItem('boards')) || [];
    boards = boards.sort(function (a, b) {
        a = a.edit;
        b = b.edit;

        return a > b ? -1 : a < b ? 1 : 0;
    });

    localStorage.setItem('boards', JSON.stringify(boards));

    boards.forEach(function (board) {
        // set up layout for date of creation
        var createdMillisec = new Date(Date.now(board.created));
        var dd = createdMillisec.getDate();
        var mm = createdMillisec.getMonth() + 1;
        var yyyy = createdMillisec.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        creationDate = mm + '-' + dd + '-' + yyyy;

        // set up layout for date of last edit
        var lastEditMillisec = new Date(Date.now(board.edit));
        var dd = lastEditMillisec.getDate();
        var mm = lastEditMillisec.getMonth() + 1;
        var yyyy = lastEditMillisec.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        lastEditDate = mm + '-' + dd + '-' + yyyy;

        addBoardToHomePage(board.name, creationDate, lastEditDate);
    });
    adaptAddTaskLink();
}
