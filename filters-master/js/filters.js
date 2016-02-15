/* Filters the given pixels to grayscale.
 *
 * Arguments:
 * pixels -- an array of pixel values
 */

function filterGrayscale(pixels) {
	for(var i=0; i <pixels.length; i+=4){
		var a = (pixels[i] + pixels[i+1] + pixels[i+2])/3;
		pixels[i] = a;
		pixels[i + 1] = a;
		pixels[i + 2] = a;
	}
	return pixels;
}

/* Brightens the given pixels.
 *
 * Arguments:
 * pixels -- an array of pixel values
 */
function filterBrighten(pixels) {

	for(var i in pixels){
		pixels[i] += 50;
	}
}

/* Applies a threshold filter to the given pixels. Makes all pixels above
 * the threshold black and all pixels below the threshold white.
 *
 * Arguments:
 * pixels -- an array of pixel values
 */
function filterThreshold(pixels) {
	var threshold = 125;

	//determine threshold
	if(dist(pixels) < threshold){
		pixels.fill(255);
		return pixels;
	}else{
		pixels.fill(0);
		return pixels;
	}
}

/*
 * helper function to calculate pixel distance
 *
 * Arguments:
 * color -- an array of input color pixels
 */
function dist(color){
	var sum = 0;
	for(var i in color){
		sum += color[i]*color[i];
	}
	return Math.sqrt(sum);
}

