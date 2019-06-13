$(document).ready(function(){
    traerInfoVideojuegos();
    function traerInfoVideojuegos()
    {
        $.getJSON("/videogames", function (data) {
            console.log(data);
            var videogameData = '';
            $.each(data, function (key, val) {
                videogameData += '<tr>';
                videogameData += "<th scope='row'>" + val.idVideogame + "</th>";
                videogameData += "<td>" + val.video_name + "</td>";
                videogameData += "<td>" + val.platform + "</td>";
                videogameData += "<td>" + val.category + "</td>";
                videogameData += '</tr>';

            });
            $('#videogameTable').append(videogameData);


        });
    }

    $.getJSON( "/empresas", function(datos ) {

        var empresasDataOption = '';

        var empresasDataTable = '';

        $.each(datos, function (key, val) {

            empresasDataOption += '<option>'+val.nombre+'</option>';

            empresasDataTable += '<tr>';
            empresasDataTable += "<th scope='row' data-toggle='modal' data-target='#"+ val.idEmpresa + "'>" + val.idEmpresa + "</th>";
            empresasDataTable += "<td>" + val.nombre + "</td>";
            empresasDataTable += "<td>" + val.descripcion + "</td>";
            empresasDataTable += "<td><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#modal"+val.idEmpresa+"'>Launch demo modal </button></td>"
            empresasDataTable += '</tr>';

        });

        $('#EmpresasTable').append(empresasDataTable);

        $('#empresasData').append(empresasDataOption);
    });

    $( "#persistir" ).click(function( event ) {
        event.preventDefault();
        var numero = $("#empresasData").prop('selectedIndex');
        var urlVideogamesPersist = "/empresas/"+numero+"/videogames";
        var data = { video_name: $("#inputVideojuego").val(),
            platform: $("#inputPlatform").val(),
            category: $("#inputCategory").val()};

        postear(urlVideogamesPersist,data);

        console.log(JSON.stringify(data))
        resetData();
        traerInfoVideojuegos();
    });

    $( "#persistirEmpresa" ).click(function( event ) {

        var urlVideogamesPersist = "/empresas";
        var data = { nombre: $("#inputNomEmpresa").val(),
            descripcion: $("#inputDescEmpresa").val()};

        postear(urlVideogamesPersist,data);

        console.log(JSON.stringify(data))
        resetData();
        traerInfoVideojuegos();
    });

    function postear(UrlAEnviar,data){
        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: UrlAEnviar,
            data:  JSON.stringify(data),
            dataType: "json"
        });
    }

    function resetData(){
        $("#inputVideojuego").val("");
        $("#inputPlatform").val("");
        $("#inputCategory").val("");
        $("#inputNomEmpresa").val("");
        $("#inputDescEmpresa").val("");

    }

});

