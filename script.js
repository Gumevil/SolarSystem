/*========================= DATA ==============================*/
var i = 0;
var speed = 0;
/* array - planets and moons in order of closest to farthest from their parent */
var orbits = [ "mercury-orbit", "venus-orbit", "earth-orbit", "moon-orbit", "mars-orbit", "jupiter-orbit",
						"io-orbit",	"europa-orbit", "ganymede-orbit", "callisto-orbit", "saturn-orbit"];
/* array - Planets and moons initial orbit speeds -- speeds are in earth days */						
var oSpeed = [ 87.96, 224.68, 365.26, 27.32, 686.98, 4331.98, 1.77, 3.55, 7.15, 16.7, 10759.1];
var showSpeed = [ 87.96, 224.68, 365.26, 27.32, 686.98, 4331.98, 1.77, 3.55, 7.15, 16.7, 10759.1];
/*====================== Event Handlers ============================*/
window.onload = orbitSpeed;
document.getElementById('speedbar').oninput = changeOrbitSpeed;
document.getElementById('speedbar').onchange = changeOrbitSpeed;

function myPlayFunction()
		{ for (i = 0; i < orbits.length; i++){
				document.getElementById(orbits[i]).style.animationPlayState = "running";
				document.getElementById(orbits[i]).style.WebkitAnimationPlayState = "running";
		}
}

function myPauseFunction()
		{ for (i = 0; i < orbits.length; i++){
				document.getElementById(orbits[i]).style.animationPlayState = "paused";
				document.getElementById(orbits[i]).style.WebkitAnimationPlayState = "paused";
		}
}
/*======================== set all orbit speeds on page load ====================*/
function orbitSpeed(){
	document.getElementById('spd').innerHTML = 1;
		for (i = 0; i < oSpeed.length; i++){
			// set speed to oSpeed array value for all planets and moons
			document.getElementById('showspeed'+ i).innerHTML = oSpeed[i].toFixed(3);
			var animationString = "spin-right " + oSpeed[i] + "s linear infinite";			
				document.getElementById(orbits[i]).style.animation = animationString; // for IE
				document.getElementById(orbits[i]).style.webkitAnimation = animationString; // for Chrome					
		}
}
/*=========================== change all orbit speeds ========================*/
function changeOrbitSpeed(){
		var spdChange = document.getElementById('speedbar');	
		var spChg = parseFloat(spdChange.value);
		document.getElementById('spd').innerHTML = spChg;
			for (i = 0; i < oSpeed.length; i++){ 		
				var speedup = (oSpeed[i] * 1) / spChg;
				showSpeed[i] = speedup;
				document.getElementById('showspeed'+ i).innerHTML = speedup.toFixed(3);
				var durationString = speedup + "s";			
					document.getElementById(orbits[i]).style.webkitAnimationDuration = durationString;
					document.getElementById(orbits[i]).style.animationDuration = durationString;
					// retrieve the element
					var child = document.getElementById(orbits[i]);				
					var newChild = child.cloneNode(true);
					var parentDiv = child.parentNode;
					parentDiv.replaceChild(newChild, child);
					//  reset the transition by...
					child.addEventListener("oninput", function(e) {
						e.preventDefault;				  
						//  removing the class
						child.classList.remove(orbits[i]);				  
						//  triggering reflow /* The actual magic */
						//  without this it wouldn't work.
						child.offsetWidth = element.offsetWidth;				  
						//   and re-adding the class
						child.classList.add(orbits[i]);						
					}, false);
			}		
}