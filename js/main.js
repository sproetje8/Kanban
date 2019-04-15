document.getElementById('create-board').addEventListener('click', function(){
document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

document.getElementById('create-new-board').addEventListener('click', function(){
    var boardname = document.getElementById('boardName').value;
    
    var boarddiv = document.createElement('div');
    boarddiv.className = 'created-board board-tile-new';
    // boarddiv.innerHTML = boardname;
    
    var boardlink = document.createElement('a');
    boardlink.className = 'brdlnk';
    boardlink.id = 'brdId';
    boardlink.innerHTML = boardname;
    boardlink.setAttribute('href', 'www.google.com');

    // function currentDate(){
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
    
    var lastEdit = document.createElement('span');
    lastEdit.className = 'dateLastEdit';  
    lastEdit.innerHTML = 'Last edited : ' + today;  

    var delbtn = document.createElement('img');
    delbtn.className = 'delete';
    delbtn.id = 'del-board';
    delbtn.setAttribute('src', '/images/delete-icon.png');
    delbtn.setAttribute('alt', 'delete button');

    var settingsbtn = document.createElement('img');
    settingsbtn.className = 'settings';
    settingsbtn.id = 'board-settings';
    settingsbtn.setAttribute('src', '/images/settings-icon.png');
    settingsbtn.setAttribute('alt', 'settings button');

    boarddiv.appendChild(boardlink);
    boarddiv.appendChild(delbtn);
    boarddiv.appendChild(settingsbtn);
    boarddiv.appendChild(createdOn);
    boarddiv.appendChild(lastEdit);


    var newboard = document.createElement('li');
    newboard.className = 'board-tile';
    newboard.appendChild(boarddiv);
    
    document.getElementById('boardList').appendChild(newboard);

    document.querySelector('.bg-modal').style.display = 'none';
});

