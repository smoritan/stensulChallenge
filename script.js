
items = [];

function obtenerUltimoId() {
    var maxId = 0;
    for(var i=0;i<items.length;++i){
      if(items[i].id < maxId)
        maxId = items[i].id;
    }
    return maxId++;
  };

function editar(){
    document.getElementById('items').contentEditable ='true';
    document.getElementById('items').designMode='on';
    guardar();
};

function crear() {
    var id = obtenerUltimoId();
    var c = document.getElementById("nuevoItem");
    var clon = c.cloneNode(true);
    items.push(clon);
    clon.setAttribute("id", id);
    console.log(items)
    document.getElementById("list").appendChild(clon);
    guardar();
  };

function eliminar(id){
    var node = document.getElementById(obtenerUltimoId(id));
    node.parentNode.removeChild(node);
    guardar();
};

/* function status(){
  var estado = document.white("Longitud del array: " + items.length);
  document.getElementById("list").appendChild(estado);
};
status(); */

function guardar(){
  localStorage.setItem('myItems', JSON.stringify(items));
};