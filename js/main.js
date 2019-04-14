document.getElementById('create-board').addEventListener('click', function(){
document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});

var boardname = document.getElementById('boardName').value;
document.getElementById('create-new-board').addEventListener('click', function(){
    var boarddiv = document.createElement('div');
    boarddiv.className = 'created-board board-tile-new';
    boarddiv.innerHTML = boardname;
    
    var newboard = document.createElement('li');
    newboard.className = 'board-tile';
    newboard.appendChild(boarddiv);
    document.getElementById('boardList').appendChild(newboard);
    document.querySelector('.bg-modal').style.display = 'none';
});

// document.getElementById('create-board').addEventListener('click', function(){
    
// });

