




// document.getElementById('create-board').addEventListener('click', function(){
//     document.querySelector('.bg-modal').style.display = 'flex';
//     });

// document.querySelector('.close').addEventListener('click', function(){
//     document.querySelector('.bg-modal').style.display = 'none';
// });

// document.getElementById('create-new-board').addEventListener('click', checkInput);

// var boardname = '';
// function checkInput(){
//     boardname = document.getElementById('boardName').value;
//     if (boardname !== ''){
//     var regexp1 = new RegExp('^[A-Za-z\s]{3,}$');
//         if(!regexp1.test(boardname))
//         { 
//             alert('Alphabets only, min 3');
//         } else 
//         if(boards.some(function (el) { return el.name == boardname})) {
//             alert('This name already exists, enter another one.');
//         }
//         else {
//             createBoard();
//         }
//     }
// }

var boards = [];
function createBoard() {
    // // get user input for board name
    // boardname = document.getElementById('boardName').value;

    // // function for layout of current Date
    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth()+1; 
    // var yyyy = today.getFullYear();
    // if(dd<10) {
    //     dd = '0'+ dd;
    // } 
    // if(mm<10) {
    //     mm ='0'+ mm;
    // } 
    // today = mm + '-' + dd + '-' + yyyy;

    addBoard(boardname, today);
    saveBoard(boardname, today);
    adaptAddTaskLink();
}

function saveBoard(boardname, today) {  
    var obj = {
        name: boardname,
        created: today
    }
    boards.push(obj);
    saveBoardsToStorage();
}
    
function adaptAddTaskLink() {
    var addNewTaskLink = document.getElementById('task-link');
    if(boards.length > 0) {
    addNewTaskLink.className = 'active';
    addNewTaskLink.href = 'https://www.collinsdictionary.com/dictionary/english';
    } else {
    addNewTaskLink.className = 'inactive';
    addNewTaskLink.href = '#';
    }   
}



function addBoard(boardname, today){
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
    settingslink.setAttribute('href', 'https://www.oxfordlearnersdictionaries.com/')
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
    
    // create link to boardpage
    var boardlink = document.createElement('a');
    boardlink.className = 'brdlnk';
    boardlink.id = boardname;
    boardlink.innerHTML = boardname;
    boardlink.setAttribute('href', 'board.html');
    namediv.appendChild(boardlink);
    
    // add date when board was created;
    var createdOn = document.createElement('span');
    createdOn.className = 'dateCreated';
    createdOn.innerHTML = 'Created : ' + today;
    boarddiv.appendChild(createdOn);

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
    // delbtn.addEventListener('click', function() {
    //     boards = boards.filter(function(board){
    //         if(board.name !== boardname) {
    //             return true;
    //         }
    //     });
    //     newboard.parentNode.removeChild(newboard);
    //     saveBoardsToStorage();
    //     adaptAddTaskLink();
    // });
}

function init() {
    boards = JSON.parse(localStorage.getItem('boards')) || [];
    boards.forEach(function (board) {
        addBoard(board.name, board.created);
    });
    adaptAddTaskLink();
}

init();