let date = new Date();

const refresh = () => {
	context.canvas.width  = window.innerWidth;
	context.canvas.height = window.innerHeight;

	date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const milli = date.getMilliseconds();

	const size = smaller(canvas.width, canvas.height) * .90;
	const linewidth = size / 20;

	drawCirc(canvas.width / 2, 	// x
		     canvas.height / 2, // y
		     size / 2, 			// radius
		     1.5 * Math.PI, 	// start arc
		     (1.5 + 2 * ((hours / 24) + (minutes / 1440))) * Math.PI,
  		     linewidth, 
  		     '#7799ff');

	drawCirc(canvas.width / 2, 	// x
		     canvas.height / 2, // y
		     size / 2 - 2 * (linewidth), // radius
		     1.5 * Math.PI, 	// start arc
		     (1.5 + 2 * ((minutes / 60) + (seconds / 3600))) * Math.PI, //endacr
  		     linewidth, 
  		     '#ffff89');

	drawCirc(canvas.width / 2, 	// x
		     canvas.height / 2, // y
		     size / 2 - 4 * (linewidth), // radius
		     1.5 * Math.PI, 	// start arc
		     (1.5 + 2 * ((seconds / 60) + (milli / 60000))) * Math.PI, //endarc
  		     linewidth, 
  		     '#ff9999');
}

const drawCirc = (x, y, radius, startarc, endarc, linewidth, color) => {
	context.beginPath();
	context.arc(x, y, radius, startarc, endarc);
	context.lineWidth = linewidth;
	context.strokeStyle = color;
	context.stroke();
}

const smaller = (width, height) => width < height ? width : height;

window.onload = () => {
	canvas = $('#canvas')[0];
	context = canvas.getContext('2d');

	const fps = 10;
	refresh();
	refreshIntervalId = setInterval(refresh, 1000 / fps);
};