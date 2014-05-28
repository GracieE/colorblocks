
$(function(){
	//PART 1:
	//GOAL: Change the color of all the odd squares

	//HINTS: First select the elements with class of ".odd"
	//Then use the addClass() function to add a class that makes the odd elements violet (or any other color). Remember to actually create the new class you are adding in CSS first.
	//See this link for some help: http://api.jquery.com/addclass/


	$(".odd").addClass("violet");

	// or

	//$(".odd").css("background-color", "black");


	//PART 2: Add a background-image to the even boxes

	//$(".even").addClass("snowflake");

	//PART 3: Create a mouseover event on all the boxes so that they change color when you mouseover them


	$(".square").on('mouseover', function() {
	$(this).css('background-color', 'purple');
	});

	$(".square").on('click', function() {
	$(this).css('background-color', 'blue');
	});
	  

	//PART 4: Don't think we will have time creates a new checkboard

	//Write a function called changeBorder that takes 1 argument (color) and changes the border color. 

	function changeBorder(color){
	  $("#checker-board").css("border-color", color);

	}

	changeBorder("blue");
});