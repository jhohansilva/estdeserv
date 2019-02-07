(function ($) {
    $.ventop = {
        overlay_id: 'ventop_overlay',
        container_id: 'ventop_container',
        header_class: 'ventop_header',
        body_class: 'ventop_body',
        callback: null,
        title: 'Novedad',

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
                'border-radius': '3px',
                'padding': '2px 2px 0 2px'
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
                + '         <li id="7" >7. Nuevo</li>'
                + '         <li id="8" >8. Cambio</li>'
                + '         <li id="9" >9. Retiro</li>'
                + '         <li id="F" >F. Fin</li>'
                + '     </ol>'
                + ' </div>'
                + '</div>'
            );

            $('.' + $.ventop.header_class).css({
                width: '100%',
                height: 'auto',
                background: '#081a79',
                'max-width': '100%',
                'text-transform': 'uppercase',
                'font-weight': '600',
                'font-size': '12px',
                'text-align': 'center',
                'color': '#FFF',
                'border-radius': '3px 3px 0 0 ',
                'margin-bottom': '2px',
                'letter-spacing': '.8px'
            });

            $('.' + $.ventop.body_class + '_container > ol').css({
                'list-style': 'none',
                'margin': '0 auto',
                'padding': '0'
            })

            $('.' + $.ventop.body_class + '_container > ol > li').css({
                'padding': '12px 0px',
                'text-align': 'center',
                'font-size': '14px',
                'cursor': 'pointer',
                'border': '1px solid transparent',
                'margin-bottom': '2px',
                'background': 'rgba(0,0,0,.08)'
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
            if (active == 0
                && key != 13
                && key != 103
                && key != 55
                && key != 27
                && key != 104
                && key != 56
                && key != 105
                && key != 57
                && key != 70
            ) {
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
                    case 103: case 55:
                        $('#7').click();
                        break;
                    case 104: case 56:
                        $('#8').click();
                        break;
                    case 105: case 57:
                        $('#9').click();
                        break;
                    case 70:
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
            $('#' + $.ventop.overlay_id).fadeOut('fast', function () {
                $(this).remove();
                $.ventop._delete_css();
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
            $(""
                + "<style type='text/css' id='style_ventop'>\
            @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900');\
            .active{\
                background: #d6e8f7!important;\
                border: 1px solid rgb(154,208,255)!important;\
            }"
                + "</style>"
            ).appendTo("head");
        }
    }

    CON850 = function (callback) {
        $.ventop.callback = callback;
        $.ventop._show();
    }

})(jQuery);