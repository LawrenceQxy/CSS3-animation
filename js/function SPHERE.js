var aDiv = document.getElementsByClassName('element');
var sphere = document.getElementById('menu').children[1];
var phi = 0;//角度ψ
var theta = 0;//角度θ
var arr = [4,7,10,13,16,19,16,13,10,7,4];
var arrNum = [];
var r = 300;
sphere.isclicked = false;
sphere.onclick = function(){
	for (var i = 0; i < aDiv.length-2; i++) {
		arrNum.push(i);
	}
	if (!this.isClicked) {
		arrNum.sort(function (a,b) {
			return Math.random()-0.5;
		})
	}
	this.isClicked = true;
	var n = 0;
	for(var i=0;i<arr.length;i++){
		theta = Math.PI/arr.length;
        phi = 2*Math.PI/arr[i];
        for(var j=0; j<arr[i]; j++){
			drawCircle(aDiv[n],theta,phi,i,j);
        	n++;
		}
	}
	for(var i=0; i<aDiv.length-2; i++){
		aDiv[i].style.transition = '2s';
		aDiv[arrNum[i]].style.transform='translate3D('+ (aDiv[i].circleX) +'px,'+ (aDiv[i].circleY) +'px,'+ (aDiv[i].circleZ) +'px) rotateY('+ (aDiv[i].circlePhi) +'rad) rotateX('+ (aDiv[i].circleTheta) +'rad) scale(0.3)';
	}
}
function drawCircle(obj,theta,phi,i,j){
    obj.circleX = r*Math.sin(theta*i)*Math.sin(phi*j)+window.innerWidth/2;
    obj.circleY = -r*Math.cos(theta*i)+window.innerHeight/2;
    obj.circleZ = r*Math.sin(theta*i)*Math.cos(phi*j);
    obj.circleTheta = theta*(arr.length-i)-Math.PI/2;
    obj.circlePhi = phi*j;
}