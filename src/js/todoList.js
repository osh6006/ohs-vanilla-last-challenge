class TodoList {
  #TODOS_KEY = "todoList";
  toDoList = [];
  toDoForm;
  toDoInput;
  toDoSendBtn;
  toDoListItem;
  constructor() {
    this.assignElement();
    this.addEvent();
    this.initTodoList();
  }
  assignElement() {
    this.toDoForm = document.querySelector(".todoList-send");
    this.toDoInput = document.querySelector(".todoList-input");
    this.toDoSendBtn = document.getElementById("sendBtn");
    this.toDoListItem = document.querySelector(".todoList-item");
  }
  addEvent() {
    this.toDoSendBtn.addEventListener("click", this.handleSubmit.bind(this));
    this.toDoForm.addEventListener("submit", this.handleSubmit.bind(this));
  }
  initTodoList() {
    const savedTodos = localStorage.getItem(this.#TODOS_KEY);

    if (savedTodos !== null) {
      const parsedTodos = JSON.parse(savedTodos);
      this.toDoList = parsedTodos;
      parsedTodos.forEach(element => {
        this.addTodo(element);
      });
    }
  }
  saveTodo() {
    console.log(this.toDoList);
    localStorage.setItem(this.#TODOS_KEY, JSON.stringify(this.toDoList));
  }

  deleteTodo(event) {
    const li = event.currentTarget.parentElement;
    this.toDoList = this.toDoList.filter(toDo => {
      return toDo.id != li.id;
    });
    console.log(this.toDoList);
    li.remove();
    this.saveTodo();
  }

  addTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const p = document.createElement("p");
    p.innerText = newTodo.text;
    const div = document.createElement("div");
    div.classList.add("item-deleteBtn");
    const iconSvg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    const iconPath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    iconSvg.setAttribute("fill", "none");
    iconSvg.setAttribute("viewBox", "0 0 24 24");
    iconSvg.setAttribute("stroke-width", "1.5");
    iconSvg.setAttribute("stroke", "currentColor");

    iconPath.setAttribute(
      "d",
      "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    );
    iconPath.setAttribute("stroke-linecap", "round");
    iconPath.setAttribute("stroke-linejoin", "round");
    iconSvg.appendChild(iconPath);

    div.appendChild(iconSvg);
    div.addEventListener("click", this.deleteTodo.bind(this));

    li.appendChild(p);
    li.appendChild(div);
    this.toDoListItem.appendChild(li);
  }

  handleSubmit(event) {
    console.log("submit!");
    event.preventDefault();
    const newTodo = this.toDoInput.value;
    this.toDoInput.value = "";
    const newTodoObj = {
      text: newTodo,
      id: Date.now(),
    };
    this.toDoList.push(newTodoObj);
    this.addTodo(newTodoObj);
    this.saveTodo();
  }
}

new TodoList();
