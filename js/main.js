document.getElementById('create-board').addEventListener('click', function(){
document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

var newboard;
document.getElementById('create-new-board').addEventListener('click', function(){
    // get user input for board name
    var boardname = document.getElementById('boardName').value;
    
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
    
    // add date when board was created;
    var createdOn = document.createElement('span');
    createdOn.className = 'dateCreated';
    createdOn.innerHTML = 'Created : ' + today;

    //create image for delete button
    // var delimg = document.createElement('img');
    // delimg.className = 'del-img';
    // delimg.id = 'del-board-img';
    // delimg.setAttribute('src', '/images/delete-icon.png');
    // delimg.setAttribute('alt', 'delete button');

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
    delbtn.addEventListener('click', function () {
        newboard.parentNode.removeChild(newboard);
    });
    // (<i class="far fa-trash-alt"></i>)
    // add all parts to the board div
    boarddiv.appendChild(settingsdiv);
    boarddiv.appendChild(namediv);
    boarddiv.appendChild(createdOn);
    boarddiv.appendChild(delbtn);
    
    var newboard = document.createElement('li');
    newboard.className = 'board-tile';
    newboard.appendChild(boarddiv);
    
    document.getElementById('boardList').appendChild(newboard);
    
    document.querySelector('.bg-modal').style.display = 'none';
    
    return newboard;
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