const todoForm = document.querySelector(".todo-form input");
const addTodoBtn = todoForm.nextElementSibling;
const showTodoDiv = document.querySelector("#todo-lists");

//main data set/get using LS
//emty var it will store all todo data
let todosData = [];
/**
 * check LS date have or not
 */
const checkTodoVal = () => {
  if (localStorage.getItem("todos")) {
    todosData = JSON.parse(localStorage.getItem("todos"));
  }
};

// show todo data
const todosShow = () => {
  //check ls data
  checkTodoVal();

  let showTodoList = "";
  todosData.forEach((item, index) => {
    showTodoList += `
     <li>
          <p>
          <i class="far fa-check-square"></i>
          ${item}
          </p>
          <!-- delate buton -->
          <span onclick="delItem('${item}')"><i class="far fa-trash-alt"></i></span>
     </li>
  `;
  });
  //show todo data list in fontend
  showTodoDiv.innerHTML = showTodoList;
};

// create todo
addTodoBtn.onclick = () => {
  //validaton
  if (todoForm.value) {
    todosData.push(todoForm.value);

    //sent data to Ls
    localStorage.setItem("todos", JSON.stringify(todosData));
    todosShow();
    todoForm.value = "";
  } else {
    alert("Value can't be empty");
  }
};

todosShow();

//delate todo
function delItem(item) {
  let updateTodosData = todosData.filter((data) => data != item);

  localStorage.setItem("todos", JSON.stringify(updateTodosData));

  todosShow();
}
