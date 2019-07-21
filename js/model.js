var Model = (function () {
    function Model() {
        this.view = null;
        this.state = {
            boards: []
        };
    }

    Model.prototype.saveBoardsToStorage = function saveBoardsToStorage(boards) {
        
    }

    Model.prototype.addBoard = function addBoard(board) {
        this.state.boards.push(board);
        this.view.renderBoard(board);
        this.view.hideNewBoardForm();
    }

    Model.prototype.setView = function setView(view) {
        this.view = view;
    }

    return Model;
})();

    // localStorage.setItem('boards', JSON.stringify(boards));
