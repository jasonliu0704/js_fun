(function(window, document, undefined) {

  /* Sets a random integer quantity in range [1, 20] for each flavor. */
  function setQuantities() {
    var metas = document.getElementsByClassName("meta");
    for(var i=0; i<metas.length; i++){
      var span = document.createElement("span");
      span.innerHTML = Math.floor(Math.random() * 20) + 1;
      span.setAttribute("class","quantity");
      metas[i].insertBefore(span, metas[i].firstChild);
    }
  }

  /* Extracts and returns an array of flavor objects based on data in the DOM. Each
   * flavor object should contain five properties:
   *
   * element: the HTMLElement that corresponds to the .flavor div in the DOM
   * name: the name of the flavor
   * description: the description of the flavor
   * price: how much the flavor costs
   * quantity: how many cups of the flavor are available
   */
  function extractFlavors() {
    var result = [];
    var elements = document.getElementsByClassName("flavor");
    for(var i = 0; i<elements.length; i++){
      result.push({element: elements[i], 
      name: elements[i].children[1].children[0].innerHTML, 
      description: elements[i].children[1].children[1].innerHTML,
      price: elements[i].children[0].children[2].innerHTML,
      quantity: elements[i].children[0].children[1].innerHTML});
    }
    
    return result;
  }

  /* Calculates and returns the average price of the given set of flavors. The
   * average should be rounded to two decimal places. */
  function calculateAveragePrice(flavors) {
    var sum = 0;
    var num = 0;
    flavors.forEach(function(flavor){
      sum += parseFloat(flavor.price.substring(1));
      num++;
    })
    
    return (sum / num).toFixed(2);
  }

  /* Finds flavors that have prices below the given threshold. Returns an array
   * of strings, each of the form "[flavor] costs $[price]". There should be
   * one string for each cheap flavor. */
  function findCheapFlavors(flavors, threshold) {
    // TODO
  }

  /* Populates the select dropdown with options. There should be one option tag
   * for each of the given flavors. */
  function populateOptions(flavors) {
    // TODO
  }

  /* Processes orders for the given set of flavors. When a valid order is made,
   * decrements the quantity of the associated flavor. */
  function processOrders(flavors) {
    // TODO
  }

  /* Highlights flavors when clicked to make a simple favoriting system. */
  function highlightFlavors(flavors) {
    // TODO
  }


  /***************************************************************************/
  /*                                                                         */
  /* Please do not modify code below this line, but feel free to examine it. */
  /*                                                                         */
  /***************************************************************************/


  var CHEAP_PRICE_THRESHOLD = 1.50;

  // setting quantities can modify the size of flavor divs, so apply the grid
  // layout *after* quantities have been set.
  setQuantities();
  var container = document.getElementById('container');
  new Masonry(container, { itemSelector: '.flavor' });

  // calculate statistics about flavors
  var flavors = extractFlavors();
  var averagePrice = calculateAveragePrice(flavors);
  console.log('Average price:', averagePrice);

  var cheapFlavors = findCheapFlavors(flavors, CHEAP_PRICE_THRESHOLD);
  console.log('Cheap flavors:', cheapFlavors);

  // handle flavor orders and highlighting
  populateOptions(flavors);
  processOrders(flavors);
  highlightFlavors(flavors);

})(window, document);
