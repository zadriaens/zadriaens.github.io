	function submitQuiz() {
		console.log('submitted');


		function answerScore (qName) {
			var radiosNo = document.getElementsByName(qName);

			for (var i = 0, length = radiosNo.length; i < length; i++) {
   				if (radiosNo[i].checked) {
	
					var answerValue = Number(radiosNo[i].value);
				}
			}

			if (isNaN(answerValue)) {
				answerValue = 0;
			}
			return answerValue;
		}

	
		var calcScore = (answerScore('q1') + answerScore('q2') + answerScore('q3') + answerScore('q4') + answerScore('q5') + answerScore('q6') + answerScore('q7'));
		console.log("CalcScore: " + calcScore); 


		function correctAnswer (correctStringNo, qNumber) {
			console.log("qNumber: " + qNumber);  
			return ("The correct answer for question #" + qNumber + ": &nbsp;<strong>" +
				(document.getElementById(correctStringNo).innerHTML) + "</strong>");
			}


		if (answerScore('q1') === 0) {
			document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctString1', 1);
		}
		if (answerScore('q2') === 0) {
			document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctString2', 2);
		}
		if (answerScore('q3') === 0) {
			document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctString3', 3);
		}
		if (answerScore('q4') === 0) {
			document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctString4', 4);
		}
		if (answerScore('q5') === 0) {
			document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctString5', 5);
		}
		if (answerScore('q6') === 0) {
			document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctString6', 6);
		}
		if (answerScore('q7') === 0) {
			document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctString7', 7);
		}

	
		var questionCountArray = document.getElementsByClassName('question');

		var questionCounter = 0;
		for (var i = 0, length = questionCountArray.length; i < length; i++) {
			questionCounter++;
		}


		var showScore = "Your Score: " + calcScore +"/" + questionCounter;
	
		if (calcScore === questionCounter) {
			showScore = showScore + "&nbsp; <strong>You Are Truly An Aqua Teen Hungar Force Level 10 Master!</strong>"
		};
		document.getElementById('userScore').innerHTML = showScore;
	}

$(document).ready(function() {

	$('#submitButton').click(function() {
		$(this).addClass('hide');
	});
});


var deadline = 60;


function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
   
    clock.innerHTML = 'seconds: ' + endtime;

    if(endtime<=0){
      claerInterval(timeinterval);
    }
    endtime--
  },1000);
}
initializeClock('clockdiv', deadline);
