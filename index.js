const addBtn = document.querySelector('.addBtn')

const inputTodo = document.querySelector('.inputTodo')

const list = document.querySelector('.list')

const todoList_div = document.querySelector('.todoList-div')

addBtn.addEventListener('click', function () {

    let todo = inputTodo.value

    inputTodo.value = ''

    const deleteBtn = document.createElement('button')

    deleteBtn.textContent = 'Delete'

    deleteBtn.classList.add('editButton')

    deleteBtn.style.marginLeft = '12px';
    deleteBtn.style.backgroundColor = 'green';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = '0px';
    deleteBtn.style.borderRadius = '6px';

    addTodoItem(todo, deleteBtn)
})


function addTodoItem(todo, deleteBtn) {

    const listItem = document.createElement('li')
    list.appendChild(listItem)

    
    listItem.style.height = '36px';
    listItem.style.borderRadius = '10px';
    listItem.style.width = '318px';
    listItem.style.display = 'flex';
    listItem.style.alignItems = 'center';
    listItem.style.justifyContent = 'center';
    listItem.border = '0px solid'
    listItem.style.backgroundColor = 'rgb(226,230,234)'
    listItem.style.height = '30px'
    listItem.style.borderRadius = '10px'
    listItem.style.marginBottom = '6px';

    const editBtn = document.createElement('button')

    editBtn.style.marginLeft = '113px';
    editBtn.style.backgroundColor = 'green';
    editBtn.style.color = 'white';
    editBtn.style.border = '0px';
    editBtn.style.borderRadius = '6px';

    // editBtn.textContent = todo
    const listItemText = document.createElement('span')
    listItem.appendChild(listItemText)
    listItemText.textContent = todo

    editBtn.textContent = 'Edit'

    editBtn.classList.add('editButton')

    listItem.appendChild(editBtn)
    listItem.appendChild(deleteBtn)

    editBtn.addEventListener('click', function () {
        editTodoItem(listItemText)
    })

    deleteBtn.addEventListener('click', function () {
        deleteTodoItem(listItem)
    })
}


function editTodoItem(listItemText) {
    const newTodo = prompt('Enter new text for this task:')
    listItemText.textContent = newTodo
}


function deleteTodoItem(listItemText) {
    listItemText.remove()
}