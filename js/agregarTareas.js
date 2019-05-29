(function() {

    var agregar = function() {
        var texto1 = document.getElementById("texto1").value;
        var contenido = document.createTextNode(texto1);

        var nuevo_nodo = document.createElement("div");
        nuevo_nodo.appendChild(contenido);
        nuevo_nodo.setAttribute("name", "tareas1");

        var tareas = document.getElementsByName("tareas1");
        var padre = tareas[0].parentNode;

        var referencia = tareas[0];


        padre.insertBefore(nuevo_nodo, referencia);

    };

    var boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", agregar);

}())