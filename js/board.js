

var selectedBoard = JSON.parse(localStorage.getItem('selectedBoard'));
var title = document.getElementsByTagName('title')[0];
var boardHeader = document.getElementsByTagName('h1')[0];

title.innerText = selectedBoard.name;
boardHeader.innerText = selectedBoard.name;

getTaskOwnerInfo();

function getTaskOwnerInfo(name, lastName, taskNumber) {
    var div = document.createElement('div');
    div.className = 'js-' + name + lastName;

    div.innerHTML =
        '<div class="board__name">' +
        '    <span>' + name + '</span>' +
        '</div>' +
        '<div class="board__last-name">' +
        '    <span>' + lastName + '</span>' +
        '</div>' +
        '<div class>' +
        '    <span class="board__tasks">Number of tasks: </span>' +
        '    <span class="board__tasks-number">' + taskNumber + '</span>' +
        '</div>';

    return div;
}








