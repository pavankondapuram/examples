
$(function(){
  var canvas = document.getElementById('doCanvas');
  if (canvas.getContext){
    var ctx = canvas.getContext('2d');
    ctx.fillRect(25,25,100,100);
    ctx.clearRect(45,45,60,60);
    ctx.strokeRect(50,50,50,50);
  } else {
    alert('You need Safari or Firefox 1.5+ to see this demo.');
  }
})



var url=document.URL;

$(function(){
	var today=new Date();
	var todayParse=Date.parse(today);
	var lastMod=document.lastModified;
	var lastModParse=Date.parse(lastMod);
	var timeDifference=todayParse-lastModParse;

	if (timeDifference>(24*60*60))
		{$('.statementNew').hide()}
	else{$('.statementOld').hide()};

	$('.test .showCont').html(urlFind);

	$('.url .showCont').html(url);
	$('.mod .showCont').html(lastMod);
	//$('.date .showCont').html(dateMod);
	//$('.yDay .showCont').html(yesterDay);

	var urlFind=url.substring(0,5);

})