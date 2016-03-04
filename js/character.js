$(document).ready(function() {

	$(".show_cha").hide();
	$("#eiko1").hide();
	$("#father1").hide();
	$("#mother1").hide();
	$("#child5-1").hide();
	$("#child6-1").hide();
	$("#kou1").hide();
	$("#sung1").hide();
	$("#grass1").hide();
	$("#len1").hide();
	$("#four1").hide();
	$("#teacher1").hide();

	$('#eiko2').click(function () {
        $("#eiko1").show();
        $(".show_cha").show("blind", 1000);
        $("div div .cross").show();
    });
    $('#father2').click(function () {
        $("#father1").show();
        $(".show_cha").show("blind", 1000);
        $("div div .cross").show();
    });
    $('#mother2').click(function () {
        $("#mother1").show();
        $(".show_cha").show("blind", 1000);
        $("div div .cross").show();
    });
    $('#child5').click(function () {
        $("#child5-1").show();
        $(".show_cha").show("blind", 1000);
        $("div div .cross").show();
    });
    $('#child6').click(function () {
        $("#child6-1").show();
        $(".show_cha").show("blind", 1000);
        $("div div .cross").show();
    });
    $('#kou2').click(function () {
        $("#kou1").show();
        $(".show_cha").show("blind", 1000); 
        $("div div .cross").show();
    });
    $('#sung2').click(function () {
        $("#sung1").show();
        $(".show_cha").show("blind", 1000);
        $("div div .cross").show();
    });
    $('#grass2').click(function () {
        $("#grass1").show();
        $(".show_cha").show("blind", 1000);
        $("div div .cross").show();
    });
    $('#len2').click(function () {
        $("#len1").show();
        $(".show_cha").show("blind", 1000);
        $("div div .cross").show();
    });
    $('#four2').click(function () {
        $("#four1").show();
        $(".show_cha").show("blind", 1000);
        $("div div .cross").show();
    });
    $('#teacher2').click(function () {
        $("#teacher1").show();
        $(".show_cha").show("blind", 1000);
        $("div div .cross").show();
    });
    $('.cross').click(function () {
        $(".show_cha").hide("blind", 1000);
        $(this).parents('div.cro').delay(1000).hide("blind", 1000);
    });
});