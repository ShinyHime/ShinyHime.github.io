$(window).ready(function() {
	
	  setTimeout(function() {
		$('.spinner').fadeOut("slow");
			
		  setTimeout(function() {
          $('#prelaoder').fadeOut("slow"); 
          
		  }, 700);	  
	  }, 700);	
  
    
      // TypeIt Function for the Jumbotron Heading
      $('#type-this').typeIt({
        strings: ["develop websites.", "create interactive experiences.", "implement and manage databases.", "am a Web Developer."],
        speed: 100,
        breakLines: false,
        deleteDelay: 2000,
        startDelay: 2000,
        loop: false
    })

     // Smooth Scroll from Anchor
     $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 1000);
        return false;
    });
});
