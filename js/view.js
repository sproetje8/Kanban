var View = (function() {
    var controller;
    var model;

    function View(controllerData, modelData) {
        this.controller = controllerData;
        this.model = modelData;

        this.init();
    }

    View.prototype.init = function init() {
        this.model.setView(this);

        document.getElementById('create-board').addEventListener('click', this.showNewBoardForm)
        document.getElementById('create-new-board').addEventListener('click', this.controller.addBoard)
    }

    View.prototype.showNewBoardForm = function showNewBoardForm() {
        document.querySelector('.bg-modal').style.display = 'flex';
    }

    View.prototype.hideNewBoardForm = function showNewBoardForm() {
        document.querySelector('.bg-modal').style.display = 'none';
    }

    View.prototype.renderBoard = function renderBoard(board) {
        var p = document.createElement('p');
        p.innerHTML = JSON.stringify(board, null, 4);
        document.getElementById('boardList').appendChild(p);
    }


        
    return View;
})();
    
    // get user input for board name
    // boardname = document.getElementById('boardName').value;

    // document.getElementById('create-new-board').addEventListener('click', checkInput);

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
    
    
    
    
// document.querySelector('.close').addEventListener('click', function(){
//     document.querySelector('.bg-modal').style.display = 'none';
// });