function addItem(){
    var newItem = document.createElement("h2");
    newItem.innerHTML = document.getElementById("box").value;

    newItem.onclick = deleteItem;
    document.getElementById("list").appendChild(newItem);

    document.getElementById("box").value = "";

}

function deleteItem(){
    document.getElementById("list").removeChild(this)
}
function Clear(){
    document.getElementById("box").value = "";
}

function deleteItem(){
    var block = document.getElementById("block");

    block.style.backgroundColor = "green";
    block.style.height = "100px"
    block.style.width = "200px"
}