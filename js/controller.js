var Controller = (function() {
    function Controller(model) {
        this.model = model;
        this.addBoard = this.addBoard.bind(this);
    } 

    Controller.prototype.addBoard = function addBoard() {  
        var board = {};
        var currentDate;
        var boardname = document.getElementById('boardName').value;

        // create current Date
        var currentDate = new Date();
        var dd = currentDate.getDate();
        var mm = currentDate.getMonth()+1; 
        var yyyy = currentDate.getFullYear();
        if(dd<10) {
            dd = '0'+ dd;
        } 
        if(mm<10) {
            mm ='0'+ mm;
        } 
        currentDate = mm + '-' + dd + '-' + yyyy;
       
        // check user input for board name
        if (boardname !== ''){
            var regexp1 = new RegExp('^[A-Za-z\s]{3,}$');
            if(!regexp1.test(boardname))
            { 
                alert('Alphabets only, min 3');
            } else 
            if(this.model.state.boards.some(function (el) { return el.name == boardname})) {
                alert('This name already exists, enter another one.');
            }
            else {
                // board = new Board(boardname, currentDate);
                board = {
                    boardname: boardname,
                    currentDate: currentDate
                };

            }

            this.model.addBoard(board);
        }
    }

    return Controller;
})();