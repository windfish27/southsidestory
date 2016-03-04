$(document).ready(function() {
	$("#question2").hide();
	$("#question3").hide();
	$("#question4").hide();
	$("#question5").hide();
	$("#question6").hide();
	$("#question7").hide();
	$("#question8").hide();
	$("#question9").hide();
	$("#question10").hide();
	$("#win").hide();

	$('#q1b').click(function () {
        $("#question2").show("blind", 1000);
        $("#question1 input").attr('disabled','disabled');
        document.getElementById('question1').style.height = '218px';
    });
    $('#q2d').click(function () {
        $("#question3").show("blind", 1000);
        $("#question2 input").attr('disabled','disabled');
    });
    $('#q3a').click(function () {
        $("#question4").show("blind", 1000);
        $("#question3 input").attr('disabled','disabled');
    });
    $('#q4b').click(function () {
        $("#question5").show("blind", 1000);
        $("#question4 input").attr('disabled','disabled');
    });
    $('#q5a').click(function () {
        $("#question6").show("blind", 1000);
        $("#question5 input").attr('disabled','disabled');
    });
    $('#q6b').click(function () {
        $("#question7").show("blind", 1000);
        $("#question6 input").attr('disabled','disabled');
    });
    $('#q7d').click(function () {
        $("#question8").show("blind", 1000);
        $("#question7 input").attr('disabled','disabled');
    });
    $('#q8d').click(function () {
        $("#question9").show("blind", 1000);
        $("#question8 input").attr('disabled','disabled');
    });
    $('#q9c').click(function () {
        $("#question10").show("blind", 1000);
        $("#question9 input").attr('disabled','disabled');
    });
    $('#q10c').click(function () {
        $("#win").show("blind", 1000);
        $("#question10 input").attr('disabled','disabled');
    });

});