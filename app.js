var list = document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    if(todo_item.value == ""){
        alert("Todo Can't be Empty");
        return;
    };
    
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value+" ")
    li.style.color = "black";
    li.appendChild(liText)

    
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("DELETE")
    delBtn.setAttribute("class", "delbtn btn btn-danger")
    delBtn.setAttribute("onclick", "deleteItem(this)")
    delBtn.appendChild(delText)

    
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class", "editbtn btn btn-warning")
    editBtn.setAttribute("onclick", "editItem(this)")


    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)

    todo_item.value = ""
}

function deleteItem(e) {
    e.parentNode.remove()
}

function editItem(e) {
  var val = prompt("Enter updated value",e.parentNode.firstChild.nodeValue)
  e.parentNode.firstChild.nodeValue = val;
}

function deleteAll() {
    list.innerHTML = ""
}