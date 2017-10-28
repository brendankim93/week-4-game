//variables
var targetNumber = 19 + Math.floor(Math.random() * 100);
var counter = 0;

var userWins = 0;
var userLoss = 0;
//functions

	$("#randomNumber").text(targetNumber);

var numberOptions = [2, 5, 9, 12];

	for (var i = 0; i < numberOptions.length; i++) {
		
		var imageCrystal = $("<img>");
		
		imageCrystal.addClass("crystal-image");
		
		imageCrystal.attr("src", "assets/images/pokemon4.jpg");
		
		imageCrystal.attr("data-crystalvalue", numberOptions[i]);

	$("#crystals").append(imageCrystal);

	}



$(".crystal-image").on("click", function() {
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	counter += crystalValue;
	document.getElementById("userTotal").innerHTML = counter;

	if (counter === targetNumber) {
		userWins++;
		alert("You Win!");
		document.getElementById("win-counter").innerHTML = ("Wins: ") + userWins;
	}

	else if (counter >= targetNumber) {
		userLoss++;
		alert("You Lose!");
		document.getElementById("loss-counter").innerHTML = ("Losses: ") + userLoss;
	}
});





//initialize game


//-------------------

//generate a random number between 19-120 that the user must try to reach exactly
//assign random values between 1-12 for each crystal 
//have the crystals add its value toward the user's total number upon click
//if user matches their number with the generated number exactly then user wins
//if user goes over the generated number then the user loses 