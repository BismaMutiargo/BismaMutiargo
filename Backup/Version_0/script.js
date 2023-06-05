$(function() {
  var typed = new Typed('#typed', {
    strings: ["Innovation Architect", "Machine Vision", "Metrology", "3D Scanning", "Reverse Engineering" , "Artificial Intelligence"],
    typeSpeed: 50,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,
    loop: true,
    showCursor: true,
    cursorChar: "*",
    autoInsertCss: true
  });

  // Default explanation text
  var defaultExplanation = 
  
  
  "Welcome! It's a pleasure to make your acquaintance. I am a passionate tech enthusiast with a zest for thrilling football matches and captivating scuba diving adventures. Aquariums and music hold a special place in my heart, and I'm always eager to engage in lively conversations about these topics. I hail from Indonesia, and as a Master Scuba diving certificate holder, I have explored the mesmerizing depths of the underwater world. Additionally, I express my artistic side by playing in a band, delivering captivating performances at weddings and events. Hover your mouse over my academic and professional timeline below for more details. Let's embark on an exciting journey of knowledge and discovery together!"
  
  
  
  // Timeline animation
  $(".button").click(function() {
    if ($(this).text() === 'About Me') {
      $("#timeline").toggleClass("hidden");
      if (!$("#timeline").hasClass("hidden")) {
        $("#timeline .timeline-item").each(function(index) {
          $(this).delay(500*index).queue(function(next) {
            $(this).addClass("show");
            next();
          });
        });
        $("#explanation").show(); // Show the explanation text when the "About Me" button is selected
      } else {
        $("#timeline .timeline-item").removeClass("show");
        $("#explanation").hide(); // Hide the explanation text when the "About Me" button is not selected
        explanationTyped.strings = [defaultExplanation]; // Set the default explanation text
        explanationTyped.reset(true);
        explanationTyped.start();
      }
    } else {
        $("#timeline").addClass("hidden"); // Hide the timeline when any other button is clicked
        $("#explanation").hide(); // Hide the explanation when any other button is clicked
    }
  });











var explanationTyped = new Typed('#explain-text', {
    strings: [''], // Initialize with dummy data
    typeSpeed: 50,
    backSpeed: 0,
    backDelay: 500,
    loop: false, // set loop to true
    showCursor: true,
});



  // Hover and default explanation
  $('.timeline-content').hover(
    function() { // when mouse enters
      var explanationText = $(this).find('.explain-text').html();
      if (explanationText) { // Check if explanationText is not undefined or empty
        explanationText = explanationText.split("<br>").filter(Boolean);
        explanationTyped.strings = explanationText;
        explanationTyped.reset(true);
        explanationTyped.start();
      }
    },
    function() { // when mouse leaves
      explanationTyped.strings = [defaultExplanation]; // Set the default explanation text when the mouse leaves
      explanationTyped.reset(true);
      explanationTyped.start();
    }
  );

  // Set default explanation text when nothing is selected
  explanationTyped.strings = [defaultExplanation];
  explanationTyped.reset(true);
  explanationTyped.start();

  // Initially hide the timeline and explanation text
  $("#timeline").addClass("hidden");
  $("#explanation").hide();




  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
$(function() {
  $(".button").click(function(e) {
    e.preventDefault();
    var btnId = $(this).attr("href").substring(1);
    
    // Deselect all buttons
    $('.button').removeClass('active');

    // Select clicked button
    $(this).addClass('active');

    // Hide all contents
    $('#about-me, #publications, #projects-content').hide();
    $('.sub-button, .project-details').hide();

    // Show clicked content
    $('#'+btnId).show();

    // If project button was clicked
    if (btnId === 'projects-content') {
      $('.sub-button').show();
    }
  });

  $(".sub-button").click(function(e) {
    e.preventDefault();
    var btnId = $(this).attr("href").substring(1);
    
    // Deselect all sub-buttons
    $('.sub-button').removeClass('active');

    // Select clicked sub-button
    $(this).addClass('active');

    // Hide all project details
    $('.project-details').hide();

    // Show clicked project details
    $('#'+btnId).show();
  });
});

  
  
  
  
  
});















