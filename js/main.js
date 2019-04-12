document.getElementById("create-board").addEventListener("click", function(){
    var newboard = document.createElement("li");
    var boarddiv = document.createElement("div");
    newboard.className = "board-tile";
    boarddiv.className = "created-board board-tile-new";
    boarddiv.innerHTML = "I am a new board";
    newboard.appendChild(boarddiv);
    document.getElementById("boardList").appendChild(newboard);
});


