items = [];

function obtenerUltimoId() {
    var maxId = 0;
    for(var i=0;i<items.length;++i){
      if(items[i].id > maxId)
        maxId = items[i].id;
    }
    return maxId++;
  };

function editar(){
    document.getElementById('items').contentEditable ='true';
    document.getElementById('items').designMode='on';
    this.guardar();
};

function crear() {
    var id = obtenerUltimoId();
    var c = document.getElementById("nuevoItem");
    var clon = c.cloneNode(true);
    items.push(clon);
    clon.setAttribute("id", obtenerUltimoId());
    console.log(items)
    document.getElementById("list").appendChild(clon);
    this.guardar();
  };

function eliminar(id){
    var node = document.getElementById(obtenerUltimoId(id));
    node.parentNode.removeChild(node);
    
};

if (typeof(Storage) !== "undefined") {
    // LocalStorage disponible
} else {
    // LocalStorage no soportado en este navegador
}

function guardar(){
                
    var objeto = items;
    
    objeto = JSON.stringify(objeto);

    localStorage.setItem('miObjeto',objeto);
 
};