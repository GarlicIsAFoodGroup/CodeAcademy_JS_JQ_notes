function main(){
	$('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click', function(){
    
    //$(this).next().toggle();
    //clicked button turn dark upon click:
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
    
    //parameter: milliseconds, default: 400 milliseconds 
    $(this).next().slideToggle(400);
  });
};



//'main' is a callback; code will wait until document is loaded/ready & then execute the main function. jquery calls back to 'main' function, hence callback
//this code would wait until it loaded completely before running:
$(document).ready(main);

//plain javascript selecting HTML element:
//document.getElementsByClassName('skillset');

//jQuery selecting HTML element:
//$('.skillset');

//common convention to name variables that hold jquery selectors w/ $

