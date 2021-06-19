// .addToList button needs to be hooked to send input from #listItem
// send #listItem to .list-item 
// in .list-group, put <li>$(#listItem)</li>
// hook keypress (enter) to send data to .list-group

function addToDo() {
  console.log("adding..");
  var item = $("#listItem").val();
  $("#list").append(`<p class="items"> ${item}<button id="delete" class="position-right">delete</delete></p>
    `);
}
function removeToDo() {
  console.log("removing..");
  $("#list").addClass('hidden');
}

function init() {
  console.log("the tototodo list");
$("#delete").click(removeToDo)
  var item = $("#addToList");
  item.click(addToDo);
}

window.onload = init;