$(document).ready(function(){
    $("#prueba").click(function(){
        SolicitarJson({}, repuestJson, '../json/SC-ARCHENF.JSON');
    });
    SolicitarJson({}, repuestJson, '../json/SC-MAESART.JSON');
});

function repuestJson(datos){
    f8Popup({
        title: "Detalle ciudades", 
        columns: ["NUMERO","DESCRIP"],
        array: datos.Articulos
    },responsePopup);
}

function responsePopup(x){
    console.debug(x);
}

function SolicitarJson(datos, callBack, servicio){
    $.ajax({
        url: servicio,
        type: 'get',
        contentType: 'application/json',
        data: (datos),
        error : function (jqXHR, exception){ 
            if (jqXHR.status === 0) {
                alert('Not connect.\n Verify Network.');
            } else if (jqXHR.status == 404) {
                alert('Requested page not found. [404]');
            } else if (jqXHR.status == 500) {
                alert('Internal Server Error [500].');
            } else if (exception === 'parsererror') {
                alert('Requested JSON parse failed.');
            } else if (exception === 'timeout') {
                alert('Time out error.');
            } else if (exception === 'abort') {
                alert('Ajax request aborted.');
            } else {
                alert('Uncaught Error.\n' + jqXHR.responseText);
                success: callBack
            }
        }, 
        success: callBack
    });
}