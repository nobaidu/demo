$(function () {
    $('.m-menu').click(function () {
        $(this).hide();
        $('.head').show();
        $('.m-close').show();
        $('body').css({
            'overflow-x': 'hidden'
        });
    })
    $('.m-close').click(function () {
        $(this).hide();
        $('.head').hide();
        $('.m-menu').show();
        $('body').css({
            'overflow-y': 'auto'
        });
    })
})

$(function () {
    $('.pop-btn').click(function () {
        $('.pop-outer').hide();
    })
    $('.pop-outer').click(function () {
        $(this).hide();
    })
})


$(function(){
    new WOW.init()
})
//表单验证
$(function () {
    $('.btn').click(function () {
        if ($('.name').val() == "") {
            $('.name').focus();

            $('.pop-text').text('姓名不能为空');
            $('.pop-outer').show();
            return false;
        }
        if ($('.tel').val() == "") {
            $('.tel').focus();

            $('.pop-text').text('电话不能为空');
            $('.pop-outer').show();
            return false;
        }
        if ($('.tel').val().length < 11 && $('.tel').val().length > 0) {
            $('.tel').focus();

            $('.pop-text').text('电话格式错误');
            $('.pop-outer').show();
            return false;
        }
    })
});