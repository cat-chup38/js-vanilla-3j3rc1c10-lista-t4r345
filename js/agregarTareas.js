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



        var tareas = document.getElementsByName("subcontenedor1");
        var referencia = tareas[0];

        var padre = document.getElementById("contenedor1");
        padre.insertBefore(div1, referencia);





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


        var botones = document.getElementsByName("subcontenedor1");
        var referencia2 = botones[1];

        var padreBotones = document.getElementById("contenedor1");
        padreBotones.insertBefore(div2, referencia2);



        // agregar los dos div al div conjunto

        var div3 = document.createElement("div");
        div3.setAttribute("name", "conjunto");

        console.log(padre)






        for (var i = 0; i <= seccion.length - 1; i++) {
            seccion[i].addEventListener("click", eleminarTarea);
            console.log(seccion[i]);
        }
    };

    var eleminarTarea = function() {
        this.parentNode.removeChild(this);
    };

    var boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", agregar);

    var seccion = document.getElementsByName("subcontenedor1");
    //console.log(seccion.length);

    for (var i = 0; i <= seccion.length - 1; i++) {
        seccion[i].addEventListener("click", eleminarTarea);
        console.log(seccion[i]);
    }


}())