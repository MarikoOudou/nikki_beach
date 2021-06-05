$(function() {

    var acttion = 'create';
    var url = 'http://assiniebeachclub-ci.com/rest/api.php?controller=invites&action=' + acttion;

    var data = {
        'datas': [{
            nom: $('input[name="nom"]').val(),
            prenoms: $('input[name="prenom"]').val(),
            contact: $('input[name="contact"]').val(),
            email: $('input[name="email"]').val(),
            date: $('input[name="date"]').val(),
            nombreperso: $('input[name="nombreperso"]').val(),
            package: $('input[name="pack"]').val()
        }]
    };
    var dataType = 'JSON';

    $('.notification-error').css('display', 'none');
    $('.notification').css('display', 'none');
    var myJSON = JSON.stringify(data);

    $('#formulaire')
        .submit(function(event) {
            event.preventDefault();

            $('.chargement').attr('style', 'display: block');
            $.ajax({
                type: "POST",
                url: url,
                data: myJSON,
                success: function(data) {

                    console.log(data);
                    if (data.status.code == 200) {
                        $('.chargement').attr('style', 'display: none');
                        //$('.notification').attr('style', 'display: block');
                        $('.notification').css('display', 'block');

                    } else {
                        $('.chargement').attr('style', 'display: none');
                        //$('.notification-error').attr('style', 'display: block');
                        $('.notification-error').css('display', 'block');


                    }

                },
                dataType: dataType
            });

        });


})