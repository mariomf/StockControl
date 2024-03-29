$(document).ready(function(){

    bringProductInfo();

    function changeColor(exit_date)
    {
      var available = "";
      if(exit_date == "")
      {
        available = "blue";
      }
      else
      {
        available = "red"
      }

      return available;
    }

    function bringProductInfo()
    {
        $.getJSON("/products", function (data) {
            console.log(data);
            var productData = '';
            $.each(data, function (key, val) {
                productData += "<tr style='color:"+changeColor(val.exit_date)+"'>";
                productData += "<th scope='row'>" +
                "<img class='card-img-top' src='img/qr_"+val._id+".png' alt='Card image cap' style='width:100px;height:100px;'>"+
                "</th>";
                productData += "<td>" + val.product_name + "</td>";
                productData += "<td>" + val.description + "</td>";
                productData += "<td>" + val.product_code + "</td>";
                productData += "<td>" + val.price + "</td>";
                productData += "<td>" + val.QTY_inStock + "</td>";
                productData += "<td>" + val.orderNo + "</td>";
                productData += "<td>" + val.entry_date + "</td>";
                productData += "<td>" + val.exit_date + "</td>";
                productData += "<td>" + val.product_type + "</td>";
                productData += '</tr>';

            });
            $('#productTable').append(productData);


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
        var urlVideogamesPersist = "/empresas/"+numero+"/products";
        var data = { video_name: $("#inputProduct").val(),
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
