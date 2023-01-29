function addTodoList(event) {

}

/**
 * gets the value from the "todo" input and adds it to the list
 * @param {*} event 
 */
function addTodo(event) {
    // prevents the form from submitting
    event.preventDefault();

    // get the value of the "todo" input
    const todo = document.getElementById('todo').value;

    // get the list element
    const list = document.getElementById('list');

    // create a new list item
    const item = document.createElement('li');
    item.innerHTML = `<button>Complete</button> ${todo}`;
    
    
    // append the list item to the ordered list
    list.appendChild(item);
}

function registerEvents() {
  document.getElementById('add').addEventListener('click', addTodo);
}
