(function ($) {
    var app = {

        A: null,
        list: [],

        initialize: function() {
            A = this;

            window.setInterval(A.update, 1000);
        },

        update: function () {
            $.ajax({
                type: 'GET',
                url: 'http://bsa.dsharris.org/checkin/list',
                dataType: 'JSON',

                complete: function (response) {
                    var result = JSON.parse(response.responseText);

                    if (result.length > A.list.length) {
                        A.list = result;
                        A.render();
                    }
                },
                async: false
            });
        },

        render: function () {
            console.log(A.list);
            $('.scanlist').html('<li>' + A.list.join('</li><li>') + '</li>');
        }
    };

    $(function () {
        app.initialize();
    });

}(window.jQuery || window.$));
