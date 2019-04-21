function openModal(){
    document.getElementById('create-board').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
    });
}

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

document.getElementById('create-new-board').addEventListener('click', checkInput);

var boardname = '';
function checkInput(){
    boardname = document.getElementById('boardName').value;
    var regexp1 = new RegExp('^[A-Za-z\s]{3,}$');
    if(!regexp1.test(boardname))
    { 
        alert('Alphabets only, min 3');
    } else {
        createBoard();
    }
}

var boards = [];
var newboard;
function createBoard() {
    // get user input for board name
    boardname = document.getElementById('boardName').value;

    // function for layout of current Date
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) {
        dd = '0'+ dd;
    } 
    if(mm<10) {
        mm ='0'+ mm;
    } 
    today = mm + '-' + dd + '-' + yyyy;

    addBoard(boardname, today);
    saveBoard(boardname, today);
}

function saveBoard(boardname, today) {  
    var obj = {
        name: boardname,
        created: today
    }
    boards.push(obj);
    saveBoardsToStorage();
}

function saveBoardsToStorage() {
    localStorage.setItem('boards', JSON.stringify(boards));
}

function addBoard(boardname, today){
    // create tiles for new boards
    var boarddiv = document.createElement('div');
    boarddiv.className = 'created-board board-tile-new';
        
    // create settings icon
    var settingsicon = document.createElement('i');
    settingsicon.setAttribute('class', 'fas fa-cog');
    settingsicon.id = 'board-settings';
        
    // wrap settings image in a link
    var settingslink = document.createElement('a');
    settingslink.className = 'settings-link';
    settingslink.id = 'board-settings-link';
    settingslink.setAttribute('href', 'https://www.oxfordlearnersdictionaries.com/')
    settingslink.appendChild(settingsicon);
    
    // put link in a div
    var settingsdiv = document.createElement('div');
    settingsdiv.classname = 'settings-div';
    settingsdiv.id = 'board-settings-div';
    settingsdiv.appendChild(settingslink);
    
    // create link to boardpage
    var boardlink = document.createElement('a');
    boardlink.className = 'brdlnk';
    boardlink.id = 'brdId';
    boardlink.innerHTML = boardname;
    boardlink.setAttribute('href', 'https://dictionary.cambridge.org/');
    
    // wrap link in a div
    var namediv = document.createElement('div');
    namediv.classname = 'boardlink-wrap';
    namediv.id = 'boardlink-wrap-div';
    namediv.appendChild(boardlink);
    
    // add date when board was created;
    var createdOn = document.createElement('span');
    createdOn.className = 'dateCreated';
    createdOn.innerHTML = 'Created : ' + today;

    //create image for delete button
    var delicon = document.createElement('i');
    delicon.setAttribute('class', 'far fa-trash-alt');
    delicon.id = 'trash';

    // create delete button
    var delbtn = document.createElement('button');
    delbtn.className = 'delete';
    delbtn.id = 'del-board';
    delbtn.setAttribute('type', 'button');
    delbtn.setAttribute('name', 'delete');
    delbtn.appendChild(delicon);
    
    // function to delete a board from localStorage
    delbtn.addEventListener('click', function() {
        boards = boards.filter(function(board){
            if(board.name !== boardname) {
                return true;
            }
        });
        newboard.parentNode.removeChild(newboard);
        saveBoardsToStorage();
    });

    // add all parts to the board div
    boarddiv.appendChild(settingsdiv);
    boarddiv.appendChild(namediv);
    boarddiv.appendChild(createdOn);
    boarddiv.appendChild(delbtn);
    
    newboard = document.createElement('li');
    newboard.className = 'board-tile';
    newboard.appendChild(boarddiv);
    
    document.getElementById('boardList').appendChild(newboard);
    
    document.querySelector('.bg-modal').style.display = 'none';

    return newboard;
}

function init() {
    boards = JSON.parse(localStorage.getItem('boards')) || [];
    boards.forEach(function (board) {
        openModal();
    });
}

init();

// var lastEdit = document.createElement('span');
// lastEdit.className = 'dateLastEdit';  
// lastEdit.innerHTML = 'Last edit : ' + today;  
// boarddiv.appendChild(lastEdit);
// obj.name = boardname;
// var obj = {};