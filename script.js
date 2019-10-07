const createButton = document.getElementById('create');
const listElement = document.getElementById('list');

let items = [];


function renderItem(item) {
    const textContainer = document.createElement('span');
    textContainer.textContent = item.content;

    const editButton = document.createElement('button');
    editButton.textContent = 'E';
    editButton.addEventListener('click', editItem);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'D';
    deleteButton.addEventListener('click', deleteItem);

    const itemElement = document.createElement('li');
    itemElement.dataset.id = item.id;
    itemElement.appendChild(textContainer);
    itemElement.appendChild(editButton);
    itemElement.appendChild(deleteButton);

    listElement.appendChild(itemElement);
}


function createItem() {
    const content = window.prompt('Ingrese el contenido');

    const item = {
        id: items.length + 1,
        content: content
    }

    items.push(item);
    renderItem(item);

    saveItems();
}

createButton.addEventListener('click', createItem);


function editItem(event) {
    const itemElement = event.target.parentElement;
    const index = items.findIndex(item => item.id === parseInt(itemElement.dataset.id));
    const content = window.prompt('Edite el contenido', items[index].content);

    items[index].content = content;
    itemElement.firstChild.textContent = content;

    saveItems();
}


function deleteItem(event) {
    if (confirm('¿Eliminar el contenido?')) {
        const itemElement = event.target.parentElement;
        const index = items.findIndex(item => item.id === parseInt(itemElement.dataset.id));

        delete items[index];

        itemElement.parentElement.removeChild(itemElement);

        saveItems();
    }
}

$(document).ready(function(){
    $( "#list" ).sortable({});
});

function saveItems() {
    window.localStorage.setItem('items', JSON.stringify(items));
}

function recoverItems() {
    const recoveredItems = window.localStorage.getItem('items');

    if (recoveredItems) {
        items = JSON.parse(recoveredItems);

        for (let item of items) {
            if (item) {
                renderItem(item);
            }
        }
    }
}

recoverItems();