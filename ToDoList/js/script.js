//selecao de elementos
const todoForm=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo-input");
const todoList=document.querySelector("#todo-list");
const editForm=document.querySelector("#edit-form");
const editInput=document.querySelector("#edit-input");
const cancelEditBtn=document.querySelector("#cancel-edit-btn");
const searchInput=document.querySelector("search-input");




//funcoes
const saveTodo=(text)=>{
    const todo=document.createElement("div");
    todo.classList.add("todo");
    const todoTitle=document.createElement("h3");
    todoTitle.innerText=text;
    todo.appendChild(todoTitle);
    console.log(todo);

    const doneBtn=document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML='<i class="fa-solid fa-check"></i> ';
    todo.appendChild(doneBtn);

    const editBtn=document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML='<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

   
    const cancelBtn=document.createElement("button");
    cancelBtn.classList.add("remove-todo");
    cancelBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(cancelBtn);

    todoList.appendChild(todo);

    todoInput.value="";
    todoInput.focus();

}


//eventos

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const inputValue=todoInput.value;
    if(inputValue){
        console.log(inputValue);
        saveTodo(inputValue);
    }

   
})

document.addEventListener("click",(e)=>{
    const targetEl=e.target;
    const parentEl=targetEl.closest("div");
    if(targetEl.classList.contains("finish-todo")){
        console.log("done");
        targetEl.classList.add("done");

    }
});


