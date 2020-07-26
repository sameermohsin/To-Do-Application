// var list = document.getElementById('list');

// function addData() {
//     var item = document.getElementById('data1');

//     var tab1 = document.createElement('td');
//     var rl = document.createElement('li');

//     // Add Data
//     var liText = document.createTextNode(item.value);
//     tab1.appendChild(rl)
//     rl.appendChild(liText)

//     //Delete Button
//     var tab1 = document.createElement('td');
//     tab1.setAttribute("id", "delete")
//     var delBtn = document.createElement('button');
//     delBtn.setAttribute("id", "d1")
//     var delText = document.createTextNode("Delete");
//     delBtn.appendChild(delText)
//     tab1.appendChild(delBtn)


//     data.appendChild(rl)
//     item.value = ""
//     console.log(rl)
// }

var list = document.getElementById("data2");

function addData() {
    var item = document.getElementById('data1');

    // Add Data
    var tab1 = document.createElement('td');
    tab1.setAttribute("id", "td")
    var li = document.createElement('li');
    li.setAttribute("id", "lis")
    var liText = document.createTextNode(item.value);
    tab1.appendChild(li)
    li.appendChild(liText)

    //Delete Button
    var delBtn = document.createElement("button");
    delBtn.setAttribute("id", "d1")
    delBtn.setAttribute("onclick", "delItem(this)")
    var delText = document.createTextNode("Delete");
    delBtn.appendChild(delText)

    //Edit Button
    var editBtn = document.createElement("button");
    editBtn.setAttribute("id", "ad1")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick", "editItem(this)")


    //Adding/Appending
    li.appendChild(editBtn)
    li.appendChild(delBtn)
    list.appendChild(tab1)

    //Empty Box
    item.value = ""
}

function delItem(e) {
    e.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = ""
}

function editItem(e) {
    var value = e.parentNode.firstChild.nodeValue;
    var edit = prompt("Enter edit value: ", value)
    e.parentNode.firstChild.nodeValue = edit
}
