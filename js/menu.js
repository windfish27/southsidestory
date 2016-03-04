$(document).ready(function() {
	$("#flash_content").hide();
	$("#article_content").hide();

	$('#flash').hover(function () {
        $("#flash_content").show("drop");
    }, function () {
        $("#flash_content").hide("drop");
    });

    $('#article').hover(function () {
        $("#article_content").show("drop");
    }, function () {
        $("#article_content").hide("drop");
    });
});