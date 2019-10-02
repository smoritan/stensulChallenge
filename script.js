items = [];

function obtenerUltimoId() {
    var maxId = null;
    for(var i=0;i<items.length;++i){
      if(items[i].id > maxId)
        maxId = items[i].id;
    }
    return maxId++;
  };

function editar(){
    document.getElementById('items').contentEditable ='true';
    document.getElementById('items').designMode='on';
};

function crear() {
    var id = obtenerUltimoId();
    var c = document.getElementById("nuevoItem");
    var clon = c.cloneNode(true);
    items.push(clon);
    clon.setAttribute("id", obtenerUltimoId());
    console.log(items)
    document.getElementById("list").appendChild(clon);
  };

function eliminar(id){
    var node = document.getElementById(obtenerUltimoId());
    node.parentNode.removeChild(node);
    items.pop(node);
};
