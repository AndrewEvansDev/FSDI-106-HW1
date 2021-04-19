function saveTodo(){
    var todo = $('#todoText').val();
    var syntax = `<h6 class="todo-item">${todo}</h6>`;
    $("#pendingTodos").append(syntax);
    $('#todoText').val("").focus();
}


function init(){
    $("#btnSave").click(saveTodo);
    $("#todoText").keypress(function(e){
        if(e.key ==="Enter"){
            saveTodo()
        }
    })
}
window.onload=init;