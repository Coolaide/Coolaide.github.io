			//---------- Global Variables -------------\\
		//Win Loss refresher 
var wins = 0;
var losses = 0;

		//Reset "Your Score"
	yourScore = 0;

		//Basketball Variables	
var basketballs = {
		img1:{value: 0},
		img2:{value: 0},
		img3:{value: 0},
		img4:{value: 0},

	};
		//Get random number for target score
	targetScore =  Math.floor((Math.random()* 80) + 19);

		//Assigns random value to basketball from 1-12
	basketballs.img1.value = Math.floor((Math.random()* 12) + 1);
    basketballs.img2.value = Math.floor((Math.random()* 12) + 1);
    basketballs.img3.value = Math.floor((Math.random()* 12) + 1);
    basketballs.img4.value = Math.floor((Math.random()* 12) + 1);

    	//Update Your Score in html
	var updateyourScore = function (){
	$(".yourScore").empty();
	$(".yourScore").append("Your Score: " + yourScore);
	$(".wins").empty();
	$(".wins").append("Wins: " + wins);
	$(".losses").empty();
	$(".losses").append("Losses: " + losses);
}


		//Start and restart function
var restart = function(){
	yourScore = 0;
    targetScore = Math.floor((Math.random()* 80) + 19);

	$('.targetScore').empty();
	$('.targetScore').append("Target Score: " + targetScore);

	basketballs.img1.value = Math.floor((Math.random()* 12) + 1);
    basketballs.img2.value = Math.floor((Math.random()* 12) + 1);
    basketballs.img3.value = Math.floor((Math.random()* 12) + 1);
    basketballs.img4.value = Math.floor((Math.random()* 12) + 1);
    	
    	//restart
    updateyourScore();
}
		
		//Scores
var logic = function (){
	if (yourScore == targetScore) {
		wins = wins + 1;
		
		restart();
	}else if(yourScore > targetScore){
		losses = losses + 1;
		
		restart();
	}else{
		updateyourScore();
	}
}
$('.targetScore').append(targetScore);

$('.yourScore').append(yourScore);
		
	
		// THE LOGIC (you got it, you can do this!!!)

$(document).ready(function(){
	$('#img1').click(function(){
		yourScore = yourScore + basketballs.img1.value;
		logic();
	})
	$('#img2').click(function(){
		yourScore = yourScore + basketballs.img2.value;
		logic();
	})
	$('#img3').click(function(){
		yourScore = yourScore + basketballs.img3.value;
		logic();
	})
	$('#img4').click(function(){
		yourScore = yourScore + basketballs.img4.value;
		logic();
	})
});
