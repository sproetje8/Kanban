var boards;

window.onload = init();

function init() {
    boards = JSON.parse(localStorage.getItem('boards')) || [];
    sortAndShow();
}

function sortAndShow() {
    boards = boards.sort(function (a, b) {
        var c = a.editMilliseconds;
        var d = b.editMilliseconds;
        return c > d ? -1 : c < d ? 1 : 0;
    });
    addBoardsToHomePage();
    adaptAddTaskLink();
}

document.getElementById('create-board').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'flex';
    document.getElementById('inputName').focus();
});

document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
});

// check input when 'create' button clicked
document.querySelector('#create-new-board').addEventListener('click', checkInput);
// check input when Enter key is clicked
document.querySelector('#inputName').addEventListener('keyup', function(e) {
    if (e.code === "Enter") {
        e.preventDefault();
        document.querySelector('#create-new-board').click();
    }
});

// remove default function of form
document.getElementById('frm1').addEventListener('submit', function (event) {
    event.preventDefault();
});

var boardName = '';

function checkInput() {
    boardName = document.getElementById('inputName').value;
    if (boardName !== '') {
        var regexp1 = new RegExp('^[A-Za-z\s]{3,}$');
        if (!regexp1.test(boardName)) {
            alert('Alphabets only, min 3');
        } else if (boards.some(function (el) {
            return el.name == boardName
        })) {
            alert('This name already exists, enter another one.');
        } else {
            document.querySelector('.bg-modal').style.display = 'none';
            createBoard(boardName);
        }
    }
}

function createBoard(boardName) {
    // function to get current Date
    var date = Date.now();
    var createdMillisec = new Date(date);
    var lastEditMillisec = date;
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
    lastEditDate = creationDate;

    composeBoardObject(boardName, createdMillisec, lastEditMillisec, creationDate, lastEditDate);
}

function composeBoardObject(boardName, createdMillisec, lastEditMillisec, creationDate, lastEditDate) {
    var obj = {
        name: boardName,
        createdMilliseconds: createdMillisec,
        editMilliseconds: lastEditMillisec,
        created: creationDate,
        edit: lastEditDate
    };
    boards.push(obj);
    localStorage.setItem('boards', JSON.stringify(boards));
    clearHomePage();
    sortAndShow();
}

function clearHomePage(){
    var element = document.querySelectorAll(".board-tile");
    Array.prototype.forEach.call(element,  function(node){
        node.parentNode.removeChild(node)
    });
}

function adaptAddTaskLink() {
    var taskLinkActivation = document.getElementById('task-link');
    if (boards.length > 0) {
        taskLinkActivation.className = 'active';
        taskLinkActivation.href = 'newtask.html';
    } else {
        taskLinkActivation.className = 'inactive';
        taskLinkActivation.href = '#';
    }
}

function addBoard(board) {
    // create tiles for new boards
    var newboard = document.createElement('li');
    newboard.className = 'board-tile';

    var boarddiv = document.createElement('div');
    boarddiv.className = 'created-board board-tile-new';
    newboard.appendChild(boarddiv);

    // create div for link
    var settingsdiv = document.createElement('div');
    var settingsDivId = board.name + '-settings-div';
    settingsdiv.classname = 'settings-div';
    settingsdiv.id = settingsDivId;
    boarddiv.appendChild(settingsdiv);

    // create link to settings
    var settingslink = document.createElement('a');
    var settingsLinkId = board.name + '-settings-link';
    settingslink.className = 'settings-link';
    settingslink.id = settingsLinkId;
    settingslink.setAttribute('href', 'settings.html');
    settingsdiv.appendChild(settingslink);

    // create settings icon
    var settingsicon = document.createElement('i');
    var settingsiconId = board.name + 'settings-icon';
    settingsicon.setAttribute('class', 'fas fa-cog');
    settingsicon.id = settingsiconId;
    settingslink.appendChild(settingsicon);

    // create div for link to board page
    var namediv = document.createElement('div');
    var nameDivId = board.name + 'boardlink-wrap-div';
    namediv.classname = 'boardlink-wrap';
    namediv.id = nameDivId;
    boarddiv.appendChild(namediv);

    // add date when board was created;
    var createdOn = document.createElement('span');
    createdOn.className = 'dateCreated';
    createdOn.innerHTML = 'Created : ' + board.created;
    boarddiv.appendChild(createdOn);

    // add date when board was last edited;
    var editedOn = document.createElement('span');
    editedOn.className = 'dateEdited';
    editedOn.innerHTML = 'Last edit: ' + board.edit;
    boarddiv.appendChild(editedOn);

    // create link to board page
    var boardlink = document.createElement('a');
    var boardlinkId = board.name + '-link';
    boardlink.className = 'brdlnk';
    boardlink.id = boardlinkId;
    boardlink.innerHTML = board.name;
    boardlink.setAttribute('href', 'board.html');
    namediv.appendChild(boardlink);

    boardlink.addEventListener('click', function () {
        boards.forEach(function (elem) {
            if (elem.name === board.name) {
                localStorage.setItem('selectedBoard', JSON.stringify(elem));
            }
        });
    });
    // console.log(boardClicked);

    // create delete button
    var delbtn = document.createElement('button');
    var delbtnId = 'del' + board.name;
    delbtn.className = 'delete';
    delbtn.id = delbtnId;
    delbtn.setAttribute('type', 'button');
    delbtn.setAttribute('name', 'delete');
    boarddiv.appendChild(delbtn);

    //create image for delete button
    var delicon = document.createElement('i');
    delicon.setAttribute('class', 'far fa-trash-alt');
    delicon.id = 'trash';
    delbtn.appendChild(delicon);

    document.getElementById('boardList').appendChild(newboard);
    document.getElementById('inputName').value = '';
    document.querySelector('.bg-modal').style.display = 'none';

    delbtn.addEventListener('click', function () {
        var index = boards.indexOf(board);
        boards.splice(index, 1);
        localStorage.setItem('boards', JSON.stringify(boards));
        clearHomePage();
        sortAndShow();
    });
}

function addBoardsToHomePage() {
    boards.forEach(addBoard);
}

// var boards = JSON.parse(localStorage.getItem('boards'));

