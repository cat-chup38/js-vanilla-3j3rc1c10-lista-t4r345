(function() {

    var agregar = function() {

        var texto1 = document.getElementById("texto1").value;
        var contenido = document.createTextNode(texto1);


        // crear la nueva tarea dentro de un div
        var div1 = document.createElement("div");
        div1.setAttribute("name", "subcontenedor1");
        div1.setAttribute("class", "subcontenedor1");

        var nuevo_nodo = document.createElement("div");
        nuevo_nodo.appendChild(contenido);
        nuevo_nodo.setAttribute("name", "tareas1");
        nuevo_nodo.setAttribute("class", "tarea");

        div1.appendChild(nuevo_nodo);





        //crear los botones para subir y bajar dentro de un div

        var div2 = document.createElement("div");
        div2.setAttribute("name", "subcontenedor2");
        div2.setAttribute("class", "subcontenedor2");

        var botonSubir = document.createElement("button");
        botonSubir.innerHTML = "Subir";
        botonSubir.setAttribute("id", "botonSubir");

        var botonBajar = document.createElement("button");
        botonBajar.innerHTML = "Bajar";
        botonBajar.setAttribute("id", "botonBajar");

        div2.appendChild(botonSubir);
        div2.appendChild(botonBajar);


        // agregar los dos div al div conjunto

        var div3 = document.createElement("div");
        div3.setAttribute("name", "conjunto");

        div3.appendChild(div1);
        div3.appendChild(div2);


        var conjuntos = document.getElementsByName("conjunto");
        var referencia3 = conjuntos[0];
        var padre2 = document.getElementById("contenedor1");
        padre2.insertBefore(div3, referencia3);




        for (var i = 0; i <= conjuntos.length - 1; i++) {
            conjuntos[i].addEventListener("click", eleminarTarea);
            //console.log(conjuntos[i]);
        }
    };



    var eleminarTarea = function() {
        subcontenedor1 = this.parentNode;
        conjunto = subcontenedor1.parentNode
        conjunto.parentNode.removeChild(conjunto);
    };


    var boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", agregar);


    //var conjuntos = document.getElementsByName("conjunto");
    var tareas = document.getElementsByName("tareas1");

    for (var i = 0; i <= tareas.length - 1; i++) {
        tareas[i].addEventListener("click", eleminarTarea);
        //console.log(tareas[i]);
    }


}())