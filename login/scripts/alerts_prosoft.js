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
            console.log(params)
            if (params.tipo == null) params.tipo = 'Alert';
            if (params.titulo == null) params.titulo = 'Alerta';
            $.alerts._show(params);
            if (callback) callback(callback);
        },

        _show: function (params) {
            $.alerts._overlay('show');

            // Container main alert
            $('#' + $.alerts.overlay_id).append('<div id="' + $.alerts.container_id + '"></div>');
            $('#' + $.alerts.container_id).css({
                background: '#FFF',
                width: '20%',
                height: 'auto',
                margin: '0 auto',
                'box-shadow': 'box-shadow: 0 25px 20px -20px rgba(0, 0, 0, 0.1), 0 0 15px rgba(0, 0, 0, 0.06);',
                'border-radius': '2px'
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
                background: '#f4f8ff',
                'border-radius': '0px 0px 3px 3px'
            });

            //Footer btn style
            $('.' + $.alerts.foot_class + "_container").append(''
                + '<button id="' + $.alerts.btn_id + '">' 
                +   $.alerts.btn_text 
                + '</button>'
                + '<div style="clear:both"></div>');

            $('#' + $.alerts.btn_id).css({
                width: 'auto',
                padding: '10px 25px',
                margin: '10px',
                float: 'right',
                background: '#0e86cc',
                color: '#FFF',
                'font-size': '14px',
                'letter-spacing': 'normal',
                'font-weight': '600!important',
            });

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
                display: 'flex',
                'align-items': 'center'
            })
        }
    }

    jAlert = function (params, callback) {
        $.alerts.alert(params, callback);
    }
})(jQuery);