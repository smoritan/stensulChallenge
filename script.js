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


// function obtenerUltimoId() {
//     var maxId = -1;
//     for(var i=0;i<this.items.length;++i){
//       if(this.items[i].id < maxId)
//         maxId = this.items[i].id;
//     }
//     return maxId++;
//   };

// function editar(){
//     document.getElementById('items').contentEditable ='true';
//     document.getElementById('items').designMode='on';
// };

// function crear() {
//     var id = obtenerUltimoId();
//     var c = document.getElementById("nuevoItem");
//     var clon = c.cloneNode(true);
//     items.push(clon);
//     clon.setAttribute("id", obtenerUltimoId(id));
//     console.log(items)
//     document.getElementById("list").appendChild(clon);
//     guardar();
//   };

// function eliminar(id){
//     var node = document.getElementById(obtenerUltimoId(id));
//     node.parentNode.removeChild(node);
//     localStorage.removeItem('myItems');
// };


// if (typeof(Storage) !== 'undefined') {
//   function guardar(){
//     localStorage.setItem('myItems', JSON.stringify(items));
//     var guardado = localStorage.getItem('myItems');
//     console.log(guardado);
//   };
// } else {
// }
