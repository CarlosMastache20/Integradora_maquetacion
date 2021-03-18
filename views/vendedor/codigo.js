$(document).ready(function() {


    $("#btn1").click(function() {
        $("#modal1").find(".modal-header").css("background", "black !important");
        $("#modal1").find(".modal-header").css("color", "white");
        $('#modal1').modal('show');
    });


    $("#btn2").click(function() {
        $('#modal2').modal('show');
        $('#modal2').draggable({});
    })

    ;


});