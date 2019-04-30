(function ($) {
    $.ventanaDatos = {
        overlay_id: 'overlay-f8',
        content_id: 'content-f8',
        tabla_id: 'datos',

        _init: function () {
            if (this._open()) {

                // Insertar tabla
                var thead = $('<thead/>')
                    .append($('<tr/>'));

                $('#' + this.content_id + '_body').html(
                    $('<table/>', {
                        id: $.ventanaDatos.tabla_id,
                        class: 'display responsive nowrap'
                    })
                        .css({ width: '100%', })
                        .append(thead)
                );

                if (this._addColumnas_head()) this._initDataTable();
            }
        },

        _initDataTable: function () {
            $('#' + $.ventanaDatos.tabla_id).DataTable({                
                responsive: true,
                ajax: {
                    url: 'SC-ARCHTER-00000000000000120190426110003.JSON',
                    dataSrc: 'TERCEROS'
                },
                columns: [
                    { "data": "COD" },
                    { "data": "NOMBRE" },
                    { "data": "TELEF" },
                    { "data": "CIUDAD" }
                ]
            });
        },

        _addColumnas_head: function () {
            var columnas = ['codigo', 'nombre', 'telefono','ciudad']
            columnas.forEach(function (val) {
                var row_column = $('<th/>').html(val)
                $('table#' + $.ventanaDatos.tabla_id + ' thead tr')
                    .append(row_column);

            });

            return true;
        },

        _open: function () {
            var wWindow = $(window).width();

            // Crear overlay F8
            $('<div/>', {
                id: this.overlay_id
            })
                .css({
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.2)',
                    position: 'absolute',
                    top: 0,
                    display: 'flex',
                    'align-items': 'center'
                })
                .appendTo('body');
            // !End overlay F8

            // Box contenido F8
            $('<div/>', {
                id: this.content_id
            })
                .css({
                    width: wWindow < 426 ? '95%' : '600px',
                    background: '#FFF',
                    margin: '0 auto',
                    'border-radius': '3px'
                })
                .appendTo('#' + this.overlay_id);
            // !End contenido F8

            // Header 
            $('<div/>', {
                id: this.content_id + '_header'
            })
                .css({
                    width: '100%',
                    padding: '15px 0 15px 20px',
                    'text-align': 'center',
                    'border-bottom': '1px solid rgba(0,0,0,0.08)',
                    'box-sizing': 'border-box'
                })
                .html('Prueba')
                .appendTo('#' + this.content_id);


            // Body
            $('<div/>', {
                id: this.content_id + '_body'
            })
                .css({
                    width: '100%',
                    padding: '15px',
                    'box-sizing': 'border-box'
                })
                .html('Contenido')
                .appendTo('#' + this.content_id);

            // Responsive            
            $(window).resize(function () {
                if ($(window).width() < 426) {
                    $('#' + $.ventanaDatos.content_id)
                        .css({ width: '95%' });
                } else {
                    $('#' + $.ventanaDatos.content_id)
                        .css({ width: '600px' });
                }
            });
            // End responsive

            return true;
        }
    }

    _ventanaDatos = function (params) {
        $.ventanaDatos._init();
    }
})(jQuery);