(function ($) {


    $.alerts = {
        overlay_id: 'alert_overlay',
        container_id: 'alert_container',
        header_class: 'alert_header',
        body_class: 'alert_body',
        foot_class: 'alert_footer',
        btn_id: 'alert_btn',
        btn_text: 'Aceptar',

        alert: function (params, callback) {            
            params.tipo = params.tipo ? params.tipo : 'Alert';
            params.titulo = params.titulo ? params.titulo : 'Alerta';
            $.alerts._show(params);

            $('#' + $.alerts.btn_id).on('click', function () {
                $.alerts._eventBtn();
                if (callback) callback(callback);
            })
        },

        _show: function (params) {
            $.alerts._overlay('show');

            // Container main alert
            $('#' + $.alerts.overlay_id).html('').append('<div id="' + $.alerts.container_id + '"></div>');
            $('#' + $.alerts.container_id).css({
                background: '#FFF',
                width: '20%',
                height: 'auto',
                margin: '0 auto',
                'box-shadow': 'box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.06);',
                'border-radius': '3px'
            });

            $('#' + $.alerts.container_id).append(''
                + '<div class="' + $.alerts.header_class + '">'
                + ' <p style="padding: 15px 25px;margin: 0 auto;">'
                + params.titulo
                + ' </p>'
                + '</div>'
                + '<div class="' + $.alerts.body_class + '">'
                + ' <div class="' + $.alerts.body_class + '_container">'
                + params.mensaje
                + '  </div>'
                + '</div>'
                + '<div class="' + $.alerts.foot_class + '">'
                + ' <div class="' + $.alerts.foot_class + '_container">'
                + ' </div>'
                + '</div>'
            );

            // Header alert style
            $('.' + $.alerts.header_class).css({
                width: '100%',
                height: 'auto',
                background: 'rgba(0,0,0,.03)',
                'max-width': '100%',
                'text-transform': 'uppercase',
                'font-weight': '700',
                'font-size': '14px',
                'text-align': 'center'
            });

            // Body y body_container alert style            
            $('.' + $.alerts.body_class).css({
                width: '100%',
                height: 'auto',
            });

            $('.' + $.alerts.body_class + '_container').css({
                padding: '30px 20px',
                'font-size': '16px'
            });

            //Footer alert style
            $('.' + $.alerts.foot_class).css({
                width: '100%',
                height: 'auto',
                background: '#f6fbff',
                'border-radius': '0px 0px 3px 3px'
            });

            //Footer btn style
            $('.' + $.alerts.foot_class + "_container").append(''
                + '<button id="' + $.alerts.btn_id + '">'
                + $.alerts.btn_text
                + '</button>'
                + '<div style="clear:both"></div>');

            $('#' + $.alerts.btn_id).css({
                width: 'auto',
                height: 'auto',
                padding: '13px 25px',
                margin: '10px',
                float: 'right',
                background: '#0e86cc',
                color: '#FFF',
                'font-size': '12px',
                'letter-spacing': '1px',
                'text-rendering': 'optimizeLegibility'
            }).hover(
                function () {
                    $(this).css({
                        'background': '#08659c'
                    })
                },
                function () {
                    $(this).css({
                        'background': '#0e86cc'
                    })
                }
            );

        },

        _overlay: function (estado) {
            $('body').append('<div id="' + $.alerts.overlay_id + '"></div>');
            $('#alert_overlay').css({
                position: 'absolute',
                width: '100%',
                height: '100%',
                top: '0',
                left: '0',
                background: 'rgba(0,0,0,0.8)',
                'align-items': 'center'
            }).css("display", "flex")
                .hide()
                .fadeIn();
        },

        _eventBtn: function () {
            $.alerts._hide();
        },

        _hide: function () {
            $('#' + $.alerts.overlay_id).fadeOut('fast', function () {
                $(this).remove();
            });
        },
    }

    jAlert = function (params, callback) {
        $.alerts.alert(params, callback);
    }

})(jQuery);