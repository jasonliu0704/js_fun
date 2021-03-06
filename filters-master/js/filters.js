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


var THRESHOLD_DISTANCE = 100;
/* Applies a threshold filter to the given pixels. Makes all pixels above
 * the threshold black and all pixels below the threshold white.
 *
 * Arguments:
 * pixels -- an array of pixel values
 */

function filterThreshold(pixels) {
  for (var i = 0; i < pixels.length; i += 4) {
    var red = pixels[i];
    var green = pixels[i + 1];
    var blue = pixels[i + 2];

    // get cartesian distance from black at (0, 0, 0)
    var distance = Math.sqrt(red * red + green * green + blue * blue);

    if (distance < THRESHOLD_DISTANCE) {
      // pixel meets threshold and is close to black; set it to black
      pixels[i] = 0;
      pixels[i + 1] = 0;
      pixels[i + 2] = 0;
    } else {
      // pixel exceeds threshold; set it to white
      pixels[i] = 255;
      pixels[i + 1] = 255;
      pixels[i + 2] = 255;
    }
  }
}
