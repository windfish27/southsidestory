function ch1(){
	clear();
	document.getElementById("mainflash").innerHTML="<embed play='true' quality='high' src='CH1.swf' width='755' height='567px' style='z-index: 99';></embed>";
	$('#bch1').addClass("active");
};
function ch2(){
	clear();
	document.getElementById("mainflash").innerHTML="<embed play='true' quality='high' src='CH2.swf' width='755' height='567px' style='z-index: 99';></embed>";
	$('#bch2').addClass("active");
};
function ch3(){
	clear();
	document.getElementById("mainflash").innerHTML="<embed play='true' quality='high' src='CH3.swf' width='755' height='567px' style='z-index: 99';></embed>";
	$('#bch3').addClass("active");
};
function ch4(){
	clear();
	document.getElementById("mainflash").innerHTML="<embed play='true' quality='high' src='CH4.swf' width='755' height='567px' style='z-index: 99';></embed>";
	$('#bch4').addClass("active");
};
function ch5(){
	clear();
	document.getElementById("mainflash").innerHTML="<embed play='true' quality='high' src='CH5.swf' width='755' height='567px' style='z-index: 99';></embed>";
	$('#bch5').addClass("active");
};
function ch6(){
	clear();
	document.getElementById("mainflash").innerHTML="<embed play='true' quality='high' src='CH6.swf' width='755' height='567px' style='z-index: 99';></embed>";
	$('#bch6').addClass("active");
};
function clear(){
	$('#bch1').removeClass("active");
	$('#bch2').removeClass("active");
	$('#bch3').removeClass("active");
	$('#bch4').removeClass("active");
	$('#bch5').removeClass("active");
	$('#bch6').removeClass("active");
}
