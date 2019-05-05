var View = (function() {
    var controller;
    var model;

    function View(controllerData, modelData) {
    this.controller = controllerData;
    this.model = modelData;

    init.call(this);
    }

    function init() {

    }
   
    
    // get user input for board name
    boardname = document.getElementById('boardName').value;

    View.prototype.activateListeners = function () {
    document.getElementById('create-board').addEventListener('click', function(){
        document.querySelector('.bg-modal').style.display = 'flex';
    });

    document.getElementById('create-new-board').addEventListener('click', checkInput);

    delbtn.addEventListener('click', function() {
        boards = boards.filter(function(board){
            if(board.name !== boardname) {
                return true;
            }
        });
        newboard.parentNode.removeChild(newboard);
        saveBoardsToStorage();
        adaptAddTaskLink();
    });

    return View;
})();





document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
});