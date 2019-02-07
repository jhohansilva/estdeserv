(function ($) {
    $.ventop = {
        overlay_id: 'ventop_overlay',
        container_id: 'ventop_container',
        header_class: 'ventop_header',
        body_class: 'ventop_body',
        callback: null,
        title: 'Ventana de opciones',

        _show: function () {
            $.ventop._overlay();
            $.ventop._import_css();
            $.ventop._popup();
            $.ventop._initEvent();
        },

        _popup: function () {            
            $('#' + $.ventop.overlay_id).html('').append('<div id="' + $.ventop.container_id + '"></div>');
            $('#' + $.ventop.container_id).css({
                background: '#FFF',
                width: '16%',
                height: 'auto',
                margin: '0 auto',
                'min-width': '220px',
                'box-shadow': 'box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.06);',
                'border-radius': '3px'
            });

            $('#' + $.ventop.container_id).append(''
                + '<div class="' + $.ventop.header_class + '">'
                + ' <p style="padding: 15px 25px;margin: 0 auto;">'
                + $.ventop.title
                + ' </p>'
                + '</div>'
                + '<div class="' + $.ventop.body_class + '">'
                + ' <div class="' + $.ventop.body_class + '_container">'
                + '     <ol>'
                + '         <li>7. Nuevo</li>'
                + '         <li>8. Modificar</li>'
                + '         <li>9. Eliminar</li>'
                + '     </ol>'
                + ' </div>'
                + '</div>'
            );
            
            $('.' + $.ventop.header_class).css({
                width: '100%',
                height: 'auto',
                background: 'rgba(0,0,0,.03)',
                'max-width': '100%',
                'text-transform': 'uppercase',
                'font-weight': '700',
                'font-size': '14px',
                'text-align': 'center',
                'color': 'rgba(0,0,0,0.6)'
            });

            $('.' + $.ventop.body_class + '_container > ol').css({
                'list-style': 'none',
                'margin': '0 auto',
                'padding': '0 0 2px 0'
            })

            $('.' + $.ventop.body_class + '_container > ol > li').css({
                'padding': '12px 0px',
                'text-align': 'center',
                'border-bottom': '1px solid rgba(0,0,0,.03)',
                'font-size': '14px',
                'cursor': 'pointer'
            })
        },

        _initEvent: function () {
            $(document).on('keydown', $.ventop._controls)            
            $('.' + $.ventop.body_class + '_container > ol > li').hover(function () {
                $('.active').removeClass('active');
                $(this).addClass('active');
            }).on('click', $.ventop._seleccion)
        },

        _endEvent: function () {
            $(document).off('keydown', $.ventop._controls)
            $('.' + $.ventop.body_class + '_container > ol > li').off('click', $.ventop._seleccion)
        },

        _seleccion: function () {            
            let data_select = $(this).html().split('.')
            let data = {
                id: data_select[0],
                descripcion: data_select[1].trim()
            }

            $.ventop._sendCallback(data);
        },

        _controls: function (e) {
            var key = e.which;
            var active = $('.active').length;
            var active_obj = $('.active');
            if (active == 0 && key != 13 && key != 27) {
                let active_first = $('.' + $.ventop.body_class + '_container > ol > li').first();
                active_first.addClass('active');
            } else {
                switch (key) {
                    case 40:
                        let count_next = active_obj.next().length;
                        if (count_next != 0) active_obj.removeClass('active').next().addClass('active');
                        break;
                    case 38:
                        let count_prev = active_obj.prev().length;
                        if (count_prev != 0) active_obj.removeClass('active').prev().addClass('active');
                        break;
                    case 13:
                        let selected_op = $('.active');
                        if (selected_op.length != 0) selected_op.click();
                        else alert('Debes seleccionar una opción')
                        break;
                    case 27:
                        let data = {
                            id: "F",
                            descripcion: 'Salir'
                        }

                        $.ventop._sendCallback(data);
                        break;
                }
            }
        },

        _sendCallback: function (data) {
            var callback_function = $.ventop.callback;
            callback_function(data);
            $.ventop._hide();
        },

        _hide: function () {
            $.ventop._endEvent();
            $.ventop._delete_css();
            $('#' + $.ventop.overlay_id).fadeOut('fast', function () {
                $(this).remove();
            });
        },

        _overlay: function () {
            $('body').append('<div id="' + $.ventop.overlay_id + '"></div>');
            $('#' + $.ventop.overlay_id).css({
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                background: 'rgba(0,0,0,0.8)',
                'align-items': 'center',
                'font-family': "'Roboto', sans-serif"
            }).css("display", "flex")
                .hide()
                .fadeIn();
        },

        _delete_css: function () {
            $('#style_ventop').remove();
        },

        _import_css: function () {
            $("\
            <style type='text/css' id='style_ventop'>\
            @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');\
            .active{\
                background:aliceblue;\
            }"
            + "</style>"
            ).appendTo("head");
        }
    }

    ventana_opciones = function (callback) {
        $.ventop._show();
        $.ventop.callback = callback;        
    }

})(jQuery);