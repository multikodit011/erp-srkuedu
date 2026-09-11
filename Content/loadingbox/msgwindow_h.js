
(function ($) {
    // Set dynamic url
    var ActionFolder = ["Accounts", "Departments", "DocVerification", "Masters", "Registration", "Report",
        "ResultProcessing", "Student", "SuperAdmin", "UserRole","Examination","Dashboard"];
    for (var i = 0; i < ActionFolder.length; i++) { ActionFolder[i] = ActionFolder[i].toLowerCase(); } var da_url = window.location.pathname.toLowerCase().split('/');
    var DynomicURL = '';
    if ((ActionFolder.indexOf(da_url[1].toString()) > -1) === false && DynomicURL!='') {
        DynomicURL = '/' + da_url[1].toString();
    }
    // close dynamic url

    $.showprogress = function (progTit, progText, progImg) {
        $.hideprogress(); 
        $("BODY").append('<div id="processing_overlay"></div>');
        $("BODY").append('<div id="processing_container">' + '<h1 id="processing_title">' + progTit + '</h1>' + '<div id="processing_content">' + '<div id="processing_message">'
            + progText + '<br/><br/><img src=' + DynomicURL + '/Content/loadingbox/image/loadingimage.gif alt="Loading..." /></div>' + '</div>' + '</div>');
        var pos = 'fixed';

        $("#processing_container").css({
            position: pos,
            padding: 0,
            margin: 0
        });

        $("#processing_container").css({
            minWidth: $("#processing_container").outerWidth(),
            maxWidth: $("#processing_container").outerWidth()
        });
        var top = (($(window).height() / 2) - ($("#processing_container").outerHeight() / 2)) + (-75);
        var left = (($(window).width() / 2) - ($("#processing_container").outerWidth() / 2)) + 0;
        if (top < 0) top = 0;
        if (left < 0) left = 0;

        // IE6 fix
        //if ($.browser.msie && parseInt($.browser.version) <= 6) top = top + $(window).scrollTop();

        $("#processing_container").css({
            top: top + 'px',
            left: left + 'px'
        });
        $("#processing_overlay").height($(document).height());
    },
        $.hideprogress = function () {
            $("#processing_container").remove();
            $("#processing_overlay").remove();
        },
        $.showmsg = function (msgEle, msgText, msgClass, msgIcon, msgHideIcon, autoHide) {
            var tblMsg;

            tblMsg = '<table width="100%" cellpadding="1" cellspacing="0" border="0" class="' + msgClass + '"><tr><td style="width:30px;" align="center" valign="middle">' + msgIcon + '</td><td>' + msgText + '</td><td style="width:30px;" align="center" valign="middle"><a href="javascript:void(0);" onclick="$(\'#' + msgEle + '\').toggle(400);">' + msgHideIcon + '</a></td></tr></table>';

            $("#" + msgEle).html(tblMsg);
            $("#" + msgEle).show();
            if (autoHide) {
                setTimeout(function () {
                    $('#' + msgEle).fadeOut('normal')
                }, 10000);
            }
        };
})(jQuery);

