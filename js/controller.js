var Controller = (function() {
    function Controller(model) {
        this.model = model;
    } 

    Controller.prototype.addBoard = function addBoard(boardname) {
    var board = {};
    var currentDate;

    var boardname = document.getElementById('boardName').value;

        if (boardname !== ''){
            var regexp1 = new RegExp('^[A-Za-z\s]{3,}$');
            if(!regexp1.test(boardname))
            { 
                alert('Alphabets only, min 3');
            } else 
            if(boards.some(function (el) { return el.name == boardname})) {
                alert('This name already exists, enter another one.');
            }
            else {
                board = new Board(boardname, currentDate);
            }

            this.model.addBoard(board);
        }
    }

    return Controller;
})();