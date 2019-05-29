(function() {



    var agregar = function() {
        var texto1 = document.getElementById("texto1").value;
        var contenido = document.createTextNode(texto1);

        var nuevo_nodo = document.createElement("div");
        nuevo_nodo.appendChild(contenido);
        nuevo_nodo.setAttribute("name", "tareas1");
        nuevo_nodo.setAttribute("class", "tarea");

        var tareas = document.getElementsByName("tareas1");
        var referencia = tareas[0];

        var padre = document.getElementById("contenedor1");
        padre.insertBefore(nuevo_nodo, referencia);

        for (var i = 0; i <= seccion.children.length - 1; i++) {
            seccion.children[i].addEventListener("click", eleminarTarea);
            console.log(seccion.children[i]);
        }
    };

    var eleminarTarea = function() {
        this.parentNode.removeChild(this);
    };

    var boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", agregar);

    var seccion = document.getElementById("contenedor1");

    for (var i = 0; i <= seccion.children.length - 1; i++) {
        seccion.children[i].addEventListener("click", eleminarTarea);
        console.log(seccion.children[i]);
    }



}())