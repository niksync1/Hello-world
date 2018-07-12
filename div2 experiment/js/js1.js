function message() {alert('This alert box was called with the onload event');}
function swaptext1(){document.getElementById('stuff').innerHTML="Clicked first button";}
function swaptext2(){document.getElementById('stuff').innerHTML="Clicked second button";}
function hova(){document.getElementById('once').innerHTML="you hovered?";
				document.getElementById('once'.body.style.backgroundColor='red')}
function disparu1(){document.getElementById('disappear').style.display="none";}
function appear2(){document.getElementById('disappear').style.display="block";}
function disparu(){document.getElementById('disappear').className="closed";}
function appear(){document.getElementById('disappear').className="open";}
var x;
function firstname(){x=prompt ('what is your firstname?');
		document.getElementById('firstname').innerHTML=x;}
var y;
function surname(){y=prompt ('what is your surname?');
		document.getElementById('surname').innerHTML=y;}
function fullname(){z=x+" "+y;
		document.getElementById('combine').innerHTML=z;}
function zigma(){var allcars = 3+2+5;
					document.getElementById('123').innerHTML=allcars;
					alert(allcars);}
var cars;
var cars = ["Galloper", "H_1", "Elantra", "Volvo c40", "Mercedes Benz",];
			function loadcars(){document.getElementById('parked').innerHTML= cars;}
			function addcar(){var car=prompt('Type in a new car?');
			cars[cars.length]=car;}

function blankbox(){document.getElementById('parked').innerHTML=" ";}
function changep() {var x = document.getElementsByTagName("p");
					document.getElementById("display").innerHTML=x[2].innerHTML;}
function changeh2(){var b=document.getElementsByTagName("p");
					var i;
					for (i = 3;i < b.length; i++){b[i].style.backgroundColor="yellow"}
					}
