// Declare variables
var input = document.querySelector('input[type="search"]');
var imageLinks = document.querySelectorAll('a');

// Add event listener on 'keyup' so this is a real-time search
input.addEventListener('keyup', function(){

  // Get the value as user types and transform to lowercase
  var str = input.value.toLowerCase();

  // Loop through the captions
  for (var i = 0; i < imageLinks.length; i++){
    // Get value of the data-title attribute from each element
    var caption = imageLinks[i].getAttribute('data-title').toLowerCase();

    // Check if the str value is included in the caption.
    if ( caption.includes( str ) ){

      // Add data-lightbox attribute and show image container
      imageLinks[i].setAttribute('data-lightbox', 'gallery');
      imageLinks[i].style.display = 'block';
    } else {

      // Hide the image container and remove data-lightbox attribute
      imageLinks[i].setAttribute('data-lightbox', '');
      imageLinks[i].style.display = 'none';
    }
  }
});

// Reset the HTML when the 'x' is clicked in the 'search' box
input.addEventListener('search', function(){

    // Check to make sure the search field is blank
    if ( '' === input.value){

      // Loop through and reset the HTML
      for (var i = 0; i < imageLinks.length; i++){
        imageLinks[i].setAttribute('data-lightbox', 'gallery');
        imageLinks[i].style.display = 'block';
      }
    }
});


// Lightbox
lightbox.option({
  wrapAround: true
});
