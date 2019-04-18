document.getElementById('create-board').addEventListener('click', function(){
document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

var newboard;
var boardname;

document.getElementById('create-new-board').addEventListener('click', function(){
    boardname = document.getElementById('boardName').value;
    
    var boarddiv = document.createElement('div');
    boarddiv.className = 'created-board board-tile-new';
    
    // create link to boardpage
    var boardlink = document.createElement('a');
    boardlink.className = 'brdlnk';
    boardlink.id = 'brdId';
    boardlink.innerHTML = boardname;
    boardlink.setAttribute('href', 'www.google.com');
    
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
    
    var createdOn = document.createElement('span');
    createdOn.className = 'dateCreated';
    createdOn.innerHTML = 'Created : ' + today;
    
    // create settings button
    var settingsbtn = document.createElement('img');
    settingsbtn.className = 'settings';
    settingsbtn.id = 'board-settings';
    settingsbtn.setAttribute('src', '/images/settings-icon.png');
    settingsbtn.setAttribute('alt', 'settings button');
    
    // wrap settings button in a link
    var settingslink = document.createElement('a');
    settingslink.className = 'settings-link';
    settingslink.id = 'board-settings-link';
    settingslink.appendChild(settingsbtn);
    
    //create image for delete button
    var delimg = document.createElement('img');
    delimg.className = 'del-img';
    delimg.id = 'del-board-img';
    delimg.setAttribute('src', '/images/delete-icon.png');
    delimg.setAttribute('alt', 'delete button');

    // create delete button
    var delbtn = document.createElement('button');
    delbtn.className = 'delete';
    delbtn.id = 'del-board';
    delbtn.appendChild(delimg);
    delbtn.addEventListener('click', function () {
        newboard.parentNode.removeChild(newboard);
    })
    
    // add all parts to the board div
    boarddiv.appendChild(boardlink);
    boarddiv.appendChild(settingslink);
    boarddiv.appendChild(createdOn);
    boarddiv.appendChild(delbtn);
    
    newboard = document.createElement('li');
    newboard.className = 'board-tile';
    newboard.appendChild(boarddiv);
    
    document.getElementById('boardList').appendChild(newboard);
    
    document.querySelector('.bg-modal').style.display = 'none';
    
    return newboard;
    return boardname;
});
// document.getElementById('del-board').addEventListener('click', function(){
//     document.getElementById('boardList').removeChild(newboard);
// });

// var lastEdit = document.createElement('span');
// lastEdit.className = 'dateLastEdit';  
// lastEdit.innerHTML = 'Last edit : ' + today;  
// boarddiv.appendChild(lastEdit);
// obj.name = boardname;
// var obj = {};