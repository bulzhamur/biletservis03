$(function() {

    $('#popupbutton').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 310

    });

    $("#phone").mask("+7(999) 999-99-99");

    $("#form-feedback").submit(function(event) {

        if ($('#name').val() == "")
            {
                $('#bthrow_error_name').fadeIn(1000).html('Представьтесь, пожалуйста.');
            }
        else if ($('#phone').val() == "")
            {
                $('#bthrow_error_name').empty();
                $('#bthrow_error_phone').fadeIn(1000).html('Как с Вами связаться?');
            }
        else
            {
                var postForm = {
                    'name'  : $('#name').val(),
                    'phone'  : $('#phone').val(),
                    'source'  : $('#source').val(),
                    'medium'  : $('#medium').val(),
                    'campaign'  : $('#campaign').val(),
                    'content'  : $('#content').val(),
                    'term'  : $('#term').val()
                };

                $.ajax({
                    type        : 'POST',
                    url         : 'feedback.php',
                    data        : postForm,
                    dataType    : 'json',
                    success     : function(data)
                        {
                            if (!data.success)
                                {
                                    if (data.errors.name)
                                        {
                                            $('.throw_error').fadeIn(1000).html(data.errors.name);
                                        }
                                }
                            else
                                {
                                    $('#form-feedback').fadeIn(1000).html('<p>' + data.posted + '</p>');
                                }
                        }
                });
            }

        event.preventDefault();

    });

});



$(function() {

    $('#popupbutton2').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 310

    });

    $("#phone2").mask("+7(999) 999-99-99");

    $("#form-feedback2").submit(function(event) {

        if ($('#name2').val() == "")
            {
                $('#bthrow_error_name2').fadeIn(1000).html('Представьтесь, пожалуйста.');
            }
        else if ($('#phone2').val() == "")
            {
                $('#bthrow_error_name2').empty();
                $('#bthrow_error_phone2').fadeIn(1000).html('Как с Вами связаться?');
            }
        else
            {
                var postForm = {
                    'name2'  : $('#name2').val(),
                    'phone2'  : $('#phone2').val(),
                    'source'  : $('#source').val(),
                    'medium'  : $('#medium').val(),
                    'campaign'  : $('#campaign').val(),
                    'content'  : $('#content').val(),
                    'term'  : $('#term').val()
                };

                $.ajax({
                    type        : 'POST',
                    url         : 'feedback2.php',
                    data        : postForm,
                    dataType    : 'json',
                    success     : function(data)
                        {
                            if (!data.success)
                                {
                                    if (data.errors.name)
                                        {
                                            $('.throw_error2').fadeIn(1000).html(data.errors.name);
                                        }
                                }
                            else
                                {
                                    $('#form-feedback2').fadeIn(1000).html('<p>' + data.posted + '</p>');
                                }
                        }
                });
            }

        event.preventDefault();

    });

});





$(function() {

    $('#popupbutton3').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 310

    });

    $("#phone3").mask("+7(999) 999-99-99");

    $("#form-feedback3").submit(function(event) {

        if ($('#name3').val() == "")
            {
                $('#bthrow_error_name3').fadeIn(1000).html('Представьтесь, пожалуйста.');
            }
        else if ($('#phone3').val() == "")
            {
                $('#bthrow_error_name3').empty();
                $('#bthrow_error_phone3').fadeIn(1000).html('Как с Вами связаться?');
            }
        else
            {
                var postForm = {
                    'name3'  : $('#name3').val(),
                    'phone3'  : $('#phone3').val(),
                    'source'  : $('#source').val(),
                    'medium'  : $('#medium').val(),
                    'campaign'  : $('#campaign').val(),
                    'content'  : $('#content').val(),
                    'term'  : $('#term').val()
                };

                $.ajax({
                    type        : 'POST',
                    url         : 'feedback3.php',
                    data        : postForm,
                    dataType    : 'json',
                    success     : function(data)
                        {
                            if (!data.success)
                                {
                                    if (data.errors.name)
                                        {
                                            $('.throw_error3').fadeIn(1000).html(data.errors.name);
                                        }
                                }
                            else
                                {
                                    $('#form-feedback3').fadeIn(1000).html('<p>' + data.posted + '</p>');
                                }
                        }
                });
            }

        event.preventDefault();

    });

});






$(function() {

    $('#popupbutton4').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 310

    });

    $("#phone4").mask("+7(999) 999-99-99");

    $("#form-feedback4").submit(function(event) {

        if ($('#name4').val() == "")
            {
                $('#bthrow_error_name4').fadeIn(1000).html('Представьтесь, пожалуйста.');
            }
        else if ($('#phone4').val() == "")
            {
                $('#bthrow_error_name4').empty();
                $('#bthrow_error_phone4').fadeIn(1000).html('Как с Вами связаться?');
            }
        else
            {
                var postForm = {
                    'name4'  : $('#name4').val(),
                    'phone4'  : $('#phone4').val(),
                    'source'  : $('#source').val(),
                    'medium'  : $('#medium').val(),
                    'campaign'  : $('#campaign').val(),
                    'content'  : $('#content').val(),
                    'term'  : $('#term').val()
                };

                $.ajax({
                    type        : 'POST',
                    url         : 'feedback4.php',
                    data        : postForm,
                    dataType    : 'json',
                    success     : function(data)
                        {
                            if (!data.success)
                                {
                                    if (data.errors.name)
                                        {
                                            $('.throw_error4').fadeIn(1000).html(data.errors.name);
                                        }
                                }
                            else
                                {
                                    $('#form-feedback4').fadeIn(1000).html('<p>' + data.posted + '</p>');
                                }
                        }
                });
            }

        event.preventDefault();

    });

});




$(function() {

    $('#popupbutton5').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 400,
        'minHeight': 310

    });

    $("#phone5").mask("+7(999) 999-99-99");

    $("#form-feedback5").submit(function(event) {

        if ($('#name5').val() == "")
            {
                $('#bthrow_error_name5').fadeIn(1000).html('Представьтесь, пожалуйста.');
            }
        else if ($('#phone5').val() == "")
            {
                $('#bthrow_error_name5').empty();
                $('#bthrow_error_phone5').fadeIn(1000).html('Как с Вами связаться?');
            }
        else
            {
                var postForm = {
                    'name5'  : $('#name5').val(),
                    'phone5'  : $('#phone5').val(),
                    'source'  : $('#source').val(),
                    'medium'  : $('#medium').val(),
                    'campaign'  : $('#campaign').val(),
                    'content'  : $('#content').val(),
                    'term'  : $('#term').val()
                };

                $.ajax({
                    type        : 'POST',
                    url         : 'feedback5.php',
                    data        : postForm,
                    dataType    : 'json',
                    success     : function(data)
                        {
                            if (!data.success)
                                {
                                    if (data.errors.name)
                                        {
                                            $('.throw_error5').fadeIn(1000).html(data.errors.name);
                                        }
                                }
                            else
                                {
                                    $('#form-feedback5').fadeIn(1000).html('<p>' + data.posted + '</p>');
                                }
                        }
                });
            }

        event.preventDefault();

    });

});


/** другие всплывающие формы **/


$(function() {

    $('#politika2').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 600,
        'minHeight': 410

    });
    
});




$(function() {

    $('#garantiya2').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 600,
        'minHeight': 410

    });
    
});



$(function() {

    $('#moreinfo2').fancybox({
        'padding': 37,
        'overlayOpacity': 0.87,
        'overlayColor': '#fff',
        'transitionIn': 'none',
        'transitionOut': 'none',
        'titlePosition': 'inside',
        'centerOnScroll': true,
        'maxWidth': 800,
        'minHeight': 510

    });
    
});