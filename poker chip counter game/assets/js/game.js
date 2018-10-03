var computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
var winCount = 0;
var loseCount = 0;
var diamondChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var rubyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var emeraldChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var sapphireChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
var userTotalScore = 0;


function shuffleCrystalValues(){
	diamondChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	rubyChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	emeraldChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
	sapphireChoice = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}


function gamePlay(){
	if(userTotalScore === computerChoice){
		winCount++;
		$('#win-counter').text(winCount);
		$('#win-or-lose').text('You win!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	} else if(userTotalScore > computerChoice){
		loseCount++;
		$('#loss-counter').html(loseCount);
		$('#win-or-lose').text('You lose!');
		computerChoice = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		$('#random-number').text(computerChoice);
		userTotalScore = 0;
		$('#current-score-counter').text(userTotalScore);
		shuffleCrystalValues();
	}
}



$('#random-number').text(computerChoice);



$('#blue').on('click', function(){
	userTotalScore += diamondChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#white').on('click', function(){
	userTotalScore += rubyChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#green').on('click', function(){
	userTotalScore += emeraldChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});


$('#red').on('click', function(){
	userTotalScore += sapphireChoice;
	$('#current-score-counter').text(userTotalScore);
	gamePlay();
});















