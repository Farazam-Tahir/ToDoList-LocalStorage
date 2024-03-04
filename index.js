
let items = JSON.parse(localStorage.getItem("todo-list")) || [];

function addTodo() {
  let item = document.getElementById("todo-input").value;
  if (item === "") {
    return alert('Enter Something into List');
  } else {
    items.push({
      value: item,
      isChecked: false
    });
  }

  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
  item = "";
}

function deleteItem(index) {
  items.splice(index, 1);
  localStorage.setItem("todo-list", JSON.stringify(items));
  listItems();
}

function taskCompleted(index) {
  items[index].isChecked = !items[index].isChecked;
  updateItemStyle(index);

  localStorage.setItem("todo-list", JSON.stringify(items));
}

function updateItemStyle(index) {
  const itemElement = document.getElementById("todo-item-" + index);
//   if (items[index].isChecked) {
//     itemElement.style.textDecoration = "line-through";
//   } else {
//     itemElement.style.textDecoration = "none";
//   }
}


function listItems() {
  let list = "";
  items.map((value, index) => {
    list += "<li id='todo-item-" + index + "'>" +
      "<div><input class = 'checkbox' type='checkbox' onclick='taskCompleted(" + index + ")' " + (items[index].isChecked ? "checked" : "") + " /> " + items[index].value + "</div>" +
      "<button onclick='deleteItem(" + index + ")' class='remove'>Remove</button></li>";
  });
  document.getElementById("todo-list").innerHTML = list;
}

listItems();
