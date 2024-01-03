bb = document.getElementById('blackboard');
pathCont = document.getElementById('pathCont');
bb.addEventListener('mousedown', onMouseDown);
bb.addEventListener('mousemove', onMouseMove);
bb.addEventListener('mouseup', onMouseUp);
document.addEventListener('keydown', handleKey);
draw = false;
color = 'white';
colors = [
	'#FFFFFF',
	'#F15156',
	'#00ff00',
	'#336699',
	'#5DFDCB',
	'#DC98FF',
	'#E06D06',
	'#F5F749',
	'#791E94',
	'#000000',
];
fill = false;
strokeWidth = '1';
sw = { q: 1, w: 2, e: 3, r: 4 };
var cmd, path, pathss;
function onMouseDown(event) {
	x = event.offsetX;
	y = event.offsetY;
	draw = true;
	path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
	path.setAttribute('stroke', color);
	path.setAttribute('fill', fill ? color : 'none');
	path.setAttribute('stroke-width', strokeWidth);
	cmd = 'M' + x + ' ' + y + ' ';
	path.setAttribute('d', cmd);
	pathCont.appendChild(path);
	paths = document.getElementsByTagName('path');
}
function onMouseUp(event) {
	draw = false;
}
function onMouseMove(event) {
	x = event.offsetX;
	y = event.offsetY;
	if (draw) {
		drawStroke(x, y);
	}
}
function drawStroke(x, y) {
	deltaCMD = 'L' + x + ' ' + y + ' ';
	cmd += deltaCMD;
	path.setAttribute('d', cmd);
}
function handleKey(event) {
	k = event.key;
	if (event.ctrlKey && k === 'z') {
		lastPath = paths[paths.length - 1];
		lastPath.remove();
	} else if (k in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']) {
		k == '0' ? (k = '10') : (k = k);
		color = colors[parseInt(k) - 1];
	} else if (k === 'q' || k === 'w' || k === 'e' || k === 'r') {
		strokeWidth = sw[k];
	} else if (k === 'f') {
		if (!document.fullscreenElement) {
			bb.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	} else if (k === 'f') {
		if (!document.fullscreenElement) {
			bb.requestFullscreen();
		} else {
			document.exitFullscreen();
		}
	} else if (k === 'c') {
		length = paths.length;
		for (i = 0; i <= length - 1; i++) {
			paths[0].remove();
		}
	} else if (k === 'c') {
		length = paths.length;
		for (i = 0; i <= length - 1; i++) {
			paths[0].remove();
		}
	} else if (k === 'm') {
		fill = !fill;
	}
}
