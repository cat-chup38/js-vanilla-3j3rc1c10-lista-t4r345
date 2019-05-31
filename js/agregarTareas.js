(function() {

    var tareas1 = document.getElementsByName("tareas1");
    var contador = tareas1.length;
    //console.log(contador);

    var contador2 = 0;

    var agregar = function() {

        var texto1 = document.getElementById("texto1").value;
        var contenido = document.createTextNode(texto1);




        // crear la nueva tarea dentro de un div
        var div1 = document.createElement("div");
        div1.setAttribute("name", "subcontenedor1");
        div1.setAttribute("class", "subcontenedor1");

        var nuevo_nodo = document.createElement("div");
        nuevo_nodo.appendChild(contenido);
        nuevo_nodo.setAttribute("class", "tarea");
        nuevo_nodo.setAttribute("name", "tareas1");


        div1.appendChild(nuevo_nodo);



        //crear los botones para subir y bajar dentro de un div

        contador++;

        var div2 = document.createElement("div");
        div2.setAttribute("name", "subcontenedor2");
        div2.setAttribute("class", "subcontenedor2");

        var botonSubir = document.createElement("button");
        botonSubir.innerHTML = "Subir";
        botonSubir.setAttribute("name", "botonSubir");
        botonSubir.setAttribute("id", "botonSubir" + contador);

        var botonBajar = document.createElement("button");
        botonBajar.innerHTML = "Bajar";
        botonBajar.setAttribute("name", "botonBajar");
        botonBajar.setAttribute("id", "botonBajar" + contador);

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



        for (var i = 0; i <= tareas.length - 1; i++) {
            tareas[i].addEventListener("click", eleminarTarea);
            //console.log(tareas[i]);
        }


        for (var j = 0; j <= botonesSubir.length - 1; j++) {
            botonesSubir[j].addEventListener("click", subirTarea);
            //console.log(botonesSubir[i]);
            contador2++;
            //console.log(contador2);
        }

        for (var j = 0; j <= botonesBajar.length - 1; j++) {
            botonesBajar[j].addEventListener("click", bajarTarea);
            //console.log(botonesBajar[j]);
        }
        //console.log("************************");
    };


    // funcion para eliminar las tareas
    var eleminarTarea = function() {
        subcontenedor1 = this.parentNode;
        conjunto = subcontenedor1.parentNode
        conjunto.parentNode.removeChild(conjunto);
    };

    var subirTarea = function(e) {
        padre = document.getElementById("contenedor1");
        subcontenedor1 = this.parentNode;
        conjunto = subcontenedor1.parentNode

        //var nombreConjunto = conjunto.attributes["id"].value;
        //var antes = document.getElementById(nombreConjunto).previousSibling

        var antes = conjunto.previousSibling;

        if (antes.nodeName === '#text') {
            antes = antes.previousSibling
        }

        padre.insertBefore(conjunto, antes);
    }

    var bajarTarea = function(e) {
        padre = document.getElementById("contenedor1");
        subcontenedor1 = this.parentNode;
        conjunto = subcontenedor1.parentNode

        //var nombreConjunto = conjunto.attributes["id"].value;
        //var antes = document.getElementById(nombreConjunto).previousSibling

        var siguiente = conjunto.nextSibling;

        if (siguiente.nodeName === '#text') {
            siguiente = siguiente.nextSibling
            console.log("vaciooooooo");
        }

        if (siguiente !== siguiente.lastChild) {
            siguiente = siguiente.nextSibling;
            console.log("ultimmmmmmmmmo");
        }







        padre.insertBefore(conjunto, siguiente);

        //console.log(siguiente);
        //console.log(padre);
    }


    var boton1 = document.getElementById("boton1");
    boton1.addEventListener("click", agregar);


    //var conjuntos = document.getElementsByName("conjunto");
    var tareas = document.getElementsByName("tareas1");

    //listar las tareas para enviarlas a funcion eliminar
    for (var i = 0; i <= tareas.length - 1; i++) {
        tareas[i].addEventListener("click", eleminarTarea);
    }


    //listar los botones de SUBIR para enviarlas a funcion SUBIR
    var botonesSubir = document.getElementsByName("botonSubir");

    for (var j = 0; j <= botonesSubir.length - 1; j++) {
        botonesSubir[j].addEventListener("click", subirTarea);
    }


    //listar los botones de BAJAR para enviarlas a funcion BAJAR
    var botonesBajar = document.getElementsByName("botonBajar");

    for (var j = 0; j <= botonesBajar.length - 1; j++) {
        botonesBajar[j].addEventListener("click", bajarTarea);
        //console.log(botonesBajar[j]);
    }


}())